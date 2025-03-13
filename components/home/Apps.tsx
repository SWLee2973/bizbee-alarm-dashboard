import React from "react";

function Apps() {
  return (
    <section className="">
      <div className="card bg-base-300 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-lg">앱</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">앱 추가</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apps;
