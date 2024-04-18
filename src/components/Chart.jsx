import { useState } from "react"
import { Tooltip,  ResponsiveContainer, AreaChart, Area } from 'recharts';
import { week, day, month, year } from "../data/cryptodata";

const data = [
    { value: 118 },
    {  value: 210 },
    { value: 280 },
    {  value: 210 },
    {  value: 213},
    {  value: 119 },
  ];
// const data = week;
  const gradientColors = ['#fc8f15', '#ffc63f'];

const Chart = () => {
 
    const [activeTab, setActiveTab] = useState('week')
    const handleTab = (e) => {
      setActiveTab(e.target.id)
    }

    return (
    <section className="chart">
        {/* tabs */}
        <div className="tabs">
        <p className={activeTab === 'day' ? 'active' : null} id="day" onClick={handleTab}>Day</p>
        <p className={activeTab === 'week' ? 'active' : null} id="week" onClick={handleTab}>Week</p>
        <p className={activeTab === 'month' ? 'active' : null} id="month" onClick={handleTab}>Month</p>
        <p className={activeTab === 'year' ? 'active' : null} id="year" onClick={handleTab}>Year</p>
        </div>

        {/* Chart */}

        <div className="chart-area">
        <div className="units">
            <p className="low">
                <span className="dot"></span>
                <span className="amt">Lower: <span>$4.895</span></span>
            </p>
            <p className="high">
                <span className="dot"></span>
                <span className="amt">Higher: <span>$6.897</span></span>
            </p>
        </div>
        <ResponsiveContainer width="100%" height={110} >
            <AreaChart data={data} margin={{ top: 10, right: 30, left:0, bottom: 0 }} className="chart-container">
            <defs>
          {/* Create a linear gradient */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientColors[0]} />
            <stop offset="100%" stopColor={gradientColors[1]} />
          </linearGradient>
        </defs>
         
            <Tooltip />
            <Area type="monotone"  dataKey="value" strokeWidth={'3'} stroke="url(#lineGradient)" activeDot={{ r: 8, stroke: 'none' }}fill="#ffdfbf"/>
            <circle cx="20" cy="86" r="4" fill="#ffa629" stroke="url(#lineGradient)" />
            <text x="30" y="10" dy="80" className="ct-txt">
              1BTC = $5.483
             </text>
            </AreaChart>
          
        </ResponsiveContainer>

        </div>

    </section>
  )
}

export default Chart
