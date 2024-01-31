import React, { useEffect } from "react";
import Highcharts from "highcharts";
const Graph = () => {
  useEffect(() => {
    // Chart configuration
    const options = {
      chart: {
        type: "line",
        height: 400,
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: ["Sep 11", "Sep 12", "Sep 13", "Sep 14", "Sep 15"],
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          enabled: false,
          format: "{value}%",
        },
      },
      legend: {
        enabled: false, // Hide the legend
      },
      yAxis: {
        gridLineColor: "#ECEDF1",
        gridLineWidth: 1,
        gridLineDashStyle: "Dash",
      },
      series: [
        {
          name: "Series 1",
          data: [7, 9, 7.61, 9.5, 8.0],
          marker: {
            enabled: false,
          },
        },
        {
          name: "Series 2",
          data: [7, 8.5, 7.11, 9, 8.6],
          marker: {
            enabled: false,
          },
        },
      ],
    };

    // Create the chart
    Highcharts.chart("line-chart-container", options);
  }, []);
  return <div id="line-chart-container"></div>;
};

export default Graph;
