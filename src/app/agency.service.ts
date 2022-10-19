import { Injectable } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Agency } from './models/agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private httpService: HttpClient) { }

  public getAgencies(): Observable<Agency[]> {
    let baseUrl = '../assets/agency.json';
    return this.httpService.get<Agency[]>(baseUrl)
      .pipe(
        map(data => data.map(data => new Agency().deserialize(data)))
      )
  }


}
