/* eslint-disable no-undef */
import { Typography, Box, Container } from "@mui/material";
import { useEffect } from "react";
import "./map.css";

function Map() {
  let myMap;
  const initMap = () => {
    window.ymaps.ready(() => {
      myMap = new window.ymaps.Map("map", {
        center: [51.5292015377373, 46.020748135559664],
        zoom: 15,
        controls: [
          "zoomControl",
          "searchControl",
          "fullscreenControl",
          "routeButtonControl",
        ],
      });
      // let coords = firstGeoObj.geometry.getCoordinates();
      const myPlacemark = new ymaps.Placemark([51.52930886664101, 46.02028925893021], {
        balloonContentHeader: "ALLMAN",
        balloonContentBody: "Дом мужской моды",
        balloonContentFooter: "",
        hintContent: "Да-да, мы тут :)",
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1522/1522462.png',
          iconImageSize: [60, 60],
          iconImageOffset: [0, 0],
      })
      myMap?.geoObjects.add(myPlacemark);
    });
  };

  useEffect(() => {
    initMap();

    return () => {
      myMap?.destroy();
    };
  }, []);
  return (
    <div className="map-container">
      <Container>
        <Typography variant="h4" sx={{ py: 0.5 }}>
          {/* Карта площадок: */}
        </Typography>
        <Box id="map" sx={{ height: 500, mb: 0.5, width: "100%" }}></Box>
      </Container>
    </div>
  );
}

export default Map;
