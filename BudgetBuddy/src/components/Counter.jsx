export default function Counter({ amount, listTransaction }) {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex  w-4/5 h-96 bg-secondary mt-12 rounded-lg">
        <div className="flex flex-col justify-center w-2/3 px-8">
          <p className="text-text font-serif text-4xl mb-8">
            Your total money is:
            {amount >= 0 ? (
              <span className="text-positive">$ {amount}</span>
            ) : (
              <span className="text-negative">$ -{Math.abs(amount)}</span>
            )}
          </p>
        </div>
        <div className="flex flex-col items-center  overflow-y-auto bg-primary text-text w-2/3 p-6 rounded-r-lg">
          <div className="bg-primary text-text pb-6 flex flex-col  w-1/3 h-96 justify-start items-start">
            {listTransaction.map((transaction, index) => (
              <div key={index} className="pb-4 ">
                {transaction.number > 0 ? (
                  <>
                    <p className="font-serif text-positive">
                      Value: {transaction.number}
                    </p>
                    <p className="font-serif text-positive">
                      Description: {transaction.text}
                    </p>
                    <p className="font-serif text-positive">
                      Date: {transaction.date}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-serif text-negative">
                      Value: {transaction.number}
                    </p>
                    <p className="font-serif text-negative">
                      Description: {transaction.text}
                    </p>
                    <p className="font-serif text-negative">
                      Date: {transaction.date}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
