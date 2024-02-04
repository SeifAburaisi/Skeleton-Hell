'use client'

import Image from "next/image";

export default function Card() {
return (
    <div className="container">
    <div className="card" id="card-link">
      <div className="card__header">
        <div>
          <Image className="header__img skeleton" id="logo-img" src="" alt="" width={100} height={100} />
        </div>
        <h3 className="card__header header__title" id="card-title">
        </h3>
      </div>

      <div className="card__body">
        <div className="card__body body__text" id="card-details">
        </div>

        <div className="card__body body__img">
        </div>
      </div>

      <div className="card__footer" id="card-footer">
        <div className="skeleton skeleton-text skeleton-footer"></div>
      </div>
    </div>
  </div>
  )
}