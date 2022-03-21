export function filtering(
  arr = [],
  config = {
    title: null,
    university: null,
    rating: null,
    level: null,
    skills: null,
    category: null,
  }
) {
  const { title, university, rating, level, skills, category } = config;

  if (title || university || rating || level || skills || category) {
    const filtered_arr = arr.filter((o) => {
      var cond = true;

      if (title) {
        cond =
          cond &&
          o["Course Name"].toLowerCase().includes(title.toLowerCase());
      }

      if (university) {
        cond = cond && o.University.includes(university);
      }

      if (rating) {
        if (rating === "4.5 - 5.5") {
          cond = cond && Number(o["Course Rating"]) >= 4.5;
        } else if (rating === "4.0 - 4.5") {
          cond = cond && Number(o["Course Rating"]) >= 4.5 && cond && Number(o["Course Rating"]) <= 4.5;
        } else if (rating === "3.5 - 4.0") {
          cond = cond && Number(o["Course Rating"]) >= 3.5 && cond && Number(o["Course Rating"]) <= 4.0;
        } else if (rating === "0 - 3.5") {
          cond = cond && Number(o["Course Rating"]) >= 0 && cond && Number(o["Course Rating"]) <= 3.5;
        }
      }

      if (level) {
        cond = cond && o["Difficulty Level"].includes(level);
      }

      if (category) {
        cond = cond && o["category"].includes(category);
      }

      if (skills) {
        cond = cond && o.Skills.toLowerCase().includes(skills.toLowerCase());
      }

      return cond;
    });

    return filtered_arr;
  } else {
    return [];
  }
}
