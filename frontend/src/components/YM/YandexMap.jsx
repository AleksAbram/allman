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
      myPlacemark = new ymaps.Placemark(
        [51.52930886664101, 46.02028925893021],
        {
          // Свойства.
          // Содержимое хинта.
          hintContent: "Надпись, которая всплаывет при наведении на метку",
        },
        {
          // Опции
          // Своё изображение иконки метки.
          iconImageHref:
            "https://static.tildacdn.com/tild3061-3235-4537-b066-616662373363/Group_783.svg",
          // Размеры метки.
          iconImageSize: [130, 130],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-65, -110],
        }
      );

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
      <div class="map-info">
        <div class="map-address">
          Россия, Саратов, Советская 39 индекс 410005
        </div>
        <div class="map-phone">
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>,{" "}
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
        </div>
      </div>
    </div>
  );
}

export default Map;
