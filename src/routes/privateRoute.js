import React from "react";
import ComposeInternalLayouts from "../components/HOC/ComposeInternalLayout";
// import Home from "../Pages/Dashboard";

const Home = React.lazy(() => import("../pages/Dashboard/Home"));
const Project = React.lazy(() => import("../pages/Dashboard/Projects/Projects"));
const Tasks = React.lazy(() => import("../pages/Dashboard/Tasks/Tasks"));

const routes = [
    {
        path: "/home",
        component: ComposeInternalLayouts(Home),
    },
    {
        path: "/projects",
        component: ComposeInternalLayouts(Project),
    },
    {
        path: "/tasks",
        component: ComposeInternalLayouts(Tasks),
    },
];

export default routes;