import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Templates from './components/Templates';
import CallToAction from './components/CallToAction';
import CardEditor from './components/CardEditor';
import { CardTemplate } from './types/card';
import { cardTemplates } from './templates/cardTemplates';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate | null>(null);

  const handleStartCreating = (template: CardTemplate) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Hero onStart={() => handleStartCreating(cardTemplates[0])} />
      <Features />
      <Templates onSelectTemplate={handleStartCreating} />
      <CallToAction onStart={() => handleStartCreating(cardTemplates[0])} />
      <CardEditor
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </div>
  );
}

export default App;