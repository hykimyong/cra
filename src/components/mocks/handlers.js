import {rest} from 'msw';

export const handlers =[
    rest.get("http://localhost:3000/api/user/123", async(req,res,ctx) =>{
        return res(
            ctx.json({
                name : "Jimmy"
            })
        )
    })
]