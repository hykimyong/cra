import React from 'react'
import useSWR from 'swr'
import axios from 'axios';

const fetcher = (...args) =>  axios.get(...args).then((res)=>res.data);

export default function Profile() {
  const { data, error, isLoading } = useSWR('/api/user/123', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

