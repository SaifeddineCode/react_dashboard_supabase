import { supabase } from "../utils/supabase";

export const getUsers = async () => {


    try {
        
        const { data: { user } } = await supabase.auth.getUser()

        return user

    } catch (error) {

        console.error("Error asidi howa :",error)
    }
}

