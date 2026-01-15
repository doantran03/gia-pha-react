import axiosClient from "@/api/axiosClient";
import type { MemberType } from "@/types/members";

const memberApi = {
    getMembers() {
        const url = "wp-json/gia-pha/v1/members";
        return axiosClient.get<MemberType[]>(url);
    },
};

export default memberApi;
