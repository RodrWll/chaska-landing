import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Application = {
  full_name: string;
  email: string;
  phone?: string;
  university?: string;
  career: string;
  study_cycle: number;      // ← cambio: de study_year a study_cycle
  team: string;
  motivation: string;
  linkedin?: string;
  cv_url?: string;
};