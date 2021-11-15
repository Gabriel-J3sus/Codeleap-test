import { useSelector } from "react-redux";
import { 
  Route, 
  BrowserRouter, 
  Switch,
  Redirect
} from "react-router-dom";

import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { RootState } from "./redux";

export function Routes() {
  const username = useSelector<RootState>(state => state.username) as string

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />

        {!username ? (
          <Redirect from="/" to="/signup" />
        ) : (
          <Route exact path="/" component={Main} />
        )}
      </Switch>    
    </BrowserRouter>
  )
}