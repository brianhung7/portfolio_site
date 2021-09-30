import React from 'react';

import { Section, SectionText, SectionTitle, UserName } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <p style={{color:'#64ffda',marginBottom:'2rem'}}>
        Hi! My name is
      </p>
      <UserName center>
        Brian Pham
      </UserName>
      <SectionText>
        I am a Software Engineer who specializes in building immersive web experiences.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:brian_van_pham@yahoo.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;