import React from "react";
const Login = React.lazy(() => import("../pages/Auth/Login/Login"));
const Register = React.lazy(() => import("../pages/Auth/Register/Register"));
const ForgotPassword = React.lazy(() => import("../pages/Auth/ForgotPassword/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../pages/Auth/ResetPassword/RestPassword"));

const authRoutes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/forgot-password",
        component: ForgotPassword
    },
    {
        path: "/recover-password",
        component: ResetPassword
    },
]

export default authRoutes;