import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import {
  useDisclosure,
  Icon, 
  Modal,
  ModalOverlay,
  ModalContent, 
} from '@chakra-ui/react';

import CreateGame from '../modals/CreateGame';

export default function Create({}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <>
      <Icon as={FaRegEdit} opacity={0.8} _hover={iconHover} onClick={isOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <CreateGame />
        </ModalContent>
      </Modal>
    </>
  );
}