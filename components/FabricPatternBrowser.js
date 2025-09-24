'use client'

import React, { useState, useEffect } from 'react';
import { Search, Play, Copy, Check, ChevronDown, ChevronRight, Tag, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FabricPatternBrowser = () => {
  const [patterns, setPatterns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [patternsLoading, setPatternsLoading] = useState(true);
  const router = useRouter();

  // Load patterns from API
  useEffect(() => {
    const loadPatterns = async () => {
      try {
        const response = await fetch('/api/patterns');
        if (response.ok) {
          const data = await response.json();
          setPatterns(data.patterns);
          // Expand all categories by default
          const categories = [...new Set(data.patterns.map(p => p.category))];
          const expanded = {};
          categories.forEach(cat => expanded[cat] = true);
          setExpandedCategories(expanded);
        } else if (response.status === 401) {
          router.push('/patterns/login');
        }
      } catch (error) {
        console.error('Error loading patterns:', error);
      } finally {
        setPatternsLoading(false);
      }
    };

    loadPatterns();
  }, [router]);

  // Logout function
  const handleLogout = () => {
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/patterns/login');
  };

  // Get unique categories
  const categories = ['all', ...new Set(patterns.map(p => p.category))];

  // Filter patterns
  const filteredPatterns = patterns.filter(pattern => {
    const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pattern.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group patterns by category
  const groupedPatterns = filteredPatterns.reduce((acc, pattern) => {
    if (!acc[pattern.category]) acc[pattern.category] = [];
    acc[pattern.category].push(pattern);
    return acc;
  }, {});

  // Run pattern through API
  const runPattern = async (patternName) => {
    if (!inputText.trim()) {
      alert('Please enter some input text');
      return;
    }

    setLoading(true);
    setOutputText('');

    try {
      const response = await fetch('/api/fabric', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pattern: patternName,
          input: inputText
        })
      });

      if (response.ok) {
        const data = await response.json();
        setOutputText(data.result);
      } else if (response.status === 401) {
        router.push('/patterns/login');
      } else {
        const errorData = await response.json();
        setOutputText(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setOutputText(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (patternsLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading fabric patterns...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Fabric Pattern Browser</h1>
              <p className="text-gray-600">Browse and run Fabric patterns without using the terminal</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pattern List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search patterns..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pattern Count */}
              <div className="mb-4 text-sm text-gray-500">
                {filteredPatterns.length} pattern{filteredPatterns.length !== 1 ? 's' : ''} found
              </div>

              {/* Pattern List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {Object.entries(groupedPatterns).map(([category, categoryPatterns]) => (
                  <div key={category} className="mb-4">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="flex items-center gap-1 text-sm font-semibold text-gray-700 mb-2 hover:text-gray-900"
                    >
                      {expandedCategories[category] ?
                        <ChevronDown className="w-4 h-4" /> :
                        <ChevronRight className="w-4 h-4" />
                      }
                      {category} ({categoryPatterns.length})
                    </button>

                    {expandedCategories[category] && (
                      <div className="space-y-1 ml-5">
                        {categoryPatterns.map(pattern => (
                          <button
                            key={pattern.name}
                            onClick={() => setSelectedPattern(pattern)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                              selectedPattern?.name === pattern.name
                                ? 'bg-blue-50 border border-blue-200'
                                : 'hover:bg-gray-50 border border-transparent'
                            }`}
                          >
                            <div className="font-medium text-sm text-gray-900">
                              {pattern.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {pattern.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {filteredPatterns.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No patterns found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pattern Executor */}
          <div className="lg:col-span-2">
            {selectedPattern ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedPattern.name}
                    </h2>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {selectedPattern.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{selectedPattern.description}</p>
                </div>

                {/* Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Input Text
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste or type your text here..."
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                  />
                </div>

                {/* Run Button */}
                <div className="mb-4">
                  <button
                    onClick={() => runPattern(selectedPattern.name)}
                    disabled={!inputText.trim() || loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    {loading ? 'Running...' : 'Run Pattern'}
                  </button>
                </div>

                {/* Output */}
                {outputText && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Output
                      </label>
                      <button
                        onClick={() => copyToClipboard(outputText)}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-1"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 max-h-96 overflow-y-auto">
                      <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                        {outputText}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-gray-400">
                  <Search className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg">Select a pattern to get started</p>
                  <p className="text-sm mt-2">Browse patterns on the left or use the search</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricPatternBrowser;