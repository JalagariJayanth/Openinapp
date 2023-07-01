import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts'
  

  const Graph = props => {
    const {GraphDataDetails} = props;
    return (
        <ResponsiveContainer width="100%" height={210}>
      <LineChart data={GraphDataDetails} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Guest" stroke="#e0162e" />
        <Line type="monotone" dataKey="User" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    )
}
        

 
  
  export default Graph