import { Observable } from 'rxjs';
import { Photo } from './../../models/photo';
import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  photo$: Observable<Photo[]> | undefined;

  constructor(private photService: PhotosService) {}

  ngOnInit(): void {
    this.photo$ = this.photService.getPhoto();
  }
}
