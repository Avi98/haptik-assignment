import React from 'react';
import { Input } from '../components';

import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  > span {
    width: 97%;
  > input {
    width: 75%;
    height: 25px;
    margin: 10px;
    margin-left: 0;
    margin: 5px;
  }
  }
`;
export const SearchFields = ({onChange, value}) =>{
    return (
      <SearchContainer>
        <span><label>Search Friends:</label>
        <Input onChange={onChange} placeholder="Search your friends here" value={value} />
        </span>
      </SearchContainer>
    );
}