import React from "react";
import styled from "styled-components";
import { Button } from "./style";

const PaginationButtons = styled.div`
  display: flex;
  margin: 5px;
  position: absolute;
  right: 40px;
  >button{
    margin-left:2px;
  }
`;

export const Pagination = ({ pageNumbers = [], onClick }) => (
  <PaginationButtons>
    {pageNumbers.length > 1 &&
      pageNumbers.map((number) => (
        <Button key={number} id={`${number}`} onClick={onClick} type="button">
          {number}
        </Button>
      ))}
  </PaginationButtons>
);
