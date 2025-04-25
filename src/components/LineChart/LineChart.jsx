import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (Array.isArray(historicalData?.prices)) {
      const formattedData = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        const formattedDate = new Date(item[0]).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        formattedData.push([formattedDate, item[1]]);
      });
      setData(formattedData);
    }
  }, [historicalData]);

  return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        height="400px"
        options={{
          title: "Price History",
          curveType: "function",
          legend: { position: "bottom" },
          hAxis: { title: "Date" },
          vAxis: { title: "Price" },
        }}
        legendToggle
      />
    </div>
  );
};

export default LineChart;
