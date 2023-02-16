import { Link, useLoaderData } from "react-router-dom"

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
        <Link to="/">
            <button>Go Back</button>
        </Link>
    </div>
}

export default Show