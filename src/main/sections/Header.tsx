import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { HeaderTitle } from "./common-components/HeaderTitle";

const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 4rem);
  padding-top: 4rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;
  background-color: #2b2924;
`;

const BackgroundMediaContainer = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  top: -1rem;
  right: -1rem;
  left: -1rem;
  bottom: -1rem;
  filter: blur(8px) brightness(85%);
  background-image: url(https://scontent.fosl4-2.fna.fbcdn.net/v/t1.0-9/33540529_1038284482986443_5118076118758326272_n.jpg?_nc_cat=109&_nc_ohc=d2AbqPnnnIUAQkD5VfXC9qbG8HArTd2jo4HFhmQxtx0gFMHnOXTknypqQ&_nc_ht=scontent.fosl4-2.fna&oh=45b96b949b2d8bf1b570b84f1c808728&oe=5E764DBB);
  background-size: cover;
  background-position: center center;
`;

const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 1.5rem 6rem 1.5rem;
  flex-grow: 1;
  flex-shrink: 0;

  > div {
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 1152px;
    margin: 0 auto;
    position: relative;
    width: auto;
    text-align: center;
  }
`;

const Date = styled.span`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  opacity: 0.85;
`;

const CallToActionButton = styled.button`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.5rem;
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  line-height: 1.5;
  cursor: pointer;
`;

export const Header: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/entry");
  };

  return (
    <HeaderContainer>
      <BackgroundMediaContainer />
      <HeaderBody>
        <div>
          <div>
            <Date>Søndag, 24. mai 2020</Date>
            <HeaderTitle isFrontPage={true}>Grefsenkollen Opp</HeaderTitle>
            <CallToActionButton type="button" onClick={handleClick}>
              Bli med på løpet
            </CallToActionButton>
          </div>
        </div>
      </HeaderBody>
    </HeaderContainer>
  );
};
