import React from 'react';

<<<<<<< HEAD
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
=======
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImageDiv } from './ProjectsStyles';
>>>>>>> main
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CgWebsite } from 'react-icons/cg'

<<<<<<< HEAD
=======
import ReactTooltip from 'react-tooltip';

>>>>>>> main
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
<<<<<<< HEAD
          <Img src={project.image} />
=======
          <ImageDiv className="project__image" style={{backgroundImage:`url(${project.gif})`}}>
          <Img src={project.image} />
          </ImageDiv>
>>>>>>> main
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
<<<<<<< HEAD
            <SocialIcons href="https://github.com/brianhung7/" title="Github">
              <AiFillGithub size="4rem" />
            </SocialIcons>
            <SocialIcons href="https://github.com/brianhung7/" title="Live Site">
=======
            <SocialIcons href={project.source} data-tip="Github Repo">
              <AiFillGithub size="4rem" />
            </SocialIcons>
            <SocialIcons href={project.visit} data-tip="Live Site">
>>>>>>> main
              <CgWebsite size="4rem" />
            </SocialIcons>
          </UtilityList>
        </BlogCard>
      ))}
<<<<<<< HEAD
=======
      
      <ReactTooltip place="bottom" effect="solid" backgroundColor="grey"/>
>>>>>>> main
    </GridContainer>
  </Section>
);

export default Projects;