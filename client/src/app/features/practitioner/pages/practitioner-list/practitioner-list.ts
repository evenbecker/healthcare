import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Practitioner } from '../../../../models/practitioner';
import { SortableHeaderDirective, SortEvent } from '../../../../shared/directives/sortable-header';
import { HttpPractitionerService } from '../../../../core/services/http-practitioner-service';
import { ToastService } from '../../../../core/services/toast-service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialog } from '../../../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-practitioner-list',
  standalone: false,
  templateUrl: './practitioner-list.html',
  styleUrl: './practitioner-list.css',
})
export class PractitionerList implements OnInit {
  practitioners?: Practitioner[];
  currentPage = 1;
  totalItems = 10;
  pageSize = 5;
  sortBy='name';
  sortOrder='asc';
  nameFilter='';
  surnameFilter='';
  qualificationFilter='';
  organizationFilter='';
  organizationFilterVisible = true;
  unassignedFilter = false;

  @ViewChildren(SortableHeaderDirective)
  headers?: QueryList<SortableHeaderDirective>

  constructor(private httpPractitioner: HttpPractitionerService, private router: Router, private modalService: NgbModal, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadPractitioners();
  }

  loadPractitioners() {
    if(this.pageSize <= 0){
      this.toastService.showToast('Page size can\'t be 0 or less!', {header:'Finding practitioners', className: 'bg-danger text-light'})
      return;
    }
    this.httpPractitioner.getByPage(this.currentPage, this.pageSize, this.sortBy, this.sortOrder,
      this.nameFilter, this.surnameFilter, this.qualificationFilter, this.organizationFilter, this.unassignedFilter).subscribe(
      practitionerPage => {
        this.practitioners = practitionerPage.content;
        this.totalItems = practitionerPage.totalElements;
        this.pageSize = practitionerPage.size;
      });
  }

  onPageChange(page: number) {
    this.loadPractitioners();
  }


  onSort(sortEvent: SortEvent) {
    console.log('sort event:', sortEvent);
    this.sortBy = sortEvent.column;
    this.sortOrder = sortEvent.direction;
    this.headers?.forEach( header => {
      if (header.sortable !== sortEvent.column) {
        header.direction = '';
      }
    })
    this.loadPractitioners();
  }

  onAddClick(){
    this.router.navigate(['/practitioner/add']);
  }

  onEditClick(id : number){
    this.router.navigate(['/practitioner/edit', id]);
  }

  onDetailsClick(id: number){
    this.router.navigate(['/practitioner/details',id]);
  }

  onFilterClick(){
    this.loadPractitioners();
  }

  onUnassignedClick(){
    this.flipUnassigned();
    console.log(this.unassignedFilter);
    if(this.unassignedFilter){
      this.organizationFilter = '';
      this.organizationFilterVisible = false;
    } else{
      this.organizationFilterVisible = true;
    }
  }

  flipUnassigned(){
    if(this.unassignedFilter){
      this.unassignedFilter = false;
    } else{
      this.unassignedFilter = true;
    }
  }

  onDeleteClick(practitioner: Practitioner){
    const modalRef = this.modalService.open(ConfirmDialog);
    modalRef.componentInstance.message = `Are you sure you want to delete practitioner <strong>${practitioner.name} ${practitioner.surname}</strong> ?`;
    modalRef.componentInstance.headerText = 'Deleting practitioner';
    modalRef.result.then((result) => result === 'Ok' && this.deletePractitioner(practitioner.id));
  }

  deletePractitioner(id: number){
    this.httpPractitioner.deletePractitioner(id).subscribe({
      next: res => {
        this.toastService.showToast('Practitioner deleted successfully!',{header: 'Deleting practitioner', className: 'bg-success text-light'});
        this.loadPractitioners();
      },
      error: error => this.toastService.showToast('Practitioner not deleted: Practitioner has examination/s in progress!', {header:'Deleting practitioner', className: 'bg-danger text-light'})
    }
    );
  }

}

