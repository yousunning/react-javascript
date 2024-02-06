import ReviewList from "./ReviewList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItem] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItem = items.sort((a, b) => b[order] - a[order]);
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItem(nextItems);
  };
  const handleNewestCilck = () => setOrder("createAt");
  const handleBestCilck = () => setOrder("rating");
  return (
    //정렬버튼
    <div>
      <div>
        <button onClick={handleNewestCilck}>최신순</button>
        <button onClick={handleBestCilck}>인기순</button>
        <ReviewList items={sortedItem} onDelete={handleDelete} />
      </div>
    </div>
  );
}
export default App;
