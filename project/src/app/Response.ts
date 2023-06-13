// API Response (Receives the Response Type, ex: Comment, Moment, etc...)
export interface Response<T> {
  message?: string,
  data: T
}