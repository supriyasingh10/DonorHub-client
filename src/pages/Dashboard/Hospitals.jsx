import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { toast } from "react-toastify";
import moment from "moment";

const Hospitals = () => {
  const [data, setData] = useState([]);

  const getHospitals = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospital");
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);
  return (
    <Layout>
      <h3 className="mx-auto hospital-heading">
        Hospital Details{" "}
        <i className="fa-solid fa-hospital mx-2" style={{ color: "#ffffff" }} />
      </h3>
      <div className="container">
        <div className="container donar-data">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.hospitalName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Hospitals;
