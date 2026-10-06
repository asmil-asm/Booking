import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export function enableMocking() {
  const isProduction = import.meta.env?.PROD || process.env.NODE_ENV === 'production';

  if (isProduction) {
    return Promise.resolve();
  }

  return worker.start({
    onUnhandledRequest(request, print) {
      if (
        request.url.includes('clerk.accounts.dev') ||
        request.url.includes('img.clerk.com')
      ) {
        return;
      }

      print.warning();
    },
  });
}