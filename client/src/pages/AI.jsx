import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const tabs = [
  { name: 'Suggested Connections', key: 'connections' },
  { name: 'AI Post Helper', key: 'post' },
  { name: 'Chatbot', key: 'chatbot' },
];

const AI = () => {
  const [activeTab, setActiveTab] = useState('connections');

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-glbSerif font-bold mb-6 text-glbBrown">AI Features</h1>
        <div className="flex gap-4 mb-8">
          {tabs.map(tab => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? 'primary' : 'outline'}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-6 min-h-[300px]">
          {activeTab === 'connections' && (
            <div>
              <h2 className="text-xl font-bold mb-2">Suggested Connections</h2>
              <p className="text-gray-700">AI-powered suggestions for people you may want to connect with will appear here.</p>
            </div>
          )}
          {activeTab === 'post' && (
            <div>
              <h2 className="text-xl font-bold mb-2">AI Post Helper</h2>
              <p className="text-gray-700">Get AI-generated post ideas and content suggestions here.</p>
            </div>
          )}
          {activeTab === 'chatbot' && (
            <div>
              <h2 className="text-xl font-bold mb-2">AI Chatbot</h2>
              <p className="text-gray-700">Chat with our AI assistant for help, ideas, or just for fun!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AI; 