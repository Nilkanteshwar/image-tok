import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
 
  setwall(){
    (<any>window).plugins.wallpaper.setImage('Image/');
  }
  constructor(private storage: AngularFireStorage) { }

  allImages = [];
  ngOnInit() {
    this.getAllImages();
  }
  async getAllImages(){
    this.storage.ref("/Images/").listAll().subscribe((res)=>{
      console.log("images",res);
      res['items'].forEach(async (element) => {
        const img = await element.getDownloadURL();
        console.log("img",img)
        this.allImages.push(img);
      });
    });
  }
  
 }
