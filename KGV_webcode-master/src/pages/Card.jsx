import React from 'react';
import { Button, Image, Text, VStack } from '@chakra-ui/react';

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <VStack>
     
      <Text>{amount}</Text>
      <Button onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
}

export default Card;