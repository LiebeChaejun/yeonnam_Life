import Map from "./components/Map";
import PlaceCard from "../PlaceDetail/components/PlaceCard";

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
