import { supabase } from "../utils/supabase"

export const getProfiles = async () =>{
    
    try{
        
        let { data,error } = await supabase
        .from('profiles')
        .select('*')

        if(error){
            throw new Error(error)
        }
        return data
    } catch (err) {
        console.error(err); // Log the error to console
        throw err; // Re-throw the error to propagate it
    }

}


export const addNewUser = async (newUser)  => {
    try {
        const { data, error } = await supabase
        .from('profiles')
        .insert([newUser])
        .select()

        if(error) {
            throw error
        }

        return data

    } catch (error) {
        console.error("error from inserting new user", error)
    }
}

