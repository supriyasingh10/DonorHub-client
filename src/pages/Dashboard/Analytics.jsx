import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Layout/Header";
import { toast } from "react-toastify";
import API from "../../services/API";
const Analytics = () => {
  const [data, setData] = useState([]);
  const colors = [
    "#FFE5AD",
    "#FFA1F5",
    "#40DFEF",
    "#B4FF9F",
    "#F5F5F5",
    "#E8FFCE",
    "#F6FA70",
    "#F1F4DF",
  ];

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex flex-row flex-wrap analytics-container">
        {data?.map((record, i) => (
          <div
            key={i}
            className="analytics-card card m-2 p-1"
            style={{ width: "19rem", backgroundColor: `${colors[i]}` }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h1>
              <p className="card-text">
                Total In: <b>{record.totalIn}</b> (ml)
              </p>
              <p className="card-text">
                Total Out: <b>{record.totalOut}</b> (ml)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available: <b>{record.availableBlood}</b> (ml)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
