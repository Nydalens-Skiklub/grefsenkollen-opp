import React from "react";
import styled from "styled-components";

export const TableRowRight = styled.td`
  text-align: right;
`;

const TableContainer = styled.table`
  margin: 2rem auto;
  width: 100%;
  max-width: 768px;
  border-collapse: collapse;

  thead {
    font-weight: 700;

    tr {
      border-top: 1px solid lightgrey;
    }
  }

  tr {
    border-bottom: 1px solid lightgrey;
  }

  td {
    padding: 0.25rem;
    overflow: auto;

    max-width: 50px;
    @media screen and (min-width: 360px) {
      max-width: 100%;
    }
  }
`;

export const Table: React.FC = props => {
  return <TableContainer>{props.children}</TableContainer>;
};
