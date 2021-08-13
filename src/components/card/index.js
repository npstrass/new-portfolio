import {
  Container,
  Box,
  Icon,
  LinkImg,
  Title,
  Description,
  Image,
  SubText,
  Header,
  ExternalLink
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Box = function CardBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

Card.Icon = function CardIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Card.LinkImg = function CardLinkImg({ href, src, children, ...restProps }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <LinkImg src={src} {...restProps} />
    </a>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Image = function CardImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Card.SubText = function CardSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Card.Header = function CardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Card.ExternalLink = function CardExternalLink({
  href,
  children,
  ...restProps
}) {
  return (
    <a style={{ textDecoration: "none", color: "white" }} href={href} target="_blank" rel="noreferrer">
      <ExternalLink {...restProps}>{children}</ExternalLink>
    </a>
  );
};
