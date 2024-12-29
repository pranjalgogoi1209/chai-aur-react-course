import React from "react";

import Card from "./components/Card";

const data = [
  {
    imgSrc: "https://www.chess.com/share/user/pranjalgogoichess",
    name: "Pranjal Gogoi",
    description: "I am a web developer",
    tags: ["html", "css", "js"],
  },
  {
    imgSrc:
      "https://th.bing.com/th/id/OIP.V9_ZwhloByMCuhuzw4F6sQHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
    name: "Krishna Yadav",
    description: "I am a Teacher",
    tags: ["chemistry ", "physics", "biology"],
  },
];

export default function App() {
  return (
    <div className="p-4 border text-center bg-gray-100 flex flex-col items-center  w-full h-screen gap-4">
      <h1 className="text-2xl italic font-bold bg-gray-300 p-2 w-full">
        Tailwind
      </h1>
      <div className="flex gap-10 mt-auto mb-auto">
        {data.map((item, idx) => (
          <Card
            imgSrc={item.imgSrc}
            name={item.name}
            description={item.description}
            tags={item.tags}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
