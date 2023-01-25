import React from 'react';
import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
  children?: React.ReactNode;
}

export default function ModelSection({ modelName, overlayNode, children, ...props }: Props) {
  return (
   <Container {...props} >
    {children}
   </Container>
  )
}