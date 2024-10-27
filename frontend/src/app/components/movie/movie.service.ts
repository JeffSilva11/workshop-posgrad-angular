import { SharedService } from './../shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from './movie.model';
import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  handleError(error: any): Observable<any> {
    let errorMessage;  
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }  
    this.sharedService.showMessage(errorMessage, true);  
    return EMPTY;
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${API}/movies`, movie).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  index(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API}/movies`).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${API}/movies/${id}`).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  update(id: string, movie: Movie): Observable<Movie> {
    const uri = `${API}/movies/${id}`;
    console.log("uri:", uri);
    return this.http.put<Movie>(uri, movie).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  delete(id: number): Observable<Movie> {
    const uri = `${API}/movies/${id}`;
    return this.http.delete<Movie>(uri).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }
}
