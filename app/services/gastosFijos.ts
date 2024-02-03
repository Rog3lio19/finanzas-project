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
