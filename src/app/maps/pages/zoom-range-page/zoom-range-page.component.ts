import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public currentZoom: number = 10;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-58.49, -34.6);

  ngAfterViewInit(): void {
    if (!this.divMap) throw ('El elemento HTML no fue encontrado');

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', () => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentCenter = this.map!.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.currentZoom = Number(value);
    this.map?.zoomTo(this.currentZoom);
  }
}
