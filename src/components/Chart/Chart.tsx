import {
  CartesianGrid, Legend,
  Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";

const data = [
  {
    name: "Jan",
    product: 20,
    revanue: 8000000,
  },
  {
    name: "Feb",
    product: 30,
    revanue: 1000000,
  },
  {
    name: "Tue",
    product: 40,
    revanue: 12000000,
  },
  {
    name: "Apr",
    product: 50,
    revanue: 14000000,
  },
  {
    name: "May",
    product: 50,
    revanue: 14000000,
  },
  {
    name: "Jun",
    product: 20,
    revanue: 8000000,
  },
  {
    name: "July",
    product: 15,
    revanue: 7500000,
  },
  {
    name: "Aug",
    product: 35,
    revanue: 14500000,
  },
  {
    name: "Oct",
    product: 30,
    revanue: 13000000,
  },
  {
    name: "Nov",
    product: 20,
    revanue: 8000000,
  },
  {
    name: "Dec",
    product: 50,
    revanue: 30000000,
  },
];
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export const Productchart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export const Revanuechart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="revanue" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="product" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
