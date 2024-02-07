import "./ReviewList.css";
import StarRating from "./StarRating";
// import { item } from "../mock.json";

function formatData(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>
          <StarRating selectedStars={item.rating} />
        </p>
        <p>{formatData(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}
function ReviewList({ items, onDelete }) {
  //console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
