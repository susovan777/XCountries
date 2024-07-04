// import axios from "axios";

const apiData = async () => {
  try {
    // const response = await axios.get(
    //   "https://xcountries-backend.azurewebsites.net/all"
    // );
    const response = await fetch(
      "https://xcountries-backend.azurewebsites.net/all"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
    // console.log(response);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export default apiData;
