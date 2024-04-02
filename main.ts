#! /user/bin/env node
import inquirer from "inquirer";
let todoList: string[] = []
let loop = true;
console.log("\n \t wellcome to codewithkinza - Todo-List Application\n");
while(loop){
    const answers:{
        TODO: string
        addmore: boolean
    } = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "what do you want to add in your todo?"
        }, 
        { 
            name:"addmore",
            type: "confirm",
            message: "Do you want add more todo?",
            default: false

        }
    ]);
    const {TODO, addmore} = answers;
    console.log(answers)
    loop = addmore

    if(TODO){
        todoList.push(TODO)

    }else{
        console.log("kindly add vaild input")
    }
    
}
if(todoList.length > 0){
    console.log("your todo list : \n")
    todoList.forEach(todo =>{
        console.log(todo)
    })

}else{
    console.log("No todalist found")
}