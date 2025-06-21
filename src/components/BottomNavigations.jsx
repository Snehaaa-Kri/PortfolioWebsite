import React, { useState } from 'react';
import BioComponent from './BioComponent.jsx';
import AboutComponent from './AboutComponent.jsx';
import ProjectsComponent from './ProjectsComponent.jsx';
import ContactComponent from './ContactComponent.jsx';

import { Button, Slide, Paper, Stack, useMediaQuery } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: "My Bio", key: "bio" },
  { label: "About Me", key: "about" },
  { label: "My Projects", key: "projects" },
  { label: "Contact Me", key: "contact" },
];

function BottomNavigations() {
  const [activeSection, setActiveSection] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderComponent = () => {
    const sectionProps = { onBack: () => setActiveSection(null) };

    switch (activeSection) {
      case 'bio':
        return <BioComponent {...sectionProps} />;
      case 'about':
        return <AboutComponent {...sectionProps} />;
      case 'projects':
        return <ProjectsComponent {...sectionProps} />;
      case 'contact':
        return <ContactComponent {...sectionProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      {!activeSection && (
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          pb={4}
        >
          {navItems.map((item) => (
            <Slide direction="up" in={true} timeout={500} key={item.key}>
              <Paper
                elevation={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '50px',
                  px: 2,
                  py: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.25)',
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
                onClick={() => setActiveSection(item.key)}
              >
                <ArrowDownward sx={{ color: 'white', mr: 1 }} />
                <Button
                  sx={{
                    color: 'white',
                    fontFamily: 'Helvetica Now Display, sans-serif',
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              </Paper>
            </Slide>
          ))}
        </Stack>
      )}

      <div style={{ marginTop: '30px', zIndex: 100 }}>{renderComponent()}</div>
    </>
  );
}

export default BottomNavigations;
