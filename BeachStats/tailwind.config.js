/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

/* colors: {
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
    } */

module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
    fontFamily: {
      body: [
        "Avenir",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Helvetica Neue",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Inter",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sunbone: ["Sunborn Sans One", "sans-serif"],
      yellowtail: ["Yellowtail", "cursive"],
      lato: ["Lato", "sans-serif"],
    },
    colors: {
      gold: {
        50: "#fffbeb",
        100: "#fff3c4",
        200: "#ffe588",
        300: "#ffd149",
        400: "#ffbe20",
        500: "#FFC800", // Color base
        600: "#d19e00",
        700: "#a67c02",
        800: "#896208",
        900: "#74520f",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#209BBF", // Color base (ajustado)
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      navy: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#32538E", // Color base (ajustado)
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      dark: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#143642", // Color base
        900: "#0f172a",
      },
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      recreation: {
        50: "#fefce8", // bg-yellow-50
        400: "#facc15", // bg-yellow-400
      },
      protection: {
        50: "#fdf2f8", // bg-pink-50
        400: "#f472b6", // bg-pink-400
      },
      conservation: {
        50: "#f0fdf4", // bg-green-50
        400: "#4ade80", // bg-green-400
      },
      sanitary: {
        50: "#eff6ff", // bg-blue-50
        400: "#60a5fa", // bg-blue-400
      },
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [heroui()],
};
