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
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("sukses");
    let data = [...contacts];

    if (formData.name === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.telp = formData.telp;
        }
      });
    } else {
      // menambahkan kontak
      data.push({ id: uid(), name: formData.name, telp: formData.telp });
    }

    setContacts(data);
    // menghapus value input jika data berhasil ditambah atau diedit
    setFormData({ name: "", telp: "" });
    setIsUpdate({ id: null, status: false });
  }

  function handleEdit(id) {
    let data = [...contacts];
    let foundData = data.find((contact) => contact.id === id);
    setFormData({ name: foundData.name, telp: foundData.telp });
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    let data = [...contacts];
    let filteredData = data.filter((contact) => contact.id !== id);
    if (window.confirm("Yakin mau menghapus data?")) {
      setContacts(filteredData);
    }
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
        <List data={contacts} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
