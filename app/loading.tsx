"use client";
import Lottie from "lottie-react";
import React from 'react';

import animationData from "../assets/animation4.json";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div style={{ width: '200px', height: '200px' }}>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
