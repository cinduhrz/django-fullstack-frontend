import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { IndexLoader, ShowLoader } from "./loaders"
import { CreateAction, UpdateAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route
                path=""
                loader={IndexLoader}
                element={<Index/>}/>
            <Route
                path="post/:id"
                loader={ShowLoader}
                element={<Show/>}/>
            <Route 
                path="create"
                action={CreateAction}/>
            <Route
                path="update/:id"
                action={UpdateAction}/>
            <Route path="delete/:id" />
        </Route>
    </>
))

export default router