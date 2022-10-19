import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency.model';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit {

  public id = parseInt(window.location.pathname[window.location.pathname.length - 1])
  public agencies: Agency[];
  public url = 'StringConstructor';

  generateMap(lon:string, lat:string) {
    return `https://maps.google.com/maps?q=${lon},%20${lat}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  }

  constructor(
    private agencyService: AgencyService
  ) { }

  ngOnInit(): void {
    this.agencyService.getAgencies().subscribe(agencies => this.agencies = agencies)
  }

}
