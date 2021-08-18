import { NotificationModel, StorageService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-notification-history',
  templateUrl: './notification-history.component.html',
})
export class NotificationHistoryComponent implements OnInit {
  /**
   * Maximum number of notifications to display. The rest will remain hidden until load more is clicked
   */
  @Input()
  maxNotifications: number;

  /**
   * Custom choice for opening the menu at the bottom. Can be before or after.
   */
  @Input()
  menuPositionX: 'after' | 'before';

  /**
   * Custom choice for opening the menu at the bottom. Can be above or below.
   */
  @Input()
  menuPositionY: 'above' | 'below';

  @Input()
  notifications: NotificationModel[];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.setItem('notification-history', JSON.stringify(this.notifications));
  }
}
