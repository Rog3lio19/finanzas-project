'use client';
import { FormEvent, useState } from 'react';
import { createGastoFijo } from '@/app/libs/actions';
import { DatePicker, Button } from 'keep-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export function FormGastosFijos() {
  const [date, setDate] = useState<Date | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { nombre, monto, comentarios } = Object.fromEntries(
      new window.FormData(e.currentTarget)
    );

    const dateText = date?.toISOString();
    const fecha = dateText?.split('T');

    const gastoFijo = {
      nombre,
      monto: monto !== '' ? monto : null,
      fecha: fecha !== undefined ? fecha[0] : null,
      comentarios: comentarios !== '' ? comentarios : null,
    };

    await axios
      .post('/api/gastos-fijos', gastoFijo)
      .then(({ data }) => {
        console.log(data);
        router.push('/gastos-fijos');
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        <input
          type="text"
          name="nombre"
          required
          placeholder="Ingrese nombre del producto/servicio"
          className="p-2 pl-4 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="monto"
          step={0.01}
          min={0}
          pattern="^\d*(\.\d{0,2})?$"
          required
          placeholder="Ingrese el monto"
          className="p-2 pl-4 border border-gray-300 rounded-md"
        />
        <DatePicker singleDate={setDate} placeholder="Fecha de compra">
          <DatePicker.SingleDate />
        </DatePicker>
        <textarea
          name="comentarios"
          placeholder="Comentarios..."
          className="p-2 pl-4 border border-gray-300 rounded-md resize-none"
        />
        <input
          className="p-4 mx-auto w-[30rem] rounded-md shadow-lg hover:shadow-none hover:cursor-pointer bg-green-500 transition"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
}
