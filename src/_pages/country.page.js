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
                    <div className="col-12 col-lg-6"><img src={state.flag} className="flag"/></div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-around align-items-center">
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
                    </div>
                </main> : <span>loading ...</span>}
                {state ? <main className="container-fluid row">
                    <div className="col-12 col-lg-6"><img src={state.flag} className="flag"/></div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-around align-items-center">
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
                </main> : <span>loading ...</span>} 
            </>;
        }
    }

    withRouter(Country);
    export {Country}