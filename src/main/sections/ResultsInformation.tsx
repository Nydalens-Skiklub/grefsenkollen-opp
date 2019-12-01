import React from "react";

import { PageHero } from "./common-components/PageHero";
import { PageBody } from "./common-components/PageBody";
import { Table, TableRowRight } from "./common-components/Table";

export const ResultsInformation: React.FC = () => {
  return (
    <>
      <PageHero>Resultater</PageHero>
      <PageBody>
        <h2>Løyperekorder</h2>
        <Table>
          <thead>
            <tr>
              <td>Klasse</td>
              <td>Navn</td>
              <TableRowRight>Tid</TableRowRight>
              <TableRowRight>År</TableRowRight>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kvinner</td>
              <td>Annie Bersagel</td>
              <TableRowRight>18:25</TableRowRight>
              <TableRowRight>2014</TableRowRight>
            </tr>
            <tr>
              <td>Menn</td>
              <td>Hillary Kipchumba</td>
              <TableRowRight>15:57</TableRowRight>
              <TableRowRight>2011</TableRowRight>
            </tr>
          </tbody>
        </Table>
      </PageBody>
    </>
  );
};
