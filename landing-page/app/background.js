import { motion } from "framer-motion"
import { useLayoutEffect, useMemo, useRef, useState } from "react"

export default function Background() {
    const targetRef = useRef()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            })
        }
    }, [])

    const colors = ["#08182c", "#0f283e", "#112b3f", "#1b384f"]
    colors.push(...colors)

    const blobs = useMemo(
        () =>
            colors.map((color) => {
                const size = Math.random() * 750
                return {
                    style: {
                        position: "absolute",
                        top: Math.random() * (dimensions.height - size),
                        left: Math.random() * (dimensions.width - size),
                        width: size,
                        height: size,
                        borderRadius: "25%",
                        backgroundColor: color,
                    },
                    animate: {
                        x: Math.random() * 1000 - 500,
                        y: Math.random() * 1000 - 500,
                        // rotate: Math.random() * 360,
                        scale: Math.random() * 1.5,
                    },
                    transition: {
                        loop: Infinity,
                        duration: 10 + Math.random() * 30,
                        ease: "linear",
                    },
                }
            }),
        [colors]
    )

    return (
        <div style={{ filter: "blur(100px)" }}>
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100vw",
                    height: "100vh",
                    filter: "blur(300px)",
                }}
                ref={targetRef}>
                {blobs.map((blob, i) => (
                    <motion.div key={i} style={blob.style} animate={blob.animate} transition={blob.transition} />
                ))}
            </div>
        </div>
    )
}
