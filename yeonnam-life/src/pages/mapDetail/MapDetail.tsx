import React from "react";
import Map from "../../components/map/Map";
import PlaceCard from "../../components/place/PlaceCard";

const MapDetail = () => {
  return (
    <>
      <Map />

      <div className="flex flex-col gap-3">
        <p className="text-sm text-text-muted">n개의 장소</p>
        <ul className="flex flex-col gap-3">
          <PlaceCard isHome={false} />
          <PlaceCard isHome={false} />
          <PlaceCard isHome={false} />
        </ul>
      </div>
    </>
  );
};

export default MapDetail;
