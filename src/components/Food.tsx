import { url } from "inspector";
import { memo } from "react";

function Food({ image, name, stars, reviews, tags, time } : { image: string, name: string, stars: number, reviews: number, tags: [], time: string }) {
    return (
        <div className="food-card">
            {/* <div className="background-food" style={{ backgroundImage: url(`${image}`) }}> */}

            {/* </div> */}
            <div className="description-card">
                <div className="nameAndHeart">
                    <h3>{name}</h3>
                    <p>heart</p>
                </div>
                <div className="starsAndReview">
                    <div className="stars">{stars}</div>
                    <div className="review">{reviews} Reviews</div>
                </div>
                <div className="tagsAndTime">
                    <div className="tags">
                        {tags.map((tag: any, i:any) => {
                            return <p key={i}>{tag}</p>
                        })}
                    </div>
                    <div className="time">
                        <div className="clockIcon"></div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Food);