import { supabase } from "../utils/supabase"

export const getBlogs = async () =>{
    
    try {
        let { data, error } = await supabase
        .from('blogs')
        .select('*')

        if(error){
            throw error
        } else {
            return data
        }

    } catch (error) {
        alert(error)
    }

}
