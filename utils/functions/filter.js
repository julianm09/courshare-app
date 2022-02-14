export function filtering(
  arr = [],
  config = {
    title: null,
    university: null,
    rating: null,
    level: null,
    skills: null
  }
) {
  const { title, university, rating, level, skills } = config;

  if (title) {
    const filtered_arr = arr.filter((o) => {
      var cond = true;

      if (title) {
        cond =
          cond && o["Course Name"].toLowerCase().includes(title.toLowerCase());
      }

      if (university){
        cond = cond && o.University.includes(university)
      }

      if(rating){
        cond = cond && Number(o["Course Rating"]) >= Number(rating);
      }

      if(level){
        cond = cond && o["Difficulty Level"].includes(level)
      }

      if (skills) {
        cond =
          cond && o.Skills.toLowerCase().includes(skills.toLowerCase());
      }

      return cond;
    });

    return filtered_arr;
  } else {
    return [];
  }
}
