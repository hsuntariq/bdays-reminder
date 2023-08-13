import React from "react";

const SingleBirthday = ({ id, name, age, image, rem }) => {
  return (
    <>
      <div className="d-flex gap-3 my-2">
        <div className="image">
          <img
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={image}
            alt=""
          />
        </div>
        <div className="details">
          <h5>{name}</h5>
          <h6> {age} Years</h6>
        </div>
        <div className="button d-flex ms-auto align-self-center">
          <button onClick={() => rem(id)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleBirthday;
