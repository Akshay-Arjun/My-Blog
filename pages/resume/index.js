import Head from 'next/head';
import React from 'react';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Resume Components
import ProfileSection from '../../components/Resume/ProfileSection';
import SkillsSection from '../../components/Resume/SkillsSection';
import ExperienceSection from '../../components/Resume/ExperienceSection';
import ProjectsSection from '../../components/Resume/ProjectsSection';
import EducationSection from '../../components/Resume/EducationSection';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume | {ORG_NAME}</title>
        <meta
          name="description"
          content="Akshay Vollala – Cybersecurity Professional with expertise in vulnerability assessment, penetration testing, and secure application development."
        />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        {/* Hero Section with Profile Info */}
        <ProfileSection />

        {/* Main Resume Content */}
        <div className="resume-container">
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </div>
      </Container>
      
      <style jsx>{`
        .resume-container {
          max-width: 1000px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
}
