import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #323639;
  padding: 5rem 0;

  > div {
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
      max-width: 960px;
    }
    @media screen and (min-width: 1216px) {
      max-width: 1152px;
    }
    @media screen and (min-width: 1408px) {
      max-width: 1344px;
    }
  }
`;

const FooterTitle = styled.h2`
  color: #fff;
`;

const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  flex-direction: column;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Sponsor = styled.a`
  margin: 0 0.5rem 2rem 0.5rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <FooterTitle>Arrangør</FooterTitle>
        <Sponsor
          href="https://nydalen.idrett.no/orientering/"
          rel="noreferrer nofollow"
        >
          <img
            src="https://www.nydalslopet.one/wp-content/uploads/2015/08/nydalens_sk_emblem.png"
            alt="Nydalens Skiklub"
            height="100"
          />
        </Sponsor>
        <FooterTitle>Sponsor</FooterTitle>
        <Sponsor href="https://avantor.no/" rel="noreferrer nofollow">
          <img
            src="https://avantor.no/wp-content/uploads/2018/10/Avantor_logo_liten.png"
            alt="Avantor"
            height="60"
          />
        </Sponsor>
        <FooterTitle>Samarbeidspartnere</FooterTitle>
        <SponsorsContainer>
          <Sponsor href="https://elektro-sivert.no/" rel="noreferrer nofollow">
            <img
              src="https://elektro-sivert.no/wp-content/uploads/2014/11/ESILogo.png"
              alt="Elektro-Sivert"
              height="45"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Sponsor>
          <Sponsor
            href="https://www.oslosportslager.no/"
            rel="noreferrer nofollow"
          >
            <img
              src="https://www.oslosportslager.no/App_Themes/standard/images/_logo.png"
              alt="Oslo Sportslager"
              height="40"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Sponsor>
          <Sponsor href="https://www.kondis.no/" rel="noreferrer nofollow">
            <img
              src="https://img5.custompublish.com/getfile.php/4104220.1495.niptwsznmauwtp/kondis-logo-svg.svg"
              alt="Kondis"
              height="30"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Sponsor>
          <Sponsor
            href="https://www.grefsenkollen.no/"
            rel="noreferrer nofollow"
          >
            <img
              src="https://static.wixstatic.com/media/4be797_822c78f31a04425ba5cac64762aabd09~mv2.png/v1/fill/w_180,h_119,al_c,q_80,usm_0.66_1.00_0.01/4be797_822c78f31a04425ba5cac64762aabd09~mv2.webp"
              alt="Grefsenkollen"
              height="100"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Sponsor>
          <Sponsor href="https://trafikk-jentene.no/" rel="noreferrer nofollow">
            <img
              src="https://trafikkjentene.no/wp-content/uploads/2019/02/trafikkjentene-logo.png"
              alt="Trafikkjentene"
              height="50"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Sponsor>
        </SponsorsContainer>
      </div>
    </FooterContainer>
  );
};
