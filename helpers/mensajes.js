import colors from 'colors';
import readLineImport from 'readline'

export const mostrarMenu = () => {
    return new Promise ((resolve,reject) => {
        console.clear()
        console.log('========================'.green)
        console.log(' Seleccione una opcion'.green)
        console.log('========================\n'.green)
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tarea`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Crear tarea\n`);
    
        const readLine = readLineImport.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        readLine.question('Seleccione una opcion: ', (opt) => {
            console.log({opt});
            readLine.close()
            resolve(opt)
        })
    })
    
}

export const pausa = () => {
    return new Promise((resolve,reject) => {
        const readLine = readLineImport.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        readLine.question(`\nPresione ${'ENTER'.blue} para continuar: \n`, () => {
            readLine.close()
            resolve(0)
        })
    })
    
}
// export {
//     pausa,
//     mostrarMenu,
// }