import "../sass/components/_grid2.scss"; // SCSS module for styling

export default function Grid2() {
  return (
    <div className="grid-container-2">
      <div className="image-2">
        <picture>
          <source
            srcSet="/desktop/image-grid-2.jpg"
            media="(min-width: 1166px)"
          />
          <source
            srcSet="/tablet/image-grid-2.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/mobile/image-grid-2.jpg"
            alt="Your Day at the Gallery"
            className=""
          />
        </picture>
      </div>
      <div className="image-3">
        <picture>
          <source
            srcSet="/desktop/image-grid-3.jpg"
            media="(min-width: 1166px)"
          />
          <source
            srcSet="/tablet/image-grid-3.jpg"
            media="(min-width: 768px)"
          />
          <img src="/mobile/image-grid-3.jpg" alt="Your Day at the Gallery" />
        </picture>
      </div>

      <div className="black-content">
        <h3>COME &amp; BE INSPIRED</h3>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  );
}
