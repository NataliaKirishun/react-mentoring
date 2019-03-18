import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';

class ReactCreateElement extends Component {
    render() {
        return (
            React.createElement('div', null, "Hello world! (with React.createElement)" )
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Hello world! (with React Component)</div>
    }
}

class WelcomePureComponent extends PureComponent {
    render() {
        return <div>Hello world! (with React PureComponent)</div>
    }
}

const WelcomeFunctionalComponent = () => <div>Hello world! (with functional component)</div>;

const App = () => <div>
<ReactCreateElement/>
<WelcomeComponent/>
<WelcomePureComponent/>
<WelcomeFunctionalComponent/>
</div>

render(<App />, document.getElementById('root'));

