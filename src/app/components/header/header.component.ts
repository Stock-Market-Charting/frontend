import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ResponseResult } from 'src/app/models/ResponseResult';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closeResult: string;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  open() {
    this.userService.getUser(this.authService.getUserId())
      .subscribe((res) => {
        if (res.code == 0) {
          const modalRef = this.modalService.open(UserProfileComponent);
          modalRef.componentInstance.user = res.data as User;
        }
      });
  }

}
