import React, { Component} from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import LoadingComponent from './LoadingComponent';
import ReadData from './ReadData';
import WriteData from './WriteData';
import Balance from './Balance';

const Container = () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            console.log(drizzleContext);
            const { initialized, drizzleState, drizzle } = drizzleContext;
           
            return (
            <LoadingComponent initialized = {initialized}>
                <div style = 
    {{width : '70%'}, {padding: '10%'}}>
                 
                 <Balance drizzleState={drizzleState} index={0}/>
                 <WriteData drizzleState = {drizzleState} drizzle={drizzle} />
                 <ReadData drizzleState={drizzleState} drizzle={drizzle} />
                 
                 </div>
            </LoadingComponent>
            );
        }}
    </DrizzleContext.Consumer>
);

export default Container;
