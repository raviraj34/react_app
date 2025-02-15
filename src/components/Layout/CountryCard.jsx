import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="card">
      <div className="container">
        <img src={flags.svg} alt={flags.alt} />

        <div className="">
          <p className="cardTitle">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="cardText">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="cardText">Region:</span> {region}
          </p>
          <p>
            <span className="cardText">Capital:</span>
            {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button className="btn">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};