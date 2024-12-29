import React from "react";

export default function Card({
  imgSrc,
  name = "Default name",
  description,
  tags,
  key,
}) {
  return (
    <div
      key={key}
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow ease-in duration-200"
    >
      <img className="w-full" src={imgSrc} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags?.map((tag) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
