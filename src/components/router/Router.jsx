import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templetes/DefaultLayout";
import { HeaderOnly } from "../templetes/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
