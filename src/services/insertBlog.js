import { supabase } from "../utils/supabase"

export const insertBlog = async (newBlog) => {
    
    try {
        const { data, error } = await supabase
            .from('blogs')
            .insert(newBlog)
            .select("*")

            if(!error){
                return data
            } else {
                throw error
            }
    } catch (error) {
        console.log(error.message)
    }
        
} 