import { memo } from "react";

function Food({ image, name, reviews, tags, time }: { image: string, name: string, reviews: number, tags: [], time: string }) {
    let numberOfStar = [0, 1, 2, 3, 4];

    return (
        <div className="food-card">
            <div className="background-food" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="description-card">
                <div className="nameAndHeart d-flex align-items-center justify-content-between">
                    <h3>{name}</h3>
                    <i className="fas fa-heart"></i>
                </div>
                <div className="starsAndReview d-flex">
                    <div className="stars">
                        {numberOfStar.map((e: any, i: any) =>
                            <i className="far fa-star"></i>
                        )}
                    </div>
                    <div className="review">{reviews} Reviews</div>
                </div>
                <div className="tagsAndTime d-flex align-items-center justify-content-between">
                    <div className="tags d-flex">
                        {tags.map((tag: any, i: any) => {
                            return <p className="d-flex align-items-center justify-content-center" key={i}>{tag}</p>
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