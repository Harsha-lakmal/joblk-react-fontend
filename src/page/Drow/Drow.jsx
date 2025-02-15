import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Chip, TextField, Tooltip, Typography, InputAdornment } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Route, Routes } from 'react-router-dom';
import { HomeIcon, UserIcon, BriefcaseIcon, SettingsIcon } from 'lucide-react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Importing Pages
import JobPage from '../JobPage/JobPage';
import AboutPage from '../AboutPage/AboutPage';
import SettingPage from '../SettingPage/SettingPage';
import HomePage from '../HomePage/HomePage';

// Importing Image
import Img from '../DrowerPage/lkJob.png';

// Navigation items for sidebar
const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'Home', title: 'Home', icon: <HomeIcon /> },
  { segment: 'About', title: 'About', icon: <UserIcon /> },
  { segment: 'Job', title: 'Job', icon: <BriefcaseIcon /> },
  { segment: 'Setting', title: 'Setting', icon: <SettingsIcon /> },
];

// Theme settings
const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});

// Page content component
function DemoPageContent({ pathname }) {
  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h5">Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = { pathname: PropTypes.string.isRequired };

// Search bar in the toolbar
function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <IconButton type="button" aria-label="search" sx={{ display: { xs: 'inline', md: 'none' } }}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}

// Sidebar footer with time display
function SidebarFooter({ mini }) {
  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Typography variant="caption" sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {mini ? 'JobLK' : currentTime}
    </Typography>
  );
}

SidebarFooter.propTypes = { mini: PropTypes.bool.isRequired };

// App title with branding
function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src={Img} width={'40px'} height={'40px'} style={{ borderRadius: "20px" }} alt="JobLK Logo" />
      <Typography variant="h6">JobLK</Typography>
      <Chip size="small" label="Sri Lanka" color="info" />
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

// Default session data
const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2A65aX514SAgEflSY728Lgr8cBpBGLJS2g&s',
  },
};

// Main dashboard layout
function DashboardLayoutSlots({ window }) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;
  const [session, setSession] = React.useState(null);

  // Load session from localStorage
  React.useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const authentication = React.useMemo(() => ({
    signIn: () => {
      setSession(demoSession);
      localStorage.setItem('session', JSON.stringify(demoSession));
    },
    signOut: () => {
      setSession(null);
      localStorage.removeItem('session');
    },
  }), []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      authentication={authentication}
      session={session}
    >
      <DashboardLayout slots={{ appTitle: CustomAppTitle, toolbarActions: ToolbarActionsSearch, sidebarFooter: SidebarFooter }}>
        <Routes>
          <Route path="dashboard/home" element={<HomePage />} />
          <Route path="dashboard/about" element={<AboutPage />} />
          <Route path="dashboard/job" element={<JobPage />} />
          <Route path="dashboard/setting" element={<SettingPage />} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = { window: PropTypes.func };

export default DashboardLayoutSlots;
