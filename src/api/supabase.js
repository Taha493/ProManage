
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xcedheeaknkiwnkjxmvb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZWRoZWVha25raXdua2p4bXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MTAyMTIsImV4cCI6MjAzODM4NjIxMn0.-L4RVhVh2YejwT9uhjkWk4PK8NKsDoqWjrmmIZpQ-UE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;