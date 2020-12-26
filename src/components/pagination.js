import React from 'react';
import { Button } from './style';


export const Pagination = ({ pageNumbers=[], onClick }) =>
pageNumbers.length > 1 && pageNumbers.map((number) => (
    <Button id={`${number}`} onClick={onClick}>
      {number}
    </Button>
  ));