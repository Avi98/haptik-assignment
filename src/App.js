import { useEffect, useRef, useState } from "react";

import "./App.css";
import { fetchFriends } from "./server";
import { FriendsList, SearchFields } from "./containers";
import { Layout, Pagination, SortBy } from "./components";
import { usePagination } from "./usePagination";
import { AddNewFriend } from "./server/addFriend";
import { useDebounce } from "./useDebounce";
import { updateFriends, deleteFriendServer} from "./server/updateFriend";

function App() {
  
  const [friendsList, setFriendsList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const { friends, pageNumbers, handleClick, setFriends } = usePagination(friendsList);
  const debouncedValue = useDebounce(searchTerm, 100)

  const friendsListRef = useRef(null) // holds reference for the all fetched friends list
  const sortFriendsRef = useRef(null) // holds reference for sorting 

  const getFriends = () => {
    setShowLoading(true);
    fetchFriends()
      .then((list) => {
        setFriendsList(list);
        friendsListRef.current = list
        sortFriendsRef.current = list
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
      const filterSearchValue = friendsListRef.current.filter((friend) =>
        friend.name.toLowerCase().includes(debouncedValue.toLowerCase())
      ).slice(0,4);
      setFriendsList(filterSearchValue)
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
    AddNewFriend(newFriend).then((res) => {
      setFriendsList(res);
      friendsListRef.current = res; 
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
    updateFriends(updatedFriendsList) //async should not block render


  };

  const deleteFriend = (id) =>{
    setFriendsList(state=> state.filter(item=> item.id !==id))
    deleteFriendServer(id)
  }
  const searchOnChange = (e) =>{
    setSearchTerm(e.target.value)
  }

  const sortByChange = (e) =>{
    if(e.target.value ==='favorite'){
      const sortedByFav = [...sortFriendsRef.current].sort((friend1, _)=> {
        return friend1.isFav ? -1 : 1
      })
      setFriendsList(sortedByFav)
    }else{
      setFriendsList(sortFriendsRef.current)

    }
  }
  return (
    <div className="App">
      <Layout>
        <SortBy options={["none", "favorite"]} handleChange={sortByChange} />
        <SearchFields onChange={searchOnChange} value={searchTerm}/>
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
