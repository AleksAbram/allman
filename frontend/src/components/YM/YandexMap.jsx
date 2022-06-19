/* eslint-disable no-undef */
import {
  Typography,
  Box,
  Container
} from '@mui/material';
import { useEffect } from 'react';



function Map() {
  let myMap;
  const initMap = () => {
    window.ymaps.ready(() => {
      myMap = new window.ymaps.Map('map', {
        center: [59.97, 30.35],
        zoom: 10,
        controls: [
          'zoomControl',
          'searchControl',
          'fullscreenControl',
          'routeButtonControl',
        ],
      });
      let coords = firstGeoObj.geometry.getCoordinates();
      const myPlacemark = new ymaps.Placemark(
        coords,
        {
          hintContent: <h5>Yoooo</h5>,
          balloonContentHeader: <h3>Yooo</h3>,

          balloonContentBody: <h3>Yoo</h3>,
          balloonContentFooter: <h4>Yo</h4>,
        },
        {
          iconLayout: 'default#image',
          iconImageSize: [45, 45],
        }
      );

      myMap?.geoObjects.add(myPlacemark);
    });

  }

  useEffect(() => {
    initMap();

    return () => {
      myMap?.destroy();
    };
  }, []);
  return (
    <Container>
      <Typography variant="h4" sx={{ py: 2 }}>
        {/* Карта площадок: */}
      </Typography>

      <Box id="map" sx={{ height: 600, mb: 5 }}></Box>
    </Container>
  );
}

export default Map;
