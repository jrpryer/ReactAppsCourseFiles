import { useState, useEffect } from "react"
import RestDataJsonService from "./RestDataJsonService"

const PostComponent = () => {

    const [data, setData] = useState({})
        
    useEffect(()=>{
        let jsonDataPromise = RestDataJsonService()
        jsonDataPromise.then(response=> {
            if (response.status == 200) {
                console.log(response)
                response.json().then(data=>{
                    console.log(data)
                    setData(data)
                })
            }
        })
    },[])

    return (
    <div>
        <span>
            {data.id}
            {data.title}
        </span>
    </div>    
    )
}

export default PostComponent