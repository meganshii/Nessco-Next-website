"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

type Location = {
  lat: number;
  lon: number;
  country: string;
  region: string;
  city: string;
};

const locations: Record<string, Location> = {
  India: {
    lat: 20.5937,
    lon: 78.9629,
    country: "India",
    region: "Asia",
    city: "Delhi",
  },
  USA: {
    lat: 37.7749,
    lon: -122.4194,
    country: "USA",
    region: "California",
    city: "San Francisco",
  },
  Canada: {
    lat: 45.4215,
    lon: -75.6972,
    country: "Canada",
    region: "Ontario",
    city: "Ottawa",
  },
  Brazil: {
    lat: -15.8267,
    lon: -47.9218,
    country: "Brazil",
    region: "Distrito Federal",
    city: "Brasília",
  },
  Australia: {
    lat: -35.2809,
    lon: 149.13,
    country: "Australia",
    region: "Australian Capital Territory",
    city: "Canberra",
  },
  Germany: {
    lat: 52.52,
    lon: 13.405,
    country: "Germany",
    region: "Berlin",
    city: "Berlin",
  },
  Japan: {
    lat: 35.6762,
    lon: 139.6503,
    country: "Japan",
    region: "Tokyo",
    city: "Tokyo",
  },
  France: {
    lat: 48.8566,
    lon: 2.3522,
    country: "France",
    region: "Île-de-France",
    city: "Paris",
  },
  UK: {
    lat: 51.5074,
    lon: -0.1278,
    country: "UK",
    region: "England",
    city: "London",
  },
  "South Africa": {
    lat: -33.9249,
    lon: 18.4241,
    country: "South Africa",
    region: "Western Cape",
    city: "Cape Town",
  },
  // Add more locations as needed
};

interface GlobeProps {
  className?: string;
  country: string;
}

const Globe: React.FC<GlobeProps> = ({ className, country }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const focusedLocation = locations[country];
  const [rotationActive, setRotationActive] = useState(true);
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let phi = 0;
    let theta = 0;
    let blinkState = 0;
    let isDragging = false;
    let startPhi = 0;
    let startTheta = 0;
    let lastX = 0;
    let lastY = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 40000,
      mapBrightness:2,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.1, 0.1],
      glowColor: [1, 1, 1],
      markers: focusedLocation
        ? [{ location: [focusedLocation.lat, focusedLocation.lon], size: 0.1 }] // Increased size from 0.03 to 0.1
        : [],
      onRender: (state) => {
        state.phi = phi;
        state.theta = theta;

        if (rotationActive) {
          phi += 0.005; // Slow rotation
        }

        blinkState = (blinkState + 1) % 30; // Slower blink
        state.markerColor = blinkState < 15 ? [1, 0.1, 0.1] : [1, 1, 1];
      },
    });

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setRotationActive(false);
      lastX = e.clientX;
      lastY = e.clientY;
      startPhi = phi;
      startTheta = theta;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        phi = startPhi - deltaY * 0.01;
        theta = startTheta + deltaX * 0.01;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvasRef.current.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      globe.destroy();
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousedown", onMouseDown);
      }
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [focusedLocation, rotationActive]);

  useEffect(() => {
    setRotationActive(false); // Stop rotation when the customer's country changes
  }, [country]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ width: 1200, height: 1200, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
      {focusedLocation && (
        <motion.div
          style={{
            position: "absolute",
            top: markerPosition.y,
            left: markerPosition.x,
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "white",
            color: "red",
            borderRadius: "15px",
            boxShadow:
              "12px 12px 24px rgba(0, 0, 0, 0.2), -12px -12px 24px rgba(255, 255, 255, 0.3)",
            border: "1px solid ",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: "-10px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", fontSize: "1.2em" }}>
              {focusedLocation.city}
            </h3>
            <p style={{ margin: "0", fontSize: "1em" }}>
              {focusedLocation.region}, {focusedLocation.country}
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0",
              height: "0",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid white",
            }}
          ></div>
        </motion.div>
      )}
    </div>
  );
};

export default Globe;
