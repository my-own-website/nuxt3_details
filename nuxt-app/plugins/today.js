import dayjs from "dayjs";

const now = dayjs()
const today = dayjs(now).format('YYYY-MM-DD HH:mm:ss')

// export default defineNuxtPlugin(nuxtApp=>{
//     nuxtApp.today = today
// })

// OR👇👆

export default defineNuxtPlugin(()=>{
    return{
        provide:{
            todayDate:today
        }
    }
})