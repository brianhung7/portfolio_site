import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable, TableRow } from './TechnologiesStyles';
import { TechnologyList } from '../../constants/constants';
import 'bootstrap/dist/css/bootstrap.css';




const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Fullstack web developer
    </SectionText>
    <TechTable>
      <TableRow>
        <td>Javascript</td>
        <td>Python</td>
        <td>Typescript</td>
        <td>CSS3</td>
      </TableRow>
      <TableRow>
        <td>Django</td>
        <td>PostgreSQL</td>
        <td>MongoDB</td>
        <td>Restful Routing</td>
      </TableRow>
      <TableRow>
        <td>React.js</td>
        <td>Express.js</td>
        <td>Node.js</td>
        <td>EJS</td>
      </TableRow>
      <TableRow>
        <td>DTL</td>
        <td>AWS</td>
        <td>HTML5</td>
        <td>Mongoose</td>
      </TableRow>
    </TechTable>
  </Section>

);

export default Technologies;
