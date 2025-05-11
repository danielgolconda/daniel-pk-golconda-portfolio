import React, { ReactElement } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Work, School } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import SectionHeading from './SectionHeading';

interface Project {
  name: string;
  description: string[];
}

interface BaseExperience {
  title: string;
  company: string;
  period: string;
  icon: ReactElement;
}

interface ProjectExperience extends BaseExperience {
  projects: Project[];
}

interface SimpleExperience extends BaseExperience {
  description: string[];
}

type Experience = ProjectExperience | SimpleExperience;

const experiences: Experience[] = [
  {
    title: "Software Development Engineer",
    company: "Amazon Web Services (AWS)",
    period: "Feb 2022 – Present",
    projects: [
      {
        name: "T&C Education Programs",
        description: [
          "Led the end-to-end development of an AI-powered feedback system using Amazon Bedrock and OpenSearch, helping teams turn customer feedback into clear insights.",
          "Built a chat-style web interface with React and TypeScript, making the feedback process easier to use and helping increase platform engagement by 11%.",
          "Designed and launched a reward system for learners using Salesforce (LWC, Apex), improving course completion and user satisfaction."
        ]
      },
      {
        name: "AWS Supply Chain",
        description: [
          "One of the first engineers on the team—helped shape the UI architecture and built shared components using React, TypeScript, and Material UI.",
          "Improved product stability by adding frontend integration tests and driving code quality across the team."
        ]
      },
      {
        name: "Tax Calculation Engine",
        description: [
          "Updated outdated frontend code to modern frameworks, making the internal tools faster and easier to maintain.",
          "Cut integration test time by 30%, helping the team release features more quickly and with fewer issues."
        ]
      }
    ],
    icon: <Work />
  },
  {
    title: "Software Engineer",
    company: "OpenText",
    period: "Dec 2020 – Feb 2022",
    description: [
      "Built new product features and integrated third-party tools into the TeamSite platform to provide a smoother user experience.",
      "Improved the UI using AngularJS and Bootstrap, making it cleaner and more responsive.",
      "Fixed important security issues flagged by Fortify, including cross-site scripting and SQL injection vulnerabilities."
    ],
    icon: <Work />
  },
  {
    title: "Engineering Intern",
    company: "OpenText",
    period: "Feb 2020 – Oct 2020",
    description: [
      "Helped develop a web application using TeamSite and implemented dynamic content using XSLT.",
      "Learned from senior engineers and contributed to features used by real customers."
    ],
    icon: <School />
  }
];

const ExperienceCard: React.FC<{ exp: Experience; isDark: boolean }> = ({ exp, isDark }) => {
  const renderContent = (description: string, index: number, total: number) => (
    <Box 
      key={index} 
      sx={{ 
        mb: index === total - 1 ? 0 : 2,
        p: 2,
        borderRadius: 1,
        bgcolor: isDark 
          ? 'rgba(144, 202, 249, 0.05)'
          : 'rgba(52, 152, 219, 0.05)',
        border: '1px solid',
        borderColor: isDark 
          ? 'rgba(144, 202, 249, 0.1)'
          : 'rgba(52, 152, 219, 0.1)',
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: isDark 
            ? 'rgba(144, 202, 249, 0.08)'
            : 'rgba(52, 152, 219, 0.08)',
          transform: 'translateX(4px)'
        }
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          lineHeight: 1.6,
          color: isDark ? '#B0B8C9' : '#34495E',
          fontSize: '0.95rem'
        }}
      >
        {description}
      </Typography>
    </Box>
  );

  return (
    <Paper 
      sx={{ 
        p: 3,
        height: '100%',
        bgcolor: isDark ? 'rgba(10, 15, 24, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isDark ? 'rgba(144, 202, 249, 0.1)' : 'rgba(52, 152, 219, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: isDark 
            ? 'linear-gradient(90deg, #90CAF9, #42A5F5)'
            : 'linear-gradient(90deg, #3498DB, #2980B9)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isDark 
            ? '0 10px 30px -10px rgba(144, 202, 249, 0.2)'
            : '0 10px 30px -10px rgba(52, 152, 219, 0.2)',
          borderColor: isDark ? 'rgba(144, 202, 249, 0.2)' : 'rgba(52, 152, 219, 0.2)',
          '&::before': {
            opacity: 1
          }
        }
      }}
    >
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          color: isDark ? '#90CAF9' : '#2980B9',
          fontWeight: 700,
          mb: 1,
          fontSize: '1.25rem'
        }}
      >
        {exp.title}
      </Typography>
      <Typography 
        sx={{ 
          color: isDark ? '#E0E6F0' : '#2C3E50',
          fontWeight: 600,
          mb: 3,
          fontSize: '1.1rem',
          opacity: 0.9
        }}
      >
        {exp.company}
      </Typography>
      <Box component="div">
        {'projects' in exp ? (
          exp.projects.map((project, projectIndex) => (
            <Box 
              key={projectIndex} 
              sx={{ 
                mb: projectIndex === exp.projects.length - 1 ? 0 : 3
              }}
            >
              <Typography 
                sx={{ 
                  color: isDark ? '#90CAF9' : '#2980B9',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '1rem',
                  pl: 2,
                  borderLeft: '2px solid',
                  borderColor: isDark 
                    ? 'rgba(144, 202, 249, 0.2)'
                    : 'rgba(52, 152, 219, 0.2)'
                }}
              >
                {project.name}
              </Typography>
              {project.description.map((desc, i) => 
                renderContent(desc, i, project.description.length)
              )}
            </Box>
          ))
        ) : (
          exp.description.map((desc, i) => 
            renderContent(desc, i, exp.description.length)
          )
        )}
      </Box>
    </Paper>
  );
};

const Experience: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container id="experience" sx={{ my: 5 }}>
      <SectionHeading title="Experience" />

      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ 
              color: isDark ? 'rgba(144, 202, 249, 0.8)' : '#2980B9',
              fontWeight: 600,
              fontSize: '1.1rem'
            }}>
              {exp.period}
            </TimelineOppositeContent>
            
            <TimelineSeparator>
              <TimelineDot 
                sx={{ 
                  bgcolor: isDark ? '#90CAF9' : '#3498DB',
                  boxShadow: isDark 
                    ? '0 0 10px rgba(144, 202, 249, 0.3)'
                    : '0 0 10px rgba(52, 152, 219, 0.3)',
                  p: 1
                }}
              >
                {exp.icon}
              </TimelineDot>
              {index !== experiences.length - 1 && (
                <TimelineConnector sx={{ 
                  bgcolor: isDark ? 'rgba(144, 202, 249, 0.2)' : 'rgba(52, 152, 219, 0.2)',
                  width: '2px'
                }} />
              )}
            </TimelineSeparator>
            
            <TimelineContent>
              <ExperienceCard exp={exp} isDark={isDark} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience; 