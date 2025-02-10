import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap?.nativeElement) throw 'MapDiv not found';
    if (!this.lngLat) throw 'LngLat can\'t be null';
    //mapa
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });

    //marker
    new Marker({
      color: '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16)),
    }
    ).setLngLat(this.lngLat).addTo(map);
  }
}
