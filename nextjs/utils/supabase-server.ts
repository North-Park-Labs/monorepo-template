import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../lib/database.types";

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
