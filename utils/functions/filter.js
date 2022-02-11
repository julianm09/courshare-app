export function filtering(
  arr = [],
  config = {
    title: null,
  }
) {
  const { title } = config;

  if (title) {
    const filtered_arr = arr.filter((o) => {
      var cond = true;

      if (title) {
        cond =
          cond && o["Course Name"].toLowerCase().includes(title.toLowerCase());
      }

      return cond;
    });

    return filtered_arr;
  } else {
    return [];
  }
}
