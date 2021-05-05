import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Cake from './Cake';
import Customers from './Customers';

const Navigation = () => {
    return (
        <BrowserRouter>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cakes">Cakes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/customers">Customers</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <b> Cupcakes and Co.</b>
                        </span>
                    </div>
                </div>
            </nav>

            <Route exact path="/">
                <Login />
            </Route>

            <Route path="/cakes">
                <Cake />
            </Route>

            <Route path="/customers">
                <Customers />
            </Route>
        </BrowserRouter>
    );
}
export default Navigation;