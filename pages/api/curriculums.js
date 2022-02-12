import curriculums from "@/utils/curriculums.json";
const ogs = require("open-graph-scraper");
import { filtering } from "@/utils/functions/filter";

export default function handler(req, res) {


  const getOgImages = (arr) => {
    return new Promise((resolve) => {
      console.log(arr.length)
      resolve(arr);
    });
  };

  getOgImages(curriculums).then((r) => {
    try {
      res.status(200).json(r);
    } catch (error) {
      console.log("Error", error);
    }
  });
}
