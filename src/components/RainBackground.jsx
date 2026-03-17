import { useEffect } from "react"

export default function RainBackground() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty(
                "--c",
                `hsl(${e.clientX % 360}, 100%, 60%)`
            )
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return <div className="rain-container"></div>
}
