import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
    const [emailLabel, setEmailLabel] = useState("Email Me")

    const links = [
        { label: "GitHub", href: "https://github.com/sambhavi298" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sambhavi-ranjan-b313bb347/" },
        {
            label: emailLabel,
            href: "mailto:sambhavi2908@gmail.com",
            isEmail: true
        }
    ]

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

                {links.map((link, index) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        target={link.isEmail ? undefined : "_blank"}
                        rel={link.isEmail ? undefined : "noopener noreferrer"}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        onMouseEnter={() => link.isEmail && setEmailLabel("sambhavi2908@gmail.com")}
                        onMouseLeave={() => link.isEmail && setEmailLabel("Email Me")}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(31, 41, 55, 1)",
                            borderColor: link.isEmail ? "rgba(6, 182, 212, 1)" : "rgba(6, 182, 212, 0.5)",
                            color: link.isEmail ? "rgba(6, 182, 212, 1)" : "white"
                        }}
                        className={`px-8 py-4 bg-gray-800 border border-white/10 rounded-xl transition-all duration-300 min-w-[160px] text-center ${link.isEmail ? "text-cyan-400 font-bold" : ""}`}
                    >
                        {link.label}
                    </motion.a>
                ))}

            </div>

        </motion.section>
    )
}
