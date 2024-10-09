import React from "react";
import { Alert } from "./components/bootstrap";
import Link from "next/link";

export default function NotFound() {
  return (
    <Alert  variant='warning'>
      <h1>Not Found</h1>
      <p>Sorry, this page does not exist</p>
      <Link href="/">Return back to main page</Link>
    </Alert>
  );
}
