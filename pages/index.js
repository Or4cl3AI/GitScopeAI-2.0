```javascript
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RepositoryAnalysis from '../components/RepositoryAnalysis'
import CodeSnippetGeneration from '../components/CodeSnippetGeneration'
import AISuggestions from '../components/AISuggestions'
import ChatSystem from '../components/ChatSystem'
import PersonalizedRecommendations from '../components/PersonalizedRecommendations'
import ProjectFolderStructure from '../components/ProjectFolderStructure'
import ReadmeRequirements from '../components/ReadmeRequirements'
import DeploymentFolders from '../components/DeploymentFolders'
import VercelIntegration from '../components/VercelIntegration'
import UserInterface from '../components/UserInterface'
import CrossPlatform from '../components/CrossPlatform'
import TutorialsHelp from '../components/TutorialsHelp'
import AIMachineLearning from '../components/AIMachineLearning'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GitScopeAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <RepositoryAnalysis />
        <CodeSnippetGeneration />
        <AISuggestions />
        <ChatSystem />
        <PersonalizedRecommendations />
        <ProjectFolderStructure />
        <ReadmeRequirements />
        <DeploymentFolders />
        <VercelIntegration />
        <UserInterface />
        <CrossPlatform />
        <TutorialsHelp />
        <AIMachineLearning />
      </main>
      <Footer />
    </div>
  )
}
```