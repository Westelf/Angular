import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

import { Observable } from 'rxjs';

import 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private moviesList: any[];

  constructor(private moviesService: MoviesService) {
   }

  ngOnInit() {
    this.moviesList = [{Title: 'Harry Potter', Country: 'UK'}];
    this.moviesService.getMovies()
                      .subscribe(this.showResult);

      console.log(this.moviesList);

    //console.log(this.moviesService.getMovies());
  }

  showResult(data: any) {
    this.moviesList = data;
    //console.log(data);
  }

}
