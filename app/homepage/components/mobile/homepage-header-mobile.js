"use client"

import { newYorkFont } from "@/app/layout"
import { motion, useScroll } from "framer-motion"
import { ChevronUp } from "react-bootstrap-icons"
import { useRef } from "react"

export default function HomepageHeaderMobile() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })

    return (
        <div className="min-h-screen relative snap-always snap-center">
            <div className="absolute top-[10%] w-full">
                <div className={`${newYorkFont.className} mt-10 text-5xl text-center`}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                            y: -10,
                        }}
                        style={{ y: scrollYProgress }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [20, 0],
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}>
                        Onnwen'LG
                    </motion.h1>
                </div>
                <div className={`text-lg text-center tracking-[5px] mt-2 opacity-80 font-medium`}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 5,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}>
                        CASSITTO L'HOSTIS
                    </motion.h1>
                </div>

                <div className={`opacity-60 mt-10 text-center`}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 2,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}>
                        Sviluppatore iOS & web
                    </motion.h1>
                </div>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 5,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                }}
                className="absolute bottom-[10%] justify-center w-full space-y-1">
                <motion.div
                    animate={{
                        y: [0, -5, -10, -20],
                        opacity: [0, 0.7, 0.5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatDelay: 5,
                    }}
                    className="h-5 w-5 mx-auto">
                    <ChevronUp className="right-5 h-5 w-5 text-md font-medium" />
                </motion.div>
                <motion.p
                    animate={{
                        y: [0, -2, -5, 0],
                        opacity: [0.6, 1, 0.8, 0.6],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatDelay: 5,
                    }}
                    className="text-md font-medium text-center">
                    Scorri ed esplora
                </motion.p>
            </motion.div>
        </div>
    )
}
