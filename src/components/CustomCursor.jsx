import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const springConfig = { damping: 25, stiffness: 150 }
    const mouseX = useSpring(0, springConfig)
    const mouseY = useSpring(0, springConfig)

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-500/30 border border-cyan-400/50 pointer-events-none z-[9999] blur-sm"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    )
}
