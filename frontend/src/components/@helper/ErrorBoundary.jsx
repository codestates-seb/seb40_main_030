import React from 'react';

import NotFound from '@/pages/NotFound/';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // error 발생시에 NotFound 페이지 렌더링
      return <NotFound />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
