export function filtering(
  arr = [],
  config = {
    title: null,
    page: null,
    rating: null,
    language: null,
    ratingsCount: null,
    textReviewsCount: null,
    publisher: null
  }
) {
  const {
    title,
    page,
    rating,
    language,
    authors,
    ratingsCount,
    textReviewsCount,
    publisher,
  } = config;

  if (
    title ||
    page ||
    rating ||
    language ||
    authors ||
    ratingsCount ||
    textReviewsCount ||
    publisher
  ) {
    const filtered_arr = arr.filter((o) => {
      var cond = true;

      if (title) {
        cond = cond && o.title.toLowerCase().includes(title.toLowerCase());
      }

      if (page) {
        cond = cond && Number(o.num_pages) >= Number(page);
      }

      if (rating) {
        cond = cond && Number(o.average_rating) >= Number(rating);
      }

      if (language) {
        cond =
          cond &&
          o.language_code.toLowerCase().includes(language.toLowerCase());
      }

      if (authors) {
        cond = cond && o.authors.toLowerCase().includes(authors.toLowerCase());
      }

      if (ratingsCount) {
        cond = cond && Number(o.ratings_count) >= Number(ratingsCount);
      }

      if (textReviewsCount) {
        cond = cond && Number(o.text_reviews_count) >= Number(textReviewsCount);
      }

      if (publisher) {
        cond = cond && o.publisher.toLowerCase().includes(publisher.toLowerCase());
      }

      return cond;
    });

    return filtered_arr;
  } else {
    return [];
  }
}
