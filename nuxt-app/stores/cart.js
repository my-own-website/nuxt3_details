
import { defineStore } from 'pinia'

export const useCartStore = defineStore (
    'cart-store',
    {
        state:()=>(
            {
                items:[]
            }
        ),
        getters:{},
        actions:{
            async addToCart (itemPayLoad){
                const existingItem = this.items.find(item=>{
                    return item.productId === itemPayLoad.id
                })
                if(existingItem){
                    let existingItemIndex = this.items.findIndex(item=>{
                        item.productId === existingItem.productId
                    })

                    existingItem.quantity = existingItem.quantity+1
                    existingItem.subTotal = itemPayLoad.price*existingItem*quantity
                    this.items[existingItemIndex] = existingItem
                }else{
                    this.items.push({
                        productId :itemPayLoad.id,
                        productName :itemPayLoad.name,
                        price:itemPayLoad.price,
                        quantity:1,
                        subTotal : itemPayLoad.price ,
                        stripePriceId: itemPayLoad.stripePriceId
                    })
                }
            }
        }
    }
)