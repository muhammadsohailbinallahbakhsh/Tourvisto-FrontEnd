import { BrowserRouter, Routes, Route } from 'react-router';
import SharedLayout from './layout';
import {
  Dashboard,
  Users,
  User,
  AddUser,
  EditUser,
  Trips,
  Trip,
  AddTrip,
  EditTrip,
  Destinations,
  Destination,
  AddDestination,
  EditDestination,
} from './pages/admin';
import {
  Home,
  Destinations as PublicDestinations,
  Destination as PublicDestination,
  Trips as PublicTrips,
  Trip as PublicTrip,
  Payment,
  PaymentConfirmation,
} from './pages/public';
import { NotFound, Forbidden } from './pages/errors';
import {
  UserLogin,
  EmailVerification,
  SSOCallback,
  AuthCallback,
} from './pages/auth';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='forbidden' element={<Forbidden />} />
            <Route path='destinations' element={<PublicDestinations />} />
            <Route
              path='destinations/:destinationId'
              element={<PublicDestination />}
            />
            <Route path='trips' element={<PublicTrips />} />
            <Route path='trips/:tripId' element={<PublicTrip />} />
            <Route path='trips/:tripId/payment' element={<Payment />} />
            <Route
              path='trips/:tripId/paymentConfirmation'
              element={<PaymentConfirmation />}
            />
            <Route path='admin'>
              <Route index element={<Dashboard />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='users' element={<Users />} />
              <Route path='users/:userId' element={<User />} />
              <Route path='users/addUser' element={<AddUser />} />
              <Route path='users/:userId/editUser' element={<EditUser />} />
              <Route path='trips' element={<Trips />} />
              <Route path='trips/:tripId' element={<Trip />} />
              <Route path='trips/addTrip' element={<AddTrip />} />
              <Route path='trips/:tripId/editTrip' element={<EditTrip />} />
              <Route path='destinations' element={<Destinations />} />
              <Route
                path='destinations/:destinationId'
                element={<Destination />}
              />
              <Route
                path='destinations/addDestination'
                element={<AddDestination />}
              />
              <Route
                path='destinations/:destinationId/editDestination'
                element={<EditDestination />}
              />
            </Route>
          </Route>

          <Route path='auth/:userType' element={<UserLogin />} />
          <Route path='auth/verify-email' element={<EmailVerification />} />
          <Route path='auth/callback' element={<AuthCallback />} />
          <Route path='auth/sso-callback' element={<SSOCallback />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
