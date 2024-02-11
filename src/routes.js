import Main from "./pages/Main"
import Works from "./pages/Works"

import { MAIN_ROUTE, WORKS_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: WORKS_ROUTE,  
        Component: Works
    },
]