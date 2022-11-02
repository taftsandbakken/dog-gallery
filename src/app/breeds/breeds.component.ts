import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  public dogPics: any = [];
  private static NUM_OF_DOG_PICS_TO_SHOW = 9;

  constructor(
    private dogService: DogService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const breed = this.route.snapshot.queryParamMap.get('breed') ?? '';
    this.dogService.getDogPicsForBreed(breed, BreedsComponent.NUM_OF_DOG_PICS_TO_SHOW).subscribe((result: any) => {
      this.dogPics = result.message;
    });
  }

}
