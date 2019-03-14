import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

import { getPopulation } from '../../Actions/populationAction';

export class Chart extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.5,
      referenceLine: 5,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.population,
      referenceLine: nextProps.reference ? nextProps.reference : 5,
    });
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.5
    });
  }

  render () {
    const { data, width, height, referenceLine } = this.state;
    return(
      <LineChart width={width} height={height} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="linear" dataKey="mortality_percent" stroke="#8884d8" />
        <CartesianGrid vertical={false} stroke="#ccc" strokeDasharray="5 5" />
        <XAxis type={'number'} dataKey="age"/>
        <YAxis dataKey="mortality_percent"/>
        <Tooltip />
        <ReferenceLine y={referenceLine} stroke="red" strokeDasharray="3 3"/>
      </LineChart>
    )
  }
}

const mapDispatchToProps = state => ({
  population: state.population.population
});

export default connect(mapDispatchToProps, { getPopulation })(Chart);