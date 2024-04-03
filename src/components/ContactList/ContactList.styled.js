import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 300px;
`;

export const StyledBtn = styled.button`
  padding: 5px;
  min-width: 100px;
  min-height: 40px;
  border: 1px solid black;
  border-radius: 8px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: blue;
  }
  &:hover,
  &:focus {
    box-shadow: 4px 4px 23px 12px rgba(0, 7, 236, 0.35);
  }
`;

export const Item = styled.li`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
