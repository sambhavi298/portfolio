import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-10 overflow-hidden"
        >

            <Parallax translateY={[-20, 20]} speed={-10}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-center"
                >
                    <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        About Me
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-400 text-xl leading-relaxed px-4 font-light"
                    >
                        I am a CSE student specializing in AI and Machine Learning.
                        I enjoy building intelligent systems, experimenting with
                        machine learning models, and creating scalable software
                        solutions for real-world problems.
                    </motion.p>

                </motion.div>
            </Parallax>

        </motion.section>
    )
}
