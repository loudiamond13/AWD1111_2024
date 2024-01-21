import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({input, output});

const MILES_DRIVEN = await rl.question('\nHow many miles did you drive? ');
const GALLON_USED = await rl.question(`\nHow many gallons of gas did you use?  `);

//validate the user input for milesDriven
//miles driven has to be more than 0 and valid number
if ((isNaN(MILES_DRIVEN)) || (MILES_DRIVEN <= 0))
{
    console.log(`\nPlease enter a valid number for miles driven. ( >0 ).`);
}
//validate the users input for gallonUsed
//gallonused must be >0 and valid number
else if((isNaN(GALLON_USED) || GALLON_USED <= 0))
{
    console.log(`\nPlease enter a valid number for used gallon. ( >0 ).`);
}
//else do the math for mpg
else
{
     mpg(MILES_DRIVEN, GALLON_USED);
}


//the calculation for miles per gallon
function mpg(milesDriven, gallonUsed)
{

    //solve the input value
    const MILES_PER_GALLON =  (milesDriven/ gallonUsed);

    //print the result to the console 
    console.log(`\nYour car gets ${MILES_PER_GALLON.toFixed(2)} miles per gallon. \n`);

}

rl.close();