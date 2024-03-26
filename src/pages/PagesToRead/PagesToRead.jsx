/* eslint-disable react/prop-types */



import  { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import useLocalStorage from "../../Hooks/useLocalStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y}C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height}Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const { readBookData } = useLocalStorage();
  const [chartWidth, setChartWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const width =
        document.getElementById("chart-container")?.clientWidth || 800;
      setChartWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="chart-container"
      className="hero bg-[#1313130D] mb-20 min-h-[550px] rounded-3xl"
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={readBookData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="bookName"
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 7 }}
            angle={window.innerWidth >= 840 ? 0 : -45}
          />

          <YAxis />
          <Legend />
          <Tooltip />

          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBookData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
