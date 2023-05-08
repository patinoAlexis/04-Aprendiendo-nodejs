import colors from 'colors';
import inquirer from 'inquirer';

const pausaInquirer = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.blue} para continuar: \n`,
    }
]
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear tarea`           
            },
            {
                value: 2,
                name: `${'2.'.green} Listar todas las tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas` 
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas pendientes`,
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: 6,
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
            
            
        ]
    }
]

const inquireMenu = async() => {
    console.clear();
    console.log('================='.green)
    console.log(' Seleccione una opcion'.green);
    console.log('================='.green)
    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
}
const pausa = async () => {
    await inquirer.prompt(pausaInquirer)
    return;   
}
const leerInput = async (message = '') => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                } 
                return true;
            }
        }
    ]
    const {desc} = await inquirer.prompt(question);
    return desc
}

const  listadoCompletadoTareas  = async(tareas = []) => {
    const choices =  tareas.map((tarea,i) => {
        const idx = i +1 
        return  {
            value: tarea.id,
            name: `${ (idx + "").green} ${tarea.desc}`,
            checked: tarea.completadoEn != null      
        }
    })

    const question = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccione',
        choices,
    }]
    const { ids } = await inquirer.prompt(question)
    return ids
}
const listadoTareasBorrar = async(tareas = []) => {
    const choices =  tareas.map((tarea,i) => {
        const idx = i +1 
        return  {
            value: tarea.id,
            name: `${ (idx + "").green} ${tarea.desc}`        
        }
    })
    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar'.red
    })
    const question = [{
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices,
    }]
    const { opcion} = await inquirer.prompt(question)
    return opcion
}

const confirmar = async (message) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(pregunta);
    return ok
}
export {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoCompletadoTareas
}