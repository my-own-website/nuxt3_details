import productss from '../data/products.json'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore(
    'products-store',
    {
        state : ()=>(
            {
                products:productss
            }
        ),
        getters:{},
        actions:{
            async retrieveProducts(){
                this.products = productss
            }
        }
    }
)