import ReactApexChart from "react-apexcharts";
import * as cssModule from "../../styles/index";

function WidgetStatistics({ title, icon, value, percen }) {
  const series = [
    {
      name: title,
      data: [value],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 10,
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#3a3535"],
        },
      },
    },
    stroke: {
      width: 0,
    },
    colors: ["#e45826"],
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Process 1"],
    },
    yaxis: {
      max: 500000000,
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <div className={cssModule.Widget.widgetStatistics}>
      <div>
        <div>
          <span>{icon}</span>
          <h1>{title}</h1>
        </div>
        <p>{percen}</p>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={70}
        width="100%"
      />
    </div>
  );
}

export default WidgetStatistics;
