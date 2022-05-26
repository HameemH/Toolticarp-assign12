import React from 'react';

const OrderDeleteModal = ({refetch,setDeleteOrder,deleteOrder}) => {
    console.log(deleteOrder);
    const {_id,name,product, quantity} = deleteOrder;
    const handleDelete = () => {
        fetch(`https://peaceful-stream-38691.herokuapp.com/orders/${_id}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert(`${product} is deleted.`)
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Hey {name},Are you sure you want to cancel Your Order for {quantity} Pcs of ${product}!</h3>
                <p className="py-4"></p>
                <div className="modal-action">
                <button  className="btn btn-xs btn-error" onClick={()=>handleDelete()}>Delete</button>
                    <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                </div>
            </div>
        </div>
    </div >
);
};

export default OrderDeleteModal;