import React from "react";
import { Spinner } from "./components/bootstrap";

export default function Loading() {
  return (
    <Spinner
      animation="border"
      variant="primary"
      className="d-block m-auto color-primary"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
