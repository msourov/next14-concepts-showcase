import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Alert } from "react-bootstrap";
import { UnsplashImage } from "../../../models/unsplash-image";
interface PageProps {
  params: { topic: string };
  // searchParams: { [key: string]: string | string[] | undefined },
}
export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

export default async function page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    { 
        cache: 'no-cache',
        next: {revalidate: 15}
  }
  );
  const image: UnsplashImage = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fetched &
        rendered on first access and then{" "}
        <strong>cached for subsequent requests</strong> (this can be disabled).
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description || "image"}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
