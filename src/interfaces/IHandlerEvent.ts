export interface IHandlerEvent {
  run<T = any>(payload?: any): Promise<T | void>
}