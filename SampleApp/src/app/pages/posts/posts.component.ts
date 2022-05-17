import { UsersService } from './../../services/users.service';
import { Post } from '../../models/post';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  modalRef?: BsModalRef;
  user$: Observable<User> | undefined;
  constructor(
    private userservice: UsersService,
    private postService: PostsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
  postBy(UserId: number, template: TemplateRef<any>) {
    this.user$ = this.userservice.getUserInfo(UserId);
    this.modalRef = this.modalService.show(template);
  }
  hideModal() {
    this.modalRef?.hide();
  }
}
