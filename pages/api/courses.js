import coursera from "@/utils/coursera.json";
const ogs = require("open-graph-scraper");
import { filtering } from "@/utils/functions/filter";

export default function handler(req, res) {
  const { page } = req.query;

  var courses = [];

  if (page) {
    courses = PageCourses(page * 9, 9);
  }

  function PageCourses(start = 0, num_items = 9) {
    const new_list = coursera.slice(Number(start), Number(start) + num_items);
    return new_list;
  }

  res.status(200).json(courses);
}
