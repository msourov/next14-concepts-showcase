import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Alert } from 'react-bootstrap';
import { UnsplashImage } from '@/app/models/unsplash-image';
export default async function page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" +
    process.env.UNSPLASH_ACCESS_KEY,
    {
        next: {revalidate: 15}
    })
    const image: UnsplashImage = await response.json()

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <div className="d-flex flex-column align-items-center">
            <Alert>
                This page uses <strong>incremental static regeneration</strong>.
                A new image is fetched every 15 seconds (after refreshing the page) and then served from the cache for that duration.
            </Alert>

            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description || 'image'}
                className="rounded shadow mw-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}
