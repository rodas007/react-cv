import React from 'react'

export default function About({hero}) {
  return (
    <div className="about">
      <div className="card">
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="item">
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};