import { TbArrowNarrowRightDashed } from "react-icons/tb";
export const HeroSection = () => {
    return (
        <main>
        <div className="mainsection">
            <div className="main-left">
                <h1 className="heading-xl">Explore the World,
                    One Country at a Time</h1>

                <p>
                    Discover the history, culture, and beauty of every country in the world. Get inspired by the diverse landscapes, vibrant cultures, and unique traditions that make each country a unique and fascinating place to visit.
                </p>
                <button className="btn text-bold">Start Exploring<TbArrowNarrowRightDashed /></button>

            </div>
            <div className="main-right">
                <img src="/images/world.png" alt="World Image" className="banner-img" />
            </div>

        </div>

    </main>
    )
}