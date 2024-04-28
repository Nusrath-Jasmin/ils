import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  
  private apiUrl = environment.api; 

  login(data:any){
    return this.http.post<any>(`${this.apiUrl}/login`,data);
  }

  postBlogs(data:any){
    const token = localStorage.getItem('tokenIls'); 
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`); 
    }
    return this.http.post<any>(`${this.apiUrl}/postBlogs`, data, { headers }); 
  }

  getBlogs():Observable<any>{
    return this.http.get(`${this.apiUrl}/getBlogs`);
  }

 resetPassword(data:any){
  return this.http.post<any>(`${this.apiUrl}/reset-password`,data);
 }

 isAdmin(data:any){
  return this.http.post<any>(`${this.apiUrl}/isAdmin`,data);
}



}
