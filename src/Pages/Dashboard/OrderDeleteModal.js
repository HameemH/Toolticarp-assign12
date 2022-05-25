import React from 'react';

const OrderDeleteModal = ({refetch,setDeleteOrder,deleteOrder}) => {
    console.log(deleteOrder);
    const {_id,name,product, quantity} = deleteOrder;
    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
           
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert(`Doctor: ${product} is deleted.`)
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg text-red-500">Hey {name},Are you sure you want to cancel Your Order for {quantity} Pcs of ${product}!</h3>
                <p class="py-4"></p>
                <div class="modal-action">
                <button  class="btn btn-xs btn-error" onClick={()=>handleDelete()}>Delete</button>
                    <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                </div>
            </div>
        </div>
    </div >
);
};

export default OrderDeleteModal;