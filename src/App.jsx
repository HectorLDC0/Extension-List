import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [filter, setFilter] = useState('All');
  const [whiteMode, setwhiteMode] = useState(false);

  const [extensions, setExtensions] = useState([
    { id: 1, imageUrl: '/assets/images/logo-devlens.svg', text: 'DevLens', paragraph: 'Quickly inspect page layouts and visualize element boundaries.', active: true },
    { id: 2, imageUrl: '/assets/images/logo-style-spy.svg', text: 'StylesSpy', paragraph: 'Instantly analyze and copy CSS from any webpage element.', active: false },
    { id: 3, imageUrl: '/assets/images/logo-speed-boost.svg', text: 'SpeedBoost', paragraph: 'Optimizes browser resource usage to accelerate page loading.', active: true },
    { id: 4, imageUrl: '/assets/images/logo-json-wizard.svg', text: 'JSONWizard', paragraph: 'Formats, validates, and prettifies JSON responses in-browser.', active: false },
    { id: 5, imageUrl: '/assets/images/logo-tab-master-pro.svg', text: 'TabMaster Pro', paragraph: 'Organizes browser tabs into groups and sessions.', active: true },
    { id: 6, imageUrl: '/assets/images/logo-viewport-buddy.svg', text: 'ViewportBuddy', paragraph: 'Simulates various screen resolutions directly within the browser.', active: false },
    { id: 7, imageUrl: '/assets/images/logo-markup-notes.svg', text: 'Markup Notes', paragraph: 'Enables annotation and notes directly onto webpages for collaborative debugging.', active: true },
    { id: 8, imageUrl: '/assets/images/logo-grid-guides.svg', text: 'GridGuides', paragraph: 'Overlay customizable grids and alignment guides on any webpage.', active: false },
    { id: 9, imageUrl: '/assets/images/logo-palette-picker.svg', text: 'Palette Picker', paragraph: 'Instantly extracts color palettes from any webpage.', active: true },
    { id: 10, imageUrl: '/assets/images/logo-link-checker.svg', text: 'LinkChecker', paragraph: 'Scans and highlights broken links on any page.', active: false },
    { id: 11, imageUrl: '/assets/images/logo-dom-snapshot.svg', text: 'DOM Snapshot', paragraph: 'Capture and export DOM structures quickly.', active: true },
    { id: 12, imageUrl: '/assets/images/logo-console-plus.svg', text: 'ConsolePlus', paragraph: 'Enhanced developer console with advanced filtering and logging.', active: false },
  ]);

  useEffect(() => {
    if (whiteMode) {
      document.body.classList.add('white-mode')
    } else {
      document.body.classList.remove('white-mode')
    }
  }, [whiteMode]);

  const toggleActive = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  const removeCard = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return ext.active;
    if (filter === 'Inactive') return !ext.active;
  });

  return (
    <>
      <div className='bar'>
        <img 
        src={whiteMode ? "/assets/images/logo.svg" : "/assets/images/logo_branca.svg"}
        className={whiteMode ? "logo" : "logo logo--white"}
        />

        <div className='sun' onClick={() => setwhiteMode(!whiteMode)}>
          <img
            src={whiteMode ? "/assets/images/icon-moon.svg" : "/assets/images/icon-sun.svg"}
          />
        </div>

      </div>

      <div className='titleFilterWrapper'>
        <h1>Extensions List</h1>

        <div className='buttonsWrapper'>
          <Button text="All" onClick={() => setFilter('All')} isActive={filter === 'All'} />
          <Button text="Active" onClick={() => setFilter('Active')} isActive={filter === 'Active'} />
          <Button text="Inactive" onClick={() => setFilter('Inactive')} isActive={filter === 'Inactive'} />
        </div>
      </div>

      <div className="cardGrid">
        {filteredExtensions.map((ext) => (
          <Card
            key={ext.id}
            text={ext.text}
            paragraph={ext.paragraph}
            imageUrl={ext.imageUrl}
            active={ext.active}
            onToggle={() => toggleActive(ext.id)}
            onRemove={() => removeCard(ext.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
