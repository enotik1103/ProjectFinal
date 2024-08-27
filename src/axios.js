import axios from "axios";

axios.defaults.baseURL = "https://todo-list.edu-playground.ru/api/v1/";
export const token = localStorage.getItem("token");
export const userId = localStorage.getItem("userId");
