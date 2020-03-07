import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

  ownerHref: string;
  isHref: boolean;
  owner: any = {};
  showAdd: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ownerServices: OwnerService,
   ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const dni = params['id'];
      if (dni) {
        this.showAdd = false;
        this.ownerServices.getOwner(dni).subscribe(response => {
          this.owner = response[0];
        });
        this.isHref = true;
        this.ownerHref = localStorage.getItem('ownerHref');
      } else {
        this.showAdd = true;
        this.isHref = false;      }
    });
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    if (this.showAdd) {
      this.ownerServices.createOwner(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }else{
      this.ownerServices.updateOwner(this.ownerHref,form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }


  removeOwner(){
    this.ownerServices.deleteOwner(this.ownerHref).subscribe(response => {
      this.gotoList();
    }, error => console.error(error));
  }
}
