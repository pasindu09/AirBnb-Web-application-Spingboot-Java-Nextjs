"use client";
import dynamic from "next/dynamic";

const CreateRental = dynamic(() => import("./createRentalForm"), {
  ssr: false,
});

export default function Page() {
  return <CreateRental />;
}