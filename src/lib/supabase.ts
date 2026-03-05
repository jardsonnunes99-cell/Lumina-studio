import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Use a placeholder URL strictly to prevent createClient from throwing a synchronous Invalid URL error and crashing the React app (White Screen of Death) before we can show a nice UI error message.
export const supabase = createClient(
    supabaseUrl || 'https://placeholder-project.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key'
);
