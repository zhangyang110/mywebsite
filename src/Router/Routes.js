import React from 'react'
import App from '../App'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory,IndexRedirect} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import * as reducers from '../Reducers/reducers'
import { Picture, Any} from '../component'

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

class Routes extends React.Component {

    render() {
        // console.log(store.getState().reducers.num);
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/"  component={App}>
                        <IndexRedirect  to='/picture'/>
                        <Route path="/picture" component={Picture}/>
                        <Route path="/any" component={Any}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default Routes

