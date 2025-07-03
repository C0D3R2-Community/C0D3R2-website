import { Container, Row, Col, Button } from "react-bootstrap";

import { assets } from "../assets/assets";

const JoinUs = () => {
  const roles = [
    "Developer", "Learner", "Teacher", "Designer",
    "Tech Engineer", "Manager", "Marketer",
    "Hobbyist", "Beginner", "Professional"
  ];

  return (
    <>
      <Container className="text-center py-5 mt-5">
        <h3 className="border border-dark border-2 border-dotted d-inline-block px-3 py-2 mb-3">
          <strong>Join us!</strong>
        </h3>
        <p>Interested in tech? Everyone is welcome!</p>
        <div className="d-flex justify-content-center align-items-center mb-4 flex-wrap gap-2">
          <span>Fill the Membership Form</span>
          <Button variant="primary">Join us!</Button>
        </div>
        <Row className="justify-content-center g-2">
          {roles.map((role, idx) => (
            <Col key={idx} xs="auto">
              <Button variant="outline-primary" size="sm">
                {role}
              </Button>
            </Col>
          ))}
        </Row>
        <div className="">
          <div>
            <img
              src={assets.OpenedArm}
              alt="Hands illustration"
              className="img-fluid"
            />
                    <div className="text-center w-30 p-3 bg-dark rounded h-30 m-0"></div>

          </div>
        </div>

      </Container>
    </>
  );
};

export default JoinUs;







// import React from "react";
// import { assets } from "../assets/assets";

// const JoinUs = () => {
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
//           <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
//             <button className="btn border text-weigh-bold">Join us!</button>
//             <p>Interested in tech? Everyone is welcome!</p>
//           </div>
//           <div className="d-flex justify-content-center align-items-center">
//             <p className="text-center">Fill the Membership Form</p>
//             <button className="btn border bg-primary">Join us!</button>
//           </div>

//           <div className="mt-2">
//             <div className="row-4">
//               <div className="col">
//                 <button className="btn border">Developer</button>
//                 <button className="btn border">Learner</button>
//                 <button className="btn border">Teacher</button>
//                 <button className="btn border">Designer</button>
//               </div>
//             </div>
//             <div className="row-3">
//               <div className="col">
//                 <button className="btn border">Tech Engineer</button>
//                 <button className="btn border">Manager</button>
//                 <button className="btn border">Marketer</button>
//               </div>
//             </div>
//             <div className="row-3">
//               <div className="col">
//                 <button className="btn border">Hobbies</button>
//                 <button className="btn border">Beginner</button>
//                 <button className="btn border">Professional</button>
//               </div>
//             </div>
//           </div>

//           <div className="d-flex flex-column justify-content-center align-items-center text-center m-0">
//             <img src={assets.OpenedArm} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="text-center w-30 p-3 bg-dark rounded h-30 m-0"></div>
//     </>
//   );
// };

// export default JoinUs;
