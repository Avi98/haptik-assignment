import { useState } from "react";
import styled from "styled-components/macro";
import { DeleteButton, FavoriteButton, Input } from "../components";

const ListContainer = styled.div`
  border: var(--border);
  min-height: 368px;
  position: relative;
  h3.title {
    background-color: var(--grey);
    margin: auto;
    color: black;
    text-align: left;
    padding: 5px 15px 5px 15px;
  }
  > form > input {
    border: none;
    width: 90%;
    height: 40px;
  }
  > form {
    border-bottom: var(--border);
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
      padding: 0 20px 20px;
    }
    li:last-child {
      border-bottom: none;
    }
  }

  > ul > li .flex-row {
    display: flex;
    flex-direction: row;
    > button:first-child {
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
export const FriendsList = ({ list, addNewFriend, loading }) => {
  const [name, setName] = useState("");
  const handleChange = ({ target: { value } }) => setName(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewFriend({
      name,
      subMessage: "is your friend",
      isFav: false,
    });
    setName("");
  };

  return (
    <ListContainer>
      <h3 className="title">Friends List</h3>
      <form onSubmit={handleSubmit} disabled={loading}>
        <Input
          className="add-friend-field"
          placeholder={`Enter your friend's name`}
          onChange={handleChange}
          disabled={loading}
        />
      </form>
      {loading ? (
        <div>loading....</div>
      ) : (
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
      )}
    </ListContainer>
  );
};
