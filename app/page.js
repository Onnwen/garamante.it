"use client"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Background from "@/app/other/background"
import Homepage from "@/app/homepage/page"
import Index from "@/app/contacts/page"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"

export default function Page() {
    return (
        <main className="h-screen w-screen relative">
            <div className={"absolute top-0 left-0 w-full h-full"}>
                <Background />
            </div>
            <Router>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 5 }}>
                                    <Homepage />
                                </motion.div>
                            }
                        />
                        <Route exact path="/homepage" redirect="/" />
                        <Route
                            exact
                            path="/contacts"
                            element={
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 5 }}>
                                    <Index />
                                </motion.div>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </Router>
        </main>
    )
}
