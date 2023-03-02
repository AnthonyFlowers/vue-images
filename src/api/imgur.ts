import axios from "axios";
import qs from "qs";

const CLIENT_ID = "a523a4648182855";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location.href = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImages(token: string) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  uploadImages(images: FileList, token: string) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });

    return Promise.all(promises);
  },
};
