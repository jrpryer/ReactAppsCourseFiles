const RestDataJsonService = () => { // 1st arg is the url endpoint of the data location
    const jsonDataPromise = fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: new Headers({'accept': 'application/json'})
    })
    return jsonDataPromise
}

export default RestDataJsonService