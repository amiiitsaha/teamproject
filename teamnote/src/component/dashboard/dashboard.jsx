import React, { useState } from 'react';
import './dashboard.css'
function App() {
  const [activeBlock, setActiveBlock] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const blocks = [
    { id: 1, title: 'Block 1', content: 'Content for Block 1' },
    { id: 2, title: 'Block 2', content: 'Content for Block 2' },
    { id: 3, title: 'Block 3', content: 'Content for Block 3' },
  ];

  const handleBlockClick = (id) => {
    setActiveBlock(id);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlocks = blocks.filter((block) =>
    block.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <div class='topbar'><div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </div>
        <div><p>notification</p></div>
        </div>
    <div className="container">
      <div className="sidebar">
      <div><p>user</p>
        <button>logout</button>
        <button>create topic</button>
        </div>
        <ul>
          {filteredBlocks.map((block) => (
            <li 
              key={block.id} 
              className={activeBlock === block.id ? 'active' : ''}
              onClick={() => handleBlockClick(block.id)}
            >
              {block.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        </div>
        {activeBlock && (
          <div>
            <h3>{blocks.find((block) => block.id === activeBlock).title}</h3>
            <p>{blocks.find((block) => block.id === activeBlock).content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;