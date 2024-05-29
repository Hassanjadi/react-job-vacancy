import axios from "axios";

export const getJobs = (callback) => {
  axios
    .get("https://dev-example.sanbercloud.com/api/job-vacancy")
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
