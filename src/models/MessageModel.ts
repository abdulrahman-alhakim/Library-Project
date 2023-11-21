class MessageModel {
  title: string;
  question: string;
  userEmail?: string;
  id?: number;
  adminEmail?: string;
  response?: string;
  closed?: boolean;

  constructor(
    title: string,
    id: number,
    question: string,
    userEmail: string,
    adminEmail: string,
    response: string,
    closed: boolean
  ) {
    this.title = title;
    this.id = id;
    this.question = question;
    this.userEmail = userEmail;
    this.adminEmail = adminEmail;
    this.response = response;
    this.closed = closed;
  }
}
