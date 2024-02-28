import React from "react";

const Playground = () => {
  return (
    <div>
      <Box />
      <Box />
      <Box />
    </div>
  );
};

const Box = () => {
  return <div className="w-20 h-20 bg-white">Box</div>;
};

export default Playground;
