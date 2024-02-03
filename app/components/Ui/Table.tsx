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
}

export const TableComponent: FC<Props> = ({ columns, rowData }) => {
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
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {rowData.map((row, index) => (
            <Table.Row key={index}>
              {columns.map(({ propertyName }, index) => (
                <Table.Cell key={index}>{row[propertyName]}</Table.Cell>
              ))}
              <Table.Cell>
                <Popover
                  showDismissIcon={false}
                  showArrow={false}
                  className="w-52 border border-metal-100 p-2"
                >
                  <Popover.Container className="!mt-0 !block">
                    <ul>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Delete</span>
                          <span>
                            <Trash />
                          </span>
                        </button>
                      </li>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Edit</span>
                          <span>
                            <Pencil />
                          </span>
                        </button>
                      </li>
                    </ul>
                  </Popover.Container>
                  <Popover.Action>
                    <Button type="outlineGray" size="xs" circle={true}>
                      <DotsThreeOutline
                        size={14}
                        color="#5E718D"
                        weight="bold"
                      />
                    </Button>
                  </Popover.Action>
                </Popover>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
