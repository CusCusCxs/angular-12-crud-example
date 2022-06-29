import { Component, OnInit } from '@angular/core';
import { PhotoUploadService } from 'src/app/services/photo-upload.service';

@Component({
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  constructor(private photoUploadService: PhotoUploadService) { }

  ngOnInit(): void {
  }

  savePhoto(): void{
    const data = {    
  };
   this.photoUploadService.create(data)
  .subscribe(
    response => {
      console.log(response);
        },
    error => {
      console.log(error);
    });
  }
}

