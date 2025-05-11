import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box 
      sx={{ 
        position: 'relative',
        mb: 6,
        paddingBottom: 2,
        borderBottom: '2px solid',
        borderColor: isDark ? '#90CAF9' : '#3498DB',
        width: 'fit-content'
      }}
    >
      <Typography 
        variant="h4" 
        component="h2"
        sx={{
          fontWeight: 700,
          color: isDark ? '#90CAF9' : '#3498DB',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading; 