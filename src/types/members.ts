export interface MemberType {
    id: number;
    fullname?: string;
    other_name?: string;
    position?: string;
    birth_date?: string;
    gender?: 'male' | 'female';
    order?: number;
    generation?: number;
    address?: string;
    biography?: string;
    death_date?: string;
    feature_image?: string | boolean | null;
    fid?: number | null;
    mid?: number | null;
    pids?: number[];
}