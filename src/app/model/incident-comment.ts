export class IncidentComment {
    author: string;
    created: Date;
    content: string;
    votes: number;
    ref: string;
    attachments?: string[];
}
