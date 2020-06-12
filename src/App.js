import React, { Component} from 'react';
import { Drizzle, generateStore } from '@drizzle/store';
import { DrizzleContext } from '@drizzle/react-plugin';
import drizzleOptions from './drizzleOptions';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';


const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);


class App extends Component {
  render() {
  return (<div>
    <DrizzleContext.Provider drizzle={drizzle}>
      <Container />
    </DrizzleContext.Provider>
    </div>
  );
}
}
export default App;
