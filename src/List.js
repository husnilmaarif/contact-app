import React from "react";

function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group p-3">
      {data.map((contact) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div>
                <button className="btn btn-sm btn-link" onClick={() => handleEdit(contact.id)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-link" onClick={() => handleDelete(contact.id)}>
                  Delete
                </button>
              </div>
            </div>
            <p className="mb-1">{contact.telp}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
