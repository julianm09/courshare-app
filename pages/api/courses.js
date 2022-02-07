import coursera from "@/utils/coursera.json";
const ogs = require("open-graph-scraper");

export default function handler(req, res) {
  const numCourses = 2;

  const courses = coursera.slice(0, numCourses);

  const loopArray = (arr) => {
    const newArr = [];

    return new Promise((resolve) => {
      arr.forEach((element) => {
        const options = { url: element["Course URL"] };
        ogs(options, (error, results, response) => {
          element["Image"] = results.ogImage.url;
          newArr.push(element);
          if (newArr.length >= numCourses) {
            resolve(newArr);
          }
        });
      });
    });
  };

  const getImages = async (courses) => {
    try {
      var x = await loopArray(courses);
      return x;
    } catch (error) {
      console.log("Error", error);
    }
  };

  const images = getImages(courses).then((r) => {
    console.log(r);
 
    res.status(200).json(r);
  });

  
}
