import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {Typography } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export default function Barchart() {
    const [days, setDays] = React.useState('');

    const handleChange = (event) => {
      setDays(event.target.value);
    };
  return (
    <>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin: '1rem', alignItems: 'center'}}>
        <Typography>PM 2.5</Typography>
        <FormControl  style={{marginLeft: "30%", width: "17%"}}>
        <InputLabel id="demo-simple-select-label">Select days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          onChange={handleChange}
        >
          <MenuItem value={10}>Last 10 days</MenuItem>
          <MenuItem value={20}>Last 20 days</MenuItem>
          <MenuItem value={30}>Last 30 days</MenuItem>
        </Select>
        </FormControl>
        </div>
        <ComposedChart
        width={500}
        height={200}
        data={data}
        margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
        }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
            label={{ position: "insideBottomRight", offset: 0 }}
            scale="band"
        />
        <YAxis label={{angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
    </>
  );
}
