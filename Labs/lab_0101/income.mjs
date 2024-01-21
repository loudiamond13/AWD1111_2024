"use strict";
import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';

const RL = readline.createInterface({input, output}) ;

//total income tax variable
let totalIncomeTax;

//asks the user to input if they're married or single
const SINGLE_OR_MARRIED = await RL.question(`Please enter if you're filing your tax as "Single" or "Married". `);
//asks the user for the amount that is taxable.
let taxable_income      = await RL.question(`\nPlease enter your taxable income for year 2020. `);

taxable_income =  parseFloat(taxable_income);


// if income is invalid input
//income must be positive number
 if((isNaN(taxable_income)) || (taxable_income <= 0))
{
    console.log(`Please enter a valid/positive number > 0.`);
    
}




else if(SINGLE_OR_MARRIED.toLowerCase() === "single" && !isNaN(taxable_income) ||
        (SINGLE_OR_MARRIED.toLowerCase() === "married" && !isNaN(taxable_income)))
{
    //for single tax calculation
    if(SINGLE_OR_MARRIED.toLowerCase() === "single")
    {
        // 10% tax if user is single and income is <= 9,875
        if(taxable_income <= 9875)
        {
        totalIncomeTax = (taxable_income * .1);
        }
        // 12% tax if user is single and income is >9,875 and <= 40,125
        if(taxable_income > 9875 )
        {
            totalIncomeTax = (taxable_income * .12);
        }
        // 22% tax if user is single and income is >40,125 and <= 85,525
        if(taxable_income > 40125)
        {
            totalIncomeTax = (taxable_income * .22);
        }
        // 24% tax if user is single and income is >85,525 and <= 163,300
        if(taxable_income > 85525)
        {
            totalIncomeTax = (taxable_income * .24);
        }
        // 32% tax if user is single and income is >163,300 and <= 207,350
        if(taxable_income > 163300)
        {
            totalIncomeTax = (taxable_income * .32);
        }
        // 35% tax if user is single and income is >207,350 and <= 518,400
        if(taxable_income > 207350)
        {
            totalIncomeTax = (taxable_income * .35);
        }
        // 37% tax if user is single and income is >518,400 and more...
        if(taxable_income > 518400)
        {
            totalIncomeTax = (taxable_income * .37);
        }

        console.log(`\n$${Math.ceil(totalIncomeTax)} dollars is the calculated tax.`);
    }
    //for married tax calculation
    else if(SINGLE_OR_MARRIED.toLowerCase() === "married")
    {
        // 10% tax if user is married and income is <= 19,750
        if(taxable_income <= 19750)
        {
            totalIncomeTax = (taxable_income * .1);
        }
        // 12% tax if user is married and income is >19,750 
            if(taxable_income > 19750 )
        {
            totalIncomeTax = (taxable_income * .12);
        }
        // 22% tax if user is married and income is >80,250 
            if(taxable_income > 80250)
        {
            totalIncomeTax = (taxable_income * .22);
        }
        // 24% tax if user is married and income is >171,050
            if(taxable_income > 171050)
        {
            totalIncomeTax = (taxable_income * .24);
        }
        // 32% tax if user is married and income is >326600
        if(taxable_income > 326600)
        {
            totalIncomeTax = (taxable_income * .32);
        }
        // 35% tax if user is married and income is >414,700
            if(taxable_income > 414700)
        {
            totalIncomeTax = (taxable_income * .35);
        }
        // 37% tax if user is married and income is >622,050 and more...
            if(taxable_income > 622050)
        {
            totalIncomeTax = (taxable_income * .37);
        }
        console.log(`\n$${Math.ceil(totalIncomeTax)} dollars is the calculated tax.`);

    }
}
else
{
    //notify user to enter "single" or "married"
    console.log(`Please enter "married" or "single".`);
}



RL.close();