import axios from 'axios';
import { useEffect, useState } from 'react';
import { getGastosFijos } from '@/app/services';

export const useGastosFijos = () => {
  const [gastos, setGastos] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getGastos = async () => {
    setLoading(true);
    const gastos = await getGastosFijos();
    setGastos(gastos);
    setLoading(false);
  };

  useEffect(() => {
    getGastos();
  }, []);

  return {
    gastos,
    loading,
    getGastos,
  };
};
