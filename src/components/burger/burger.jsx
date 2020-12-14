import React from 'react';
import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, left }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} left={left}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;