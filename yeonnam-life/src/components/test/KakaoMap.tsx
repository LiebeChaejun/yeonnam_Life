import { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      if (container) {
        new window.kakao.maps.Map(container, options);
      }
    });
  }, []);

  return (
    <div id="map" className="w-75 h-75">
      test
    </div>
  );
};

export default KakaoMap;
