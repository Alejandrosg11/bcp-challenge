import { Component, NgModule, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency.model';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})

export class AgencyListComponent implements OnInit {

  @NgModule({
    imports: [BrowserModule, CommonModule],
  })

  public agency: Agency;
  public agencies: Agency[];

  constructor(
    private agencyService: AgencyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.agencyService.getAgencies().subscribe(agencies => this.agencies = agencies)
  }

  navigateToDetail(id:any) {
    this.router.navigate(['/agency-detail/'+id])
  }

}
