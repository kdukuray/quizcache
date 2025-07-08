import { createClient } from "@supabase/supabase-js";

const supabasUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabasUrl || !supabaseAnonKey){
    throw new Error("Supabase Credentials not defined");
}

export const supabase = createClient(supabasUrl, supabaseAnonKey);