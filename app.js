console.log("Mohammad Sajid")
function rest(){
    let n =  prompt("Enter the number");
    if(n >18 && n<60){
        console.log("you are eligible for voting")
    }
    else if(n<18){
        console.log("you are not eligible for voting")
    }
    else{
        console.log("you are senior citizen,so you are also eligible for voting")
    }
}