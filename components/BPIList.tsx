import BPI from './BPI';

const BPIList = (bpis) => {
  return (
    <div>
      {Object.keys(bpis).map((key) => {
        {
          console.log('Inside return');
          console.log(bpis[key]);
        }
        return <BPI bpi={bpis[key]} key={bpis[key].code} />;
      })}
    </div>
  );
};

export default BPIList;
