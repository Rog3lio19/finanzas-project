import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/libs/prisma';

export async function GET(request: Request) {
  try {
    await prisma.$connect();
    const gastosFijos = await prisma.gastos_fijos.findMany();

    if (!gastosFijos)
      return NextResponse.json(
        { message: 'Error al obtener los gastos fijos' },
        { status: 400 }
      );

    await prisma.$disconnect();
    return NextResponse.json(gastosFijos, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error, revise la consola del servidor' },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    await prisma.$connect();
    const gastosFijos = await prisma.gastos_fijos.create({
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
      { message: 'Error, revise la consola del servidor' },
      { status: 400 }
    );
  }
}
