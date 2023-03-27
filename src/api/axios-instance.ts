import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const myAxios = axios.create();
myAxios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const mock = new MockAdapter(myAxios);

export default myAxios;