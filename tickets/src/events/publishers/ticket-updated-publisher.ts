import { Publisher, Subjects, TicketUpdatedEvent } from "@ticket-user/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
