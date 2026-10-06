import { createRoot } from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Missing Publishable Key from Clerk");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppRoutes />
    </ClerkProvider>
  </QueryClientProvider>
);

