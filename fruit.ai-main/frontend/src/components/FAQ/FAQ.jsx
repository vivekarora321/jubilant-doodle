
  import React, { useState } from "react";
  import './FAQ.css';
  import { IoArrowBackCircleSharp } from "react-icons/io5";
  import { useNavigate } from 'react-router-dom';
  import image1 from  '../../assets/orange.jpeg';


  // FAQ Component
  const FAQ = ({ faq, onDelete, onEdit }) => {
    return (
      <div className="faq-card">
        <div className="faq-image">
          <img src={faq.image} alt={faq.title} />
        </div>
        <div className="faq-content">
          <h3>{faq.title}</h3>
          <p>{faq.description}</p>
          <p><b>{faq.fruitName}</b></p>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  };

  // Main Component
  const FAQSection = () => {
    const [faqs, setFaqs] = useState([
      {
        id: 1,
        image: image1, // Placeholder image
        title: "How is Tangerine healthy?",
        description:
          "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        fruitName: "Tangerine",
      },
      {
        id: 2,
        image: image1, // Placeholder image
        title: "How is Tangerine healthy?",
        description:
          "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        fruitName: "Tangerine",
      },
      {
        id: 3,
        image: image1, // Placeholder image
        title: "How is Tangerine healthy?",
        description:
          "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        fruitName: "Tangerine",
      },
    ]);

    const [newFAQ, setNewFAQ] = useState({ title: "", description: "", fruitName: "" });
    const [editingFAQ, setEditingFAQ] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Handle Delete
    const handleDelete = (id) => {
      setFaqs(faqs.filter((faq) => faq.id !== id));
    };

    // Handle Edit
    const handleEdit = (faq) => {
      setEditingFAQ(faq);
      setNewFAQ(faq);
      setIsPopupOpen(true); // Open the popup when editing
    };

    // Handle Save (Create or Update)
    const handleSave = () => {
      if (editingFAQ) {
        // Update existing FAQ
        setFaqs(faqs.map((faq) => (faq.id === editingFAQ.id ? newFAQ : faq)));
        setEditingFAQ(null);
      } else {
        // Create new FAQ
        const newId = faqs.length ? faqs[faqs.length - 1].id + 1 : 1;
        setFaqs([...faqs, { ...newFAQ, id: newId, image: image1 }]);
      }
      setNewFAQ({ title: "", description: "", fruitName: "" });
      setIsPopupOpen(false); // Close the popup after save
    };

    // Open popup for adding new FAQ
    const handleAddNew = () => {
      setEditingFAQ(null); // Clear any editing state
      setNewFAQ({ title: "", description: "", fruitName: "" }); // Reset form
      setIsPopupOpen(true); // Show the popup
    };

    const navigate=useNavigate();

    const navBack = (e) =>{
      e.preventDefault();
      navigate('/home');
    }

    return (
      <div className="app_FAQ">

        <div className="faq-section">
          <div className="faq-head">
            <h2 className="arr"><IoArrowBackCircleSharp onClick={navBack} /></h2>
            <h2 className="faqq">FAQ Section</h2>
          </div>

          {/* Add New FAQ Button */}


          {/* FAQ List */}
          <div className="faq-list">
            {faqs.map((faq) => (
              <FAQ
                key={faq.id}
                faq={faq}
                onDelete={() => handleDelete(faq.id)}
                onEdit={() => handleEdit(faq)}
              />
            ))}
          </div>

          <button className="add-button" onClick={handleAddNew}>Add+</button>

          {/* Popup Form */}
          {isPopupOpen && (
            <div className="popup-overlay">
              <div className="popup">
                <h3>{editingFAQ ? "Edit FAQ" : "Add New FAQ"}</h3>
                <input
                  type="text"
                  placeholder="Title"
                  value={newFAQ.title}
                  onChange={(e) => setNewFAQ({ ...newFAQ, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newFAQ.description}
                  onChange={(e) => setNewFAQ({ ...newFAQ, description: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Fruit Name"
                  value={newFAQ.fruitName}
                  onChange={(e) => setNewFAQ({ ...newFAQ, fruitName: e.target.value })}
                />
                <button onClick={handleSave}>{editingFAQ ? "Update" : "Save"}</button>
                <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default FAQSection;



