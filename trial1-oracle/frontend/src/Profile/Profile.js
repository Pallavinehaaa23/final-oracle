import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../Mainscreen/Mainscreen";
// import "./ProfileScreen.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../actions/userActions";
import Loading from "../handler/Loading";
// import ErrorMsg from "../handler/Errormsg";
import Errormsg from "../handler/Errormsg";

const Profile = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");
  const [skills, setskills] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//   const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userinfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
//   const { loading, error, success } = userUpdate;
const history=useNavigate();
  useEffect(() => {
    if (!userinfo) {
      history("/");
    } else {
      setName(userinfo.name);
      setEmail(userinfo.email);
      setMobile(userinfo.mobile);
      setskills(userinfo.skills);
    }
  }, [history, userinfo]);

//   const postDetails = (pics) => {
//     setPicMessage(null);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "notezipper");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           console.log(pic);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, mobile,skills}));
  };

  return (
    <MainScreen title="EDIT PROFILE">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {/* {loading && <Loading />}
              {success && (
                <Errormsg variant="success">
                  Updated Successfully
                </Errormsg>
              )} */}
              {/* {error && <Errormsg variant="danger">{error}</Errormsg>} */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              
              </Form.Group>
              <Form.Group controlId="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Skills"
                  value={skills}
                  onChange={(e) => setskills(e.target.value)}
                ></Form.Control>
              
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {/* {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group> */}
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <img src={pic} alt={name} className="profilePic" /> */}
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default Profile;