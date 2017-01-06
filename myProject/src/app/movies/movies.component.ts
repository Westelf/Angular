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
    console.log('Constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');

    this.moviesService.getMovies()
                      .subscribe(data => this.moviesList = data);
  }



}
