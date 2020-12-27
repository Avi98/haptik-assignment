import styled from 'styled-components';

const Dialog = styled.dialog`
  >form > button{
    margin-right: 12px;
    background-color: blue;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  >form >button[type='submit']{
    background-color: red;
  }
`
export const DeleteDialog = ({ showDeleteModal, handleDeleteWrapper, closeModal }) => (
  <Dialog open={showDeleteModal}>
    <form onSubmit={handleDeleteWrapper}>
      <p>Are you sure you want to delete </p>
      <button type="submit">Yes</button>
      <button type="button" onClick={closeModal}>No</button>
    </form>
  </Dialog>
);