"use client"
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import React, {ReactNode, useState} from 'react'

/* eslint-disable-next-line */
export interface QueryProviderProps {
  children?:ReactNode;
}

export function QueryProvider({children}: QueryProviderProps) {
  const [queryClient] = useState(
    new QueryClient({defaultOptions: {queries: {staleTime: 5000}}})
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
