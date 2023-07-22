import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [nationalityFilter, setNationalityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=100');
      setContacts(response.data.results);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    applyFiltersAndPagination();
  }, [genderFilter, nationalityFilter, currentPage, contacts]);

  const applyFiltersAndPagination = () => {
    let filteredItems = contacts;
    // if (nationalityFilter === 'all') {
    //   fetchContacts();
    // }
    if (genderFilter !== 'all') {
      filteredItems = filteredItems.filter((contact) => contact.gender === genderFilter);
      
    }

    if (nationalityFilter !== 'all') {
      filteredItems = filteredItems.filter((contact) => contact.nat === nationalityFilter);
    }

    //setContacts(filteredItems);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredContacts(filteredItems.slice(startIndex, endIndex));
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
    setCurrentPage(1); 
  };

  const handleNationalityFilterChange = (event) => {
    setNationalityFilter(event.target.value);
    setCurrentPage(1);
  };

  const handlePaginationChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-filter mb-5 mt-3">
        <label className="me-2 filter-label">Gender:</label>
        <select value={genderFilter} onChange={handleGenderFilterChange} className="select-menu">
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label className="me-2 ms-2 filter-label">Nationality:</label>
        <select value={nationalityFilter} onChange={handleNationalityFilterChange} className="select-menu">
          <option value="all">All</option>
          <option value="AU">AU</option>
          <option value="BR">BR</option>
          <option value="CA">CA</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 contact-card-content">
        {filteredContacts.map((contact, index) => (
          <div key={index} className="col">
          <div className="card contact-card">
              <div className="image-wrapper">
                <img src={contact.picture.large} className="card-img-top" alt={contact.name.first} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{`${contact.name.first} ${contact.name.last}`}</h5>
                <p className="card-text card-email">{contact.email}</p>
                <p className="card-text">{contact.phone}</p>
                <p className="card-text location-name">{contact.location.street.number} {contact.location.street.name}</p>
                <p className="card-text">{`${contact.location.city}, ${contact.location.state}, ${contact.location.country}, ${contact.location.postcode}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {contacts.length > itemsPerPage && (
        <nav aria-label="Contacts Pagination">
          <ul className="pagination justify-content-center my-3">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePaginationChange(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
            {Array.from({ length: Math.ceil(contacts.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePaginationChange(index + 1)}>{index + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(contacts.length / itemsPerPage) ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePaginationChange(currentPage + 1)} disabled={currentPage === Math.ceil(contacts.length / itemsPerPage)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Contacts;
