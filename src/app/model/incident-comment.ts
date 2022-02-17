export class IncidentComment {
    author: string;
    created: Date;
    content: string;
    votes: {upvotes: number, downvotes: number};;
    ref: string;
    attachments?: string[];
}
