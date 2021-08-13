import { Container, Photo, Text, SubText, LinkText } from "./styles/home";
import { Link } from 'react-router-dom'

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Photo = function HomePhoto({ src, ...restProps }) {
  return <Photo src={src} {...restProps} />;
};

Home.Text = function HomeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Home.SubText = function HomeSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Home.LinkText = function HomeLinkText({ to, children, ...restProps }) {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <LinkText {...restProps}>{children}</LinkText>
    </Link>
  );
};
