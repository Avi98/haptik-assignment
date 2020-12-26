import { useEffect, useState } from "react";

import "./App.css";
import { fetchFriends } from "./server";
import { FriendsList } from "./containers";
import { Layout, Pagination } from "./components";
import { usePagination } from "./usePagination";

function App() {
  const [friendsList, setFriendsList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const { friends, pageNumbers, handleClick } = usePagination(friendsList);

  const getFriends = () => {
    setShowLoading(true);
    fetchFriends()
      .then((list) => {
        setFriendsList(list);
        setShowLoading(false);
      })
      .catch((_) => {
        setShowLoading(false);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  if (showLoading)
    return (
      <Layout>
        <div>loading....</div>{" "}
      </Layout>
    );

  return (
    <div className="App">
      <Layout>
        <FriendsList list={friends} />
        <Pagination pageNumbers={pageNumbers} onClick={handleClick} />
      </Layout>
    </div>
  );
}

export default App;
