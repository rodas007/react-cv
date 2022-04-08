import React from 'react'

export default function More({ languages, habilities}) {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Idiomas</span>
        <span></span>
      </div>
      <div className="card"> 
        <p>{languages.language}</p>
        <p>✏️ Nivel escrito: {languages.wrlevel}</p>
        <p>💭 Nivel oral: {languages.splevel}</p>
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p>🔧 {txt}</p>
        ))}
      </div>
      
      
      </div>
   
  );
};
