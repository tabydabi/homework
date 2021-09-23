import { CHAT_ROUTE, LOGGIN_ROUTE } from "../const/routers";
import Chat from "./Chat";
import Login from "./Login";

export const publicRouters = [
    {
        path: LOGGIN_ROUTE,
        Component: Login
    }
]

export const privateRouters = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]