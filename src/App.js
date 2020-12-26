import { useEffect, useState } from "react";

import "./App.css";
import { Layout } from "./components";
import { fetchFriends } from "./server";
import { FriendsList } from "./containers";

function App() {
  const [friendsList, setFriendsList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  const getFriends = () => {
    setShowLoading(true);
    fetchFriends()
      .then((list) => {
        setFriendsList(list);
        setShowLoading(false);
      })
      .catch( _ => {
        setShowLoading(false);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  if(showLoading) return <Layout><div>loading....</div> </Layout>
  return (
    <div className="App">
      <Layout>
       
       <FriendsList list ={friendsList} />
      </Layout>
    </div>
  );
}

export default App;
