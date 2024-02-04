'use client'

import Image from "next/image";

export default function SkeletonLoad() {
return (
    <div className="container">
    <div className="card" id="card-link">
      <div className="card__header">
        <div>
          <Image className="header__img skeleton" id="logo-img" src="" alt="" width={100} height={100} />
        </div>
        <h3 className="card__header header__title" id="card-title">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </h3>
      </div>

      <div className="card__body">
        <div className="card__body body__text" id="card-details">
          <div className="skeleton skeleton-text skeleton-text__body"></div>
        </div>

        <div className="card__body body__img">
          <Image className="skeleton" alt="" id="cover-img" src="" width={200} height={200} />
        </div>
      </div>

      <div className="card__footer" id="card-footer">
        <div className="skeleton skeleton-text skeleton-footer"></div>
      </div>
    </div>
  </div>
  )
}