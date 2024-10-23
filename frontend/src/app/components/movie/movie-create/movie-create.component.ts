import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { SharedService } from '../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genres: "",
  };

  constructor(
    private router: Router, 
    private movieService: MovieService, 
    private sharedService: SharedService) {}

  ngOnInit(): void {}
  
  createMovie(): void {    
    this.movieService.create(this.movie).subscribe(() => {
      this.sharedService.showMessage('Filme Adicionado com sucesso!');
      this.router.navigate(['/movies']);
    });
  }

  cancel() {
    this.router.navigate(['/movies']);
  }
}
