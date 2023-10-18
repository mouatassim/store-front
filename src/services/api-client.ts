import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  post = (data: unknown) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
