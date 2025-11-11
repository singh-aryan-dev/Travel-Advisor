import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import 'mapbox-gl/dist/mapbox-gl.css';
import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setChildClicked }) => {
  const classes = useStyles();

  const [viewport, setViewport] = useState({
    latitude: coords.lat || 40.73061,
    longitude: coords.lng || -73.935242,
    zoom: 14,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    if (coords.lat && coords.lng) {
      setViewport((prev) => ({
        ...prev,
        latitude: coords.lat,
        longitude: coords.lng,
      }));
    }
  }, [coords]);

  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        width="100%" // <-- FIX: Back to double quotes
        height="100%" // <-- FIX: Back to double quotes
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport);
          setCoords({
            lat: nextViewport.latitude,
            lng: nextViewport.longitude,
          });
        }}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9" // <-- FIX: Back to double quotes
      >
        {places.length
          && places.map((place, i) => (
            <Marker
              key={i}
              latitude={Number(place.latitude)}
              longitude={Number(place.longitude)}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <LocationOnOutlinedIcon
                color="primary" // <-- FIX: Back to double quotes
                fontSize="large" // <-- FIX: Back to double quotes
                onClick={() => {
                  setSelectedPlace(place);
                  setChildClicked(i);
                }}
                style={{ cursor: 'pointer' }}
              />
            </Marker>
          ))}

        {selectedPlace && (
          <Popup
            latitude={Number(selectedPlace.latitude)}
            longitude={Number(selectedPlace.longitude)}
            onClose={() => setSelectedPlace(null)}
            closeOnClick={false}
            anchor="left" // <-- FIX: Back to double quotes
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography
                className={classes.typography}
                variant="subtitle2" // <-- FIX: Back to double quotes
                gutterBottom
              >
                {selectedPlace.name}
              </Typography>
              <img
                className={classes.pointer}
                src={
                  selectedPlace.photo
                    ? selectedPlace.photo.images.large.url
                    : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                }
                alt={selectedPlace.name}
              />
              <Rating
                name="read-only" // <-- FIX: Back to double quotes
                size="small" // <-- FIX: Back to double quotes
                value={Number(selectedPlace.rating)}
                readOnly
              />
            </Paper>
          </Popup>
        )}

      </ReactMapGL>
    </div>
  );
};

export default Map;
