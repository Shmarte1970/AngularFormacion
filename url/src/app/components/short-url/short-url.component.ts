import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit{

  nombreUrl = '';
  urlShort = '';
  urlProcesada: boolean;
  

  constructor(private _shortUrlService:ShortUrlService){

    this.nombreUrl
    this.urlShort
    this.urlProcesada = false



  }

  

  ngOnInit(): void {
    
  }

  procesarURL(){
      this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
        console.log(data);
      })
    
  }

}
