import { Injectable } from '@angular/core';

export interface List {
  title: string
  link: string
  score: number
  playtime: number
  status: 'Playing' | 'Finished' | 'Paused' | 'Stopped' | 'Wishlisted'
}

export interface User {
  _id: string
  username: string;
  list: List;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
