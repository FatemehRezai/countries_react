    import React,{Component} from 'react';
    import world from '../world.svg';
    import back from '../_icons/arrow-left.svg';
    import '../_styles/bootstrap-grid.min.css'
    import {Input} from '../_components';
    import Axios from 'axios';
    import { withRouter } from "react-router-dom";
    import { Weather } from '../_components';
    import GoogleApiWrapper from '../_components/map.js';

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
                    <div className="country col-12 m-1 border-info d-flex flex-row justify-content-around align-items-center">
                        <div className="col-12 col-lg-3"><img src={state.flag} alt={"falg"} className="flag"/></div>
                        <div className="country-info col-12 col-lg-5 d-flex flex-column m-1 border-info">
                            <div className="container-fluid row item">
                                <div className="title">Name</div>
                                <div className="content"><span>{state.name}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Capital</div>
                                <div className="content"><span>{state.capital}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Region</div>
                                <div className="content"><span>{state.region}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Calling Codes</div>
                                <div className="content"><span>{state.callingCodes}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Population</div>
                                <div className="content"><span>{state.population}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Area</div>
                                <div className="content"><span>{state.area}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Currencies</div>
                                <div className="content"><span>{state.currencies[0].name}</span></div>
                            </div>
                            <div className="container-fluid row item">
                                <div className="title">Languages</div>
                                <div className="content"><span>{state.languages[0].name}</span></div>
                            </div>
                        </div>
                        <div className="weather col-12 col-lg-4 d-flex flex-column border-info">{this.state && <Weather city={this.state.capital} country={this.state.alpha2Code}/>}</div>
                    </div>
                    <div className="col-12 m-1">{this.state && <GoogleApiWrapper latlng={this.state.latlng} />}</div>
                </main> : <span>loading ...</span>}
            </>;
        }
    }

    withRouter(Country);
    export {Country}