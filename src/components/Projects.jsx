/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import carteiraDigitalVideo from "../assets/videos/carteira-digital.mp4"; // Importando o vídeo da carteira digital
import apiNodeJsVideo from "../assets/videos/api-nodejs.mp4"; // Importando o vídeo da API Node.js
import sabonitasVideo from "../assets/videos/veracosmeticos.mp4"; // Importando o vídeo Sabonitas
import portfolio1 from "../assets/videos/portfolio1.mp4"; // Importando o vídeo do Portfolio 1

const ProjectItem = ({ title, description, videoUrl, detailedDescription }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // Referência para o vídeo

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.requestFullscreen(); // Solicita o modo de tela cheia
    } else {
      setIsPlaying(true); // Inicia a reprodução se não estiver tocando
    }
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div
        className="relative w-[600px] h-[337.5px] overflow-hidden mr-8 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoClick} // Chama a função ao clicar
      >
        {isPlaying ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              src={videoUrl}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30" // Imagem do vídeo esmaecida
              muted
              loop
              // Remover autoPlay aqui para não iniciar automaticamente
            />
            <span className="text-white text-2xl font-bold">{title}</span> {/* Nome do título no lugar do texto "Vídeo" */}
          </div>
        )}
      </div>
      <div className="flex-1 text-left max-w-[800px]">
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <span className="block text-lg mb-6">{description}</span>
        <p
          className={`overflow-hidden transition-all duration-300 text-justify ${
            isExpanded ? 'max-h-full' : 'max-h-[150px]'
          }`}
        >
          {isExpanded ? (
            <>
              {detailedDescription}
            </>
          ) : (
            "Esta aplicação tem como foco a funcionalidade e a comunicação segura entre o frontend, backend e banco de dados, proporcionando uma experiência fluida e prática em uma Single Page Application (SPA)."
          )}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 bg-gray-800 text-white py-2 px-4 rounded"
        >
          {isExpanded ? 'Minimizar' : 'Confira!'}
        </button>
      </div>
    </div>
  );
};

const Projects = () => (
  <section className="p-12 bg-white my-4">
    <h2 className="pb-16 text-3xl font-bold text-center">meus projetos recentes</h2>
    <div className="mt-6">
      <ProjectItem
        title="Carteira Digital"
        description="Aplicação fullstack, projetada para oferecer uma solução eficiente e intuitiva para o gerenciamento de entradas e saídas financeiras."
        videoUrl={carteiraDigitalVideo}
        detailedDescription={
          <>
            Esta aplicação tem como foco a funcionalidade e a comunicação segura entre o frontend, backend e banco de dados, proporcionando uma experiência fluida e prática em uma Single Page Application (SPA).
            Stack Utilizada - MERN
            Frontend: React.js com Vite
            Backend: Node.js com Express.js
            Banco de Dados: MongoDB
            Funcionalidades Principais
            Frontend
            Interface Dinâmica e Responsiva: Adaptável a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente.
            Navegação Fluida: Implementação de react-router-dom para uma navegação rápida e intuitiva.
            Componentes Reutilizáveis: Estrutura modular que promove eficiência e facilidade de manutenção.
            Backend
            API RESTful: Estrutura robusta para gerenciar requisições de forma eficiente.
            Autenticação de Usuários: Implementação segura para proteger a privacidade dos dados.
            Manipulação Segura de Transações: Proteção contra acessos não autorizados.
            Banco de Dados
            Armazenamento em MongoDB: Oferece flexibilidade e escalabilidade ideais para dados financeiros.
            Gerenciamento de Dados Estruturados: Estrutura organizada para fácil acesso e análise.
            Segurança
            Tokens JWT (JSON Web Tokens): Implementação de uma camada adicional de segurança para acesso a informações financeiras sensíveis.
            Gerenciamento de Transações
            Registro de Transações: Facilita a entrada e saída de valores financeiros.
            Cálculo Automático de Saldo: Proporciona uma visão instantânea das finanças do usuário.
          </>
        }
      />
      <ProjectItem
        title="Aplicação Backend"
        description="Aplicação backend CRUD desenvolvida em Node.js com TypeScript."
        videoUrl={apiNodeJsVideo}
        detailedDescription={
          <>
            Aplicação backend CRUD (Create, Read, Update, Delete) desenvolvida em Node.js com TypeScript, utilizando o framework Express. O foco dessa aplicação é gerenciar informações sobre players e times, permitindo operações completas de CRUD para facilitar o acesso e a manipulação de dados.
            🔍 Estrutura da Aplicação: A arquitetura da aplicação foi organizada em diferentes camadas, garantindo uma separação clara de responsabilidades e facilitando a manutenção e escalabilidade. A estrutura é composta por: src: Diretório principal que abriga todo o código. controllers: Responsáveis por gerenciar as requisições e respostas da API. data: Armazena informações essenciais para a aplicação. models: Define a estrutura dos dados, utilizando Mongoose para interagir com o banco de dados MongoDB. repositories: Encapsula a lógica de acesso a dados, promovendo a reutilização e a facilidade de testes. services: Contém a lógica de negócios, garantindo que a aplicação siga as melhores práticas. utils: Funcionalidades auxiliares que facilitam a implementação de recursos comuns.
            💡 Tecnologias e Práticas Utilizadas: Node.js e Express: Para uma performance ágil e eficiente na construção da API. TypeScript: Para garantir um código mais robusto e com tipagem estática. MongoDB: Para um gerenciamento de dados flexível e escalável. JWT (JSON Web Tokens): Implementação de autenticação segura. Thunder Client: Utilizado para verificar e testar as funcionalidades da aplicação, garantindo que tudo estivesse funcionando conforme o esperado.
            Essa aplicação não apenas amplia meu conhecimento em desenvolvimento backend, mas também proporciona uma solução prática para gerenciar dados de forma eficaz.
          </>
        }
      />
      <ProjectItem
        title="vera cosméticos artesanais"
        description="Aplicação dedicada ao gerenciamento e venda de produtos de beleza."
        videoUrl={sabonitasVideo}
        detailedDescription={
          <>
            Este projeto visa oferecer uma plataforma intuitiva para a venda de produtos de beleza, com foco na experiência do usuário.
            Stack Utilizada - MERN
            Frontend: React.js com Vite
            Backend: Node.js com Express.js
            Banco de Dados: MongoDB
            Funcionalidades Principais
            Frontend
            Interface Atraente: Design responsivo e atrativo para os usuários.
            Carrinho de Compras: Cliente optou por vendas diretas em contato com a empresa
            API RESTful: Gerenciamento eficiente dos produtos e usuários.
            Segurança: Implementação de autenticação para usuários.
          </>
        }
      />
      <ProjectItem
        title="Portfolio mobile-first"
        description="Um portfólio dinâmico para exibir projetos e habilidades."
        videoUrl={portfolio1}
        detailedDescription={
          <>
            Este projeto é um portfólio interativo, permitindo que os usuários visualizem e interajam com os projetos.
            Stack Utilizada - HTML, CSS e Javascript
            Funcionalidades Principais
            Interface Moderna: Design clean e responsivo.
            Exibição de Projetos: Apresentação dinâmica dos projetos realizados.
          </>
        }
      />
      {/* Adicione os outros projetos da mesma forma */}
    </div>
  </section>
);

export default Projects;
