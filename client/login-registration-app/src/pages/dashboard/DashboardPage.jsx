import React from 'react';
import Dashboard from '../../components/dashboardHero/DashboardHero';
import Contacts from '../../components/contacts/Contacts';
import MainLayout from '../../layout/MainLayout';

const DashboardPage = () => {
  return (
    <MainLayout>
      <Dashboard />
      <Contacts />
    </MainLayout>
  );
};

export default DashboardPage;
