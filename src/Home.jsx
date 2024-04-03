import React from "react";
import { FcCurrencyExchange, FcSalesPerformance } from "react-icons/fc";
import { MdBorderColor, MdOutlineAccountBalanceWallet } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Jan",
      value: 5000,
    },
    {
      name: "Feb",
      value: 3500,
    },
    {
      name: "Mar",
      value: 7000,
    },
    {
      name: "Apr",
      value: 5500,
    },
    {
      name: "May",
      value: 6000,
    },
    {
      name: "Jun",
      value: 3000,
    },
    {
      name: "Jul",
      value: 6200,
    },
    {
      name: "Aug",
      value: 7100,
    },
    {
      name: "Sep",
      value: 6800,
    },
    {
      name: "Oct",
      value: 5600,
    },
    {
      name: "Nov",
      value: 5400,
    },
    {
      name: "Dec",
      value: 5700,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <FcCurrencyExchange className="card_icon" />
            <h3 className="earning">Earnings</h3>
            <p className="earnings-amount">$198k</p>
            <p className="earning-percent-increase">
              ↑37.8% <span className="this">this month</span>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <MdBorderColor className="card_icon" />
            <h3 className="order">Orders</h3>
            <p className="order-amount">$2.4k</p>
            <p className="order-percent-increase">
              ↑2% <span className="this">this month</span>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <MdOutlineAccountBalanceWallet className="card_icon" />
            <h3 className="balance">Balance</h3>
            <p className="balance-amount">$2.4k</p>
            <p className="balance-percent-increase">
              ↑2% <span className="this">this month</span>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <FcSalesPerformance className="card_icon" />
            <h3 className="sale">Total Sales</h3>
            <p className="sale-amount">$89k</p>
            <p className="sale-percent-increase">
              ↑11% <span className="this">this month</span>
            </p>
          </div>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 55,
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <XAxis className="xaxis" dataKey="name" axisLine={false} />
            <Tooltip />
            <Legend />
            {/* <CartesianGrid strokeDasharray="1 1" /> */}
            <Bar dataKey="value" fill="#f3f2fb" name="Aug" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart>
            <Tooltip />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
