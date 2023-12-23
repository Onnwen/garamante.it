"use client"

import RouterContainer from "@/app/pages/router-container"
import { BrowserRouter as Router } from "react-router-dom"

export default function Page() {
    return (
        <Router>
            <RouterContainer />
        </Router>
    )
}
