import { useState, useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import {
  Icon
} from '@chakra-ui/react';

export default function Bag({}) {

  const iconHover = {
    color: 'highlight',
    cursor: 'pointer'
  }

  return (
    <Icon as={FaBriefcase} opacity={0.8} _hover={iconHover} />
  );
}