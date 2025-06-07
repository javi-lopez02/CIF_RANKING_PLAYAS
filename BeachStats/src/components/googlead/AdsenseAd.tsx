import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdsenseAd: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  console.log(isReady)

  useEffect(() => {
    const checkWidth = () => {
      if (adRef.current && adRef.current.offsetWidth > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error:", e);
        }
        setIsReady(true);
      } else {
        setTimeout(checkWidth, 100); // Espera hasta que tenga ancho
      }
    };

    checkWidth();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      ref={adRef as any}
      style={{ display: "block", width: "100%", height: "320px" }}
      data-ad-client="ca-pub-6109855075080896"
      data-ad-slot="7128976516"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseAd;
