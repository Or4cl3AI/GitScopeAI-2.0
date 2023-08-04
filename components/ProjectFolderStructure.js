```javascript
import React from 'react';

const ProjectFolderStructure = ({ projectStructure }) => {
  return (
    <div id="projectFolderStructureId">
      <h2>Project Folder Structure</h2>
      <ul>
        {projectStructure.map((folder, index) => (
          <li key={index}>
            <span>{folder.name}</span>
            <ul>
              {folder.files.map((file, fileIndex) => (
                <li key={fileIndex}>{file}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFolderStructure;
```