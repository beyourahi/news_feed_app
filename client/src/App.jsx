import { Switch, Route } from "react-router-dom";
import Wrapper from "./Wrapper";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import PrivateRoute from "./component/routing/PrivateRoute";
import Home from "./component/pages/Home";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => (
    <Wrapper>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </Wrapper>
);

export default App;
