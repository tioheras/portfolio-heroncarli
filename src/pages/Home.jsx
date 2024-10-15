import Header from '../components/Header';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Escolas from '../components/Escolas';
import Contatos from '../components/Contatos';
import QualificacoesProfissionais from '../components/QualificacoesProfissionais';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <AboutMe />
        <Stacks />
        <Projects />
        <Escolas />
        <QualificacoesProfissionais />
        <Contatos />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
