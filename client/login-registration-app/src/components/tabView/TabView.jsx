import React, { useState } from 'react';

const TabView = ({ children,maritalStatus  }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="d-flex">
      <div className="nav flex-column nav-pills" style={{ minWidth: '200px' }}>
        {React.Children.map(children, (child, index) => (
          maritalStatus === 'Single' && child.props.label === 'Spouse Details' ? null : (
            <button
              key={index}
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabChange(index)}
            >
              {child.props.label}
            </button>
          )
        ))}
      </div>
      <div className="flex-grow-1 ml-4">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <>{children}</>;
};

TabView.Tab = Tab;

export default TabView;
