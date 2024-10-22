import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);
  const [isCompleted, setIsCompleted] = useState(false);

  // Handle editing text
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle change in the input text
  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  // Handle saving the edited text when pressing Enter or on blur
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      props.onEdit(props.id, editedText); // Pass updated text back to parent
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    props.onEdit(props.id, editedText); // Save the edited text
  };

  // Handle checkbox for task completion
  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="list-items ">
      <div>
        <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
      </div>

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <input
          className="item-input"
          type="text"
          value={editedText}
          readOnly
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        />
      )}

      <FaEdit
        className="btn-edit"
        onClick={handleEdit}
        style={{ cursor: "pointer" }}
      />

      <FaTrash
        className="btn-trash"
        onClick={() => {
          props.onDelete(props.id);
        }}
      />
    </div>
  );
}

export default ToDoItem;
