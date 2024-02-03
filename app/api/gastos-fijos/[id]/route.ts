import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/libs/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = await request.json();

    await prisma.$connect();
    const gastosFijos = await prisma.gastos_fijos.update({
      where: {
        id,
      },
      data: body,
    });
    if (!gastosFijos)
      return NextResponse.json(
        { message: 'Error al añadir un gasto fijo' },
        { status: 400 }
      );
    await prisma.$disconnect();
    return NextResponse.json(gastosFijos, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error al actualizar, revise la consola del servidor2' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    await prisma.$connect();
    const gastoEliminado = await prisma.gastos_fijos.delete({
      where: {
        id,
      },
    });
    if (!gastoEliminado)
      return NextResponse.json(
        { message: 'Error al  un gasto fijo' },
        { status: 400 }
      );
    await prisma.$disconnect();
    console.log(gastoEliminado);
    return NextResponse.json('Registro eliminado', { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error al actualizar, revise la consola del servidor' },
      { status: 400 }
    );
  }
}
