import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import {
  Icon
} from '@chakra-ui/react';

export default function Stats({}) {

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <Icon as={FaUser} opacity={0.8} _hover={iconHover} />
  );
}