import curriculums from "@/utils/curriculums.json";

export default function handler(req, res) {
  const { page } = req.query;

  var courses = [];

  if (page) {
    courses = PageCourses(page * 3, 3);
  }
  console.log(page)

  function PageCourses(start = 0, num_items = 24) {
    const new_list = curriculums.slice(Number(start), Number(start) + num_items);
    return new_list;
  }

  res.status(200).json(courses);
}

