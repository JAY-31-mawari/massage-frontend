// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ArrowLeft, MapPin, Star, Clock, Calendar, User, Phone, Mail } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
// import { Calendar as CalendarComponent } from './ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
// import { format } from 'date-fns';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// // Business photos for practitioners
// const businessPhotos = [
//   'https://images.unsplash.com/photo-1598256989800-fe5f95da9787',
//   'https://images.unsplash.com/photo-1551076805-e1869033e561',
//   'https://images.unsplash.com/photo-1563932127565-699eeea1e17a',
//   'https://images.unsplash.com/photo-1576085898384-b3cdb88736e9',
//   'https://images.pexels.com/photos/33990982/pexels-photo-33990982.jpeg',
//   'https://images.pexels.com/photos/5473180/pexels-photo-5473180.jpeg',
//   'https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg',
//   'https://images.pexels.com/photos/14996838/pexels-photo-14996838.jpeg'
// ];

// export const BookingPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [practitioners, setPractitioners] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedPractitioner, setSelectedPractitioner] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState('');
//   const [clientInfo, setClientInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     notes: ''
//   });
//   const [step, setStep] = useState(1); // 1: Search, 2: Select Practitioner, 3: Book Appointment
  
//   const location = searchParams.get('location') || '';
//   const service = searchParams.get('service') || '';
//   const practitionerParam = searchParams.get('practitioner') || '';

//   const timeSlots = [
//     '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
//     '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
//     '16:00', '16:30', '17:00', '17:30'
//   ];

//   const serviceLabels = {
//     massage_therapy: 'Massage Therapy',
//     acupuncture: 'Acupuncture',
//     chiropractic: 'Chiropractic',
//     physiotherapy: 'Physiotherapy'
//   };

//   useEffect(() => {
//     if (practitionerParam) {
//       // Direct practitioner booking
//       fetchSpecificPractitioner(practitionerParam);
//       setStep(2);
//     } else if (location || service) {
//       searchPractitioners();
//     }
//   }, [location, service, practitionerParam]);

//   const searchPractitioners = async () => {
//     setLoading(true);
//     try {
//       let url = `${API}/search?location=${encodeURIComponent(location)}`;
//       if (service) {
//         url += `&service=${service}`;
//       }
      
//       const response = await axios.get(url);
//       setPractitioners(response.data);
//     } catch (error) {
//       console.error('Error searching practitioners:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchSpecificPractitioner = async (practitionerId) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${API}/practitioners/${practitionerId}`);
//       setSelectedPractitioner(response.data);
//     } catch (error) {
//       console.error('Error fetching practitioner:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectPractitioner = (practitioner) => {
//     navigate(`/practitioner/${practitioner.id}`);
//   };

//   const getRandomBusinessPhoto = (seed) => {
//     return businessPhotos[seed % businessPhotos.length];
//   };

//   const handleBookAppointment = async () => {
//     if (!selectedPractitioner || !selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     try {
//       // Create client first
//       const clientResponse = await axios.post(`${API}/clients`, {
//         name: clientInfo.name,
//         email: clientInfo.email,
//         phone: clientInfo.phone
//       });

//       // Create appointment
//       const appointmentDate = new Date(selectedDate);
//       const [hours, minutes] = selectedTime.split(':');
//       appointmentDate.setHours(parseInt(hours), parseInt(minutes));

//       const appointmentResponse = await axios.post(`${API}/appointments`, {
//         client_id: clientResponse.data.id,
//         practitioner_id: selectedPractitioner.id,
//         service_type: service,
//         appointment_date: appointmentDate.toISOString(),
//         notes: clientInfo.notes
//       });

//       // Show success message
//       alert(selectedPractitioner.approval_mode === 'auto' 
//         ? 'Appointment confirmed automatically!' 
//         : 'Appointment request sent! You will be notified within 20 minutes.');
      
//       navigate('/');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Error booking appointment. Please try again.');
//     }
//   };

//   const renderSearchResults = () => (
//     <div className="space-y-6">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-slate-900 mb-4">
//           Available Practitioners
//         </h2>
//         <p className="text-slate-600">
//           Found {practitioners.length} practitioners {location && `in ${location}`} {service && `for ${serviceLabels[service]}`}
//         </p>
//       </div>

