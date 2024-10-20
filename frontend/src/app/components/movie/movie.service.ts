import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';
import { API } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${API}/movies`, movie);
  }
}
