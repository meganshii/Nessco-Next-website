import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();
  const defaultCountry = 'in';

  useEffect(() => {
    router.push(`/${defaultCountry}`);
  }, [router]);

  return null; // Render nothing since the user will be redirected
};

export default HomePage;