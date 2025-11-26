"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const AuthManagerpage = () => {
  const router = useRouter();
  const { user, initialized } = useAuth();

  useEffect(() => {
    if (!initialized) return; // wait until auth finishes restoring data

    if (user) {
      router.replace("/myhof");
    } else {
      router.replace("/login");
    }
  }, [user, initialized, router]);

  return null;
};

export default AuthManagerpage;
