export let friendsList = [
    {
        id:1,
        name:'Rahul Gupta',
        subMessage:'is your friend',
        isFav: true
    },
    {
        id:2,
        name:'Shivangi Sharma',
        subMessage:'is your friend',
        isFav: true
    },
    {
        id:3,
        name:'Akash Singh',
        subMessage:'is your friend',
        isFav: true
    },
]

export const mockFetchFriendsApi = () =>{
    return  new Promise((res, rej)=>{
        setTimeout(()=>{
            const lists = window.localStorage.getItem('friendsList', )
            if(!lists){
                window.localStorage.setItem('friendsList', JSON.stringify(friendsList))
            }
            res(JSON.parse(lists))
        },1000)
        if(!friendsList){
            rej('no list')
        }
    })
}
export const mockAddFriendApi = (payload) =>{
    return  new Promise((res, rej)=>{
        setTimeout(()=>{
            const list = [
              {
                id: Math.random().toString(36).substr(2, 9),
                ...payload,
              },
              ...friendsList,
            ];
            friendsList=list 
            window.localStorage.setItem("friendsList", JSON.stringify(friendsList));
        // debugger

            res()
        },1000)
        if(!payload){
            rej('no item')
        }
    })
}