import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { DogService } from '../dog.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	public dogPics: any = [];
  public dogBreeds: any = [];
  public modalRef?: BsModalRef;
  public currentPic: string = '';
  private static NUM_OF_DOG_PICS_TO_SHOW = 20;

 	constructor(
    private dogService: DogService,
    private modalService: BsModalService) { }

	ngOnInit(): void {
		this.dogService.getDogBreeds().subscribe((result: any) => {
      this.dogBreeds = Object.entries(result.message);
    });

    this.dogService.getDogPics(GalleryComponent.NUM_OF_DOG_PICS_TO_SHOW).subscribe((result: any) => {
      this.dogPics = result.message;
    });
	}

  openModal(template: TemplateRef<any>, pic: string) {
    this.modalRef = this.modalService.show(template);
    this.currentPic = pic;
  }
}
