import React from 'react';
import ReactDOM from 'react-dom';
import {
  MdAdd,
  MdEmail,
  MdNotifications,
  MdPages,
  MdSearch,
  MdCode,
  MdFavorite,
  MdHelp,
} from 'react-icons/md';

import { Action, Fab } from './fab';
import './styles.css';

const components = [
  {
    position: {
      bottom: 0,
      left: 0,
    },
    event: 'hover',
    mainButtonStyles: {
      backgroundColor: '#27ae60',
    },
    actionButtonStyles: {
      backgroundColor: '#16a085',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    event: 'click',
    mainButtonStyles: {
      backgroundColor: '#9b59b6',
    },
    actionButtonStyles: {
      backgroundColor: '#8e44ad',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    event: 'hover',
    mainButtonStyles: {
      backgroundColor: '#95a5a6',
      color: '#34495e',
    },
    actionButtonStyles: {
      backgroundColor: '#696969',
      color: '#27ae60',
    },
  },
  {
    position: {
      bottom: 0,
      right: 0,
    },
    event: 'click',
    mainButtonStyles: {
      backgroundColor: '#e74c3c',
    },
    actionButtonStyles: {
      backgroundColor: '#ffffff',
      color: '#34495e',
    },
  },
];

const renderComponents = c =>
  c.map(({ mainButtonStyles, actionButtonStyles, position, event }, i) => (
    <Fab
      mainButtonStyles={mainButtonStyles}
      position={position}
      icon={<MdAdd />}
      event={event}
      key={i}
    >
      <Action
        style={actionButtonStyles}
        text="Email"
        onClick={e => {
          alert('I printed the event to the console.');
          console.log(e);
        }}
      >
        <MdEmail />
      </Action>
      <Action
        style={actionButtonStyles}
        text="Notifications"
        onClick={() => alert('Here is your notification.')}
      >
        <MdNotifications />
      </Action>
      <Action style={actionButtonStyles} text="Fullscreen" onClick={() => alert('What?')}>
        <MdPages />
      </Action>
      <Action style={actionButtonStyles} text="Search" onClick={() => alert('No search...')}>
        <MdSearch />
      </Action>
      <Action style={actionButtonStyles} text="Editor" onClick={e => console.log(e)}>
        <MdCode />
      </Action>
      <Action
        style={actionButtonStyles}
        text="Like it!"
        onClick={() => alert('This is fantastic!')}
      >
        <MdFavorite />
      </Action>
    </Fab>
  ));

const abStyles = {
  position: 'absolute',
  top: '-110px',
  right: '100%',
  padding: '18px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
};

/**
 * Here, we are using the FAB to create a help popup box. When the button is clicked, the help form appears on the
 * screen and allows the user to submit the form. This is simply an example to show how versatile the FAB lib can be.
 * For instance, you can use Styled Components and create a custom component to pass as the Action and with that,
 * your creativity is the limit on what you can achieve with this.
 *
 * --- Maybe we should add a prop so that the FAB can be closed externally? ---
 */
const Help = () => (
  <Fab
    event="click"
    position={{ bottom: 0, right: 120 }}
    mainButtonStyles={{ backgroundColor: '#3498db', width: 160, borderRadius: 48 }}
    icon={<MdHelp />}
  >
    <div style={abStyles}>
      <h4>Need help?</h4>
      <div style={{ display: 'flex' }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="name">Email</label>
        <input type="text" id="email" />
      </div>
      <button>Submit</button>
    </div>
  </Fab>
);

const App = () => (
  <React.Fragment>
    {renderComponents(components)}
    <Help />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
