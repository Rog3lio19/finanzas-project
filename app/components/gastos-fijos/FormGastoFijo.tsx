'use client';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  use,
  useEffect,
  useState,
} from 'react';
import { createGastoFijo } from '@/app/libs/actions';
import { DatePicker, Button } from 'keep-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { updateGastoFijo } from '@/app/services';

interface Props {
  gasto: any;
}

export function FormGastoFijo({ gasto }: Props) {
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');
  const [date, setDate] = useState<Date | null>();
  const [comentarios, setComentarios] = useState('');

  useEffect(() => {
    setNombre(gasto.nombre);
    setMonto(gasto.monto);
    setComentarios(gasto.comentarios);
  }, [gasto]);

  useEffect(() => {
    handleSetFecha(new Date(gasto.fecha));
  }, [gasto]);

  const handleSetFecha = (date: Date) => {
    setDate(date);
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dateText = date?.toISOString();
    const fecha = dateText?.split('T');

    const gastoFijo = {
      nombre,
      monto:
        monto !== ''
          ? monto.toString().includes('.')
            ? monto
            : `${monto}.00`
          : null,
      fecha: fecha !== undefined ? fecha[0] : null,
      comentarios: comentarios !== '' ? comentarios : null,
    };

    const response = await updateGastoFijo(gasto.id, gastoFijo);
    if (response) router.push('/gastos-fijos');

    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        <input
          type="text"
          name="nombre"
          value={nombre || ''}
          onChange={(e) => setNombre(e.target.value)}
          required
          placeholder="Ingrese nombre del producto/servicio"
          className="p-2 pl-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="monto"
          step={0.01}
          min={0}
          value={monto || ''}
          onChange={(e) => setMonto(e.target.value)}
          required
          placeholder="Ingrese el monto"
          className="p-2 pl-4 border border-gray-300 rounded-md"
        />
        <DatePicker
          singleDate={() => {
            handleSetFecha;
          }}
          placeholder="Fecha de compra"
        >
          <DatePicker.SingleDate />
        </DatePicker>
        <textarea
          name="comentarios"
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Comentarios..."
          value={comentarios || ''}
          className="p-2 pl-4 border border-gray-300 rounded-md resize-none"
        />
        <input
          className="p-4 text-white font-semibold text-xl mx-auto w-[30rem] rounded-md shadow-lg hover:shadow-none hover:cursor-pointer bg-green-500 transition"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}
