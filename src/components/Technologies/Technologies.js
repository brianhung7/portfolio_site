import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable, TableRow,TableData,TechTableContainer } from './TechnologiesStyles';
import { TechnologyList } from '../../constants/constants';




const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      My Development Toolbox
    </SectionText>
    <TechTableContainer>
    <TechTable>
      <TableRow style={{backgroundColor:'rgba(255,255,255,.05)'}} >
        <TableData>Javascript</TableData>
        <TableData>Python</TableData>
        <TableData>Typescript</TableData>
        <TableData>CSS3</TableData>
      </TableRow>
      <TableRow>
        <TableData>Django</TableData>
        <TableData>PostgreSQL</TableData>
        <TableData>MongoDB</TableData>
        <TableData>RESTful Routing</TableData>
      </TableRow>
      <TableRow style={{backgroundColor:'rgba(255,255,255,.05)'}}>
        <TableData>React.js</TableData>
        <TableData>Express.js</TableData>
        <TableData>Node.js</TableData>
        <TableData>Embedded JS</TableData>
      </TableRow>
      <TableRow>
        <TableData>DTL</TableData>
        <TableData>AWS</TableData>
        <TableData>HTML5</TableData>
        <TableData>Bulma</TableData>
      </TableRow>
      <TableRow style={{backgroundColor:'rgba(255,255,255,.05)'}}>
        <TableData>Bootstrap</TableData>
        <TableData>jQuery</TableData>
        <TableData>Java</TableData>
        <TableData>C++</TableData>
      </TableRow>
    </TechTable>
    </TechTableContainer>
    <br/>
  </Section>

);

export default Technologies;
