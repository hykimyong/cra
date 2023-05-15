import React from 'react'
import useSWR from 'swr'
import axios from 'axios';

const fetcher = (...args) =>  axios.get(...args).then((res)=>res.data);

function useUser (id) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);
 
  return {
    user: data,
    isLoading,
    isError: error
  }
}

export default function Page() {
  return(<div>
    <Profile id={124}/>
    <Avatar id={124}/>
  </div>)
}

function Profile({id}) {
  const { user, isLoading, isError } = useUser(123);
 
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (<>
  <div>hello {user.name}!</div>
  <Avatar id={123}/>
  </>);
}

function Avatar({id}){
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load (Avatar)</div>
  if (isLoading) return <div>loading... (Avatar)</div>
  return <div>hello {user.name}! (Avatar)</div>
}