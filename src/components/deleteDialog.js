
export const DeleteDialog = ({ showDeleteModal, handleDeleteWrapper }) => (
  <dialog open={showDeleteModal}>
    <form onSubmit={handleDeleteWrapper}>
      <p>Are you sure you want to delete </p>
      <button type="submit">Yes</button>
      <button type="button">No</button>
    </form>
  </dialog>
);