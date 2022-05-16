import React from "react";

function MenuMinuman(props) {
  return (
    <div style={{ border: "solid black" }} className="p-3 m-3">
      <h3>Nama Minuman: {props.minuman}</h3>
      <h3>Harga Minuman: Rp. {props.hargaMinuman}</h3>
    </div>
  );
}

export default MenuMinuman;
