import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    applyFilters();
  }, [genderFilter, nationalityFilter]);

  useEffect(() => {
    applyPagination();
  }, [currentPage, contacts]);

  const applyFilters = () => {
    let filteredItems = contacts;

    if (genderFilter !== 'all') {
      filteredItems = filteredItems.filter((contact) => contact.gender === genderFilter);
    }

    if (nationalityFilter !== 'all') {
      filteredItems = filteredItems.filter((contact) => contact.nat === nationalityFilter);
    }

    setFilteredContacts(filteredItems);
    setCurrentPage(1); 
  };

  const applyPagination = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredContacts(contacts.slice(startIndex, endIndex));
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleNationalityFilterChange = (event) => {
    setNationalityFilter(event.target.value);
  };

  const handlePaginationChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Filtering options */}
      <div>
        <label>Gender:</label>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Nationality:</label>
        <select value={nationalityFilter} onChange={handleNationalityFilterChange}>
          <option value="all">All</option>
          <option value="AU">AU</option>
          <option value="BR">BR</option>
          <option value="CA">CA</option>
        </select>
      </div>
      {/* Contacts list */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredContacts.map((contact, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src={contact.picture.large} className="card-img-top" alt={contact.name.first} />
              <div className="card-body">
                <h5 className="card-title">{`${contact.name.first} ${contact.name.last}`}</h5>
                <p className="card-text">{contact.email}</p>
                <p className="card-text">{contact.phone}</p>
                <p className="card-text">{contact.location.street.number} {contact.location.street.name}</p>
                <p className="card-text">{`${contact.location.city}, ${contact.location.state}, ${contact.location.country}, ${contact.location.postcode}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {contacts.length > itemsPerPage && (
        <nav aria-label="Contacts Pagination">
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(contacts.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePaginationChange(index + 1)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Contacts;
