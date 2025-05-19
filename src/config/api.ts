import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(url, anonKey);

export const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL!;
export const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN!;
export const githubUser = process.env.NEXT_PUBLIC_GITHUB_USER!;