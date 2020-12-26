export const friendsList = [
    {
        name:'Rahul Gupta',
        subMessage:'is your friend',
        isFav: true
    },
    {
        name:'Shivangi Sharma',
        subMessage:'is your friend',
        isFav: true
    },
    {
        name:'Akash Singh',
        subMessage:'is your friend',
        isFav: true
    },
]

export const mockFetchFriendsApi = () =>{
    return  new Promise((res, rej)=>{
        setTimeout(()=>{
            res(friendsList)
        },1000)
        if(!friendsList){
            rej('no list')
        }
    })
}