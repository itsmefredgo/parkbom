import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const NEXT_PUBLIC_KAKAO_APP_JS_KEY = "a20aabb94c06838f84dfedbcff8aede6";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 34.86461221035521, lng: 128.68959796466123 }}
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <MapMarker
          position={{ lat: 34.86461221035521, lng: 128.68959796466123 }}
        >
          <div style={{ color: "#000000" }}>
            &nbsp;&nbsp;박봄 수학 영어 학원
          </div>
        </MapMarker>
      </Map>
    </>
  );
};

export default KakaoMap;
