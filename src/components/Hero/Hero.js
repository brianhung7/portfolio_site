import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer who is looking to improve myself and lorem ipsum
      </SectionText>
      <Button onClick={( ) => window.location='brian.texts@gmail.com'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;