import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {

  datas:any[] = []

  constructor() { }

  ngOnInit() {
    let datalama = JSON.parse(localStorage.getItem('data') as string)
    this.datas = datalama
    console.log(datalama)
  }

}
