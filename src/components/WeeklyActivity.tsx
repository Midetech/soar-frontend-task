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
import { fetcher } from "components/services/http-requests";
import useSWR from "swr";

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
  const { data } = useSWR("/api/chart/weekly-activity", fetcher);

  console.log(data);

  const weeklyData = {
    labels: data?.labels,
    datasets: [
      {
        label: "Withdraw",
        data: data?.data?.withdraw,
        backgroundColor: "#232323",
        borderRadius: 6,
        barThickness: 20,
      },
      {
        label: "Deposit",
        data: data?.data?.deposit,
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
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 13,
          weight: 700,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        borderColor: "#e0e0e0",
        borderWidth: 1,
        callbacks: {
          title: function (context: { label: any }[]) {
            return context[0].label;
          },
          label: function (context: any) {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-y-[20px] col-span-2">
      <Typography text="Weekly Activity" />
      <Card className="w-full h-[276px] bg-white p-4">
        <Bar data={weeklyData} options={barOptions} />
      </Card>
    </div>
  );
};

export default WeeklyActivity;
