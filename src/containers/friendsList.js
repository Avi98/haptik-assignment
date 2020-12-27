import { useState } from "react";
import styled from "styled-components/macro";
import {
  DeleteButton,
  DeleteDialog,
  FavoriteButton,
  Input,
} from "../components";

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
export const FriendsList = ({
  list,
  addNewFriend,
  loading,
  likeFriend,
  deleteFriend,
}) => {
  const [name, setName] = useState("");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDeleteId, setCurrentDeleteId] = useState(null);
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

  const handelLike = (e) => {
    e.stopPropagation();
    const id = e.target.id || e.currentTarget.id;
    if (id) {
      likeFriend(id);
    }
  };
  const handleDelete = (e) => {
    const id = e.target.id || e.currentTarget.id;
    setCurrentDeleteId(id);
    setShowDeleteModal(true);
    // if(id){
    // }
  };

  const handleDeleteWrapper = (e) => {
    e.preventDefault();
    setShowDeleteModal(false);
    deleteFriend(currentDeleteId);
    setCurrentDeleteId(null);
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
          value={name}
        />
      </form>
      {loading ? (
        <div>loading....</div>
      ) : (
        <>
          <DeleteDialog
            showDeleteModal={showDeleteModal}
            handleDeleteWrapper={handleDeleteWrapper}
          />
          <ul>
            {list?.map(({ name, subMessage, isFav, id }, i) => (
              <li key={`${name}-${i}`}>
                <div className="flex-col">
                  <p className="title">{name}</p>
                  <p className="subTitle">{subMessage}</p>
                </div>
                <div className="flex-row">
                  <FavoriteButton id={id} like={isFav} onClick={handelLike} />
                  <DeleteButton id={id} onClick={handleDelete} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </ListContainer>
  );
};
