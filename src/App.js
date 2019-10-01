import React, { Component } from 'react';
// import Home from './components/Home';
import routes from './routes/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    render() {
        console.log(routes);
        return (
            <Router>
                <div className="App">
                    {/* <Home /> */}
                    {this.showContent(routes)}
                </div>
            </Router>
        );
    }
    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((el, index) => {
                return (<Route
                    key={index}
                    path={el.path}
                    exact={el.exact}
                    component={el.main}
                />
                );
            });
        }
        return <Switch>{result} </Switch>;
    }
}

export default App;
