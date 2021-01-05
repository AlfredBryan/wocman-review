import React from 'react';
import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, left, isPrivacy }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} left={left} isPrivacy={isPrivacy}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;