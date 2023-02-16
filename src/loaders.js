import url from "./url"

// if u use "export" (and not "export default"), you have to import with {} !!!
export async function IndexLoader(){
    // save in response var bc fetch will return a response object wrapped in a promise (which is y u need await)
    const response = await fetch(url)
    // convert to json (need await bc it also returns a promise)
    const data = await response.json()

    console.log("INDEX LOADER: ", data)

    return data
}