import Button from "./Button";
import "../sass/components/_header.scss"; // SCSS module for styling

export default function Header() {
  return (
    <header>
      <div className="black" />
      <div className="image-container">
        <picture>
          <source
            srcSet="/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          <source srcSet="/tablet/image-hero.jpg" media="(min-width: 768px)" />
          <img
            src="/mobile/image-hero.jpg"
            alt="Modern Art Gallery"
            className="image"
          />
        </picture>
      </div>
      <h1 className="dynamic-heading">
        Modern
        <br /> Art Gallery
      </h1>

      <div className="content">
        <h1 className="heading-1">
          Modern <br /> Art Gallery
        </h1>
        <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button className="" href="/location">
          Our Location
        </Button>
      </div>
    </header>
  );
}
