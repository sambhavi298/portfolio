export default function Navbar() {
    return (
        <nav className="fixed w-full flex justify-between px-10 py-5 bg-black/40 backdrop-blur-md text-white z-50 border-b border-white/10">

            <h1 className="text-xl font-bold tracking-tighter cursor-pointer hover:text-cyan-400 transition">Sambhavi.dev</h1>

            <div className="flex gap-8 text-sm font-medium">
                <a href="#about" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">About</a>
                <a href="#skills" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Skills</a>
                <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Projects</a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase tracking-widest">Contact</a>
            </div>

        </nav>
    )
}
