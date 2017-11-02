/* temporary to test native ES classes */

window.ReduxComponent = require('./Component');
window.React = require('react')
window.test = (klass) => {
  const ReactDOM = require('react-dom')
  ReactDOM.render(window.React.createElement(klass), document.body)
}

/*
 * To test this I typed this in my browser console
 *
 * class D extends ReduxComponent { render() { return React.createElement('div', '', 'foo') } }
 * test(D)
 */
