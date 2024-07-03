import {
  createClient,
  SupabaseClient,
} from "https://esm.sh/@supabase/supabase-js@2";

// Environment variables
const SUPABASE_URL: string = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY: string = Deno.env.get("SUPABASE_ANON_KEY")!;

// Supabase client
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Type for student data
type Student = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
};

// Request handler
const handler = async (): Promise<Response> => {
  const { data, error } = await supabase
    .from<"students", Student[]>("students")
    .select()
    .limit(10);

  if (error) {
    // eslint-disable-next-line
    console.error("Error fetching data:", error);

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};

// Start the server
Deno.serve(handler);
