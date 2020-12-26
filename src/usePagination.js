import { useEffect, useState } from "react";

export const usePagination = (friendLists) => {
  console.log("-------->", friendLists);
  const [currentPage, setCurrentPage] = useState(1);
  const [friends, setFriends] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);

  const friendListPerPage = 4;

  useEffect(() => {
    if (friendLists.length > friendListPerPage) {
      const indexOfLastPage = currentPage * friendListPerPage;
      const indexOfFirstPage = indexOfLastPage - friendListPerPage;

      const friendsToShow = friendLists.slice(
        indexOfFirstPage,
        indexOfLastPage
      );
      setFriends(friendsToShow);

      const pageNumbers = [];
      for (
        let i = 1;
        i <= Math.ceil(friendLists.length / friendListPerPage);
        i++
      ) {
        pageNumbers.push(i);
      }
      setPageNumbers(pageNumbers);
    } else {
      setFriends(friendLists);
    }
  }, [currentPage, friendLists.length]);

  const handleClick = ({ target: { id } }) => {
    setCurrentPage(Number(id));
  };

  return { friends, pageNumbers, handleClick };
};