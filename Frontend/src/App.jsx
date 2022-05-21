import React, {Component} from 'react';
import AddMarking from './Components/Marking/AddMarking';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <AddMarking />
        </div>
    }
}