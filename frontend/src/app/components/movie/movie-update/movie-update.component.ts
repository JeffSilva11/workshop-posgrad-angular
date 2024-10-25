import { Movie } from './../movie.model';
import { SharedService } from './../../shared/shared.service';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'],
})
export class MovieUpdateComponent implements OnInit {

  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(id).subscribe(movie => {
      this.movie = movie
    })
  }

  updateMovie() {
    this.movieService.update(this.movie).subscribe(() => {
      this.sharedService.showMessage("Filme Atualizado com sucesso!");
      this.router.navigate(["/movies"]);
    });
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}