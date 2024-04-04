import { AboutMe } from 'components/AboutMe/AboutMe';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { Contacts } from 'components/Contacts/Contacts';
import { Reviews } from 'components/Reviews/Reviews';
import { Services } from 'components/Services/Services';
import React from 'react';
import styled from 'styled-components';

export default function HomePage() {
  const Div = styled.div`
    border: 2px solid red;
  `;

  return (
    <>
      <Div>
        <h1>Home Page</h1>
        <BurgerMenu />
      </Div>
      <AboutMe />
      <Services />
      <Reviews />
      <Contacts />
    </>
  );
}
