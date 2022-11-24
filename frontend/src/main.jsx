import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import { worker } from './mocks/browser';
import ErrorBoundary from './components/@helper/ErrorBoundary';
import queryClient from './query';

// MSW가 develop 환경에서만 구동됨
if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

// react query
// 세부 사항 (default options)은 추후 추가 예정
// export const queryClient = new QueryClient();

const container = document.getElementById('root');

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
  </ThemeProvider>
);
