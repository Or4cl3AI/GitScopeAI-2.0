import React from 'react';

const DeploymentFolders = ({ deploymentFolders }) => {
  return (
    <div id="deploymentFoldersId">
      <h2>Deployment Folders</h2>
      <div>
        {deploymentFolders.map((folder, index) => (
          <div key={index}>
            <h3>{folder.name}</h3>
            <p>{folder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const deploymentFolders = await createDeploymentFolders();

  return {
    props: {
      deploymentFolders,
    },
  };
}

async function createDeploymentFolders() {
  // Logic to create deployment folders goes here
  // This is a placeholder for the actual implementation
  return [
    {
      name: 'src/Frontend Folder',
      description: 'This folder contains all the frontend code.',
    },
    {
      name: 'src/Backend Folder',
      description: 'This folder contains all the backend code.',
    },
    {
      name: 'src/Communication Folder',
      description: 'This folder contains the code for communication between frontend and backend.',
    },
  ];
}

export default DeploymentFolders;