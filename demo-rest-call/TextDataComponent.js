import { useEffect, useState } from "react"
import RestDataService from "./RestDataService"

const TextDataComponent = () => {
    const [data, setData] = useState('loading data')
    
    useEffect(()=>{
        let txtDataPromise = RestDataService()
        txtDataPromise.then(response=> {
            if (response.status == 200) {
                console.log(response)
                response.text().then(data=>{
                    console.log(data)
                    setData(data)
                })
            }
        })
    },[])

    return (
        <h1>{data}</h1>
    )
}

export default TextDataComponent