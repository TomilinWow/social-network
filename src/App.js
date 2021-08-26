import Header from './components/Header/Header';
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className={s.app}>
            <div className={s.header}>
                <div className={s.container}>
                    <Header/>
                </div>
            </div>
            <div className={s.container}>
                <div className={s.appContent}>
                    <Navbar/>
                    <div className={s.appWrapperContent}>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer />}/>
                        <Route path='/profile'
                               render={() => <Profile/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
