import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CgWebsite } from 'react-icons/cg'

import ReactTooltip from 'react-tooltip';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
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
            <SocialIcons href={project.source} data-tip="Github Repo">
              <AiFillGithub size="4rem" />
            </SocialIcons>
            <SocialIcons href={project.visit} data-tip="Live Site">
              <CgWebsite size="4rem" />
            </SocialIcons>
          </UtilityList>
        </BlogCard>
      ))}
      
      <ReactTooltip place="bottom" effect="solid" backgroundColor="grey"/>
    </GridContainer>
  </Section>
);

export default Projects;