    import React,{Component} from 'react';
    import world from '../world.svg';
    import back from '../_icons/arrow-left.svg';
    import '../_styles/bootstrap-grid.min.css'
    import {Input} from '../_components';
    import Axios from 'axios';
    import { withRouter } from "react-router-dom";

    class Country extends Component {

        constructor(props) {
            super(props);
            Axios.get('https://restcountries.eu/rest/v2/alpha/' + props.match.params.code).then(response=>{
                this.setState({...response.data})
            })
        }
        

        goBack = () => {
            this.props.history.push('/');
        }

        render() {
            const {state} = this;
            return <>
                <nav>
                    <img src={world} alt="world" />
                    <span>Country info - {state && state.name}</span>
                    <button onClick={this.goBack}><img src={back} alt="back" /></button>
                </nav>
                {state ? <main className="container-fluid row">
                    <div className="col-12 col-lg-4">code</div>
                    <div className="col-12 col-lg-4"><img src={state.flag} className="flag"/></div>
                    <div className="col-12 col-lg-4">weather</div>
                </main> : <span>loading ...</span>}
                {state ? <main className="container-fluid row">
                    <div className="col-12 col-lg-7"><span>{state.capital}</span></div>
                    <div className="col-12 col-lg-5"><img src={state.flag} className="flag"/></div>
                </main> : <span>loading ...</span>} 
            </>;
        }
    }

    withRouter(Country);
    export {Country}