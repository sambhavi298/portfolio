import { motion } from "framer-motion"

export default function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen text-white flex flex-col items-center justify-center p-10 overflow-hidden"
        >

            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-8 tracking-tighter"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-400 mb-12 text-center max-w-md"
            >
                Feel free to reach out for collaborations or just a friendly hello!
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6">

                {["GitHub", "LinkedIn", "Email Me"].map((label, index) => (
                    <motion.a
                        key={label}
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(31, 41, 55, 1)",
                            borderColor: label === "Email Me" ? "rgba(6, 182, 212, 1)" : "rgba(6, 182, 212, 0.5)",
                            color: label === "Email Me" ? "rgba(6, 182, 212, 1)" : "white"
                        }}
                        className={`px-8 py-4 bg-gray-800 border border-white/10 rounded-xl transition-all duration-300 ${label === "Email Me" ? "text-cyan-400 font-bold" : ""}`}
                    >
                        {label}
                    </motion.a>
                ))}

            </div>

        </motion.section>
    )
}
