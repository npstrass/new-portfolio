import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 32px;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  ::before, ::after {
    content: "";
    width: .5px;
    height: 75px;
    background-color: white;
    margin: 10px auto;
    opacity: .4;
  }
`;

export const Item = styled.img`
  filter: brightness(0) invert(1);
  opacity: 0.65;
  height: 20px;
  width: auto;
  padding: .5rem 0;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1) translateY(-10%);
    opacity: 1;
  }
`;
