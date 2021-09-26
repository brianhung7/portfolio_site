import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
<<<<<<< HEAD
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable, TableRow } from './TechnologiesStyles';
=======
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTable, TableRow,TableData } from './TechnologiesStyles';
>>>>>>> main
import { TechnologyList } from '../../constants/constants';




const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
<<<<<<< HEAD
    <br />
    <SectionTitle>Technologies</SectionTitle>
=======
    <SectionTitle main>Technologies</SectionTitle>
>>>>>>> main
    <SectionText>
      Fullstack web developer
    </SectionText>
    <TechTable>
<<<<<<< HEAD
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
=======
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
    
>>>>>>> main
  </Section>

);

export default Technologies;
