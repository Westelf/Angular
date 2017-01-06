import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies(): any {
    return this.http.get('./app/data/movies.json')
                      .map(x => x.json());
  }

}
