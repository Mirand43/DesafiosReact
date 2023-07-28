import { createBrowserRouter } from 'react-router-dom'
import Default from './layouts/Default'
import Task from './pages/Task'
import AddTask from './pages/AddTask'
import UpdateTask from './pages/UpdateTask'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Task/>
            },

            {
                path: '/AddTask',
                element: <AddTask/>
            },

            {
                path: '/Update/:id',
                element: <UpdateTask/>
            },
        ],
    },

]
)