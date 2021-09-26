import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Brian Pham
      </SectionTitle>
      <SectionText>
        I am a Software Engineer who specializes in building immersive web experiences. 
      </SectionText>
      <Button onClick={( ) => window.location='mailto:brian.texts@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;