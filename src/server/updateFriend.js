import { mockDeleteFriendApi, mockUpdatedFriendApi } from "./mock_data"

export const updateFriends = async (payload) =>{
    await mockUpdatedFriendApi(payload)
}
export const deleteFriendServer = async (id) =>{
     await mockDeleteFriendApi(id)
    // return friendsList;
}