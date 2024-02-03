'use client';
import { FormGastoFijo } from '@/app/components/gastos-fijos';
import { useGastoFijo } from '@/app/hooks';

function EditPage() {
  const { gasto } = useGastoFijo();

  return (
    <div className="max-w-[60rem] mx-auto mt-28">
      <header className="text-3xl text-center font-semibold mb-20">
        <h1>{gasto.nombre}</h1>
      </header>

      <FormGastoFijo gasto={gasto} />
    </div>
  );
}

export default EditPage;
