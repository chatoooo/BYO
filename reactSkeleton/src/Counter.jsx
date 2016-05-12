import React from 'react'

export default class Counter extends React.Component {

    constructor(){
        super();
        this.count = 0;
    }

    render() {
        let renderedTimes = ++this.count;
        return (
          <span>Rendered {renderedTimes} times</span>
        );
    }
}
