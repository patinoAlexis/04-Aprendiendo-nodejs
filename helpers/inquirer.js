import colors from 'colors';
import inquirer from 'inquirer';
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tarea'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tareas pendientes'
            },
            {
                value: 5,
                name: '5. Completar tarea'
            },
            {
                value: 6,
                name: '6. Borrar tarea'
            },
            {
                value: 0,
                name: '0. Borrar tarea'
            },
            
            
        ]
    }
]

export const inquireMenu = async() => {
    console.clear();
    console.log('================='.green)
    console.log(' Seleccione una opcion'.green);
    console.log('================='.green)
    const opt = await inquirer.prompt(preguntas)
    return opt
}

// export {
//     inquireMenu
// }