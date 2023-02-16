import url from "./url";
import { redirect } from "react-router-dom"

export async function CreateAction({request}){
    // get the form data
    const formData = await request.formData()

    // construct body of new todo to send to backend
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route
    // dont needa save in var bc we dont needa do anything w/ the response, we just needa send it to api
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        // send body
        // but you can only send text(str) or binary, not JSON obj
        body: JSON.stringify(newTodo)
    })

    // redirect user back to index page
    return redirect("/")
}


export async function UpdateAction({request, params}){
    // get the form data
    const formData = await request.formData()

    // construct body of new todo to send to backend
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }

    // request to create route
    // dont needa save in var bc we dont needa do anything w/ the response, we just needa send it to api
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        // send body
        // but you can only send text(str) or binary, not JSON obj
        body: JSON.stringify(newTodo)
    })

    // redirect user back to index page
    return redirect("/")
}


export async function DeleteAction({params}){
    // get the id
    const id = params.id

    // send request
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}