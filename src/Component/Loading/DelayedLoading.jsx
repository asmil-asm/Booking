import { useEffect, useState } from 'react';
import Loading from './Loading';

export default function DelayedLoading({ delay = 300 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? <Loading /> : null;
}