// utils/auth.js

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      router.push("/signin");
    }
  }, []);

  // Return true if user is authenticated
  return isAuthenticated;
};
