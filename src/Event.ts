import crypto from 'crypto'
import { IHandlerEvent } from './interfaces/IHandlerEvent';

type EventProps = {
  name: string;
  data: any
}

export class Event {
  private _id: string

  private _data: any | null

  private _name: string

  private _handlers: IHandlerEvent[] = []

  private constructor({ data, name }: EventProps, id: string) {
    this._data = data
    this._name = name
    this._id = id  
  }

  public static create(data: EventProps) {
    const id = crypto.randomUUID()
    const event = new Event(data, id)

    return event
  }

  public get id() { 
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get data() {
    return this._data;
  }

  public addHandler(handler: IHandlerEvent): void {
    this._handlers.push(handler)
  }

  public get handlers() { 
    return this._handlers;
  }
}