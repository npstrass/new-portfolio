import { Container, Name, Nav, NavLink, Frame } from './styles/header'
import { Link } from 'react-router-dom'

export default function Header({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Header.Name = function HeaderName({ to, children, ...restProps }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={to}>
      <Name {...restProps}>{children}</Name>
    </Link>
  )
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>
}

Header.NavLink = function HeaderNavLink({ to, children, ...restProps }) {
  return (
    <Link style={{ textDecoration: 'none' }} to={to}>
      <NavLink {...restProps}>{children}</NavLink>
    </Link>
  )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
return <Frame {...restProps}>{children}</Frame>
}