import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Sidebar from "../../components/AdminComponents/Sidebar";
import { DoughnutChart, LineChart } from "./Chart.jsx";

function DashBox({ title, qty, qtyPercentage, profit }) {
  return (
    <div className="p-3 w-[300px] sm:w-[200px] border-1 border-gray-100 shadow-sm">
      <h3 className="text-sm">{title}</h3>
      <div className="flex gap-2">
        <h1 className="text-lg font-semibold">{qty}</h1>
        <div className="flex items-center gap-1">
          <p className="text-sm">{qtyPercentage}%</p>
          {profit ? (
            <FaArrowUp className="text-green-400" />
          ) : (
            <FaArrowDown className="text-red-500" />
          )}
        </div>
      </div>
      <p className="text-sm">since last month</p>
    </div>
  );
}
function Bar({ title, value }) {
  return (
    <div className="p-2">
      <h1 className="text-sm">{title}</h1>
      <div className="flex gap-2 justify-between items-center">
        <p className="text-[12px]">0%</p>
        <div className="h-3 w-full bg-gray-400 rounded-full">
          <div
            className={`h-[100%] bg-purple-500 rounded-full`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <p className="text-[12px]">{value > 100 ? "100" : `${value}%`}</p>
      </div>
    </div>
  );
}
const DashBoard = () => {
  console.log(String(new Date()).split("G"));
  return (
    <div className="w-full min-h-[100vh] grid grid-cols-1 gap-10 sm:grid-cols-[5fr_1fr] slm:gap-3   ">
      <div className="grid px-10  mt-13 ">
        <p className="text-center text-sm text-gray-500">
          Last change was on {String(new Date()).split("G")[0]}
        </p>
        <h1 className=" text-lg text-center sm:text-start font-bold">DashBoard</h1>
        <div className="w-full flex flex-col sm:flex-row items-center  sm:justify-center gap-8 sm:gap-15  sm:mt-10">
          <DashBox title={"views"} qty={123} qtyPercentage={30} profit={true} />
          <DashBox title={"views"} qty={123} qtyPercentage={30} profit={true} />
          <DashBox
            title={"views"}
            qty={123}
            qtyPercentage={30}
            profit={false}
          />
        </div>
        <div className="w-full">
          <LineChart />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:items-center sm:grid-cols-[2fr_1fr]">
          <div className="">
            <Bar title={"views"} value={40} />
            <Bar title={"views"} value={20} />
            <Bar title={"views"} value={70} />
          </div>
          <div className="">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default DashBoard;
