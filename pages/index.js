import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import RepositoryAnalysis from '../src/components/RepositoryAnalysis'
import CodeSnippetGeneration from '../src/components/CodeSnippetGeneration'
import AISuggestions from '../src/components/AISuggestions'
import ChatSystem from '../src/components/ChatSystem'
import PersonalizedRecommendations from '../src/components/PersonalizedRecommendations'
import ProjectFolderStructure from '../src/components/ProjectFolderStructure'
import ReadmeRequirements from '../src/components/ReadmeRequirements'
import DeploymentFolders from '../src/components/DeploymentFolders'
import VercelIntegration from '../src/components/VercelIntegration'
import UserInterface from '../src/components/UserInterface'
import CrossPlatform from '../src/components/CrossPlatform'
import TutorialsHelp from '../src/components/TutorialsHelp'
import AIMachineLearning from '../src/components/AIMachineLearning'

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