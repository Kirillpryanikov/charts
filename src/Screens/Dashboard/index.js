import React from 'react';
import { connect } from 'react-redux';

import Chart from '../../Components/Chart';
import { getPopulation } from "../../Actions/populationAction";
import { Header, Error } from '../../Components/Item';

export class Dashboard extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      reference: null,
      country: 'China',
      error: false,
      errorMessage: false
    };
    this.onChange = this.onChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.getPopulation = this.getPopulation.bind(this);
  }

  componentDidMount () {
    this.getPopulation();
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      error: true,
      errorMessage: nextProps.error ? nextProps.error.data.detail : 'Something went wrong'
    }, () => {
      setTimeout(() => {
        this.setState({
          error: false
        })
      }, 5000)
    });
  }

  onChange (e) {
    this.setState({
      reference: e.target.value
    })
  };

  onCheck (e) {
    this.setState({
      country: e.target.value
    }, () => {
      this.getPopulation();
    })
  }

  getPopulation () {
      const { country } = this.state;
      this.props.getPopulation(country, 'male', 50)
  }

  render() {
    const { reference, country, error, errorMessage } = this.state;
    return (
      <div>
        <Header>
          {
            country
          }
        </Header>
        <Chart
          reference={reference}
        />
        <h5>
          <label htmlFor="reference">Choose reference line: </label>
          <input
            type='text' id="reference" onChange={this.onChange}
          />
        </h5>
        <div>
          <h3>
            Choose you country
          </h3>
          <h5>
            <label htmlFor="contactChoice1">China </label>
            <input type="radio" id="contactChoice1"
                   name="contact" value="China"
                   onChange={this.onCheck}
            />
          </h5>
          <h5>
            <label htmlFor="contactChoice2">Japan </label>
            <input type="radio" id="contactChoice2"
                   name="contact" value="Japan"
                   onChange={this.onCheck}
            />
          </h5>
          <h5>
            <label htmlFor="contactChoice3">France </label>
            <input type="radio" id="contactChoice3"
                   name="contact" value="France"
                   onChange={this.onCheck}
            />
          </h5>
        </div>
        {
          error
            ?
            <Error>
              {
                errorMessage
              }
            </Error>
            :
            null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error.population
});

export default connect(mapStateToProps, { getPopulation })(Dashboard);