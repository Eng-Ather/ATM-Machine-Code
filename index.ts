#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer"

var pin : number = 1234; //account number of user which was initally saved by user through bank 
var balance : number = 10000; //remaining ammount after transection

var account = await inquirer.prompt([
    { message:"\t ********  Enter 4 Digit Pin Code  ******** ", type:"number", name:"code"}
])

//below mentioned condition is define to proceed further process 
//if user provide the correct pin code

 if(account.code === pin)
    {

     var operation = await inquirer.prompt
     ([
        {message:"\t ********* chose operation ******** ", type:"list", name:"option",
            choices:["Balance inquiry", "Withdraw Amount","cancle"]
        }
     ])                      

     //if user want to know the current balance 
     if (operation.option == "Balance inquiry")
     { console.log("your current balance is " + balance);

        ////////////////////////////////////////////////////////////////////////////
        // this block is created for extra feature if user want to know current balance first
        // and then he/she want to widtraw amount or move to further process

        var operation2 = await inquirer.prompt
        ([
        {message:"chose operation :", type:"list", name:"option2",
            choices:["Withdraw Amount","cancle"]
        }
        ])    
        
        //if user want to widtraw amount
         if(operation2.option2 == "Withdraw Amount")
        {
        var transfer2 = await inquirer.prompt
           ([
           { message:"Enter withdrawal amount.", type:"number", name:"ammount2"} 
           ])

        if( transfer2.ammount2 <= balance)
           {
            balance = balance-transfer2.ammount2; //updating new remaining ammount in account
            console.log("withdral Amount = " + transfer2.ammount2);
            console.log("Your Reamining Balance = " + balance);
           }
        else
           { 
               console.log("low balance");
           }
       }
        else if( operation2.option2 == "cancle")
           {
               console.log("you cancel transaction");
               
           }
     }
///////////////////////////////////////////////////////////////////////////////////


     //if user want to widtraw amount
     else if(operation.option == "Withdraw Amount")
         {
         var transfer = await inquirer.prompt
            ([
            { message:"Enter withdrawal amount.", type:"number", name:"ammount"} 
            ])

         if( transfer.ammount <= balance)
            {
             balance = balance-transfer.ammount; //updating new remaining ammount in account
             console.log("withdral Amount = " + transfer.ammount);
             console.log("Your Reamining Balance = " + balance);
            }
         else
            { 
                console.log("low balance");
            }
        }
     else if( operation.option == "cancle")
            {
                console.log("you cancel transaction");
                
            }
     }

else
{ console.log("Enter Correct Pasword");}