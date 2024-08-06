"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function ParallaxScrollDemo() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    }, {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    }, {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    }, {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    }, {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    }, {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      username: "John Doe",
      profile: "Engineer",
      country: "USA",
      quote: "Innovate and elevate.",
      flag: "https://restcountries.com/v3.1/all",
    },
    {
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
      username: "Jane Smith",
      profile: "Designer",
      country: "Canada",
      quote: "Design is intelligence made visible.",
      flag: "https://restcountries.com/v3.1/all",
    },
    // Add more user data similarly
  ];

  return <ParallaxScroll images={images} />;
}
