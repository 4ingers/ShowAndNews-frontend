const categoryColors = {
  'Cat1': 'rgb(255, 59, 48)',
  'Cat2': 'rgb(0, 113, 164)',
  'Cat3': 'rgb(255, 45, 85)'
}

const TagRow = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) =>
        <span key={index} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
          {tag.toUpperCase()}
        </span>
      )}
    </div>
  );
}

export default TagRow