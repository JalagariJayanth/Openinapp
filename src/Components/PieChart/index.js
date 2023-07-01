import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'



const Piechart = () => {
  const vaccinationByAgeDetails = [
    {name: 'Basic Tees', count: 250},
    {name: 'Custom Short Pants', count: 400},
    {name: 'Super Hoodies', count: 150},
  ]


  return (
    <ResponsiveContainer width="100%" height={192}>
      <PieChart>
        <Pie
          data={vaccinationByAgeDetails}
          cx="60%"
          cy="50%"
          outerRadius="85%"
          dataKey="count"
        >
          <Cell fill="#EE8484" />
          <Cell fill="#F6DC7D" />
          <Cell fill="#98D89E" />
        </Pie>

        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right" // Align legend items to the right
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart