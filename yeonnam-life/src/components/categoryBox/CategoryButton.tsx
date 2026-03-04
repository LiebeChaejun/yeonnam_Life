import React from "react";

interface Category {
  shop: string;
}

const CategoryButton = ({ shop }: Category) => {
  let label = "기타";
  if (shop === "bakery") {
    label = "🥐 베이커리";
  } else if (shop === "restaurant") {
    label = "🍽️ 식당";
  } else if (shop === "cafe") {
    label = "☕️ 카페";
  }

  return (
    <>
      <button className="bg-bg-warm text-accent-warm rounded-2xl px-2 py-1">
        {label}
      </button>
    </>
  );
};

export default CategoryButton;
