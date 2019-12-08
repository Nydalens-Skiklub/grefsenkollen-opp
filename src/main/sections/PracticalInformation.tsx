import React from "react";
import { Link } from "react-router-dom";

import { PageHero } from "./common-components/PageHero";
import { PageBody } from "./common-components/PageBody";

export const PracticalInformation: React.FC = () => {
  return (
    <>
      <PageHero>Praktisk informasjon</PageHero>
      <PageBody>
        <p>
          Nydalens Skiklub Orientering ønsker med dette velkommen til
          Grefsenkollen Opp 2019!
          <br />
          Årets bakkeløp er det 13. i rekken. Starten går{" "}
          <strong>Søndag 24. mai kl 11:10</strong>.
        </p>

        <h2>Adkomst</h2>
        <p>
          Oppmøtested er i Muselunden ved Sinsenkrysset, nord-øst for
          kunstgressbanene på friområdet. Det er svært begrensede
          parkeringsmuligheter i området, vi anbefaler derfor å reise kollektivt
          og ankomme til fots evt med sykkel.
        </p>
        <p>Stoppesteder i nærheten:</p>
        <ul>
          <li>Sinsen T-banestasjon ligger 100 m fra Muselunden. </li>
          <li>
            Trikkelinje 17 har stoppested i Sinsenkrysset, 70 m fra startlinjen.
          </li>
        </ul>

        <h2>Parkering</h2>
        <p>
          Beste tips for kjørende kan være å benytte den store parkeringsplassen
          rett før på toppen av Grefsenkollen, og så løpe ned til startplassen.
          Tilkomsten til denne parkeringsplassen vil være 'normal' fram til ca{" "}
          <strong>kl 10:30</strong>. Etter dette kan transport til Grefsenkollen
          være vanskelig.
        </p>

        <h2>Etteranmelding</h2>
        <p>
          Etteranmelding kan gjøres på nettet helt fram til løpsdagen, og vi
          oppfordrer til at du gjør dette hjemme før du kommer til Muselunden.{" "}
          <Link to="/entry">Klikk her for påmelding</Link>.
        </p>
        <p>
          Det tilbys også etteranmelding ved startstedet i Muselunden. Her er vi
          operative fra lørdag ca <strong>kl. 09:00</strong>, og helt fram til
          start, så lenge vi har ledige startnumre. (Men tør du vente så lenge?)
        </p>
        <p>
          Etteranmelding i Muselunden vil koste <strong>NOK 300,-</strong>{" "}
          (t.o.m. 19 år) og <strong>NOK 450,-</strong> (f.o.m. 20 år). Det er
          ikke nødvendig med kontanter – du betaler kontingenten når du kommer
          hjem.
        </p>

        <h2>Startnummerutdeling</h2>
        <p>
          Alle startnumre må hentes ved startstedet i Muselunden i god tid før
          start. Vi åpner utdelingen fra ca <strong>kl 09:00</strong>.
          Løperbrikkene er montert i startnumrene.
        </p>
        <p>Tips for å spare tid (og miljøet):</p>
        <ul>
          <li>
            Husk startnummeret du har fått tildelt før du henter det ut. (Alle
            påmeldte får SMS med eget startnummer i god tid.)
          </li>
          <li>Ta med eget sett sikkerhetsnåler til startnummeret.</li>
        </ul>

        <h2>Toaletter</h2>
        <p>
          Bakkeløpsdeltakerne kan benytte mobile toaletter som er plassert i
          Muselunden, mot Åsensvingen nordvest for startområdet
        </p>

        <h2>Løperdrikke</h2>
        <p>
          Arrangøren tilbyr løperdrikke (vann og saft) på startplassen i
          Muselunden og etter målgang på toppen av Grefsenkollen.
        </p>

        <h2>Transport av overtrekkstøy</h2>
        <p>
          Arrangøren transporter begrenset omfang av overrtrekkstøy. Tøyet må
          merkes godt og leveres på angitt plass ved start i Muselunden, senest{" "}
          <strong>kl. 10:55</strong>. (Tøy-transporten til toppen kjører fra
          Muselunden 10 minutter før start.)
        </p>

        <h2>Start og tidtaking</h2>
        <p>
          Fellesstarten for alle går <strong>kl 11:10</strong>. Startplassen er
          markert i Muselunden.
        </p>
        <p>
          Det vil benyttes NETTO LØPSTID. Alle vil bli registrert med egen
          starttid i det de passerer startstreken, og løperens slutt-tid regnes
          fra dette tidspunktet. Den som har best netto løpstid blir vinner i
          hver klasse. Det er dermed ingen grunn til trengsel i starten.
        </p>
        <p>
          Første mann og kvinne over målstreken blir totalvinner av
          Grefsenkollen Opp. Startfeltet organiseres slik at de aller raskeste
          løperne (f.eks. alle som har vinnerambisjoner...) vil stå helt forrest
          i startfeltet. Dette gjelder for løpere med antatt bedre sluttid enn
          ca. 19:30.
        </p>
        <p>
          Merk: Starten kan bli utsatt i noen få minutter dersom en rutebuss i
          traseen er forsinket, eller det er andre uforutsette hendelser eller
          hindringer i løpstraseen i startøyeblikket.
        </p>
        <p>Følg speakerens anvisninger ved start, og vis hensyn.</p>

        <h2>Løypa</h2>
        <p>
          Løypa er den samme som tidligere, ca. <strong>4.5 km</strong> lang med{" "}
          <strong>270 m</strong> stigning.
        </p>
        <p>
          Under løpet er traseen sikret mot biltrafikk med skilting, og det er
          trafikkvakter i alle veikryss. All trafikk er sperret oppover, men det
          VIL komme kjøretøy i motsatt retning.
        </p>
        <p>
          <strong>
            HOLD TIL HØYRE i løpsretningen – det er kun det høyre kjørefeltet
            som er avsatt til gateløp. Vis aktsomhet.
          </strong>
        </p>

        <h2>Mellomtid</h2>
        <p>
          I krysset ved Lachmanns vei, ca. <strong>1.8 km</strong> før mål, vil
          det være en mellomtidsstasjon. Vær oppmerksom, og løp over
          mellomtids-streken. Tiden tas automatisk.
        </p>

        <h2>Målgang</h2>
        <p>
          Målgang er på toppen av Grefsenkollen. Tiden tas automatisk ved
          passering av mållinja. Deretter ledes løperne gjennom målslusen til
          utdeling av løperdrikke. Hold køen ut av målfeltet, og pust ut!
        </p>

        <h2>Løpetrøyer</h2>
        <p>
          Årets løpertrøyer utleveres på toppen av Grefsenkollen etter målgang,
          mot framvisning av startnummeret.
        </p>

        <h2>Resultater</h2>
        <p>
          Resultatene slås opp fortløpende på tavler på toppen av Grefsenkollen,
          og distribueres også via vår speaker på stedet. Alle tidene vil bli
          publisert på nettet så raskt som mulig etter løpet.
        </p>
        <p>
          Motbakkecup: Det produseres en offisiell resultatliste for
          Motbakkecupen i etterkant, i fire klasser (Junior og Senior for
          kvinner og menn).
        </p>

        <h2>Premieutdeling</h2>
        <p>
          Premieutdelingen er planlagt ca. <strong>kl 12:05</strong> på toppen
          ved Grefsenkollen Restaurant. Det er god premiering i alle
          konkurranseklassene, samt enkelte uttrekkspremier. Vi skal trekke en
          rekke flotte uttrekspremier blandt alle fullførende (og
          tilstedeværende!) løperne. Bli med og lag stemning rundt trekningen og
          premieutdelingen!
        </p>

        <h2>Transport etter løpet</h2>
        <p>
          Det er ingen organisert transport ned fra Grefsenkollen. Vi anbefaler
          å benytte Akebakken rett sørover fra Grefsenkollen som trasé for
          transport til fots. Akebakken ender nær friarealene ved Tonsen kirke.
          Fortsett langs arealene langs Trondheimsveien ned til startplassen i
          Muselunden
        </p>
        <p>
          <strong>Vi ønsker med dette alle deltakerne lykke til!</strong>
        </p>
      </PageBody>
    </>
  );
};
