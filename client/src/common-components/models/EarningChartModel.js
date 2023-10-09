import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data, options }) => {
  const [activeBar, setActiveBar] = useState(null);

  const [earningChartLabels, setEarningChartLabels] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const earningChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        maxWidth: 10,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const [earningsReportdata, setEarningsReportdata] = useState({
    labels: earningChartLabels,
    datasets: [
      {
        label: "Series A",
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
        backgroundColor: "#556ee6",
        barThickness: 8,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
      },
      {
        label: "Series B",
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
        backgroundColor: "#f1b44c",
        barThickness: 8,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
      },
      {
        label: "Series C",
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
        backgroundColor: "#34c38f",
        barThickness: 8,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
      },
    ],
  });

  return (
    <div>
      <Bar options={earningChartOptions} data={earningsReportdata} />
    </div>
  );
};

export const DoughnutChart = () => {
  const [payoutChartLabels, setPayoutChartLabels] = useState([
    "Paid",
    "UnPaid",
  ]);

  const payoutChartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        maxWidth: 5,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    cutoutPercentage: 85,
  };

  const [payoutChartData, setPayoutChartData] = useState({
    labels: payoutChartLabels,

    datasets: [
      {
        data: [44, 56],
        backgroundColor: ["#f46a6a", "#34c38f"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        borderWidth: 2,
        borderColor: "white",
      },
    ],
  });

  return (
    <div>
      <Doughnut options={payoutChartOptions} data={payoutChartData} />
    </div>
  );
};
