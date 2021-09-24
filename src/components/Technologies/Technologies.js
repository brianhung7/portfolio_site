import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable } from './TechnologiesStyles';
import { TechnologyList } from '../../constants/constants';




const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Fullstack web developer
    </SectionText>
    <TechTable>
      <tr>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
      </tr>      
      <tr>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
      </tr>      
      <tr>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
        <td>Javascript</td>
      </tr>
    </TechTable>
  </Section>

);

export default Technologies;
