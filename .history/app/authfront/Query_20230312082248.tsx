"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
  interface Props {
    children?: ReactNode
  }

  const queryClient = new QueryClient()
  const Querywrapper = ({ children }: Props) => (   
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )

  export default Querywrapper
