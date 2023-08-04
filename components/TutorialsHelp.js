```javascript
import React from 'react';

const TutorialsHelp = ({ tutorialHelpData }) => {
  return (
    <div id="tutorialsHelpId">
      <h2>Tutorials & Help</h2>
      {tutorialHelpData.map((tutorial, index) => (
        <div key={index}>
          <h3>{tutorial.title}</h3>
          <p>{tutorial.description}</p>
          <a href={tutorial.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default TutorialsHelp;
```