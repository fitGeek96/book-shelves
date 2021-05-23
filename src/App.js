import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import Search from "./views/Search";
import Home from "./views/Home";
import Provider, {MyContext} from "./Provider/Index"

class BooksApp extends Component {
    render() {
        return (
            <div className="app">
                <Provider>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={() => (
                            <MyContext.Consumer>
                                {context => {
                                    return (<Home {...context} />)
                                }
                            }
                            </MyContext.Consumer>
                        )}/>
                        <Route 
                            exact 
                            path={'/search'} 
                            render={() => (
                              <MyContext.Consumer>
                                  {context => <Search {...context}/>}
                              </MyContext.Consumer>
                          )}/>
                    </Switch>
                </Provider>
            </div>
        );
    };
}

export default BooksApp;