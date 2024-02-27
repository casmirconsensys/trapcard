import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Database } from "../_types/supabase.ts";

export const supabaseClient = createClient<Database>(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);
