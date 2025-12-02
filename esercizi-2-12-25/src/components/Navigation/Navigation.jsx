import './Navigation.css'; 

const tabs = [
  { key: 'tutti', label: 'Tutti' },
  { key: 'completato', label: 'Completati' },
  { key: 'in-corso', label: 'In Corso' },
  { key: 'wishlist', label: 'Wishlist' },
  { key: 'abbandonato', label: 'Abbandonati' },
];

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navigation-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`nav-tab ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;