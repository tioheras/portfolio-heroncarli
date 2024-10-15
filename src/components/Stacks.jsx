// src/components/Stacks.jsx
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi';
import { SiVercel, SiRender, SiExpress, SiTailwindcss, SiVitess, SiTypescript, SiJavascript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Stacks = () => {
  return (
    <section className="bg-white text-black p-8 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">my_stack</h2>
      <div className="flex  text-xl flex-wrap justify-center space-x-8 space-y-0">
        {[
          { Icon: SiJavascript, label: 'Javascript' },
          { Icon: FaReact, label: 'React' },
          { Icon: VscVscode, label: 'VsCode' },
          { Icon: SiTypescript, label: 'Typescript'},
          { Icon: FaNodeJs, label: 'Node.js' },
          { Icon: FaGitAlt, label: 'Git' },
          { Icon: FaGithub, label: 'Github' },
          { Icon: SiVitess, label: 'Vite' },
          { Icon: SiTailwindcss, label: 'Tailwind CSS' },
          { Icon: FaHtml5, label: 'HTML5' },
          { Icon: FaCss3Alt, label: 'CSS3' },
          { Icon: BiLogoPostgresql, label: 'PostgreSQL' },
          { Icon: BiLogoMongodb, label: 'MongoDB' },
          { Icon: SiExpress, label: 'Express' },
          { Icon: SiVercel, label: 'Vercel' },
          { Icon: SiRender, label: 'Render' },
        ].map(({ Icon, label }, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <Icon className="text-6xl mb-2" style={{ minHeight: '80px'}} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
