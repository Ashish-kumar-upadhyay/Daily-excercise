import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ChildComponent = () => {
  // Consume the context
  const { user, setUser } = useContext(UserContext);

  const handleToggleTheme = () => {
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        theme: user.preferences.theme === 'light' ? 'dark' : 'light'
      }
    });
  };

  return (
    <div className="child-component">
      <h4>Child Component</h4>
      <p>This is the deepest component in our structure.</p>
      
      <div className="user-info">
        <h5>User Information from Context:</h5>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Theme Preference:</strong> {user.preferences.theme}</p>
        <p><strong>Notifications:</strong> {user.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
        
        <button onClick={handleToggleTheme}>
          Toggle Theme ({user.preferences.theme === 'light' ? 'Light → Dark' : 'Dark → Light'})
        </button>
      </div>
    </div>
  );
};

export default ChildComponent; 