import colors from 'colors';
import {inquireMenu} from './helpers/inquirer.js'
import { mostrarMenu,pausa} from  './helpers/mensajes.js';

// const  { inquireMenu } = require('./helpers/inquirer');

// const { mostrarMenu,pausa} = require( './helpers/mensajes');
console.clear()

const main = async () => {
    console.log('ddd')
    let opt = 0;
    do {
        opt = await inquireMenu()
        console.log(opt)
        opt !== 0 ? await pausa() : null;
    }while(opt != 0)
}

main()