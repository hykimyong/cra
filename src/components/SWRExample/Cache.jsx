import React from 'react'
import { SWRConfig, useSWRConfig } from 'swr'

export default function Cache() {
  return (
    <SWRConfig value={{refreshInterval : 1000}}>
        <Page/>
    </SWRConfig>
  )
}

const Page = ()=>{
    const {cache, mutate} = useSWRConfig();
    return(
        <div>
            <button onClick={()=>{
                mutate("/api/user/1212");
            }}>
                check
            </button>
        </div>
    )
}
