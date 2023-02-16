import { Link, useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const post = useLoaderData()

    // style
    const divStyle = {
        textAlign: "center",
        border: "3px solig green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={divStyle}>
        <h1>{post.subject}</h1>
        <h2>{post.details}</h2>

        <div style={{textAlign: "center"}}>
            <h2>Update this Todo</h2>
            <Form action={`/update/${post.id}`} method="post">
                <input type="text" name="subject" defaultValue={post.subject}/>
                <input type="text" name="details" defaultValue={post.details}/>
                <button>Update Todo</button>
            </Form>
        </div>

        <Link to="/">
            <button>Go Back</button>
        </Link>
    </div>
}

export default Show