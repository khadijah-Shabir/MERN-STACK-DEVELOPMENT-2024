let todo=[]
let input=prompt("what would you like to do?")
while(true){
    if(input==="quit"){ 
        console.log("You quit the app")
        break;
    }else if(input==="list"){       
        console.log("**********")
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("**********")
    }else if(input==="add"){
        let newTodo=prompt("Enter new todo")
        todo.push(newTodo)
        console.log(`${newTodo} added to list`)
    }else if(input==="delete"){
        let index=prompt("Enter index of todo to delete")
        todo.splice(index,1)
        console.log("Deleted")
    }else{
        console.log("Unknown command")
    }
    input=prompt("what would you like to do?")
}