import colors from 'colors';
import {inquireMenu,leerInput,pausa,listadoTareasBorrar, confirmar, listadoCompletadoTareas} from './helpers/inquirer.js'
import Tarea from './models/tarea.js';
import Tareas from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';

// import { mostrarMenu,pausa} from  './helpers/mensajes.js';

// const  { inquireMenu } = require('./helpers/inquirer');

// const { mostrarMenu,pausa} = require( './helpers/mensajes');
console.clear()

const main = async () => {
    let opt = 0;
    const tareas = new Tareas()
    tareas.cargarTareasFromArray(leerDB())
    do {
        console.clear()
        opt = await inquireMenu()
        switch (opt) {
            case 1:
                const desc = await leerInput('Descripción de tarea:');
                tareas.crearTarea(desc)
                console.log(desc);
                break;
            case 2:
                tareas.listadoCompleto()
                break;
            case 3:
                tareas.listadoPendientesCompletadas(true);
                break;
            case 4:
                tareas.listadoPendientesCompletadas(false);
                break;
            case 5: 
                const ids = await listadoCompletadoTareas(tareas.listadoArr)
                console.log({ids})
                tareas.toggleCompletadas(ids)
                break;
            case 6: 
                const id =  await listadoTareasBorrar(tareas.listadoArr)
                if(id == '0'){
                    break;
                }
                const confirm = await confirmar('De verdad quieres borrarlo?')
                if(confirm){
                    tareas.borrarTarea(id)
                    console.log('Tarea borrada correctamente'.cyan)
                } else {
                    console.log('La tarea no se ha borrado'.yellow)
                }

            default:
                break;
        }
        guardarDB(tareas.listadoArr)
        opt !== 0 ? await pausa() : null;
    }while(opt != 0)
}

main()