import { v4 as uuidv4 } from 'uuid';
export default class Tarea {
    id = '';
    desc = '';
    completadoEn = null;
    constructor( desc){
        this.desc = desc
        this.id = uuidv4()
    }

    static imprimirTarea(tarea){
        
        return res
    }
}


