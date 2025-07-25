import { useRef, useEffect, useState } from 'react'
import mapboxgl, { Map } from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

function App() {
    // ✅ type refs correctly
    const mapRef = useRef<Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null)

    // ✅ type state correctly
    const [center, setCenter] = useState<[number, number]>([-79.3832,43.6532])
    const [zoom, setZoom] = useState<number>(10.12)

    const handleButtonClick = () => {
        if (!mapRef.current) return
        mapRef.current.flyTo({
            center: [-79.3832,43.6532],
            zoom: 10.12
        })
    }

    useEffect(() => {
        mapboxgl.accessToken = global.config.MAPBOX_TOKEN

        if (!mapContainerRef.current) return

        // ✅ create map
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11', // ✅ required style
            center: center, // ✅ already typed as [number, number]
            zoom: zoom,
        })

        // ✅ handle move event
        mapRef.current.on('move', () => {
            if (!mapRef.current) return
            const mapCenter = mapRef.current.getCenter()
            const mapZoom = mapRef.current.getZoom()
            setCenter([mapCenter.lng, mapCenter.lat])
            setZoom(mapZoom)
        })

        return () => {
            mapRef.current?.remove()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="sidebar">
                Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
            </div>
            <button className='reset-button' onClick={handleButtonClick}>
                Reset
            </button>
            <div
                id="map-container"
                ref={mapContainerRef}
                style={{ width: '100%', height: '100vh' }}
            />
        </>
    )
}

export default App
