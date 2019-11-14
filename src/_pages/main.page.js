import React from 'react';
import world from '../world.svg';
import {Input} from '../_components';

function Main() {
    return <div className="full-page">
        <img src={world} alt="world" className="world" />
        <Input />
    </div>;
}

export {Main}