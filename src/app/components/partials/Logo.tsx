"use-client";
import React from "react";
import Link from "next/link";

export default function Logo({ fullName }: { fullName: string }) {
  const initials = fullName
    .split(" ")
    .map((name) => name[0]?.toUpperCase())
    .join("");

  return (
    <Link href={"/"}>
      <svg
        width="100"
        height="70"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: "visible",
          animation: "pulse 2s infinite ease-in-out",
        }}
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="#0A0A0A"
          stroke="#0A0A0A"
          strokeWidth="2"
          style={{
            animation: "spin 5s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />

        {/* Text */}
        <text
          x="50"
          y="55"
          fill="#FFFFFF"
          fontSize="30"
          fontWeight="bold"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="'Poppins', sans-serif"
          style={{
            animation: "fadeIn 3s ease",
          }}
        >
          {initials}
        </text>

        <style>
          {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
        </style>
      </svg>
    </Link>
  );
}
