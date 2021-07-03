import { Switch, Route } from "react-router-dom";
import Wrapper from "./Wrapper";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

const App = () => (
    <Wrapper>
        {/* <Navbar /> */}
        <div className="container">
            <Switch>
                {/* <PrivateRoute exact path="/" component={Home} /> */}

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </div>
    </Wrapper>
);

export default App;
