

export default function (){
    const tasks = ref(['exercise','programming','film'])
    const newItemText = ref('')

    const addItem = ()=>{
          if(newItemText.value!=""){
            tasks.value.unshift(newItemText.value)
          }
    }
    const removeItem = ()=>{
        tasks.value.shift()
    }

    return{
        tasks,
        newItemText,
        addItem,
        removeItem
    }
}