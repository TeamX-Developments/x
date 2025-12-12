// supabase-client.js
// Put your Supabase project URL + anon key here.
// IMPORTANT: Use the ANON key (safe for browsers). Never put service_role keys in a public website.
const SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
