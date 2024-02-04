import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://api.themoviedb.org/3/"
// https://api.themoviedb.org/3/discover/movie?include_adult=false&i

export const httpClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

httpClient.interceptors.request.use(
    async (config) => {
        const token = import.meta.env.VITE_MOVIE_API_KEY

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        if (!token) {
            localStorage.clear()
            window.location.reload()
        }

        return config;
    },

    (err) => {
        return Promise.reject(err)
    }
)

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            localStorage.clear()
            window.location.reload
        }
        if (error?.response?.status === 403) {
            toast("You don't have permission to perform this action", {
                type: "error",
                toastId: "clientError"
            })
        }
        if (error.response.status === 500) {
            toast("Something went wrong", {
                type: "error",
                toastId: "clientError"
            })
        }
        return Promise.reject(error)
    }
);

