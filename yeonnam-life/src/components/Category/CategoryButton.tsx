interface Category {
  isButton: boolean;
  shop?: string;
}

const CategoryButton = ({ isButton, shop }: Category) => {
  let label = "✨ 전체";
  if (shop === "bakery") {
    label = "🥐 베이커리";
  } else if (shop === "restaurant") {
    label = "🍽️ 식당";
  } else if (shop === "cafe") {
    label = "☕️ 카페";
  }

  if (isButton === true) {
    return (
      <li className="bg-bg-card rounded-full px-3 py-2 text-text-secondary border-2 border-bg-warm">
        {label}
      </li>
    );
  } else {
    return (
      <>
        <button className="bg-bg-warm text-accent-warm rounded-2xl px-2 py-1">
          {label}
        </button>
      </>
    );
  }
};

export default CategoryButton;
