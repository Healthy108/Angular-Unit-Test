import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private apiService: ApiService) {}

  data: any = [];

  ngOnInit() {
    this.getMokingData();
  }

  getMokingData() {
    this.apiService.getData().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: console.log,
    })
  }

}
