import React, { useState } from 'react';
// import { Autocomplete } from '@react-google-maps/api'; // <-- REMOVED GOOGLE IMPORT
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ setCoords }) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query) return;

    // Use Mapbox Geocoding API
    const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&limit=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const [lng, lat] = data.features[0].center;
          setCoords({ lat, lng });
          setQuery(''); // Clear search bar after search
        }
      })
      .catch((err) => console.error(err));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <-- REMOVED GOOGLE AUTOCOMPLETE WRAPPER --> */}
          <div className={classes.search}>
            <div className={classes.searchIcon} onClick={handleSearch} style={{ cursor: 'pointer' }}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
