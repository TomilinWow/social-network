import Header from './components/Header/Header';
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

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
                               render={() => <Dialogs/>}/>
                        <Route path='/profile'
                               render={() => <Profile store={props.store}/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
