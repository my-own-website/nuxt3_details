import productss from '../data/products.json'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore(
    'products-stote',
    {
        state : ()=>(
            {
                products:[]
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