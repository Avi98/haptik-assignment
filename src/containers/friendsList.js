import React from "react";
import styled from "styled-components";
import { DeleteButton, FavoriteButton } from "../components";

const ListContainer = styled.div`
  border: var(--border);
  h3.title {
    background-color: var(--grey);
    margin: auto;
    color: black;
    text-align: left;
    padding: 5px 15px 5px 15px;
  }
  > ul {
    list-style: none;
    padding: initial;
    display: flex;
    flex-direction: column;
    > li {
      border-bottom: var(--border);
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    li:first-child {
      border-top: none;
      padding: 0 20px 20px;
    }
    li:last-child {
      border-bottom: none;
    }
  }

  > ul > li .flex-row {
    display: flex;
    flex-direction: row;
    >button:first-child{
        margin-right: 10px;
    }
  }
  > ul > li .flex-col {
    display: flex;
    flex-direction: column;
  }
  > ul > li > div > p {
    margin: auto;
    font-size: 14px;
    font-weight: 600;
    margin: auto;
}
> ul > li > div > p.subTitle {
    font-size: 10px;
    margin-left: 0;
    font-weight: 400;
  }
`;
export const FriendsList = ({ list }) => {
  return (
    <ListContainer>
      <h3 className="title">Friends List</h3>
      {/* input commin */}
      <ul>
        {list.map(({ name, subMessage, isFav }, i) => (
          <li key={`${name}-${i}`}>
            <div className="flex-col">
              <p className="title">{name}</p>
              <p className="subTitle">{subMessage}</p>
            </div>
            <div className="flex-row">
              <FavoriteButton like={false} />
              <DeleteButton />
            </div>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
