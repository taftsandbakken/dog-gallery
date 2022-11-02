import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private static DOG_BREED_URL = 'https://dog.ceo/api/breeds/list/all';
  private static DOG_RANDOM_PIC_URL = 'https://dog.ceo/api/breeds/image/random/';
  private static DOG_BREED_RANDOM_PIC_URL = 'https://dog.ceo/api/breed/';

  constructor() { }

  // Get a list of all breeds and subbreeds
  public getDogBreeds() {
    return Observable.create((observer: any) => {
      return fetch(DogService.DOG_BREED_URL)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }

  // Get a list of random dog pics from the api
  public getDogPics(qty: number) {
    return Observable.create((observer: any) => {
      return fetch(`${DogService.DOG_RANDOM_PIC_URL}${qty}`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }

  // Get a list of random dog pics from the api for a specific breed
  public getDogPicsForBreed(breed: string, qty: number) {
    return Observable.create((observer: any) => {
      return fetch(`${DogService.DOG_BREED_RANDOM_PIC_URL}${breed}/images/random/${qty}`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }
}
