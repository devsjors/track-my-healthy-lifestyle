import { type Database } from "@/types/supabase.types";
import { createBrowserClient } from "@supabase/ssr";

export const getSupabaseClient = () => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
};
