import React, { Component } from 'react';
import Event from '../utils/on&emit';
class Menu extends Component {
    state = {
        info: {
            start: '北京',
            end: '东京',
            count: 15,
        },
        historys: [],
    };
    buy(data) {
        const his = this.state.historys;
        his.push(data);
        this.setState({
            historys: his,
        });
        Event.emit('piao');
    }
    render() {
        const { historys } = this.state;
        const { start, end, count } = this.state.info;
        return (
            <div className="Menu-Page">
                <div className="box">
                    <div className="title">
                        {start}
                        <span>↔</span>
                        {end}
                    </div>
                    <div className="count">{count}</div>
                    <div onClick={() => this.buy(this.state.info)} className="btn">
                        购买
                    </div>
                    <div className="record">
                        {historys.map((item, index) => {
                            return (
                                <div key={index} className="his">
                                    {item.start}到{item.end}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        Event.on('piao', () => {
            const info = this.state.info;
            info.count -= 1;
            this.setState({ info: info });
        });
    }
}
export default Menu;
