import { Home } from "../components";

export function HomeContainer({ children }) {
  return (
    <Home>
      <Home.Text></Home.Text>
      <Home.SubText></Home.SubText>
      <Home.Photo src="/images/image1.jpg" />
      <Home.LinkText to="/work">my work</Home.LinkText>
    </Home>
  );
}
