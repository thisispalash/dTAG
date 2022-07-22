import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import {
  Icon
} from '@chakra-ui/react';

export default function Create({}) {

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <Icon as={FaRegEdit} opacity={0.8} _hover={iconHover} />
  );
}