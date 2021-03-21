import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Footer, Navbar, NotFound, Spinner } from "./components";
import ScrollToTop from "./utils";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "./GlobalStyle";
import "./style.css";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const Stones = React.lazy(() => import("./pages/Stones/Stones"));
const Stores = React.lazy(() => import("./pages/Stores/Stores"));
// const About = React.lazy(() => import("./pages/About/About"));
const SinglePost = React.lazy(() =>
  import("./containers/SinglePost/SinglePost")
);
const SingleProduct = React.lazy(() =>
  import("./containers/SingleProduct/SingleProduct")
);

const TRACKING_ID = "G-4LQYYDFK5G";
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Router history={history}>
        <CssBaseline />
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:slug" exact component={SinglePost} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:slug" exact component={SingleProduct} />
          <Route path="/stone" exact component={Stones} />
          <Route path="/stone/:slug" exact component={SingleProduct} />
          <Route path="/stores" exact component={Stores} />
          {/* <Route path="/about" exact component={About} />  */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
