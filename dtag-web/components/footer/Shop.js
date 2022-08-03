import { useState, useEffect } from 'react';
import { FaStore } from 'react-icons/fa';
import {
  Icon
} from '@chakra-ui/react';

export default function Shop({}) {

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <Icon as={FaStore} opacity={0.8} _hover={iconHover} />
  );
}