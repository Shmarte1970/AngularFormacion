import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../../services/photos.service';
import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {

    this.photosService.getPhotos()
    .subscribe(
      photos => {        
        console.log(photos)
        this.photos = photos
      },
      err => console.error(err)   
    )

    
  }

  click(){
    alert ('Funciona');
  }

}
