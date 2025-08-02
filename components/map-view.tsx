'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Setup ikon default leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

type Kelurahan = {
  id: number;
  nama: string;
};

type Posyandu = {
  id: number;
  nama: string;
  alamat: string;
  wilayah: string;
  kelurahan: Kelurahan; // relasi ke tabel kelurahan
  penanggungJawab: string;
  noHp: string;
  akreditasi: string;
  latitude: string;
  longitude: string;
};

export default function MapView() {
  const [posyanduData, setPosyanduData] = useState<Posyandu[]>([]);
  const mapRef = useRef<L.Map | null>(null);
  const markerGroupRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    const fetchPosyandu = async () => {
      try {
        const res = await fetch('/api/posyandu');
        const data = await res.json();
        console.log('Posyandu data:', data);
        setPosyanduData(data);
      } catch (err) {
        console.error('Gagal fetch data posyandu:', err);
      }
    };

    fetchPosyandu();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || mapRef.current) return;

    const map = L.map('leaflet-map').setView([-6.5740985, 107.7407857], 13);
    mapRef.current = map;

    // const key = 'AIasOmN8uDOgOOQXtW0T';
    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', // m = street, s = satellite, y = hybrid, t = terrain
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );
    googleStreets.addTo(map);

    const markerGroup = L.layerGroup().addTo(map);
    markerGroupRef.current = markerGroup;
  }, []);

  useEffect(() => {
    if (!mapRef.current || posyanduData.length === 0) return;

    const markerGroup = markerGroupRef.current;
    markerGroup?.clearLayers();

    posyanduData.forEach((item) => {
      const lat = parseFloat(item.latitude);
      const lng = parseFloat(item.longitude);

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng])
          .bindPopup(
            `<strong>${item.nama}</strong><br/>
             ${item.alamat}<br/>
             ${item.wilayah}, Kelurahan ${item.kelurahan?.nama ?? '-'}<br/>
             Penanggung Jawab: ${item.penanggungJawab}<br/>
             Contact: ${item.noHp}<br/>
             Akreditasi: ${item.akreditasi}`
          )
          .bindTooltip(item.nama, {
            permanent: true,
            direction: 'top',
            offset: [0, -10],
          });

        markerGroup?.addLayer(marker);
      }
    });
  }, [posyanduData]);

  return (
    <div
      id="leaflet-map"
      className="rounded-sm"
      style={{ height: '70vh', width: '100%' }}
    />
  );
}
