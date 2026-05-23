export default function NewsCard({
  article
}) {

  return (

    <div
      className="card"
      onClick={() =>
        window.open(
          article.url,
          "_blank"
        )
      }
    >

      <div className="card-image">

        <img
          src={article.image}
          alt="news"
        />

        <div className="card-badge">
          LIVE
        </div>

      </div>

      <div className="card-content">

        <div className="news-category">
          NEWS UPDATE
        </div>

        <h3>
          {article.title}
        </h3>

        <p className="news-source">

          {article.source.name}

        </p>

        <p className="news-desc">

          {article.description}

        </p>

        <button className="read-more">

          Read Full Story

        </button>

      </div>

    </div>
  );
}