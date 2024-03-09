import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";
const NEXT_PUBLIC_KAKAO_APP_JS_KEY = "a20aabb94c06838f84dfedbcff8aede6";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <div>hello</div>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "100%", border: "red solid 2px" }}
      ></Map>
    </>
  );
};

export default KakaoMap;
