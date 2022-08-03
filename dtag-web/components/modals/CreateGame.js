import { useState, useEffect, useRef } from 'react';
import { PanZoom } from 'react-easy-panzoom';
import {
  Flex,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react';
import {} from 'react-icons/fa';

export default function CreateGame({ }) {
  
  return (
    <PanZoom>
      <div>{ 'This content can be panned and zoomed' }</div>
    </PanZoom>
  )
}

