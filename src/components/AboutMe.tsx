import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SectionHeading from './SectionHeading';

const AboutMe: React.FC = () => {
  return (
    <Container id="about" sx={{ my: 5 }}>
      <SectionHeading title="About Me" />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body1">
          Hi, I'm Daniel Prem Kumar Golconda, a Software Development Engineer at Amazon Web Services with a passion for building AI-powered, 
          scalable applications using AWS, React, and modern cloud technologies. I enjoy turning complex 
          business problems into reliable, user-friendly solutions that deliver real value.
        </Typography>

        <Typography variant="body1">
          I've led multiple initiatives across education and supply chain domains—owning projects end-to-end 
          from system design and architecture to development and deployment. I've built full-stack solutions 
          using React, TypeScript, GraphQL, and Node.js, and deployed them with AWS services like Lambda, 
          API Gateway, DynamoDB, and Bedrock. My work with Retrieval-Augmented Generation (RAG) and vector 
          search has enabled teams to automate insights and make faster, data-informed decisions.
        </Typography>

        <Typography variant="body1">
          In addition to hands-on development, I take an active role in mentoring junior engineers, leading 
          technical design reviews, and helping shape team-wide engineering practices. I focus on building 
          systems that are scalable, maintainable, and designed to grow alongside the product and team.
        </Typography>

        <Typography variant="body1" sx={{ 
          mt: 1,
          p: 2, 
          bgcolor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 1,
          fontStyle: 'italic'
        }}>
          Outside of work, I enjoy playing the guitar and spending time with my golden retriever, 
          Toastie. Whether it's strumming a new tune or chasing him 
          around the park, those little moments help me recharge and stay creative.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe; 