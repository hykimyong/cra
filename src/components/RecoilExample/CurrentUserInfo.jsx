
import axios from 'axios';
import React from 'react'
import { atom, selector, useRecoilValue, useSetRecoilState} from "recoil";
import ErrorBoundary from './ErrorBoundary';

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
});

const tableOfUsers=[{name:'jimmy'},{name:'choi'}];
  
// const currentUserNameState = selector({
// key: 'CurrentUserName',
// get: ({get}) => {
//     return tableOfUsers[get(currentUserIDState)].name;
// },
// });

const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({get}) => {
      const response = await axios.get(`/api/user-name?id=${get(currentUserIDState)}`);
        return response.data.name;
    },
  });

function CurrentUser() {
    const userName = useRecoilValue(currentUserNameQuery);
    // const [id,setId] = useSetRecoilState(currentUserIDState);
    return <div>{userName}
    {/* <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input> */}
    </div>;
}

export default function CurrentUserInfo(){
    <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
            <CurrentUser />
        </React.Suspense>
    </ErrorBoundary>
}



