import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  /* text-align: left; */
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.2rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
