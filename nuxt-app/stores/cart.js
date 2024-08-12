
import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'

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
                console.log('clickeddddd');
                const existingItem = this.items.find(item=>{
                    return item?.productId == itemPayLoad.id
                })
                console.log("🚀 ~ existingItem ~ existingItem:", existingItem)
                if(existingItem){
                    let existingItemIndex = this.items.findIndex(item=>{
                        item.productId == existingItem.productId
                    })

                    existingItem.quantity = existingItem.quantity+1
                    existingItem.subTotal = itemPayLoad.price*existingItem.quantity
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