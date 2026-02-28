import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../../core/services/toast-service';

@Component({
  selector: 'app-global-toast',
  standalone: false,
  templateUrl: './global-toast.html',
  styleUrl: './global-toast.css',
})
export class GlobalToast implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }

  get toasts() {
    return this.toastService.toasts;
  }

  removeToast(i: number) {
    console.log('removin toast:', i, this.toastService.toasts.length);
    this.toasts.splice(i, 1);
  }

  isToastTemplate(toast: any) {
    return toast.message instanceof TemplateRef
  }

}

