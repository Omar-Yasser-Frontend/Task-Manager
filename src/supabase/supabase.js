import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gkcsrcecjcvmhhmmzuhs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrY3NyY2VjamN2bWhobW16dWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MjEyMzgsImV4cCI6MjA1NTE5NzIzOH0.gGTItgLnbIbW8gWIR9HZnI-Wf_DwtmgcPvqGORseTZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, supabaseUrl };
