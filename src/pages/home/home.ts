import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data={};
  artist;
  title;
  lyrics;
  constructor(public navCtrl: NavController, private http: HttpClient) {  
  }
  url = 'https://api.lyrics.ovh/v1/'
  getLyrics() {
    this.http.get(this.url+this.artist+'/'+this.title).subscribe(data => {    
      
        this.data = data;
        this.lyrics=data['lyrics']
      console.log(data);
    }, err => {
      console.log(err);
     
    });
    
  }
}
