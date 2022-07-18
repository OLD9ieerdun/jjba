import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import POINTS from "./Points";

const mapState = {
  center: [55.834252, 38.019644],
  zoom: 10
};

class MapYa extends React.Component {
  state = {
    selectedPoint: null
  };

  onPlacemarkClick = point => () => {
    this.setState({ selectedPoint: point });
  };

  render() {
    const { selectedPoint } = this.state;
    return (
      <div>
        <YMaps>
          <Map defaultState={mapState} width='600px' height='500px'>
          <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false
              }}
            >
              {POINTS.map((point, index) => (
                <Placemark
                  key={index}
                  geometry={point.coords}
                  onClick={this.onPlacemarkClick(point)}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
        {selectedPoint && (
          <div>
            <h1>{selectedPoint.title}</h1>
            <p>Адресс: {selectedPoint.descr}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MapYa