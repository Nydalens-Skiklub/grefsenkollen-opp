import React from "react";

import { PageHero } from "../common-components/PageHero";
import { PageBody } from "../common-components/PageBody";
import { Mapbox } from "./Mapbox";

export const CourseInformation: React.FC = () => {
  return (
    <>
      <PageHero>Løypa</PageHero>
      <PageBody>
        <p>
          Løypa starter mot nordøst fra gressletta på Muselunden, og svinger
          innpå gangstien mot Skeidbanen rett før kneika forbi Haraldheimen
          Vandrerhjem. Etter 200 flate meter på oversiden av Skeidbanen kommer
          løypas eneste «nedoverbakke» med 50 meter svakt nedover til
          Kjelsåsveien.
        </p>
        <p>
          Kjelsåsveien bukter seg oppover og blir stadig brattere fram mot
          krysset hvor Kjelsåsveien tar av til venstre og løypa fortsetter rett
          fram Grefsenkollveien. Grefsenkollveien ønsker velkommen med løypas
          bratteste parti, og etter 250 meter flater veien ut litt før det
          kommer enda en tøff kneik.
        </p>
        <p>
          Løypa har nå krysset markagrensen, og utsikten mot Holmenkollen, byen
          og fjorden åpner seg til venstre på løypas siste flate parti rett før
          Lachmanns vei tar av til venstre. Herfra og opp er stigningen ganske
          jevn den siste halvannen kilometeren. Etter en åpen hårnålsving løper
          man rett mot sør, og kan nyte utsikten til Maridalen og fjorden (og
          forhåpentligvis få litt sol i øynene).
        </p>
        <p>
          Det er ikke langt opp nå, men i den siste S-en fra parkeringsplassen
          opp til mål blir det plutselig bratt igjen, og med litt ekstra krefter
          kan man hente mer enn man tror med et siste rykk. Målstreken går der
          veien slutter og snuplassen begynner ved Grefsenkollen restaurant.
        </p>

        <Mapbox />

        {/* TODO: Add course height profile */}
      </PageBody>
    </>
  );
};
