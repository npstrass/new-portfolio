import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 800px;
  margin: 2em auto;
`;

export const Photo = styled.img`
  height: 400px;
  filter: saturate(0.65);
  object-fit: cover;
  object-position: center;
`;

export const Text = styled.p`
  margin: 1em 0;
  font-size: 2rem;
`;

export const SubText = styled.p`
  font-size: 1.5rem;
`;

export const LinkText = styled(Link)`
  display: inline-block;
  margin-top: 2em;
  color: #fff;
  border: 3px solid #fff;
  text-decoration: none;
  font-size: 1.75rem;
  box-shadow: 0 0 12px rgba(0,0,0,0.2);
  padding: 0.75em 2em;
  transition: 350ms;

  &:hover {
    transform: translateY(-10%);
    background-color: #fff;
    box-shadow: 8px 8px 8px rgba(0,0,0,.35);
    color: #000;
    font-weight: 700;
  }
`;
