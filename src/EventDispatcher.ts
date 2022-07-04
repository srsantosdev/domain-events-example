import { Event } from "./Event";

export class EventDispatcher {
  private events: Event[] = [];

  public addEvent(event: Event) {
    this.events.push(event)
  }

  public notify() {
    for (const event of this.events) {
      for (const handler of event.handlers) {
        handler.run(event.data)
      }
    }
  }
}