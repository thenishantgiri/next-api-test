// const BPI = ({ code, symbol, rate, description, rate_float }: props) => {
const BPI = (bpi) => {
  console.log('BPI Component');
  console.log(bpi);
  return (
    <div>
      <section>
        <span>Code: {bpi.code}</span>
      </section>
      <section>
        <span>Symbol: {bpi.symbol}</span>
      </section>
      <section>
        <span>Rate: {bpi.rate}</span>
      </section>
      <section>
        <span>Description: {bpi.description}</span>
      </section>
      <section>
        <span>Rate (in floating point): {bpi.rate_float}</span>
      </section>
    </div>
  );
};

export default BPI;
