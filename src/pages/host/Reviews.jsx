import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto text-4xl py-16 px-6 md:px-12  flex  flex-col md:flex-row gap-y-6 justify-between gap-x-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center">
          <h2>Your reviews</h2>
          <p className="text-xl">
            Last <span>30 days</span>
          </p>
        </div>
        <img className="w-full" src="/images/Group2.webp" alt="Review graph" />
      </div>
      <div className="text-xl md:w-1/2">
        <h3 className="font-bold">Reviews (2)</h3>
        {reviewsData.map((review) => (
          <div key={review.id}>
            <div className=" space-y-2">
              <div className="flex pt-6">
                {Array(5)
                  .fill(<AiFillStar />)
                  .map((star, index) => (
                    <div key={index} className="text-orange-500">
                      {star}
                    </div>
                  ))}
              </div>

              <div className="flex gap-x-2">
                <p className="font-bold">{review.name}</p>
                <p>{review.date}</p>
              </div>
              <p>{review.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
