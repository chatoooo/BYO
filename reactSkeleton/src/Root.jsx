import message from 'message';
import React from 'react';
import 'react-hot-loader/patch';
import Counter from 'Counter';

export default class Root extends React.Component {

    constructor(){
        super();
        this.state = {children:[]};

        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick() {
        let children = this.state.children;
        children.push(message());
        this.setState({children});
    }

    render() {
        let children = [];
        let i = 0;
        for (let m of this.state.children) {
            children.push(<p key={i}>{m+" "}<Counter key={i}/></p>);
            i++;
        }
        return (
            <div id="myapp">
                {children}
            </div>
        );
    }
}