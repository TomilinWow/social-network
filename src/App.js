import Header from './components/Header/Header';
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilesContainer from "./components/Profile/ProfilesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";

import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Tools/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize){
            return <Preloader />
        }
        return (
            <div className={s.app}>
                <div className={s.header}>
                    <div className={s.container}>
                        <HeaderContainer/>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.appContent}>
                        <Navbar/>
                        <div className={s.appWrapperContent}>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfilesContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/login'
                                   render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
