import { Filters } from "./../Filters/Filters";
import redCart from "../../assets/red-shopping-cart.svg";
import "./Header.css";

export function Header({ filters, changeFilters }) {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src={redCart} alt="cart" />
        <h1 className="header-title">FreshCo</h1>
      </div>
      <div className="filters-container">
        <Filters onChange={changeFilters} filters={filters} />
      </div>
    </header>
  );
}
