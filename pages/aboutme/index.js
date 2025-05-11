import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AboutMeRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/resume');
  }, [router]);
  
  return null;
}
