import React from "react";

const CenterWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default CenterWrapper;
