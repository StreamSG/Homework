import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service to handle user-related functionalities.
 */
@Injectable()
export class UserService {
  private apiUrl = 'https://example.com/api'; // Api placeholder

  constructor(private http: HttpClient) { }

  /**
   * Registers a new user by sending their data to the server.
   * @param userData The user data to be registered.
   * @returns An observable containing the server's response.
   */
  registerUser(userData: any) {
    // placeholder
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
