interface CategoryBox {
  shop?: string;
}

const CategoryTag = ({ shop }: CategoryBox) => {
  let image = "🔎";
  let label = "전체";
  if (shop === "bakery") {
    image = "🥐";
    label = "베이커리";
  } else if (shop === "cafe") {
    image = "☕️";
    label = "카페";
  } else if (shop === "restaurant") {
    image = "🍽️";
    label = "맛집";
  }

  return (
    <>
      <div className="bg-bg-card border-border border-2 min-w-33 h-33 rounded-2xl flex flex-col justify-center items-center hover:bg-bg-warm">
        <p className="text-4xl">{image}</p>
        <p className="text-base font-semibold">{label}</p>
        <p className="text-xs text-text-muted">3곳</p>
      </div>
    </>
  );
};

export default CategoryTag;
