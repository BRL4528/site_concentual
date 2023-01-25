import React from 'react';

interface Props {
  children?: React.ReactNode
}

export default function ModelsWrapper({ children }: Props) {
  return (
    <>
    {children}
    </>
  )
}