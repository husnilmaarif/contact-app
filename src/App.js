import "./App.css";
import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Husnil",
      telp: "081234567890",
    },
    {
      id: 2,
      name: "Maarif",
      telp: "082134343544",
    },
  ]);
  const [formData, setFormData] = useState({ name: "", telp: "" });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.value] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.prefentDefault();
    alert("sukses");
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-5">
        <h1 className="p-3">Daftar Kontak Saya</h1>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Nama:</label>
            <br />
            <input type="text" placeholder="masukkan nama" name="name" className="w-100" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-control mt-3">
            <label htmlFor="telp">Nomor telepon:</label>
            <br />
            <input type="text" placeholder="masukkan nomor" name="telp" className="w-100" value={formData.telp} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Simpan
          </button>
        </form>
        <List data={contacts} />
      </div>
    </div>
  );
};

export default App;
