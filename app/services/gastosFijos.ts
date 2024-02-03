export const getGastosFijos = async () => {
  try {
    const res = await fetch('api/gastos-fijos');
    const json = await res.json();

    return json.map((elemnt: any) => ({
      id: elemnt.id,
      nombre: elemnt.nombre,
      monto: elemnt.monto,
      fecha: elemnt.fecha,
      comentarios: elemnt.comentarios,
    }));
  } catch (error) {
    console.log(error);
    throw new Error('No se pudieron obterner los gastos fijos');
  }
};

export async function getGastoFijo(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/api/gastos-fijos/${id}`);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function updateGastoFijo(id: number, data: any) {
  try {
    const res = await fetch(`http://localhost:3000/api/gastos-fijos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteGastoFijo(id: number) {
  try {
    const res = await fetch(`api/gastos-fijos/${id}`, {
      method: 'delete',
    });
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo eliminar');
  }
}
