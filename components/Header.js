```javascript
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>GitScopeAI</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/repository-analysis">Repository Analysis</a></li>
                    <li><a href="/code-snippet-generation">Code Snippet Generation</a></li>
                    <li><a href="/ai-suggestions">AI Suggestions</a></li>
                    <li><a href="/chat-system">Chat System</a></li>
                    <li><a href="/personalized-recommendations">Personalized Recommendations</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
```