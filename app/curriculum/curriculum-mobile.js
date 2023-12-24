import { newYorkFont } from "@/app/layout"
import { motion } from "framer-motion"

export default function CurriculumMobile() {
    return (
        <div className="min-h-screen relative snap-always snap-center">
            <div className="absolute top-[10%] w-full">
                <div className={`${newYorkFont.className} text-4xl text-center`}>
                    <h1>Curriculum Vitae</h1>
                </div>
            </div>

            <div className="absolute bottom-[10%] justify-center w-full space-y-1">
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
                    Entra
                </motion.p>
            </div>
        </div>
    )
}
