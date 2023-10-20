import RestDataJsonService from "./RestDataJsonService"
import { useEffect, useState } from "react"

const JsonDataComponent = () => {
    const [data, setData] = useState('loading data')
    
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
        <h1>{JSON.stringify(data)}</h1>
    )
}

export default JsonDataComponent