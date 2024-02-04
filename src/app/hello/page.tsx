"use client";

import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoad from "../components/skeleton";

export default function Home() {
  interface PersonData {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
  }
  const [data, setData] = useState<PersonData | null>(null);;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(
      () =>
        fetch("https://swapi.dev/api/people/1/")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          }),
      10000
    );
  }, []);

  if (isLoading)
    return (
      <p>
        <SkeletonLoad />
      </p>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <div className="container">
      <div className="card" id="card-link">
        <div className="card__header">
          <h3 className="card__header header__title" id="card-title">
            {data.name}
          </h3>
        </div>

        <div className="card__body">
          <div className="card__body body__text" id="card-details">
            Birth Year: {(data as { birth_year: string }).birth_year}
          </div>
          <div className="card__body body__text" id="card-details">
            Eye Color: ${data.eye_color}
          </div>
          <div className="card__body body__text" id="card-details">
            Gender: ${data.gender}
          </div>
          <div className="card__body body__text" id="card-details">
            Hair Color: ${data.hair_color}
          </div>
          <div className="card__body body__text" id="card-details">
            Height: ${data.height}
          </div>
          <div className="card__body body__text" id="card-details">
            Mass: ${data.mass}
          </div>
        </div>
      </div>
    </div>
  );
}
