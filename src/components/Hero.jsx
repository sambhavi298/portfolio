import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import Scene3D from "./Scene3D"
import "./button.css"

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden z-10">
            <Particles
                id="tsparticles"
                className="absolute inset-0 z-0"
                options={{
                    background: { color: "#000" },
                    particles: {
                        number: { value: 80 },
                        size: { value: 2 },
                        move: { speed: 1 },
                        links: { enable: true }
                    }
                }}
            />

            {/* Decorative background element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[120px]"
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[160px]"
            ></motion.div>

            <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-4 max-w-7xl w-full">
                <div className="text-center md:text-left flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        Hi, I'm Sam
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg md:text-2xl text-gray-400 mb-10 font-medium tracking-tight max-w-2xl leading-relaxed"
                    >
                        AI / ML Engineer • Systems Builder
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 0.6, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="block text-sm mt-2 text-cyan-500 uppercase tracking-[0.3em] font-bold"
                        >
                            Crafting Intelligence with Code
                        </motion.span>
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="uiverse-button"
                    >
                        <span className="box">
                            View Projects
                        </span>
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="flex-1 w-full max-w-[500px]"
                >
                    <Scene3D />
                </motion.div>
            </div>

        </section>
    )
}
