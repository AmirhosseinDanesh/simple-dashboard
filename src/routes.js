import Sidebar from './Components/Sidebar/Sidebar';
import IndexContent from "./Page/Index/IndexContent"
import UsersPage from './Page/Users/Users';
import User from './Page/Users/User';
import NotFound from "./Page/404/NotFound"

let routes = [
    { path: '/', element: <> <Sidebar /><IndexContent /> </> },
    { path: '/users', element: <UsersPage /> },
    { path: '/user/:userID', element: <User /> },
    { path : '*' , element :<NotFound />}
]


export default routes;