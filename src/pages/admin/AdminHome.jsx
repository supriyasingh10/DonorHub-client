import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1 style={{ textAlign: "center" }}>
            Welcome to <b className="text-danger">DonorHub</b>{" "}
            <i className="text-success">{user?.name}</i>
          </h1>
        </div>
        <hr />
        <p style={{ fontSize: "18px" }}>
          DonorHub is a comprehensive platform designed to bridge the gap
          between blood donors, hospitals, and organizations. By offering a
          user-friendly interface and powerful tools, DonorHub ensures that the
          life-saving process of blood donation becomes smoother, faster, and
          more accessible to everyone involved.
        </p>
        <p style={{ fontSize: "18px" }}>
          For <b>Donors</b>, DonorHub simplifies the process of finding nearby
          donation centers and tracking donation history. It allows donors to
          make a real impact by providing life-saving blood to those in need and
          staying updated on upcoming donation drives.{" "}
        </p>
        <p style={{ fontSize: "18px" }}>
          {" "}
          <b>Hospitals</b> benefit from quick access to a database of registered
          donors, enabling them to request blood in emergencies and track
          availability in real-time, ensuring that critical blood shortages are
          minimized.{" "}
        </p>
        <p style={{ fontSize: "18px" }}>
          <b>Organizations</b> can manage blood donation drives more
          efficiently, connect with donors, and collaborate with hospitals to
          ensure that every unit of blood collected reaches the right hands.{" "}
        </p>
        <p style={{ fontSize: "18px" }}>
          As an <b>Admin</b>, you have the critical role of managing these
          interactions, overseeing user activities, and ensuring that DonorHub
          runs smoothly. Your efforts contribute to saving lives and fostering a
          community that values compassion, health, and support for one another.
        </p>
        <h5>
          <i>Together, through DonorHub, we can make a difference!</i>
        </h5>
      </div>
    </Layout>
  );
};

export default AdminHome;
