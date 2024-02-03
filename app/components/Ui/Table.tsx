'use client';

import { FC } from 'react';
import { Avatar, Badge, Button, Popover, Table } from 'keep-react';
import {
  ArrowsDownUp,
  Crown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from 'phosphor-react';

interface Props {
  columns: any[];
  rowData: any[];
  refreshData: () => void;
  deleteMethod: (id: number) => Promise<void>;
}

export const TableComponent: FC<Props> = ({
  columns,
  rowData,
  deleteMethod,
  refreshData,
}) => {
  return (
    <div className="flex w-full justify-center item-center mt-4">
      <Table>
        {/* <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Cash Out Transactions
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                New member
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption> */}
        <Table.Head>
          {columns.map((column, index) => (
            <Table.HeadCell key={index} className="min-w-[150px]">
              {column.columnName}
            </Table.HeadCell>
          ))}
          <Table.HeadCell className="min-w-[150px]">Acciones</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {rowData.map((row, index) => (
            <Table.Row key={index}>
              {columns.map(({ propertyName }, index) => {
                if (propertyName === 'monto')
                  return (
                    <Table.Cell key={row.id} className="text-right">
                      {row[propertyName].includes('.')
                        ? `$${row[propertyName]}`
                        : `$${row[propertyName]}.00`}
                    </Table.Cell>
                  );
                return <Table.Cell key={index}>{row[propertyName]}</Table.Cell>;
              })}
              <Table.Cell>
                <div className="flex gap-x-4 items-center">
                  <button
                    onClick={async () => {
                      await deleteMethod(row.id);
                      refreshData();
                    }}
                    className="font-normal text-metal-600"
                  >
                    <span className="hover:text-red-500">
                      <Trash size={20} />
                    </span>
                  </button>
                  <button className="font-normal text-metal-600">
                    <span className="hover:text-blue-500">
                      <Pencil size={20} />
                    </span>
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
