import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";

const Layout = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/:id" component={ProductDetail} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Layout;
