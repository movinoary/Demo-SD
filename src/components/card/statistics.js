import ReactApexChart from "react-apexcharts";

function CardStatistics() {
  const series = [
    {
      name: "Nilai",
      data: [500000000],
    },
    {
      name: "Maximal",
      data: [500000000],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    colors: ["#4E9F3D", "#D8E9A8"],
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [2022],
    },
    title: {
      text: "anggaran",
      offsetX: 0,
      style: {
        fontSize: "20px",
      },
    },
    subtitle: {
      text: "anggaran",
      offsetX: 0,
      style: {
        fontSize: "13px",
      },
    },
  };
  return (
    <div>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={80}
        />
      </div>
    </div>
  );
}

export default CardStatistics;
