import { mockAddFriendApi } from "./mock_data"

export const AddNewFriend = async(payload) =>{
    return await mockAddFriendApi(payload)
}