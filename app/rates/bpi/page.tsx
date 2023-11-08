import BPIList from '@/components/BPIList';

const fetchBPI = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

const BPIPage = async () => {
  const data = await fetchBPI();
  const date = new Date(`${data.time.updated}`).toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  });

  {
    console.log('root');
  }

  return (
    <div>
      <h1>Chart Name: {data.chartName}</h1>
      <h4>Disclaimer: {data.disclaimer}</h4>
      <span>Updated At: {date}</span>
      <div>
        <BPIList bpis={data.bpi} />
      </div>
    </div>
  );
};

export default BPIPage;
