import React from 'react'
import { SWRConfig, useSWRConfig } from 'swr'

export default function Cache() {
  return (
    <SWRConfig>
        <Page/>
    </SWRConfig>
  )
}

const Page = ()=>{
    const {cache} = useSWRConfig();
    return(
        <div>
            <button onClick={()=>{
                console.log(`check:${JSON.stringify(cache.get("/api/user/1212"))}`);
            }}>
                check
            </button>
        </div>
    )
}