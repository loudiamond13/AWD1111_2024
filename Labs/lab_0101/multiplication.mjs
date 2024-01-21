import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';

const RL = readline.createInterface({input, output});

let table = "";

//gets the users input of how big is the multiplication table
const USER_INPUT = await RL.question(`How big do you want the table to be (1-12)? `);

//parse if user input is a valid number, must be >0 and <= 12
const INPUT = parseFloat(USER_INPUT);


//if input is invalid, send error message to the user
if (isNaN(INPUT) || INPUT <= 0  || INPUT > 12)
{
    console.log(`Please enter a valid number from 1-12.`);
}
//else if the user input is valid, proccess the multiplication table.
else
{
    for(let a = 1; a <= INPUT; a++)
    {
        for(let b = 1; b <= INPUT; b++)
        {
           table += "".padStart(INPUT," ")+ a.toFixed() * b.toFixed();
           
        }
        console.log(table);
        table = "";
    }
    
    
}


RL.close();