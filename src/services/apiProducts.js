import { supabase } from "../utils/supabase"

export const getProducts = async () =>{
    
    try {
        
        let { data: products, error } = await supabase
        .from('products')
        .select('*')

        if(error){
            throw error
        }else {
            return products
        }


    }catch (error){
        console.error(error)
    }

    
}