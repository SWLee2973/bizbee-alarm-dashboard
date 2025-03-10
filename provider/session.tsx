"use client";

import { getSession } from "@/serverActions/auth";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ISessionProviderProps {
  children: React.ReactNode;
}

const SessionContext = createContext<Session | null>(null);

function SessionProvider({ children }: ISessionProviderProps) {
  const pathname = usePathname();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then((res) => setSession(res));
  }, [pathname]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  return useContext(SessionContext);
};

export default SessionProvider;
