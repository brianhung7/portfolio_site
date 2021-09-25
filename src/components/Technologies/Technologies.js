import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable, TableRow,TableData } from './TechnologiesStyles';
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
        <TableData>Restful Routing</TableData>
      </TableRow>
      <TableRow style={{backgroundColor:'rgba(255,255,255,.05)'}}>
        <TableData>React.js</TableData>
        <TableData>Express.js</TableData>
        <TableData>Node.js</TableData>
        <TableData>EJS</TableData>
      </TableRow>
      <TableRow>
        <TableData>DTL</TableData>
        <TableData>AWS</TableData>
        <TableData>HTML5</TableData>
        <TableData>Mongoose</TableData>
      </TableRow>
    </TechTable>
  </Section>

);

export default Technologies;
