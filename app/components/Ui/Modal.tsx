'use client';
import { FC, ReactNode, useState } from 'react';
import { Modal, Button } from 'keep-react';
import { Receipt } from 'phosphor-react';

interface Props {
  children: ReactNode;
}

export const ModalComponent: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button onClick={onClick} type="primary">
        Agregar Gasto Fijo
      </Button>
      <Modal
        icon={<Receipt size={28} color="#1B4DFF" />}
        size="md"
        show={showModal}
        onClose={onClick}
      >
        <Modal.Header className="text-center">Nuevo Gasto Fijo</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
