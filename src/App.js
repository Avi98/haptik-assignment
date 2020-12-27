import { useEffect, useRef, useState } from "react";

import "./App.css";
import { fetchFriends } from "./server";
import { FriendsList, SearchFields } from "./containers";
import { Layout, Pagination, Input } from "./components";
import { usePagination } from "./usePagination";
import { AddNewFriend } from "./server/addFriend";
import { useDebounce } from "./useDebounce";

function App() {
  
  const [friendsList, setFriendsList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const { friends, pageNumbers, handleClick, setFriends } = usePagination(friendsList);
  const debouncedValue = useDebounce(searchTerm, 500)

  const friendsListRef = useRef(friendsList) // holds reference for the all fetched friends list

  const getFriends = () => {
    setShowLoading(true);
    fetchFriends()
      .then((list) => {
        setFriendsList(list);
        friendsListRef.current = list
        setShowLoading(false);
      })
      .catch((_) => {
        setShowLoading(false);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);


  useEffect(()=>{
    if(debouncedValue){
      setIsListLoading(true)
      setFriendsList((state) =>
        state.filter((friend) => friend.name.includes(debouncedValue))
      );
      setIsListLoading(false) 
    }else{
      setFriendsList(friendsListRef.current)
    }

  },[debouncedValue])

  if (showLoading)
    return (
      <Layout>
        <div>loading....</div>{" "}
      </Layout>
    );

  const addNewFriend = (newFriend) => {
    setIsListLoading(true);
    AddNewFriend(newFriend).then(() => {
      setFriendsList((state) => [newFriend, ...state]);
      friendsListRef.current = [newFriend,...friendsList]; 
      setIsListLoading(false);
    });
  };

  const likeFriend = (id) => {

    const updatedFriendsList = friends.reduce((prev, item) => {
      if (item.id === id) {
        return [
          ...prev,
          {
            ...item,
            isFav: item.isFav ? false : true,
          },
        ];
      } else {
        return [...prev, item];
      }
    }, [])
    setFriends(updatedFriendsList);
  };

  const deleteFriend = (id) =>{
    setFriendsList(state=> state.filter(item=> item.id !==id))
  }
  const searchOnChange = (e) =>{
    setSearchTerm(e.target.value)
  }
  return (
    <div className="App">
      <Layout>
        <SearchFields onChange={searchOnChange}/>
        <FriendsList
          list={friends}
          addNewFriend={addNewFriend}
          loading={isListLoading}
          likeFriend={likeFriend}
          deleteFriend={deleteFriend}
        />
        <Pagination pageNumbers={pageNumbers} onClick={handleClick} />
      </Layout>
    </div>
  );
}

export default App;
