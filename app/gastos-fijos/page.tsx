'use client';

import { TableComponent } from '../components/Ui';
import Link from 'next/link';
import { useGastosFijos } from '../hooks';
import { deleteGastoFijo } from '../services';

const COLUMNS = [
  {
    columnName: 'ID',
    propertyName: 'id',
  },
  {
    columnName: 'Producto/Servicio',
    propertyName: 'nombre',
  },
  {
    columnName: 'Monto',
    propertyName: 'monto',
  },
  {
    columnName: 'Fecha',
    propertyName: 'fecha',
  },
  {
    columnName: 'Comentarios',
    propertyName: 'comentarios',
  },
];

const GastosFijosPage = () => {
  const { gastos, loading, getGastos } = useGastosFijos();

  return (
    <>
      <header className="mt-20">
        <h1 className="text-center font-semibold text-3xl mb-28 uppercase">
          Gastos Fijos
        </h1>
      </header>
      <main className="m-4 mt-22 px-10">
        <div className="flex mb-4">
          <Link
            className="p-4 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700"
            href="/gastos-fijos/create"
          >
            Añadir Gasto Fijo
          </Link>
        </div>
        <div className="">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <TableComponent
              columns={COLUMNS}
              rowData={gastos}
              deleteMethod={deleteGastoFijo}
              refreshData={getGastos}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default GastosFijosPage;
