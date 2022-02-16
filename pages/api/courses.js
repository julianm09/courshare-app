import coursera from "@/utils/coursera.json";
import { filtering } from "@/utils/functions/filter";
import { sortArr } from "@/utils/functions/sort";

export default function handler(req, res) {

const { page, txt, title_rating, level_rating_a, level_rating_d, rating_a, rating_d, search, university } = req.query;

  var courses = [];

  if (page) {
    courses = PageCourses(page * 9, 9);
  }

  if(txt){
    courses = filtering(courses, {
      title:txt
    })
  }

  if(title_rating){
    courses = sortArr(courses, {
      key:"Course Name",
      type:"asc"
    })
  }

  if(level_rating_a){
    courses = sortArr(courses, {
      key:"Difficulty Level",
      type:"asc"
    })
  }

  if(level_rating_d){
    courses = sortArr(courses, {
      key:"Difficulty Level",
      type:"desc"
    })
  }

  if(rating_a){
    courses = sortArr(courses, {
      key:"Course Rating",
      type:"asc"
    })
  }

  if(rating_d){
    courses = sortArr(courses, {
      key:"Course Rating",
      type:"desc"
    })
  }

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

