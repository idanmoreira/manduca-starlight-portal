// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wqdriewrbqhricjxocnv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZHJpZXdyYnFocmljanhvY252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2OTY0NjAsImV4cCI6MjA2MzI3MjQ2MH0.oy6npCUTGJldp46A6dh8-MSuMp4D_6KwcDn0WS1LNsg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);