import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route
                path=""
                loader={IndexLoader}
                element={<Index/>}/>
            <Route path="post/:id" element={<Show/>}/>
            <Route path="create" />
            <Route path="update/:id" />
            <Route path="delete/:id" />
        </Route>
    </>
))

export default router