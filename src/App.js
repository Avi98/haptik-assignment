import { useEffect, useState } from "react";

import "./App.css";
import { Layout } from "./components";
import { fetchFriends } from "./server";

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
        <div>hi</div>
      </Layout>
    </div>
  );
}

export default App;
