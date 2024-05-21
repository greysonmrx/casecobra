"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export { Providers };
