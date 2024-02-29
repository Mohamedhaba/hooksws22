import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Edit = ({ task, editeTaskFunction }) => {
  const [editedTask, setEditedTask] = useState(task.action);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const theOne = {
      id: task.id,
      action: editedTask,
      isDone: task.isDone,
    };
    editeTaskFunction(theOne);
    closeModal();
    
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <div>
            <button type="button" onClick={closeModal}>Cancel</button>
            <button type="submit">Edit</button>
          </div>
        </form>


      </Modal>
    </div>
  );
};

export default Edit;
