import { Card } from "../components";

export function CardContainer({ children }) {
  const github = "https://github.com/npstrass";
  return (
    <>
      <Card>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`</>`}</Card.Icon>
            <Card.LinkImg
              href="https://ns-netflix.netlify.app/"
              src="/icons/link.svg"
            />
          </Card.Header>
          <Card.Title>netflix clone</Card.Title>
          <Card.Description>
            built a netflix clone using react as part of a certification course
            for scrimba.
          </Card.Description>
          <Card.SubText>
            react.js, jsx, es6, firebase, fuse.js, styled components
          </Card.SubText>
        </Card.Box>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`UX`}</Card.Icon>
            <Card.LinkImg href="https://xd.adobe.com/view/f907c669-b1a3-40a9-b0fd-535cb0bab008-ac54/" src="/icons/link.svg" />
          </Card.Header>
          <Card.Title>cleo nutrition</Card.Title>
          <Card.Description>
            designed a nutritional app for children as part of certification
            course for google.
          </Card.Description>
          <Card.SubText>adobe xd, figma, user research, branding</Card.SubText>
        </Card.Box>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`</>`}</Card.Icon>
            <Card.LinkImg
              href="https://github.com/npstrass/speed-typing"
              src="/icons/link.svg"
            />
          </Card.Header>
          <Card.Title>speed type game</Card.Title>
          <Card.Description>
            built a speed typing game using javascript as part of a
            certification course for scrimba.
          </Card.Description>
          <Card.SubText>javascript, es6, html, css</Card.SubText>
        </Card.Box>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`</>`}</Card.Icon>
            <Card.LinkImg
              href="https://github.com/npstrass/movie-database"
              src="/icons/link.svg"
            />
          </Card.Header>
          <Card.Title>movie database</Card.Title>
          <Card.Description>
            built a live search movie database using javascript and api calls.
          </Card.Description>
          <Card.SubText>javascript, es6, html, css, apis</Card.SubText>
        </Card.Box>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`UX`}</Card.Icon>
            <Card.LinkImg href="https://xd.adobe.com/view/cd49c44c-7191-4a62-a276-cef88acc0604-981a/" src="/icons/link.svg" />
          </Card.Header>
          <Card.Title>london bikes</Card.Title>
          <Card.Description>
            designed a responsive web app for a fictional custom bike company
            out of london.
          </Card.Description>
          <Card.SubText>adobe xd, figma, user research, branding</Card.SubText>
        </Card.Box>
        <Card.Box>
          <Card.Header>
            <Card.Icon>{`</>`}</Card.Icon>
            <Card.LinkImg
              href="https://github.com/npstrass/pokedex"
              src="/icons/link.svg"
            />
          </Card.Header>
          <Card.Title>pokedex</Card.Title>
          <Card.Description>
            build and styled data from api call to json file with multiple
            pokemon stats and information.
          </Card.Description>
          <Card.SubText>html, css, javascript, es6, apis</Card.SubText>
        </Card.Box>
      </Card>
      <Card.ExternalLink href={github}>
        click to view more code projects on github
      </Card.ExternalLink>
    </>
  );
}
