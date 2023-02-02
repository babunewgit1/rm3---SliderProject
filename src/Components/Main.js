import Review from "./Review";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="review-main">
          <h2 className="text-center">Our Reveiw</h2>
          <span></span>
          <div className="review-wrapper">
            <Review />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
