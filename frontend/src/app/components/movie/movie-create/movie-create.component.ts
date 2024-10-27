import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { SharedService } from '../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    genres: "",
    year: "",
  };

  constructor(
    private router: Router, 
    private movieService: MovieService, 
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm: FormGroup;

  ngOnInit() {
  this.createForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(5)]],
    director: ["", [Validators.required]],
    genres: ["", [Validators.required]],
    year: ["", [Validators.required]],  
  });

  // this.createForm = new FormGroup({
  // title: new FormControl("", [Validators.required])
  // });
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.createForm.controls[control].hasError(error);
  };
  
  createMovie(): void {
    if (this.createForm.valid) {
      this.movieService.create(this.createForm.value).subscribe(() => {
        this.sharedService.showMessage("Filme Adicionado com sucesso!");
        this.router.navigate(['/movies']);
      });      
    }
  }

  cancel() {
    this.router.navigate(['/movies']);
  }
}
