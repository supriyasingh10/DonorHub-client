import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import { toast } from "react-toastify";
import moment from "moment";
import { FaTrashAlt } from "react-icons/fa";

const OrganisationList = () => {
  const [data, setData] = useState([]);

  const getOrg = async () => {
    try {
      const { data } = await API.get("/admin/organisation-list");
      if (data?.success) {
        setData(data?.organisationData);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getOrg();
  }, []);

  //Delete Function
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are you Sure want to delete this Organisation ?",
        "Yes!"
      );
      if (!answer) {
        return;
      }
      const { data } = await API.delete(`/admin/delete-organisation/${id}`);
      toast.success(data?.message);
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout>
      <h3 className="mx-auto hospital-heading">
        Organisation Details{" "}
        <i className="fa-solid fa-building-ngo" style={{ color: "#ffffff" }} />
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.organisationName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger deleteIcon"
                      onClick={() => handleDelete(record._id)}
                    >
                      <FaTrashAlt />
                    </button>
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

export default OrganisationList;
