import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./ui/Loader";
import { getCountryIndData } from "../../api/postApi";

export const CountryDetailes = () => {
    const params = useParams();

    const [ispending, startTransition] = useTransition();
    const [country, setCountries] = useState();


    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            console.log(res);
            if (res.status === 200) {
                setCountries(res.data[0]);
            }


        });
    }, []);


    if (ispending) return <Loader />;
    console.log(params);

    return( <section className="container details " style={{ margin: "7rem 15rem" }}>
        <div className="container-card bg-white-box">
            {country && (
                <div className="country-flag">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="flag"
                    />
                    <div className="country-content">
                        <p className="cardTitle"> {country.name.official} </p>

                        <div className="infoContainer">
                            <p>
                                <span className="card-description cardText"> Native Names:</span>
                                {Object.keys(country.name.nativeName)
                                    .map((key) => country.name.nativeName[key].common)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description cardText"> Population: </span>
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="card-description cardText"> Region:</span>
                                {country.region}
                            </p>
                            <p>
                                <span className="card-description cardText"> Sub Region:</span>
                                {country.subregion}
                            </p>
                            <p>
                                <span className="card-description cardText"> Capital:</span>
                                {country.capital}
                            </p>

                            <p>
                                <span className="card-description cardText">Top Level Domain:</span>
                                {country.tld[0]}
                            </p>
                            <p>
                                <span className="card-description cardText"> Currencies: </span>
                                {Object.keys(country.currencies)
                                    .map((curElem) => country.currencies[curElem].name)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description cardText">Languages: </span>
                                {Object.keys(country.languages)
                                    .map((key) => country.languages[key])
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="country-card-backBtn">
                <NavLink to="/country" className="backBtn">
                    <button>Go Back</button>
                </NavLink>
            </div>
        </div>
         </section>
    );

};