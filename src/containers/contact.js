import { Contact } from "../components";

export function ContactContainer({ children }) {
  return (
    <Contact>
      <Contact.Box>
        <Contact.Text>hi, i'm noah</Contact.Text>
        <Contact.Text>
          a <span>developer</span> and <span>ux designer</span>
        </Contact.Text>
        <Contact.Text>
          i create <span>minimal</span> and <span>modern</span> designs
        </Contact.Text>
        <Contact.Email href="mailto: npstrass@outlook.com">
          contact me
        </Contact.Email>
      </Contact.Box>
    </Contact>
  );
}
