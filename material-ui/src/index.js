import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const styles = {
  chip: {
    margin: 5,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleTouchDelete() {
  alert('削除ボタンが押されました')
};

function handleTouchTap() {
  alert('チップが選択されました')
};

class MyChipSample extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.wrapper}>
          <Chip
            onRequestDelete={handleTouchDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32}>YU</Avatar>
            Yusuke Uji
          </Chip>
          <Chip
            onRequestDelete={handleTouchDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32}>YI</Avatar>
            Yusuke Ishiguro
          </Chip>
          <Chip
            onRequestDelete={handleTouchDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32}>YM</Avatar>
            Yuka Maekawa
          </Chip>
          <Chip
            onRequestDelete={handleTouchDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32}>AM</Avatar>
            Aya Miura
          </Chip>
          <Chip
            onRequestDelete={handleTouchDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={32}>KS</Avatar>
            Kiyohumi Sato
          </Chip>
        </div>
      </MuiThemeProvider>
    )
  }
};

ReactDOM.render(<MyChipSample />, document.getElementById('root'));
registerServiceWorker();
