import { Publisher, Subjects, TicketCreatedEvent } from "@ticket-user/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
