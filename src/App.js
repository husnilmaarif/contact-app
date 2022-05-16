import "./App.css";
import React, { useState } from "react";
import { uid } from "uid";
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
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("sukses");

    if (formData.name === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }

    // menambahkan kontak
    let data = [...contacts];
    data.push({ id: uid(), name: formData.name, telp: formData.telp });
    setContacts(data);
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-5">
        <h1 className="p-3">Daftar Kontak Saya</h1>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <br />
            <input type="text" placeholder="masukkan nama" name="name" className="form-control w-100" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="telp">Nomor telepon:</label>
            <br />
            <input type="text" placeholder="masukkan nomor" name="telp" className="form-control w-100" value={formData.telp} onChange={handleChange} />
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
