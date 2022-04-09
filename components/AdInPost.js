import { useEffect } from "react";

const AdInPost = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      style={{
        display: "block",
        textAlign: "center",
      }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      data-ad-slot={3519917345}
    />
  );
};

export default AdInPost;
