import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Article from "../pages/Article";
const browserRouter = createBrowserRouter([{
    path:'/login',
    element: <Login/>
},
{
    path:'/article',
    element: <Article/>
}])

export default browserRouter