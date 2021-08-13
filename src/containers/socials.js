import { Socials } from '../components'

export function SocialsContainer({ children }) {
  return(
    <Socials>
      <Socials.List>
        <Socials.Item href="https://github.com/npstrass" src='/icons/github.svg'/>
        <Socials.Item href="https://discord.gg/FSFBX9R5xe" src='/icons/discord.svg'/>
        <Socials.Item href="https://www.instagram.com/noah.strass/" src='/icons/instagram.svg'/>
        <Socials.Item href="https://noahstrass.medium.com/" src='/icons/medium-1.svg'/>
      </Socials.List>
    </Socials>
  )
}