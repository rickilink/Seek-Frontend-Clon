import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black px-3">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h5>SEEK</h5>
            <p>Solving problems through design & innovation.</p>
          </div>
          <div className="col-4">
            <h5>@ All rights reserved Seek 2023</h5>
            <div className="row">
              <p className="col-8">hola@seek.pe</p>
              <div className="col-2 border px-2 py-1 text-center rounded-2 ">
                In
              </div>
              <div className="col-2 border px-2 py-1 text-center rounded-2">
                In
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
