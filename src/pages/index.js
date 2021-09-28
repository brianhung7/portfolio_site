import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { SectionDivider } from '../styles/GlobalComponents';
import ReactTooltip from 'react-tooltip';

const Home = () => {
  return (
    <Layout>
      <Section grid style={{marginTop:'100px'}}>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      {/* <Accomplishments /> */}

      <ReactTooltip place="bottom" effect="solid" backgroundColor="grey"/>
    </Layout>
  );
};

export default Home;
