import React from "react";

function MenuMakanan(props) {
  return (
    <div style={{ border: "solid black" }} className="p-3 m-3">
      <h3>Nama Makanan: {props.makanan}</h3>
      <h3>Harga Makanan: {props.hargaMakanan}</h3>
    </div>
  );
}

export default MenuMakanan;
