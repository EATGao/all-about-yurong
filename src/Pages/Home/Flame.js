import * as d3 from 'd3';
import { Component } from "react";
import './Flame.css'

  
class Flame extends Component {

    componentDidMount() {
        this.flameAnimation();
    }

    flameAnimation() {
        d3.select('.flame')
            .style('--particles', 100)
            .selectAll('span')
            .data(d3.range(100))
            .enter()
            .append('span')
            .style('--n', (d) => d + 1)
            .style('--rnd', () => Math.random())
    }
    
    render() {
        return <div className='flame'><span></span><span></span><span></span></div>
    }
  }
  
  export default Flame;