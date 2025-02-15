import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import WorkIcon from '@mui/icons-material/Work';
import InputAdornment from '@mui/material/InputAdornment';
import { Account, AccountPreview, AccountPopoverFooter, SignOutButton } from '@toolpad/core/Account';
import { FrameIcon, HomeIcon, UserIcon, BriefcaseIcon, SettingsIcon } from 'lucide-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Img from '../DrowerPage/lkJob.png'
import JobPage from '../JobPage/JobPage';
import AboutPage from '../AboutPage/AboutPage';
import SettingPage from '../SettingPage/SettingPage';
import HomePage from '../HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';



// Navigation array for sidebar items
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'About',
    title: 'About',
    icon: <UserIcon />,
  }, {
    segment: 'Job',
    title: 'Job',
    icon: <BriefcaseIcon />,
  }, {
    segment: 'Setting',
    title: 'Setting',
    icon: <SettingsIcon />,
  },
];

// Demo theme setup for the layout
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Demo content for the page
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {HomePage}</Typography>

    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// Toolbar actions with search functionality
function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
        </div>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
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

// Sidebar footer displaying time or mini version of title
function SidebarFooter({ mini }) {
  const [session, setSession] = React.useState(demoSession);
  const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? 'JobLK' : currentTime} {/* Display time when sidebar is expanded */}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

// Custom app title with branding
function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* <WorkIcon fontSize="large" color="primary" /> */}
      <img src={Img} width={'40px'} height={'40px'} style={{ borderRadius: "20px" }} />

      <Typography variant="h6">JobLK</Typography>
      <Chip size="small" label="Sri Lanka" color="info" />
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

// User account preview for the sidebar
function AccountSidebarPreview(props) {
  const { handleClick, open, mini } = props;
  return (
    <Stack direction="column" p={0}>
      <AccountPreview
        variant={mini ? 'condensed' : 'expanded'}
        handleClick={handleClick}
        open={open}
      />
    </Stack>
  );
}

AccountSidebarPreview.propTypes = {
  handleClick: PropTypes.func,
  mini: PropTypes.bool.isRequired,
  open: PropTypes.bool,
};


// Mock session data
const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2A65aX514SAgEflSY728Lgr8cBpBGLJS2g&s  ',
  },
};

// Main layout component with dashboard slots

function DashboardLayoutSlots(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');

  const demoWindow = window !== undefined ? window() : undefined;

  const [session, setSession] = React.useState(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      authentication={authentication}
      session={session}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
        >

      </DashboardLayout>
    </AppProvider>

  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;
