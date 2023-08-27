import axios from 'axios';

export const fetchCash = (date: any, range: string) => {
  return axios
    .get(
      `http://shelter.bmsys.net:58600/api/dashboard/cash/?format=json&range=${range}&start=${date}&stop=2023-08-25`,
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};
