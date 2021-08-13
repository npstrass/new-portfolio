import { Container, List, Item } from "./styles/socials";

export default function Socials({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Socials.List = function SocialsList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Socials.Item = function SocialsItem({ href, src, children, ...restProps }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Item src={src} />
    </a>
  );
};
