import React from 'react'
import "./Experience.scss"
export default function Experience({experience}) {
  return (
    <div className="experience card">
      <div>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📂 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

