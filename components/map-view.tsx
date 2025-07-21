'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

type Posyandu = {
  id: number;
  nama: string;
  alamat: string;
  lattitude: string;
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
        console.log('Posyandu data:', data); // ⬅️ debug
        setPosyanduData(data);
      } catch (err) {
        console.error('Gagal fetch data posyandu:', err);
      }
    };

    fetchPosyandu();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || mapRef.current) return;

    const map = L.map('leaflet-map').setView([-6.5749606, 107.7609975], 14);
    mapRef.current = map;

    const satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri',
        maxZoom: 20,
      }
    );

    const labels = L.tileLayer(
      'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Labels © Esri',
        maxZoom: 20,
      }
    );

    satellite.addTo(map);
    labels.addTo(map);

    // Buat grup marker
    const markerGroup = L.layerGroup().addTo(map);
    markerGroupRef.current = markerGroup;
  }, []);

  useEffect(() => {
    if (!mapRef.current || posyanduData.length === 0) return;

    const markerGroup = markerGroupRef.current;
    markerGroup?.clearLayers(); // Bersihkan dulu

    posyanduData.forEach((item) => {
      const lat = parseFloat(item.lattitude);
      const lng = parseFloat(item.longitude);
      console.log('marker:', { lat, lng, nama: item.nama });

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng]).bindPopup(
          `<strong>${item.nama}</strong><br/>${item.alamat}`
        );
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
