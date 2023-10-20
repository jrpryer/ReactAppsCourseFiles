
const RestDataService = () => { // 1st arg is the url endpoint of the data location
    const txtDataPromise = fetch('https://jsonplaceholder.typicode.com/posts')
    return txtDataPromise
}

export default RestDataService