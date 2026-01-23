export interface MemberType {
    id: number;
    full_name?: string;
    other_name?: string;
    position?: string;
    birth_date?: string;
    gender?: 'male' | 'female';
    order?: number;
    generation?: number;
    address?: string;
    biography?: string;
    death_date?: string;
    avatar?: string | boolean | null;
    fid?: number | null;
    mid?: number | null;
    pids?: number[];
}