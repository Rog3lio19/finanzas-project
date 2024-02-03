import { getGastoFijo } from '@/app/services';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useGastoFijo() {
  const [gasto, setGasto] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const getGasto = async () => {
    setLoading(true);
    const res = await getGastoFijo(Number(id));
    setGasto(res);
    setLoading(false);
  };

  useEffect(() => {
    getGasto();
  }, [id]);

  return {
    gasto,
  };
}
