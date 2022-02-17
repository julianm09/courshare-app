import curriculums from "@/utils/curriculums.json";
import { filtering } from "@/utils/functions/filterCurriculums";

export default function handler(req, res) {
  const { page, category, search } = req.query;

  var courses = [];

  courses = curriculums;

  if (category || search) {
    courses = filtering(curriculums, {
      category: category,
      title: search
    });
  }

  if (page) {
    courses = courses.slice(Number(page) * 3, (Number(page) + 1) * 3)
  }


  res.status(200).json(courses);
}

