import axios from "axios";
import qs from "qs";

const CLIENT_ID = "a523a4648182855";
const ROOT_URL = "https://api.imgur.com";

export type ImageMedia = "image/gif" | "image/png" | "image/jpg" | "image/jpeg";
export type VideoMedia = "video/mp4";

export interface ImgurData {
  id: string;
  title: string;
  description: string;
  cover: string;
  is_album: boolean;
  nsfw: boolean;
  images_count: number;
  link: string;
  images: {
    id: string;
    type: ImageMedia | VideoMedia;
    animated: boolean;
    nsfw: null | boolean;
    link: string;
    mp4: string;
  }[];
  animated: boolean;
  type: ImageMedia | VideoMedia;
  displayUrl: string;
}

interface AxiosImgurPromise {
  data: { data: ImgurData[] };
}

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
    }) as Promise<AxiosImgurPromise>;
  },
  fetchFavorites(token: string | null) {
    if (!token) {
      return Promise.reject(
        "user not logged in. token was not found in storage"
      );
    }
    return axios.get(`${ROOT_URL}/3/account/me/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }) as Promise<AxiosImgurPromise>;
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
