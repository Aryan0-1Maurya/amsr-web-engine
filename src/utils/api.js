import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyASsiHongjZWxkXy24oij0CJNoh8ZqaroQ",
    cx: "d30c960aad0584fb2",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
