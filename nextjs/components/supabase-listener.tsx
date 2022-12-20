"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import supabase from "../utils/supabase-browser";

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return null;
}
