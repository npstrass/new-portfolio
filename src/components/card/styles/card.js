import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 75%;
  margin: 0 auto;
  margin-top: 3em;

  animation: risein 1s ease-out 1;

  @keyframes risein {
    from {
      transform: translateY(10%);
      opacity: 0;
    }
    to {
      tranform: translateY(0%);
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 1.5rem;
  opacity: 0.7;
  margin: 0 0.25rem 0.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transition: 300ms;

  &:hover {
    opacity: 1;
    transform: translateY(-3.5%) scale(1.01);
    z-index: 999;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const Icon = styled.p`
  font-size: 1.25rem;
  color: #000;
  font-weight: 700;
`;

export const LinkImg = styled.img`
  height: 1.25rem;
  transition: 300ms;

  &:hover {
    cursor: pointer;

    animation: wiggle 180ms ease-out 2;

    @keyframes wiggle {
      from,
      to {
        transform: translateY(-2%) rotate(-5deg);
      }
      50% {
        transform: translateY(-2%) rotate(5deg);
      }
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #000;
`;

export const Description = styled.p`
  color: #000;
  margin-bottom: 1.5rem;
`;

export const Image = styled.img``;

export const SubText = styled.p`
  color: #000;
  font-size: 0.75rem;
  opacity: 0.65;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const ExternalLink = styled.p`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 60px 0;
  transition: 300ms;

  @media (max-width: 800px) {
    padding: 1em 2em;
  }

  &:hover {
    cursor: pointer;
    letter-spacing: 1.25px;
  }

  animation: risein 1s ease-out 1;

  @keyframes risein {
    from {
      transform: translateY(10%);
      opacity: 0;
    }
    to {
      tranform: translateY(0%);
      opacity: 1;
    }
  }
`;
