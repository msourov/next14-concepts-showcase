"use client";

import React from "react";
import { Button } from "react-bootstrap";

interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <div className="w-fulll p-10 text-center justify-center items-center">
            <h1 className="font-bold text-lg">Error 😵</h1>
            <p>Something went wrong</p>
            <Button onClick={reset} className="btn-primary p-3 m-4 ">Try again</Button>
        </div>
    );
}