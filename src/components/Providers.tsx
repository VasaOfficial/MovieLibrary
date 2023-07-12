'use client'
import { FC, ReactNode } from "react"
import { QueryClientProvider, QueryClient } from "react-query"

interface ProvidersProps {
  children: ReactNode
}
 
const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClinet = new QueryClient()
  return <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
}
 
export default Providers;