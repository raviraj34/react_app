import countryFacts from "../api/CountryData.json";

export const About = () => {
    return (
      <div className="about-container">
        <div className="heading">
           <h2> Here are the Interesting Facts
            <br />
            we're proud of
            </h2>
        </div>
        <div className="cardcontainer">
        {countryFacts.map((country) => (
            <div className="card">
                <div className="container bg-blue-box">
                    <p className="cardTitle">{country.countryName}</p>
                    <p>
                        <span className="cardText">Capital:</span>
                        {country.capital}
                    </p>
                    <p>
                        <span className="cardText">Population:</span>
                        {country.population}
                    </p>
                    <p>
                        <span className="cardText">Intresting fact:</span>
                        {country.interestingFact}
                    </p>
                </div>
        
            </div>
        ))}
        
         
         
          
        </div>
      </div>
    )
}