// Library
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.56);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  transition: 0.3s;
`;

const Spinner = ({ show }) => {
  return (
    <Wrapper
      className={`${
        show ? "d-flex" : "d-none"
      } position-fixed  align-items-center justify-content-center`}
    >
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden" />
      </div>
    </Wrapper>
  );
};

export default Spinner;
