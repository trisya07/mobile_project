import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form = {
    nik : '',
    nama : '',
    jk : '',
    no_hp : '',
    alamat : '',
    ttl : ''
  }

  constructor(
    private router : Router
  ) {}

  async lokasi() {
    const coor = await Geolocation.getCurrentPosition();
  
    let data = {
      nik: this.form.nik,
      nama: this.form.nama,
      jk: this.form.jk,
      no_hp: this.form.no_hp,
      alamat: this.form.alamat,
      ttl: this.form.ttl,
      lat: coor.coords.latitude,
      lng: coor.coords.longitude
    };
    const link = "https://wa.me/"+this.form.no_hp+"?text=halo%0A Berikut adalah posisi saya sekarang%0A"+"https://maps.google.com/?q="+data.lat+","+data.lng

    window.open(link, "_system");

  
    let existingData = [];
    const storedData = localStorage.getItem('data');
    if (storedData) {
      existingData = JSON.parse(storedData);
    }
  
    const newData = [...existingData, data];
    localStorage.setItem('data', JSON.stringify(newData));
  
    console.log(newData);
  
    newData.forEach((element: any) => {
      const dataTmp = {
        nik: element.nik,
        nama: element.nama,
        jk: element.jk,
        no_hp : element.no_hp,
        alamat: element.alamat,
        ttl: element.ttl,
        lat: element.lat,
        lng: element.lng
      };
      // Lakukan sesuatu dengan dataTmp
    });

    // const phoneNumber = '1234567890'; // Ganti dengan nomor tujuan yang sesuai

    // const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    // const options = '_system';

    // this.inAppBrowser.create(url, options);

  }
  

}
