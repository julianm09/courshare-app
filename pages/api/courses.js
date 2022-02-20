import coursera from "@/utils/coursera.json";
import { filtering } from "@/utils/functions/filter";
import { sortArr } from "@/utils/functions/sort";

export default function handler(req, res) {
  const { page, sortBy, search, university, rating, level } = req.query;

  var courses = [];

  courses = coursera;

  if (university || search || rating || level) {
    courses = filtering(courses, {
      title: search,
      university: university,
      rating: rating,
      level: level
    });
  }

  if (sortBy) {
    if (sortBy === "A to Z") {
      courses = sortArr(courses, {
        key: "Course Name",
        type: "asc",
      });
    } else if (sortBy === "Z to A") {
      courses = sortArr(courses, {
        key: "Course Name",
        type: "desc",
      });
    } else if (sortBy === "Level (ascending)") {
      courses = sortArr(courses, {
        key: "Difficulty Level",
        type: "asc",
      });
    } else if (sortBy === "Level (descending)") {
      courses = sortArr(courses, {
        key: "Difficulty Level",
        type: "desc",
      });
    } else if (sortBy === "Ratings (ascending)") {
      courses = sortArr(courses, {
        key: "Course Rating",
        type: "asc",
      });
    } else if (sortBy === "Ratings (descending)") {
      courses = sortArr(courses, {
        key: "Course Rating",
        type: "desc",
      });
    }
  }

  const length = courses.length

  if (page) {
    courses = courses.slice(Number(page) * 12, (Number(page) + 1) * 12);
  }

  res.status(200).json({courses, length: length});
}
