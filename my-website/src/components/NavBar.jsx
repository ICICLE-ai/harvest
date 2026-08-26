import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import DrawerComp from './Drawer.jsx';
import { events, pastEvents } from '../events.js';

export default function NavBar() {
  const isMatch = useMediaQuery('(max-width:1350px)');
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Highlight the edition whose section the reader is currently in. MUI wants
  // `false` rather than -1 when nothing should be selected (e.g. past events).
  const activeEdition = events.findIndex(
    (event) => pathname === event.basePath || pathname.startsWith(`${event.basePath}/`)
  );
  const tabValue = activeEdition === -1 ? false : activeEdition;

  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Toolbar>
        {/* Logo / series name */}
        <Button
          sx={{ background: 'transparent', color: 'white', flexShrink: 0, mr: 2 }}
          component={RouterLink}
          to="/"
        >
          <Typography sx={{ fontWeight: 700, letterSpacing: '0.12em' }}>HARVEST</Typography>
        </Button>

        {isMatch ? (
          <DrawerComp />
        ) : (
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Tabs value={tabValue} indicatorColor="secondary" textColor="inherit">
              {events.map((event) => (
                <Tab
                  key={event.id}
                  label={event.navLabel}
                  component={RouterLink}
                  to={event.basePath}
                />
              ))}
            </Tabs>

            <Button
              onClick={handleMenuOpen}
              endIcon={<ExpandMoreIcon />}
              sx={{ marginLeft: 'auto', color: 'white', textTransform: 'none', fontSize: '0.95rem' }}
            >
              Past Events
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              PaperProps={{ sx: { backgroundColor: 'rgba(255,255,255,0.95)', mt: 1 } }}
            >
              {pastEvents.map((item) => (
                <MenuItem
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
