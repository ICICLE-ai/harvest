import { useState } from 'react';
import {
  Drawer,
  IconButton,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { events, pastEvents } from '../events.js';

// Small-screen counterpart to the navbar tabs. It only carries the top-level
// choices — the per-edition sections live in the page's own side tabs, which
// collapse into a scrollable strip at this width.
export default function DrawerComp() {
  const [open, setOpen] = useState(false);
  const [openPastEvents, setOpenPastEvents] = useState(false);

  // Smoothly close Drawer after navigation
  const handleCloseAfterNav = () => {
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(9,9,121,1)',
            zIndex: 1301, // ensure above AppBar
          },
        }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', mb: 2, letterSpacing: '0.12em' }}>
            HARVEST
          </Typography>

          <List>
            {events.map((event) => (
              <ListItemButton
                key={event.id}
                component={RouterLink}
                to={event.basePath}
                onClick={handleCloseAfterNav}
              >
                <ListItemText
                  sx={{ color: 'white', textAlign: 'center' }}
                  primary={event.navLabel}
                />
              </ListItemButton>
            ))}

            <ListItemButton onClick={() => setOpenPastEvents(!openPastEvents)}>
              <ListItemText
                sx={{ color: 'white', textAlign: 'center' }}
                primary="Past Events"
              />
              {openPastEvents ? (
                <ExpandLess sx={{ color: 'white' }} />
              ) : (
                <ExpandMore sx={{ color: 'white' }} />
              )}
            </ListItemButton>

            <Collapse in={openPastEvents} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {pastEvents.map((item) => (
                  <ListItemButton
                    key={item.path}
                    sx={{ pl: 4 }}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleCloseAfterNav}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: 'white', textAlign: 'center' }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>

      {/* Menu Icon Button */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: 'auto',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}
