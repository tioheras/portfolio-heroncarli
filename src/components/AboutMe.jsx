// src/components/AboutMe.jsx

import minhaFoto from '../assets/Imagens/Untitled.jpg';

const AboutMe = () => {
    return (
      <section className="bg-white text-black p-8">
        <div className="flex justify-between mb-4">
          <div className="flex-1 flex flex-col items-center"> {/* Ajuste feito aqui */}
            <h2 className="text-3xl font-bold text-center mt-32">olá, sou Heron de Carli</h2>
            <p className="text-lg text-center">fullstack / back-end dev</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src={minhaFoto}
              alt="Minha Foto" 
              className="w-64 h-64 rounded-full object-cover" 
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-8">sobre mim</h3> {/* Margem adicionada aqui */}
          <p className="mt-2 mx-[480px] text-center text-2xl text-justify">
            Desenvolvedor de softwares fullstack, com foco em back-end, estou aprofundando minhas 
            habilidades em tecnologias web e frameworks modernos para criar soluções eficientes e inovadoras. Minha 
            jornada profissional proporcionou uma sólida base técnica, além de habilidades interpessoais, como liderança, 
            resolução de problemas e comunicação eficaz. Experiência sólida em ReactJS, Vite, JavaScript, Typescript, criação e 
            consumo de APIs Restfull.
          </p>
        </div>
      </section>
    );
};

export default AboutMe;
