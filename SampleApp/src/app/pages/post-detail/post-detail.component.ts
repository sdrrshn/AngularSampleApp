import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Coment } from './../../models/coment';
import { PostsService } from './../../services/posts.service';
import { Observable } from 'rxjs';
import { Post } from './../../models/post';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  modalref?: BsModalRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private router: Router,
    private modalService: BsModalService
  ) {}
  post$: Observable<Post> | undefined;
  commants$: Observable<Coment[]> | undefined;

  ngOnInit(): void {
    let params: any = this.activatedRoute.snapshot.params;
    this.post$ = this.postService.getPostbyId(params.id);
    this.commants$ = this.postService.getPostCommand(params.id);
  }
  redirectToPosts() {
    let result = window.confirm('sayfadan ayrılmak istediğinize eminmisiniz?');
    if (result) this.router.navigateByUrl('/posts');
    else alert('yönlendirme iptal edildi');
  }
  getDetail(template: TemplateRef<any>) {
    this.modalref = this.modalService.show(template);
  }
}
