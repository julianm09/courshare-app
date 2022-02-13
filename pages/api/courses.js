import coursera from "@/utils/coursera.json";
const ogs = require("open-graph-scraper");
import { filtering } from "@/utils/functions/filter";

export default function handler(req, res) {

  const courses = coursera.splice(0,9)

  const getOgImages = (arr) => {
    return new Promise((resolve) => {
      console.log(arr.length)
      resolve(arr);
    });
  };

  getOgImages(courses).then((r) => {
    try {
      res.status(200).json(r);
    } catch (error) {
      console.log("Error", error);
    }
  });
}
