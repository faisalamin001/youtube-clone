import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      backgroundColor: '#0f0f0f',
      top: 0,
      justifyContent: 'space-between',
      borderBottom: '1px solid #3d3d3d',
      zIndex: '2',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='logo' height={45} />
      
    </Link>
    <SearchBar />
    <SettingsIcon sx={{ color: 'white', paddingRight: '15px' }} />
  </Stack>
);

export default Navbar;
