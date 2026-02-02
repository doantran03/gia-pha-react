export interface EventType {
    id: string;
    title: string;
    start: Date;
    end?: Date;
    url?: string;
    allDay?: boolean;
    color?: string;
}