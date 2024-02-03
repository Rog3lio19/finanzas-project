'use server';

// Marcar que todas las acciones que se exportan en este archivo son de servidor y
// por lo tanto solo se ejecutan ni se envian al cliente

export async function createGastoFijo(formData: FormData) {
  console.log('createGastoFijo', formData);
}
