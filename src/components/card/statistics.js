import ReactApexChart from "react-apexcharts";
import * as cssModule from "../../styles/index";

function CardStatistics({ title, icon, value, percen }) {
  const series = [
    {
      name: title,
      data: [value],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 70,
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        colors: {
          backgroundBarColors: ["#22577e"],
        },
      },
    },
    stroke: {
      width: 0,
    },
    colors: ["#95d1cc"],
    fill: {
      opacity: 1,
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: percen,
      style: {
        fontSize: "20px",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Process 1"],
    },
    yaxis: {
      max: 500000000,
    },
  };
  return (
    <div className={cssModule.Components.cardStatistics}>
      <div>
        <p>{icon}</p>
        <h1>{title}</h1>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={80}
        width="100%"
      />
    </div>
  );
}

export default CardStatistics;
