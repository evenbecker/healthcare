import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialog implements OnInit {

  @Input() headerText?: string;
  @Input() message?: string;

  returnFunction?: Function;

  constructor(
    public modal: NgbActiveModal,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}

  onCancel() {
    // this.returnFunction('cancel');
    this.modal.close('Cancel');
  }

  onConfirm() {
    // this.returnFunction('confirm');
    this.modal.close('Ok');
  }
}

