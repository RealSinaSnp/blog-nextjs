// components/HeaderDesktop.tsx
import { Moon, Sun, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from "next-themes";

export default function HeaderDesktop() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleDark = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className={`p-6 flex justify-between items-center bg-teal-500 ${isDark ? 'dark:bg-[#17313c]' : ''}`}>
      <div className="flex items-center gap-4">
        <img src="/img/profile.jpg" alt="Profile" className={`"w-16 h-16 rounded-full border-2  ${isDark ? "border-white" : "border-black"} transition`}/>
        <div>
          <h1 className="text-2xl font-bold  transition">Sina Sasanpour</h1>
          <p className="text-sm transition">Istanbul | Junior Developer</p>
          <div className="flex gap-3 mt-2 transition" >
            <a href="https://github.com/RealSinaSnp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
            <a href="https://www.linkedin.com/in/realsinasnp/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
            <a href="https://x.com/RealSinaSNP" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="lg" className={`${isDark ? "text-teal-100 hover:text-white" : "text-[#17313c] hover:text-black"} transition`} />
            </a>
            <a href="/blog" target="_blank" rel="noopener noreferrer">
              <Newspaper className={`${isDark ? "text-teal-300 hover:text-white" : "text-black hover:text-black"} transition`} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">                                                             
        <a href="/docs/CV_EN_dark.pdf" download className={`px-4 py-2 text-white font-semibold rounded-full ${isDark ? "bg-teal-500 hover:bg-teal-400" : "bg-[#17313c] hover:bg-black"} transition`}>
          Download CV (PDF)
        </a>
        <button onClick={toggleDark} className="text-white">
          {isDark ? <Sun /> : <Moon color="#17313c" />}
        </button>
      </div>
    </header>
  );
}
