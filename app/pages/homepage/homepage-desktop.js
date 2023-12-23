"use client"

import { newYorkFont } from "@/app/layout"
import { AcademicCapIcon, ChevronRightIcon, CodeBracketIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Instagram, Linkedin, StackOverflow, Twitter } from "react-bootstrap-icons"
import Background from "@/app/other/background"
import { Link } from "react-router-dom"
import MediaQuery from "react-responsive"

export default function HomepageDesktop() {
    const curve = {
        type: "spring",
        stiffness: 75,
        damping: 10,
    }

    const [nameExpanded, setNameExpanded] = useState(false)
    const [initialCompleted, setInitialCompleted] = useState(false)

    const headerDivVariants = {
        initial: {
            opacity: 0,
            x: -50,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        hover: {
            x: -20,
            opacity: 0.9,
        },
        expanded: {
            scale: 0.9,
            opacity: 1,
        },
        nameExpandedHover: {
            x: -30,
        },
    }

    const headerTextVariants = {
        initial: {
            opacity: 0,
            x: -30,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        hover: {
            x: 40,
        },
        expanded: {
            scale: 0.8,
            opacity: 0,
            x: -100,
        },
    }

    const headerTextChevronVariants = {
        initial: {
            opacity: 0,
            x: -20,
        },
        animate: {
            opacity: 0.5,
            x: 0,
        },
        hover: {
            opacity: 1,
            x: -10,
            scale: [1, 1.2, 1],
        },
    }

    const headerSubtitleVariants = {
        initial: {
            opacity: 0,
            y: -20,
            scale: 0.8,
        },
        animate: {
            opacity: 0.5,
            scale: 1,
            y: 0,
        },
        hover: {
            opacity: 0,
            scale: 0.8,
            y: -20,
        },
        hoverExpanded: {
            opacity: 0,
            scale: 0.8,
            y: -20,
        },
    }

    const headerExpandedVariants = {
        initial: {
            opacity: 0,
            scale: 0,
            y: -40,
            x: 10,
        },
        animate: {
            opacity: 0.85,
            scale: 1,
            y: -20,
        },
    }

    const headerExpandCloseVariants = {
        initial: {
            opacity: 0,
            scale: 0.5,
            x: -20,
            y: 12,
        },
        animate: {
            opacity: 0,
            scale: 0.5,
            x: -20,
            y: 12,
        },
        nameExpandedHover: {
            opacity: 0.5,
            scale: 1,
            x: -35,
            y: 12,
            rotate: 90,
        },
    }

    const menuItemsVariants = {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 0.95,
            y: 0,
        },
        hover: {
            x: -5,
            scale: 1,
        },
    }

    const menuItemsIconVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: {
            opacity: 0.85,
            x: 0,
        },
        hover: {
            opacity: 1,
            scale: 1.2,
            x: 5,
            dropShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)",
            transition: {
                ...curve,
                duration: 0.5,
            },
        },
    }

    return (
        <>
            <div className={"absolute top-1/2 -translate-y-1/2 w-screen"}>
                <div className={"select-none flex place-items-center container mx-auto"}>
                    <motion.div
                        className={"cursor-pointer"}
                        onClick={() => setNameExpanded(!nameExpanded)}
                        initial="initial"
                        animate={nameExpanded ? "expanded" : "animate"}
                        whileHover={!nameExpanded ? "hover" : "nameExpandedHover"}
                        expanded="expanded"
                        whileTap={!nameExpanded ? "tap" : "nameExpandedTap"}
                        onAnimationComplete={() => {
                            setInitialCompleted(true)
                        }}>
                        <motion.div variants={headerDivVariants} transition={curve}>
                            <div className={`${newYorkFont.className} text-4xl`}>
                                <h1>Onnwen'LG</h1>
                                <motion.div
                                    className="flex place-items-center origin-center"
                                    variants={headerTextVariants}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                    }}>
                                    <h1>Cassitto L'Hostis</h1>
                                    <motion.div
                                        variants={headerTextChevronVariants}
                                        transition={{
                                            duration: 0.5,
                                            type: "spring",
                                            stiffness: 100,
                                        }}>
                                        <ChevronRightIcon className="ms-4 h-5 w-5 mt-0.5" />
                                    </motion.div>
                                </motion.div>
                            </div>
                            <motion.p className={`text-lg origin-left ${initialCompleted ? "opacity-100" : "opacity-0"} max-w-2xl`} animate={nameExpanded ? "animate" : "initial"} variants={headerExpandedVariants} transition={curve}>
                                Garamante è il mio terzo nome, da cui la <span className={`[text-shadow:_0_0_3px_rgb(255_255_255_/_65%)] ${newYorkFont.className}`}>G</span> di <span className={`[text-shadow:_0_0_3px_rgb(255_255_255_/_65%)] ${newYorkFont.className}`}>LG</span>. Leonida è il secondo, in onore a mio nonno paterno.
                            </motion.p>
                        </motion.div>

                        <motion.p className="opacity-60 origin-center" variants={headerSubtitleVariants} transition={curve}>
                            Sviluppatore iOS & web
                        </motion.p>

                        <motion.div className="absolute top-0 left-0" variants={headerExpandCloseVariants} transition={curve}>
                            <XMarkIcon className="h-6 w-6" />
                        </motion.div>
                    </motion.div>
                    <motion.div className={`${newYorkFont.className} text-2xl ms-auto`} initial="initial" animate="animate" variants={menuItemsVariants} transition={curve}>
                        <ul className="space-y-14 text-center">
                            <li>
                                <Link to={"/about"}>
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        variants={menuItemsVariants}
                                        className="cursor-pointer flex place-items-center place-content-center"
                                        transition={{
                                            duration: 0.5,
                                            delay: !initialCompleted ? 0.4 : 0,
                                            type: "spring",
                                            stiffness: 100,
                                        }}>
                                        applicazioni
                                        <motion.div variants={menuItemsIconVariants}>
                                            <CodeBracketIcon className={"h-6 w-6 ms-3"}></CodeBracketIcon>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/curriculum"}>
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        variants={menuItemsVariants}
                                        className="cursor-pointer flex place-items-center place-content-center"
                                        transition={{
                                            duration: 0.5,
                                            delay: !initialCompleted ? 0.6 : 0,
                                            type: "spring",
                                            stiffness: 100,
                                        }}>
                                        curriculum
                                        <motion.div variants={menuItemsIconVariants}>
                                            <AcademicCapIcon className={"h-6 w-6 ms-3"}></AcademicCapIcon>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>
                                    <motion.div
                                        initial="initial"
                                        animate="animate"
                                        whileHover="hover"
                                        variants={menuItemsVariants}
                                        className="cursor-pointer flex place-items-center place-content-center origin-center"
                                        transition={{
                                            duration: 0.5,
                                            delay: !initialCompleted ? 0.8 : 0,
                                            type: "spring",
                                            stiffness: 100,
                                        }}>
                                        contatti
                                        <motion.div variants={menuItemsIconVariants}>
                                            <PhoneIcon className={"h-6 w-6 ms-3"}></PhoneIcon>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            <div className="flex place-items-center place-content-center absolute bottom-0 left-0 w-full mb-14 space-x-14">
                <a href="https://twitter.com/OnnwenC" className={"opacity-80 hover:opacity-100 hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition duration-300 ease-in-out"}>
                    <Twitter />
                </a>
                <a href="https://stackoverflow.com/users/13729787/onnwen" className={"opacity-80 hover:opacity-100 hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition duration-300 ease-in-out"}>
                    <StackOverflow />
                </a>
                <a href="https://github.com/Onnwen" className={"opacity-80 hover:opacity-100 hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition duration-300 ease-in-out"}>
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/onnwen-lg-cassitto-l-hostis-b130811a4/" className={"opacity-80 hover:opacity-100 hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition duration-300 ease-in-out"}>
                    <Linkedin />
                </a>
                <a href="https://www.instagram.com/onnwencassitto/" className={"opacity-80 hover:opacity-100 hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition duration-300 ease-in-out"}>
                    <Instagram />
                </a>
            </div>
        </>
    )
}
