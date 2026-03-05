import { createClient } from '@supabase/supabase-js';

const getValidUrl = (url: string | undefined) => {
    try {
        if (!url) return null;
        new URL(url); // Throws if invalid URL
        return url;
    } catch {
        return null;
    }
};

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const validUrl = getValidUrl(rawUrl);

export const isSupabaseConfigured = Boolean(validUrl && rawKey);

// Use a placeholder URL strictly to prevent createClient from throwing a synchronous Invalid URL error and crashing the React app (White Screen of Death) before we can show a nice UI error message.
export const supabase = createClient(
    validUrl || 'https://placeholder-project.supabase.co',
    rawKey || 'placeholder-anon-key'
);
