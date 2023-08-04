```javascript
import React from 'react';

const ReadmeRequirements = ({ readmeRequirements }) => {
  return (
    <div id="readmeRequirementsId">
      <h2>README and Requirements</h2>
      <div>
        <h3>README</h3>
        <pre>{readmeRequirements.readme}</pre>
      </div>
      <div>
        <h3>Requirements</h3>
        <pre>{readmeRequirements.requirements}</pre>
      </div>
    </div>
  );
};

export default ReadmeRequirements;
```