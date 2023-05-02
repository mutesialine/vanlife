const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <div className="max-w-7xl mx-auto text-4xl pt-16 pb-32 px-6 md:px-12 flex justify-between items-center">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Income</h1>
        <p className="text-lg">
          Last <span>30 days</span>
        </p>
        <h2 className="text-5xl font-bold">$2,260</h2>
        <img className="graph" src="/images/Group3.webp" alt="Income graph" />
      </div>
      <div className=" space-y-12">
        <div className="flex gap-x-6 items-center">
          <h3 className="font-bold text-4xl">Your transactions (3)</h3>
          <p className="text-xl">
            Last <span>30 days</span>
          </p>
        </div>
        <div className="space-y-4">
          {transactionsData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-4 bg-white text-2xl "
            >
              <h3>${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
