

export default function useTodoNew(){
    const todoList = useState("todoList",()=>[])  
    function addTodo (payLoad){
        todoList.value = [...todoList.value, payLoad] 
    }

    return{
        todoList,
        addTodo
    }
}