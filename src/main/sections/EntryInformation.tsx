import React from "react";
import styled from "styled-components";

import { PageHero } from "./common-components/PageHero";
import { PageBody } from "./common-components/PageBody";

const InlineImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EntryInformation: React.FC = () => {
  return (
    <>
      <PageHero>Påmelding</PageHero>
      <PageBody>
        <p>
          Grefsenkollen Opp fortsetter samarbeidet med EQTiming i forbindelse
          med påmelding, tidtaking og resultatservice.
        </p>
        <p>
          Registrerer din påmelding via linken nedenfor. Du får tilsendt en
          bekreftelse, i tillegg til instruksjoner om betaling og betingelser.
        </p>
        <p>
          Link til EQTiming:&emsp;
          <a href="https://signup.eqtiming.no/?Event=GrefsenkollenOpp">
            Påmelding 2020
          </a>
        </p>
        <p>
          <strong>
            Ordinær påmeldingsfrist er søndag 17. mai kl 23:59. Velkommen!
          </strong>
        </p>

        <h2>Startkontingenter 2020</h2>
        <p>
          <strong>Ordinær påmelding</strong>
          <br />
          T.o.m. 19 år: NOK 250,-
          <br />
          F.o.m. 20 år: NOK 350,-
          <br />
          Funksjonshemmet: NOK 350,-
        </p>

        <p>
          <strong>Etterpåmelding (fram til lørdag 23. mai kl 18:00)</strong>
          <br />
          T.o.m. 19 år: NOK 275,-
          <br />
          F.o.m. 20 år: NOK 400,-
          <br />
          Funksjonshemmet: NOK 400,-
        </p>

        <p>
          <strong>Etterpåmelding på løpsdagen</strong>
          <br />
          T.o.m. 19 år: NOK 300,-
          <br />
          F.o.m. 20 år: NOK 450,-
          <br />
          Funksjonshemmet: NOK 450,-
        </p>

        <p>
          I tillegg kommer NFIFs engangslisens for løpere som ikke har løst
          sesonglisens gjennom sin friidrettsklubb. Alle deltakere født 2007
          eller tidligere (f.o.m. det året man fyller 13 år) må løse lisens.
        </p>

        <InlineImage>
          <img
            src="https://img5.custompublish.com/getfile.php/4104220.1495.niptwsznmauwtp/kondis-logo-svg.svg"
            alt="Kondis"
            height="30"
          />
          <p>
            Grefsenkollen Opp er et «Kondis Kvalitetsløp»
            <br />
            Alle medlemmer får Kondis-rabatt på NOK 40,-
          </p>
        </InlineImage>
      </PageBody>
    </>
  );
};
