
import React from 'react';
 import { render } from '@testing-library/react';
 import DoctorComponent from './DoctorComponent';

 test('renders doctor information', () => {
   const doctor = { name: 'Dr. Smith', specialty: 'Cardiology', yearsOfExperience: 10 };
   const { getByText } = render(<DoctorComponent doctor={doctor} />);
 });
