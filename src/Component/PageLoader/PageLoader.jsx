import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import DelayedLoading from '../Loading/DelayedLoading';

NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.2,
  trickleSpeed: 200,
});

export default function PageLoader({ delay = 300 }) {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return <DelayedLoading delay={delay} />;
}