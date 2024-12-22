import Image from "next/image";
import Button from "./Button";
import "../sass/components/_responsiveImage.scss";

export default function ResponsiveImage({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
}) {
  return (
    <div className="responsive-image">
      <picture>
        <source srcSet={desktopSrc} media="(min-width: 1024px)" />
        <source srcSet={tabletSrc} media="(min-width: 768px)" />
        <img
          src={mobileSrc}
          alt="Modern Art Gallery Location"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
        />
      </picture>

      <Button className="absolute md:left-[10%]" href="/">
        Back to Home
      </Button>
    </div>
  );
}
