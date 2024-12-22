import "../sass/components/_grid1.scss"; // SCSS module for styling

export default function Grid1() {
  return (
    <div className="grid-container">
      <div className="image-1">
        <picture>
          <source
            srcSet="/desktop/image-grid-1.jpg"
            media="(min-width: 1166px)"
          />
          <source
            srcSet="/tablet/image-grid-1.jpg"
            media="(min-width: 768px)"
          />
          <img src="/mobile/image-grid-1.jpg" alt="Your Day at the Gallery" />
        </picture>
      </div>

      <div className="text-content">
        <h2>YOUR DAY AT THE GALLERY</h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
    </div>
  );
}
