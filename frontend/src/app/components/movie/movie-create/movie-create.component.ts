import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = {
    title: 'Nome do Filme',
    director: 'Nome do Diretor',
    year: '2021',
    genres: 'Comédia'
  };

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }

  cancel() {
    this.router.navigate(['/movies']);
  }
}
