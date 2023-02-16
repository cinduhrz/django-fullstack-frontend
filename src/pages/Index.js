import { useLoaderData } from "react-router-dom"
import Post from "../components/Post"

const Index = (props) => {
    const todos = useLoaderData()

    return todos.map(post => <Post 
        // give key
        key={post.id}
        // pass entire post as a whole prop so the Post component can access it
        post={post}
        />)
}

export default Index