import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';

export interface UserPostResponse {
  success: boolean;
  msg: string;
  token: any;
  user: object;
  Edit:Object;
  verify:object
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken: any;
  user: any;
  Edit: any;
  verify:any;

  constructor(private http: HttpClient) { }

  //update details

  EditUser(Edit , id): Observable <UserPostResponse> {
    const headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post<UserPostResponse>(`http://localhost:3000/users/nav/${id}`, Edit, {headers});
  }


  // Backend API where we can make that post request to register
  registerUser(user): Observable<UserPostResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<UserPostResponse>('http://localhost:3000/users/register', user, {headers});
  }


  VerifyUser(verify, id): Observable<UserPostResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<UserPostResponse>(`http://localhost:3000/users/otp/${id}`, verify, {headers});
  }
  

  // Backend API where we can make that post request to authenticate
  authenticateUser(user): Observable<UserPostResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<UserPostResponse>('http://localhost:3000/users/authenticate', user, {headers});
  }

  // get the profile of the user with the appropriate token
  getProfile(): Observable<UserPostResponse> {
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<UserPostResponse>('http://localhost:3000/users/profile', {headers});
  }

  getProfile (): Observable<UserPostResponse> {
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<UserPostResponse>('http://localhost:3000/users/profile', {headers});
  }

   





  // Store the user data in the local storage along with the JWT-token
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }



  // Loading the token by fetching it from the local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // To check if the user is logged in then some options gets hidden and only the required will be shown
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  // logout where everything gets clear in the local storage along with the user data
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
