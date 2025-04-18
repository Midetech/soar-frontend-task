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
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  Colors,
  ChartDataLabels
);

const ExpenseDashboard = () => {
  const pieData = {
    labels: [" Entertainment", "Bill Expense", "Others", "Investment"],
    datasets: [
      {
        data: [20, 15, 35, 30],
        backgroundColor: [
          "#343C6A", // Blue for Entertainment
          "#FC7900", // Orange for Bill Expense
          "#232323", // Black for Others
          "#396AFF", // Dark blue for Investment
        ],
        borderWidth: 0,
        spacing: 10,
        offset: 20,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (
          value: number,
          ctx: {
            chart: { data: { labels: { [x: string]: string } } };
            dataIndex: string | number;
          }
        ) => {
          const label = ctx.chart.data.labels?.[ctx.dataIndex] || "";
          return `${
            label === "Others"
              ? `\u00A0\u00A0\u00A0`
              : `\u00A0\u00A0\u00A0\u00A0\u00A0`
          }${value}%\n${label}`;
        },
        font: {
          weight: "bold",
          size: 8,
        },
        align: "center",
        anchor: "center",
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#333",
        bodyColor: "#333",
        titleFont: {
          size: 13,
          weight: 700, // Use a numeric value or valid keyword like "bold"
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        borderColor: "#e0e0e0",
        borderWidth: 1,
        callbacks: {
          label: function (context: { label: string; parsed: number }) {
            const label = context.label || "";
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <Pie data={pieData} options={pieOptions}>
      {" "}
      {pieData.labels.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
    </Pie>
  );
};

export default ExpenseDashboard;
