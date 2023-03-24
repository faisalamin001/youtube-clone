import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { Paper, IconButton } from '@mui/material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm('');
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid gray',
        pl: 3,
        background: '#222222',

        display: 'flex',
        fontSize: { xs: '12px' },
      }}
    >
      <input
        type='text'
        className='search-bar'
        placeholder='Search..'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ background: '#222222', color: 'white', fontSize: '18px' }}
      />
      <IconButton type='submit' sx={{ color: 'white', background: '#222222' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
