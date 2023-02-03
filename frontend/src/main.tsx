import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from '@/components/@helper/ErrorBoundary';
import { GlobalStyles, theme } from '@/styles';

import App from './App';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      suspense: true,
    },
  },
});

const container = document.getElementById('root');

if (container !== null)
  ReactDOM.createRoot(container).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>,
  );
