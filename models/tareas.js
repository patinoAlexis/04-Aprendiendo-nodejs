import Tarea from "./tarea.js";

/**
 *  _listado: {
 *  uuid : tarea
 * }
 */
export default class Tareas{
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach((tarea) => listado.push(this._listado[tarea]))
        return listado
    }
    constructor() {
        this._listado = {};
    }
    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id]
        }

    }
    crearTarea(desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
        return tarea;
    }
    cargarTareasFromArray(tareas = []){
        tareas.forEach((el) => {
            this._listado[el.id] = el
        })
    }
    listadoCompleto(){
        const listado = this.listadoArr
        console.log()
        for (let index = 0; index < listado.length; index++) {
            let impresion = `${((index+1) + '.').green} ${(listado[index].desc)} :: `
            impresion += listado[index].completadoEn == null
            ? 'Pendiente'.red : 'Completado'.cyan
            if(listado[index].completadoEn != null){
                impresion += ' :: ' + (listado[index].completadoEn).green
            }
            console.log(impresion)            
        }
        console.log()
    }
    listadoPendientesCompletadas(completadas = true){
        let comp_str = completadas 
        ? 'Completado'.cyan : 'Pendiente'.red 
        console.log()
        let i = 0
        this.listadoArr.forEach((tarea) => {
            if(completadas && tarea.completadoEn == null){
                return;
            }
            if(!completadas && tarea.completadoEn != null){
                return;
            }
            i++;
            let impresion = `${((i) + '.').green} ${(tarea.desc)} :: `
            impresion += comp_str
            if(tarea.completadoEn != null){
                impresion += ' :: ' + (tarea.completadoEn).green
            }
            console.log(impresion)            
        })
        console.log()
    }

    toggleCompletadas( ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }

        })
        this.listadoArr.forEach((tarea) => {
            if(! ids.includes(tarea.id)){
                const ta = this._listado[tarea.id]
                ta.completadoEn = null
            }
        })
    }
}