import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { ClerkProvider } from '@clerk/clerk-react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key from Clerk");
}

const queryClient = new QueryClient();

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  
  return worker.start({
    onUnhandledRequest: 'bypass', // تجاهل الطلبات الخارجية وغير المعرفة مثل طلبات Vite و Clerk
    quiet: true,                  // إيقاف طباعة التحذيرات واللوجات الزائدة في الـ Console
  });
}

enableMocking().then(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');

  createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </ClerkProvider>
    </QueryClientProvider>
  );
});