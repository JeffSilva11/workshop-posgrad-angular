import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {

  movies: Movie[]
  displayedColumns: string[] = ['id', 'title', 'director', 'genres', 'year', 'actions'];

constructor(private movieService: MovieService) {}

ngOnInit(): void {
  console.log('O componente movie-index foi carregado!');
  this.movieService.index().subscribe(movies => {
    this.movies = movies;
  });
}
}
