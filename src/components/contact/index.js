import { Container, Text, Email, SubText, Box, ImageContainer, Image } from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Email = function ContactEmail({ href, children, ...restProps }) {
  return (
    <Email href={href} {...restProps}>
      {children}
    </Email>
  );
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Contact.SubText = function ContactSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Contact.Box = function ContactBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};
