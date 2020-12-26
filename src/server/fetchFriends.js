import { mockFetchFriendsApi } from "./mock_data"

export const fetchFriends = async () =>{
    let friendsList =  await mockFetchFriendsApi()
    return friendsList;
}