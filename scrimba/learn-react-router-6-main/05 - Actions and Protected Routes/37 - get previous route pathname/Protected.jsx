import React from "react"
import { redirect, Outlet } from "react-router-dom"
import { requireAuth } from "./requireAuth"

export async function loader({request}) {
    console.log(request)
    const url = new URL(request.url)
    console.log(url.href)
    await requireAuth()
    return null
}

export default function Protected() {
    return (
        <>
            <h1>Super secret info here</h1>
            <Outlet />
        </>
    )
}
