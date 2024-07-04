import axios from "axios";

// const url = "https://xcountries-backend.azurewebsites.net/all";
const apiData = async () => {
  try {
    const response = await axios.get(
      "https://xcountries-backend.azurewebsites.net/all"
    );
    // console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default apiData;
