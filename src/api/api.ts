import axios from 'axios';
import moment from 'moment';

export const fetchCash = (date: any, range: string) => {
  return axios
    .get(
      `http://shelter.bmsys.net:58600/api/dashboard/cash/?format=json&range=${range}&start=${date}&stop=${moment().format(
        'YYYY-MM-DD',
      )}`,
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};
