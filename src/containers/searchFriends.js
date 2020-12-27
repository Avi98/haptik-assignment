import React from 'react';
import { Input } from '../components';

import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  > input {
    width: 97%;
    height: 25px;
    margin: 10px;
    margin-left: 0;
  }
`;
export const SearchFields = ({onChange}) =>{
    return (
      <SearchContainer>
        <Input onChange={onChange} placeholder="Search your friends here" />
      </SearchContainer>
    );
}