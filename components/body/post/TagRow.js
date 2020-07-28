import React from 'react';

import { categoryColors } from '../../../assets/js/styles'


export default function TagRow({tags}) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => 
        <span key={index} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
          { tag.toUpperCase() }
        </span>
      )}
    </div>
  );
}