import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PostCreate, Post } from 'src/models/post/post.module';
import { PostService } from 'src/services/post.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  submitted = false;
  isChecked = false;
  latitude = 35.6964895;
  longitude = 51.0696315;
  mapType = 'satellite';
  selectedMarker;
  public uploadedFiles: Array<File> = [];
  item: PostCreate = {
    categoryId: 0, images: null, location: null,
    phone: null, price: null, stateId: 0, tags: null, title: null, description: null
  };

  constructor(public translate: TranslateService, private title: Title, private dataService: PostService) {
    translate.addLangs(['en', 'fa']);
    this.title.setTitle('ثبت آگهی');
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;
    this.dataService.create(this.item).subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
        console.log(results);
        console.log(this.source);
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );
    this.loading = false;
  }

  onError() {
    console.log(this.error);
  }

  onCheckboxChange(eve: any) {
    this.isChecked = !this.isChecked;
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
}
