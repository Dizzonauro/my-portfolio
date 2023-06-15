import React, { useReducer } from "react";
import {
  Container,
  FirstContainer,
  ImageContent,
  SecondaryContainer,
  StyledH1,
  StyledH2,
  StyledParagraph,
  TechContainer,
} from "./styles";

import cssLogo from "../../assets/imgs/cssLogo.png";
import htmlLogo from "../../assets/imgs/htmlLogo.png";
import javaScriptLogo from "../../assets/imgs/javaScriptLogo.png";
import reactLogo from "../../assets/imgs/reactLogo.png";
import typeScriptLogo from "../../assets/imgs/typeScriptLogo.png";

import { techzReducer } from "./techzReducer";

interface State {
  summary: string;
}

interface Action {
  type: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "css":
      return { summary: techzReducer.css };
    case "html":
      return { summary: techzReducer.html };
    case "js":
      return { summary: techzReducer.js };
    case "react":
      return { summary: techzReducer.react };
    case "typeScript":
      return { summary: techzReducer.typeScript };
    default:
      return { summary: state.summary };
  }
};

const Home = () => {
  const initialState: State = { summary: techzReducer.css };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <FirstContainer>
        <StyledH1>About me</StyledH1>
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum alias impedit iste est
          omnis ipsam nulla eveniet accusantium error aliquid?
        </StyledParagraph>
      </FirstContainer>
      <SecondaryContainer>
        <StyledH2>My Techs</StyledH2>
        <TechContainer>
          <ImageContent src={cssLogo} onMouseOver={() => dispatch({ type: "css" })} />
          <ImageContent src={htmlLogo} onMouseOver={() => dispatch({ type: "html" })} />
          <ImageContent src={javaScriptLogo} onMouseOver={() => dispatch({ type: "js" })} />
          <ImageContent src={reactLogo} onMouseOver={() => dispatch({ type: "react" })} />
          <ImageContent src={typeScriptLogo} onMouseOver={() => dispatch({ type: "typeScript" })} />
        </TechContainer>
        <StyledParagraph>{state.summary}</StyledParagraph>
      </SecondaryContainer>
    </Container>
  );
};

export default Home;
