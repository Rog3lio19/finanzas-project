'use client';
import Link from 'next/link';

import { ArrowLeft } from 'phosphor-react';
import { FormGastosFijos } from '@/app/components/gastos-fijos';

const FormGastoFijo = () => {
  return (
    <div className="max-w-[60rem] mx-auto mt-28">
      <div>
        <Link href="/gastos-fijos">
          <ArrowLeft size={30} />
        </Link>
      </div>
      <h1 className="text-center font-semibold text-3xl my-4">
        Añadir Nuevo Gasto Fijo
      </h1>
      <FormGastosFijos />
    </div>
  );
};

export default FormGastoFijo;
