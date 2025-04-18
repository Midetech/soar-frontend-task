/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Tooltip as ChartTooltip,
  Colors,
  Legend,
  LinearScale,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Typography from "./Typography";
import { Card } from "./ui/card";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  Colors
);

const WeeklyActivity = () => {
  const weeklyData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [470, 340, 320, 470, 150, 380, 390],
        backgroundColor: "#232323",
        borderRadius: 6,
        barThickness: 20,
      },
      {
        label: "Deposit",
        data: [230, 120, 260, 350, 230, 230, 330],
        backgroundColor: "#396AFF",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#aaa",
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
          drawBorder: false,
        },
        ticks: {
          color: "#aaa",
          stepSize: 100,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8,
        },
      },
      // tooltip: {
      //   backgroundColor: "white",
      //   titleColor: "#333",
      //   bodyColor: "#333",
      //   titleFont: {
      //     size: 13,
      //     weight: 700,
      //   },
      //   bodyFont: {
      //     size: 12,
      //   },
      //   padding: 10,
      //   borderColor: "#e0e0e0",
      //   borderWidth: 1,
      //   callbacks: {
      //     title: function (context: { label: any }[]) {
      //       return context[0].label;
      //     },
      //     label: function (context: any) {
      //       return `${context.dataset.label}: $${context.raw}`;
      //     },
      //   },
      // },
    },
  };

  return (
    <div className="flex flex-col gap-y-[20px] col-span-2">
      <Typography text="Weekly Activity" />
      <Card className="w-full h-[276px] bg-white shadow-md p-4">
        <Bar data={weeklyData} options={barOptions} />
      </Card>
    </div>
  );
};

export default WeeklyActivity;
