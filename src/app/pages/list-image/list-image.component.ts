import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

export interface Dog {
  alpha_two_code: string;
  name: string;
  country: string;
}

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent implements OnInit {
  constructor(private dogsService: DogsService) { }
  warning: boolean = false;
  isSubmit: boolean = false;
  isProcess: boolean = false;
  data?: Dog[];
  img_found = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

  ngOnInit(): void {
    this.fetchData();
  }
  title = 'app-pwa';

  fetchData() {
    this.isProcess = true;
    this.dogsService.getDogs().subscribe((res) => {
      this.data = res;
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
