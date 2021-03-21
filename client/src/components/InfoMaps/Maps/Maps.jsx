import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { icon1, icon2 } from "./IconMarker";
import logoImg from "../../../assets/img/logoMain.webp";
const Map = () => {
  const position1 = [16.053448, 108.241285];
  const position2 = [16.019548898981633, 108.25349247288918];

  const zoom = 13;
  return (
    <div className="map">
      <LeafletMap center={position1} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position1} icon={icon1}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">KingStone Đà Nẵng</div>
              <div className="info__address">
                VPGD: 37 Phan Thúc Duyện, Q.Ngũ Hành Sơn, TP Đà Nẵng
              </div>
            </div>
          </Popup>
          <Tooltip>KingStone Đà Nẵng</Tooltip>
        </Marker>
        <Marker position={position2} icon={icon2}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">KingStone Đà Nẵng</div>
              <div className="info__address">
                Xưởng gia công: Lô 3 Nguyễn Đức Thuận, Q.Ngũ Hành Sơn, TP Đà
                Nẵng
              </div>
            </div>
          </Popup>
          <Tooltip>KingStone Đà Nẵng</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
