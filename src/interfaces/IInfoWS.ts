export interface IInfoWS{
  text: string,
  user_id:string,
  created_at: Date,
  user: {
    name:string,
    avatar_url: string
  }
}