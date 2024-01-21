import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';

const RL = readline.createInterface({input, output});

const CELSIUS_or_FAHRENHEIT = await RL.question(`\nPlease enter 'c' for celsius-fahrenheit OR 'f' fahrenheit-celsius: `);

let temperature           = await RL.question(`\nPlease enter the temperature to convert: `);

temperature = parseFloat(temperature);

//declare var
let C_or_F = 0.00;

//validate if input is a number
//temperature can be negative
if(isNaN(temperature))
{
    console.log(`Please input a valid digit/number.`);
}
//calculation for celsius-fahrenheit
else if ((!isNaN(temperature)) && (CELSIUS_or_FAHRENHEIT.toLowerCase() === 'c'))
{
    C_or_F = ((temperature *(9/5)) + 32);
    console.log(`\n${temperature} degrees celsius is ${C_or_F.toFixed(2)} degrees in fahreinheit.\n`);
}
//calculation for fahrenheit-celsius
else if ((!isNaN(temperature)) && (CELSIUS_or_FAHRENHEIT.toLowerCase() === 'f'))
{
    
    C_or_F = ((temperature - 32) * (5/9));
    console.log(`\n${temperature} degrees fahrenheit is ${C_or_F.toFixed(2)} degrees in celsius.\n`);
}
//else if user enter a letter that isnt in the option, send error message to user
else
{
    console.log(`Please select/enter 'f' OR 'c'.`);
}
RL.close();