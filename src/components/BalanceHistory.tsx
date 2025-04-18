import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  // Sample data - replace with your actual values
  const data = {
    labels,
    datasets: [
      {
        data: [120, 330, 250, 480, 770, 220, 430, 570, 240, 630],
        fill: true,
        backgroundColor: "rgba(45, 96, 255, 0.25)",
        borderColor: "rgb(65, 105, 225)",
        tension: 0.4,
        pointRadius: 0, // Remove visible points
        pointHoverRadius: 6, // Keep hover points for tooltip interaction
        pointHoverBackgroundColor: "rgb(65, 105, 225)",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          color: "#aaa",
          font: {
            size: 14,
          },
        },
      },
      y: {
        min: 0,
        max: 800,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
        },
        ticks: {
          color: "#aaa",
          font: {
            size: 14,
          },
          stepSize: 200,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 14,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        borderColor: "#e0e0e0",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          title: function (context: { label: string }[]) {
            return context[0].label;
          },
          label: function (tooltipItem: { raw: unknown }) {
            return `Balance: ${tooltipItem.raw as string}`;
          },
          labelTextColor: function () {
            return "#333";
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
