import { Component, OnInit } from '@angular/core';
import { CatsService } from './../../services/cats.service';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {

  constructor(private catService: CatsService) { }

  warning: boolean = false;
  isSubmit: boolean = false;
  isProcess: boolean = false;
  data?: Cat;
  img_found = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.isProcess = true;
    this.catService.getCats().subscribe((res) => {
      this.data = res[0];
      this.isProcess = false;
      this.warning = false;
      console.log(this.data)
    }, (error) => {
      this.warning = true
      this.isProcess = false;
      console.log(this.warning)
    })
  }

  onClick() {
    this.isSubmit = true;
    this.fetchData();
  }
}
