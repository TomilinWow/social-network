import Header from './components/Header/Header';
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfilesContainer from "./components/Profile/ProfilesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

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
                               render={() => <DialogsContainer />}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfilesContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login />}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
