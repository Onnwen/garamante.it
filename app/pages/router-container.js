"use client"

import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {
    AnimatePresence
} from "framer-motion";
import Homepage
    from "@/app/pages/homepage/homepage";

export default function RouterContainer() {
    return (
        <AnimatePresence
            mode='wait'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Homepage/>}/>
                <Route
                    path="/contact"
                    element={
                        <p>contact</p>}/>
            </Routes>
        </AnimatePresence>
    );
}
