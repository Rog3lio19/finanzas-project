'use client';
import Link from 'next/link';

import { ArrowLeft } from 'phosphor-react';
import { FormGastosFijos } from '@/app/components/gastos-fijos';

const FormGastoFijo = () => {
  return (
    <div className="max-w-[60rem] mx-auto mt-28">
      <div className=" flex">
        <div className="flex">
          <Link
            href="/gastos-fijos"
            className="hover:border rounded-full p-2 hover:bg-blue-600 hover:text-white bg-white text-blue-600 mb-4"
          >
            <ArrowLeft size={30} />
          </Link>
        </div>
      </div>
      <h1 className="text-center font-semibold text-3xl my-4">
        Añadir Nuevo Gasto Fijo
      </h1>
      <FormGastosFijos />
    </div>
  );
};

export default FormGastoFijo;
