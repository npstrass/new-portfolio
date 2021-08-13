import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 488px) {
    display: none;
    /* need to change nav --> hamburger?? */
  }
`;

export const Name = styled.h1`
  color: #fff;
  font-weight: 200;
  font-size: 1.4rem;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    letter-spacing: 2px;
  }
`;

export const Nav = styled.div`
  display: flex;
`;

export const NavLink = styled.p`
  color: #fff;
  text-decoration: none;
  font-weight: 200;
  font-size: 1.25rem;
  transition: 300ms;

  &:last-of-type {
    margin-left: 30px;
  }

  &:hover,
  &:focus {
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 2px;
  }

`;

export const Frame = styled.div`
  display: flex;
  justify-content space-between;
  padding: 2rem 0;
  align-items: baseline;
`;
