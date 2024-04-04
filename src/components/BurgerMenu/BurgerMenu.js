import React, { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button>Menu</button>
  )
};