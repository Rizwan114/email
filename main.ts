import inquirer from "inquirer"

let myEmail: string = "rizwanali22@gmail.com";
let password:number  = 1234;


const answer = await inquirer.prompt([
    {
        name:"email",
        message:"please enter your email",
        type:"name"
    },

]);

if(answer.email === "rizwanali22@gmail.com"){
    console.log("you are sucsess fully login");
    
}else{
    console.log("please correct enter your email addres");
};


const answer1 = await inquirer.prompt([
    
        
    {
        name:"password",
        message:"please enter your password",
        type:"number"
    
    }
    
])


if(answer1.password === 1234){
    console.log("your are sucsess fully login");
    
}else{
    console.log("please correct enter your password");
    
}

