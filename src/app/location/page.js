import Button from "../components/Button";
import "../sass/pages/_location.scss";

export default function Location() {
  return (
    <>
      <div className="responsive-image">
        <picture>
          <source
            srcSet={"/desktop/image-map.png"}
            media="(min-width: 1024px)"
          />
          <source srcSet={"/tablet/image-map.png"} media="(min-width: 768px)" />
          <img
            src={"/mobile/image-map.png"}
            alt="Modern Art Gallery Location"
            style={{
              objectFit: "cover",
              position: "absolute",
              width: "100%",
            }}
          />
        </picture>

        <Button className="absolute md:left-[10%]" href="/">
          Back to Home
        </Button>
      </div>
      <div className="location-container">
        <div>
          <h2>OUR LOCATION</h2>
        </div>

        <div className="location-information">
          <h3>99 King Street</h3>
          <div className="location-address">
            <p>Newport</p>
            <p>RI 02840</p>
            <p>United States of America</p>
          </div>

          <p>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </>
  );
}
