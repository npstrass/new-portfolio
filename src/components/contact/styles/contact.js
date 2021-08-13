import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 160px;
  text-align: center;

  animation: risein 1.5s ease-out 1;

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

export const Email = styled.a`
  display: inline-block;
  margin-top: 80px;
  color: #fff;
  border: 3px solid #fff;
  text-decoration: none;
  font-size: 1.75rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  padding: 0.75em 2em;
  transition: 350ms;

  animation: clickme 150ms ease 2;
  animation-delay: 2s;

  @keyframes clickme {
    from,
    to {
      transform: rotate(-0.5deg);
    }
    50% {
      transform: rotate(0.5deg);
    }
  }

  &:hover {
    transform: translateY(-10%);
    background-color: #fff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.35);
    color: #000;
    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 1.75rem;
  margin-bottom: 0.5em;
`;

export const Box = styled.div``;

export const SubText = styled.p``