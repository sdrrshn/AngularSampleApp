import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Photo } from './../../models/photo';
import { PhotosService } from './../../services/photos.service';
import { UsersService } from './../../services/users.service';
import { AlbumsService } from './../../services/albums.service';
import { Album } from './../../models/album';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]> | undefined;
  photo$: Observable<Photo[]> | undefined;
  modalref?: BsModalRef;

  constructor(
    private album: AlbumsService,
    private photo: PhotosService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.albums$ = this.album.getAlbums();
  }
  getAlbumsDetail(userId: number, template: TemplateRef<any>) {
    this.photo$ = this.photo.getAlbumIdByPhoto(userId);
    this.modalref = this.modalService.show(template);
    console.log('userId', userId);
  }
  hideModal() {
    this.modalref?.hide();
  }
}
