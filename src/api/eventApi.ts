import axiosClient from "@/api/axiosClient";
import type { EventType } from "@/types/event";

const eventApi = {
    getEvents() {
        const url = "api/v1/events";
        return axiosClient.get<EventType[]>(url);
    },
};

export default eventApi;
