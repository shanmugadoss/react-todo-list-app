import React from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    return (
        <div className="card">
            <h5 className="card-header">Create New Item</h5>
            <div className="card-body">
                <div className="form-group row">
                    <label className="col-2 col-form-label">Item Name</label>
                    <div className="col-8">
                        <input className="form-control" type="text" id="addItem" placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem