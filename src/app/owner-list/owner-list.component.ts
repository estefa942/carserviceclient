import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners:any[];
  ownersToDelete: any[]=[];
  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.getOwners();
  }

  getOwners(){
    this.ownerService.getAll().subscribe(owners => {
      this.owners = owners['_embedded']['owners'];
    });
  }

  setOwner(owner){
    localStorage.setItem('ownerHref', owner['_links']['self']['href']);
  }

  removeOwner(ownerHref){
    this.ownerService.deleteOwner(ownerHref).subscribe(response => {
      this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

  saveOwnersToDelete(owner){
    let hrefOwner= owner['_links']['self']['href'];
    this.ownersToDelete.push(hrefOwner);
  }

  deleteMultipleOwners(){
    for(const owner of this.ownersToDelete){
      this.removeOwner(owner);
    }
    this.gotoList();
  }
}