//       {practitioners.length === 0 && !loading && (
//         <div className="text-center py-12">
//           <p className="text-slate-500">No practitioners found. Try adjusting your search criteria.</p>
//           <Button onClick={() => navigate('/')} className="mt-4">
//             Back to Search
//           </Button>
//         </div>
//       )}

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {practitioners.map((practitioner) => (
//           <Card key={practitioner.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
//                 onClick={() => handleSelectPractitioner(practitioner)}>
//             <div className="h-48 overflow-hidden">
//               <img 
//                 src={getRandomBusinessPhoto(practitioner.name.length)} 
//                 alt="Clinic"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <CardHeader className="pb-4">
//               <div className="flex items-start justify-between">
//                 <div className="flex-1">
//                   <CardTitle className="text-lg text-slate-900 mb-2">{practitioner.name}</CardTitle>
//                   <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
//                     <div className="flex items-center">
//                       <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
//                       <span>{practitioner.rating}</span>
//                       <span className="ml-1">({practitioner.total_reviews})</span>
//                     </div>
//                     <div className="flex items-center">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       <span>{practitioner.location.city}, {practitioner.location.state}</span>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {practitioner.services.map((service) => (
//                       <Badge key={service} variant="secondary" className="text-xs">
//                         {serviceLabels[service]}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//                 <Badge 
//                   variant={practitioner.approval_mode === 'auto' ? 'default' : 'outline'}
//                   className="ml-2"
//                 >
//                   {practitioner.approval_mode === 'auto' ? 'Instant' : 'Quick'} Approval
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                 {practitioner.bio || `Experienced ${serviceLabels[service]} professional with ${practitioner.experience_years} years of experience.`}
//               </p>
//               <Button 
//                 data-testid={`select-practitioner-${practitioner.id}`}
//                 className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
//               >
//                 View Details & Book
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );

//   const renderBookingForm = () => (
//     <div className="max-w-2xl mx-auto">
//       <Button 
//         variant="ghost" 
//         onClick={() => setStep(1)}
//         className="mb-6 text-slate-600 hover:text-slate-900"
//       >
//         <ArrowLeft className="w-4 h-4 mr-2" />
//         Back to Results
//       </Button>

//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-3">
//             <User className="w-5 h-5 text-teal-600" />
//             <span>{selectedPractitioner?.name}</span>
//           </CardTitle>
//           <div className="flex items-center space-x-4 text-sm text-slate-600">
//             <div className="flex items-center">
//               <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
//               <span>{selectedPractitioner?.rating} ({selectedPractitioner?.total_reviews} reviews)</span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{selectedPractitioner?.location.city}, {selectedPractitioner?.location.state}</span>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <Badge 
//             variant={selectedPractitioner?.approval_mode === 'auto' ? 'default' : 'outline'}
//             className="mb-4"
//           >
//             {selectedPractitioner?.approval_mode === 'auto' ? 'Instant' : 'Quick'} Approval
//           </Badge>
//           <p className="text-slate-600">
//             {selectedPractitioner?.bio || `Professional ${serviceLabels[service]} services.`}
//           </p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Book Your Appointment</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Date Selection */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">Select Date</label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   data-testid="date-picker-button"
//                   variant="outline"
//                   className="w-full justify-start text-left font-normal"
//                 >
//                   <Calendar className="mr-2 h-4 w-4" />
//                   {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0">
//                 <CalendarComponent
//                   mode="single"
//                   selected={selectedDate}
//                   onSelect={setSelectedDate}
//                   disabled={(date) => date < new Date()}
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>

//           {/* Time Selection */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">Select Time</label>
//             <Select onValueChange={setSelectedTime}>
//               <SelectTrigger data-testid="time-select">
//                 <SelectValue placeholder="Select a time slot" />
//               </SelectTrigger>
//               <SelectContent>
//                 {timeSlots.map((time) => (
//                   <SelectItem key={time} value={time}>
//                     <div className="flex items-center">
//                       <Clock className="w-4 h-4 mr-2" />
//                       {time}
//                     </div>
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Client Information */}
//           <div className="space-y-4">
//             <h4 className="font-medium text-slate-900">Your Information</h4>
            
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
//               <Input
//                 data-testid="client-name-input"
//                 placeholder="Enter your full name"
//                 value={clientInfo.name}
//                 onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
//               <Input
//                 data-testid="client-email-input"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={clientInfo.email}
//                 onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
//               <Input
//                 data-testid="client-phone-input"
//                 placeholder="Enter your phone number"
//                 value={clientInfo.phone}
//                 onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
//               <textarea
//                 data-testid="appointment-notes-textarea"
//                 className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 rows="3"
//                 placeholder="Any specific requests or health conditions to note?"
//                 value={clientInfo.notes}
//                 onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
//               />
//             </div>
//           </div>

//           <Button 
//             data-testid="confirm-booking-button"
//             onClick={handleBookAppointment}
//             className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 py-3"
//             disabled={!selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email}
//           >
//             Book Appointment
//           </Button>

//           <p className="text-sm text-slate-500 text-center">
//             {selectedPractitioner?.approval_mode === 'auto' 
//               ? 'Your appointment will be confirmed instantly.'
//               : 'You will receive confirmation within 20 minutes.'}
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
//       {/* Navigation */}
//       <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-teal-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div 
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer"
//             >
//               <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full"></div>
//               <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
//                 WellnessBook
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {loading ? (
//           <div className="text-center py-12">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
//             <p className="mt-4 text-slate-600">Searching for practitioners...</p>
//           </div>
//         ) : step === 1 ? (
//           renderSearchResults()
//         ) : (
//           renderBookingForm()
//         )}
//       </div>
//     </div>
//   );
// };

export {}