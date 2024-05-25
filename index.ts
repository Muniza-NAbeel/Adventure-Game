#! /usr/bin/env node
import inquirer from "inquirer" ;

class Player {
    name : string ;
    fuel : number = 100 ;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel 
    }
    fuelincrease(){
        this.fuel = 100 
    }
}
class Opponent {
    name : string ;
    fuel : number = 100 ;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel 
    }
}
let player = await inquirer.prompt(
    [
        {
          name : "name",
          type : "input",
          message : "Please Enter Your Name"
        }
    ]
);
let opponent = await inquirer.prompt(
    [
        {
            name : "select",
            type : "list" ,
            message : "Select Your Opponent",
            choices : ["Monster" , "Zombie" , "Skeleton"]
        }
    ]
);
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    //  *** Monster ***

    if(opponent.select === "Monster"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type : "list",
                    message : "What would You Like to do next??",
                    choices : ["Attack" , "Drink Portion" , "Run Away"]
                }
            ]
        )
        if(ask.opt === "Attack"){

          let randomNumber = Math.floor(Math.random() * 2)
          if(randomNumber > 0){
              p1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(p1.fuel <= 0){
                         console.log(" You Lose.. Better Luck Next Time !!!")
                         process.exit()
                      }
          }
          if(randomNumber <= 0){
              o1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(o1.fuel <= 0){
                        console.log("Congratulations.. You Win !!!")
                        process.exit()
                     }
          }
        };
        if(ask.opt === "Drink Portion"){
             p1.fuelincrease()
                 console.log(`You Drink Portion !!! Now Your Fuel is: ${p1.fuel}`);
        }
        if(ask.opt === "Run Away"){
             console.log("You Lose .. Better Luck Next Time !!!")
                 process.exit()
        }
    } 

    // *** Zombie ***
    if(opponent.select === "Zombie"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type : "list",
                    message : "What would You Like to do next??",
                    choices : ["Attack" , "Drink Portion" , "Run Away"]
                }
            ]
        )
        if(ask.opt === "Attack"){

          let randomNumber = Math.floor(Math.random() * 2)
          if(randomNumber > 0){
              p1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(p1.fuel <= 0){
                         console.log(" You Lose.. Better Luck Next Time !!!")
                         process.exit()
                      }
          }
          if(randomNumber <= 0){
              o1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(o1.fuel <= 0){
                        console.log("Congratulations.. You Win !!!")
                        process.exit()
                     }
          }
        };
        if(ask.opt === "Drink Portion"){
             p1.fuelincrease()
                 console.log(`You Drink Portion !!! Now Your Fuel is: ${p1.fuel}`);
        }
        if(ask.opt === "Run Away"){
             console.log("You Lose .. Better Luck Next Time !!!")
                 process.exit()
        }
    } 

    // *** Skeleton ***

    if(opponent.select === "Skeleton"){
        let ask = await inquirer.prompt(
            [
                {
                    name : "opt",
                    type : "list",
                    message : "What would You Like to do next??",
                    choices : ["Attack" , "Drink Portion" , "Run Away"]
                }
            ]
        )
        if(ask.opt === "Attack"){

          let randomNumber = Math.floor(Math.random() * 2)
          if(randomNumber > 0){
              p1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(p1.fuel <= 0){
                         console.log(" You Lose.. Better Luck Next Time !!!")
                         process.exit()
                      }
          }
          if(randomNumber <= 0){
              o1.fuelDecrease()
                 console.log(`${p1.name} Fuel is ${p1.fuel}`);
                 console.log(`${o1.name} Fuel is ${o1.fuel}`);
                     if(o1.fuel <= 0){
                        console.log("Congratulations.. You Win !!!")
                        process.exit()
                     }
          }
        };
        if(ask.opt === "Drink Portion"){
             p1.fuelincrease()
                 console.log(`You Drink Portion !!! Now Your Fuel is: ${p1.fuel}`);
        }
        if(ask.opt === "Run Away"){
             console.log("You Lose .. Better Luck Next Time !!!")
                 process.exit()
        }
    } 
}
while(true);
