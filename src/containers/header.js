import { Header } from '../components'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Name to="/">noah.<span>strass</span></Header.Name>
        <Header.Nav>
          <Header.NavLink to="/work">.work</Header.NavLink>
          <Header.NavLink to="/contact">.contact</Header.NavLink>
        </Header.Nav>
      </Header.Frame>
      {children}
    </Header>
  )
}