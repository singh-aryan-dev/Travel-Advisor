import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getPlacesData } from './api/travelAdvisorAPI';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [type, setType] = useState('restaurants');
  const [coords, setCoords] = useState({});
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
    );
  }, []);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      setIsLoading(true);

      // Create a simple bounding box around the coords
      const sw = { lat: coords.lat - 0.1, lng: coords.lng - 0.1 };
      const ne = { lat: coords.lat + 0.1, lng: coords.lng + 0.1 };

      getPlacesData(type, sw, ne).then((data) => {
        // --- THIS IS THE FIX ---
        // Check if data is an array before filtering
        setPlaces(
          Array.isArray(data)
            ? data.filter((place) => place.name && place.num_reviews > 0)
            : [],
        );
        setIsLoading(false);
      });
    }
  }, [coords, type]); // Fetch data when coords or type change

  return (
    <>
      <CssBaseline />
      <Header setCoords={setCoords} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={places}
            type={type}
            setType={setType}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setCoords={setCoords}
            coords={coords}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
