import axios from "axios";

const apiBearer = import.meta.env.VITE_READ_KEY;
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${apiBearer}`,
  },
});

(async() => {
  // console.log(`\t *** Fetching Account Details *** \t`);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/account/21468953',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiBearer}`
    }
  };
  const data = {};
  await axios
    .request(options)
    .then(res => data = JSON.stringify(res.data, null, 2))
    .catch(err => console.log(JSON.stringify(err, null, 2)));
    // .then(res => console.dir(res, { depth: null }))
    // .catch(err => console.dir(err, { depth: null }));
  
  // console.log(`\t *** Logged Account Details ***\t`);
})();