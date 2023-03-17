import http from "../http";
import { APIS_ENDPOINTS } from "../serviceConstants";

const endpoints = APIS_ENDPOINTS.weather

export const requests_forecast = async (region) => {
    return http.get(endpoints.forecast + `?key=${import.meta.env.VITE_API_KEY}?q=${region}&days=3&aqi=no&alerts=no`)
}
export const requests_search = async (query) => {
    return http.get(endpoints.search + `?key=${import.meta.env.VITE_API_KEY}?q=${query}`)
}