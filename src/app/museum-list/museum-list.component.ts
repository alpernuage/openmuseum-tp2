import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-root',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {
  museums: Museum[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchMuseums()
      .subscribe(res => {
        this.museums = res
        console.log(res);
      },
        error => {
          console.log("error");
        });
    this.dataService.fetchMuseums();
  }
}