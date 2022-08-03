import { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import {
  Icon
} from '@chakra-ui/react';

export default function Save({}) {

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <Icon as={FaSave} opacity={0.8} _hover={iconHover} />
  );
}