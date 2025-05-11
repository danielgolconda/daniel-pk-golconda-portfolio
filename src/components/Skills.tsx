import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useTheme } from '@mui/material/styles';
import SectionHeading from './SectionHeading';

interface Skill {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: Record<string, Skill> = {
  frontend: {
    title: "Frontend Development",
    icon: <WebIcon fontSize="large" />,
    skills: [
      "React.js",
      "TypeScript",
      "Material-UI",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Redux",
      "GraphQL Client"
    ]
  },
  backend: {
    title: "Backend Development",
    icon: <StorageIcon fontSize="large" />,
    skills: [
      "Node.js",
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "GraphQL API",
      "REST APIs"
    ]
  },
  ai: {
    title: "Generative AI",
    icon: <AutoFixHighIcon fontSize="large" />,
    skills: [
      "AWS Bedrock",
      "Vector Databases",
      "RAG Patterns",
      "Prompt Engineering",
      "Generative AI Application Security"
    ]
  }
};

interface CategorySectionProps {
  category: Skill;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        mb: 6,
        p: 3,
        borderRadius: 4,
        background: isDark 
          ? 'rgba(255, 255, 255, 0.05)'
          : '#FFFFFF',
        border: '1px solid',
        borderColor: isDark 
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(188, 170, 164, 0.2)',
        boxShadow: isDark
          ? '0 4px 20px rgba(255, 255, 255, 0.05)'
          : '0 4px 20px rgba(188, 170, 164, 0.1)',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: isDark ? '#FFFFFF' : '#795548',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          '& svg': {
            fontSize: '1.8rem',
            color: isDark ? '#90CAF9' : '#8D6E63',
            filter: isDark ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))' : 'none',
          }
        }}
      >
        {category.icon}
        {category.title}
      </Typography>
      
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 1.5,
          '& > *': {
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: isDark 
                ? '0 4px 12px rgba(255, 255, 255, 0.1)'
                : '0 4px 12px rgba(188, 170, 164, 0.2)',
            }
          }
        }}
      >
        {category.skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
              py: 2.2,
              background: isDark 
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                : 'linear-gradient(135deg, #FFFFFF, #F5F5F5)',
              border: '1px solid',
              borderColor: isDark 
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(188, 170, 164, 0.3)',
              color: isDark ? '#FFFFFF' : '#5D4037',
              '&:hover': {
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))'
                  : 'linear-gradient(135deg, #FFFFFF, #EFEBE9)',
                borderColor: isDark 
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(188, 170, 164, 0.5)',
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container 
      id="skills" 
      sx={{ 
        my: 5,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark 
            ? 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%)'
            : 'radial-gradient(circle at top right, rgba(188, 170, 164, 0.1), transparent 70%)',
          pointerEvents: 'none',
        }
      }}
    >
      <SectionHeading title="Skills" />
      
      <Box sx={{ mt: 4 }}>
        {Object.values(skillsData).map((category) => (
          <CategorySection
            key={category.title}
            category={category}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Skills; 