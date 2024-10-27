import { Movie } from './../movie.model';
import { SharedService } from './../../shared/shared.service';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  updateForm: FormGroup; 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("Extracted ID:", id);
    this.updateForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      director: ["", [Validators.required]],
      genres: ["", [Validators.required]],
      year: ["", [Validators.required]]
    });
  
     this.movieService.getById(id).subscribe((movie) => {            
      this.updateForm.setValue({
        title: movie.title,
        director: movie.director,
        year: movie.year,
        genres: movie.genres
      });
     });
  }
  
  updateMovie() {
    const id = this.route.snapshot.paramMap.get("id");
    if (this.updateForm.valid) {
      this.movieService.update(id, this.updateForm.value).subscribe(() => {
        this.sharedService.showMessage("Filme Atualizado com sucesso!");
        this.router.navigate(["/movies"]);
      });
    }
  }
  
  cancel() {
    this.router.navigate(["/movies"]);
  }
}