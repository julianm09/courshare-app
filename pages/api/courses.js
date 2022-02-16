import coursera from "@/utils/coursera.json";
import { filtering } from "@/utils/functions/filter";

export default function handler(req, res) {
  const { page, search, university } = req.query;

  var courses = [];

  if (page) {
    courses = PageCourses(page * 9, 9);
  }

  console.log(university)

  function PageCourses(start = 0, num_items = 9) {
    const new_list = coursera.slice(Number(start), Number(start) + num_items);
    return new_list;
  }

  if (university || search) {
    courses = filtering(coursera, {
      title: search
    });

  }

  res.status(200).json(courses);
}
