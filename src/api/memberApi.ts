import axiosClient from "@/api/axiosClient";
import type { MemberType } from "@/types/members";

const memberApi = {
    getMembers() {
        const url = "api/v1/members";
        return axiosClient.get<MemberType[]>(url);
    },
};

export default memberApi;
