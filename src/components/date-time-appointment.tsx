import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface BookingProps{
  startTime: number
  endTime: number
  selectedDate: Date
  selectedTimeSlot: string
  appointmentDateTime: Date
  setSelectedDate: (date: Date) => void
  setSelectedTimeSlot: (day: string) => void 
  setAppointmentDateTime: (date: Date) => void
  handleBookingAppointment: () => void
}

export default function DateTimeComponent({startTime, endTime, selectedDate, selectedTimeSlot, appointmentDateTime, setSelectedDate, setSelectedTimeSlot, setAppointmentDateTime, handleBookingAppointment}: BookingProps) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDay, setSelectedDay] = useState(0)
   // Default to today (first day)
  const [days, setDays] = useState<Array<{ date: string; waiting: string; fullDate: Date; isCustom?: boolean }>>([])

  // Generate dynamic dates based on today (7 days initially)
  useEffect(() => {
    const generateDays = () => {
      const today = new Date()
      const generatedDays = []

      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

      // Generate all 7 days initially
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(today)
        currentDate.setDate(today.getDate() + i)

        const dayName = dayNames[currentDate.getDay()]
        const monthName = monthNames[currentDate.getMonth()]
        const dateNum = currentDate.getDate()

        // Generate realistic waiting numbers (higher on weekends)
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6
        const baseWaiting = isWeekend ? 120 : 80
        const randomVariation = Math.floor(Math.random() * 50)
        const waitingCount = baseWaiting + randomVariation + i * 10 // Increase over time

        generatedDays.push({
          date: `${dayName}, ${monthName} ${dateNum}`,
          waiting: `${waitingCount} Waiting`,
          fullDate: new Date(currentDate),
        })
      }
      
      setSelectedDate(generatedDays[0].fullDate)
      return generatedDays
    }
    setDays(generateDays())
  }, [])

  // Generate time slots from 9:00 AM to 9:00 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const slots: Date[] = []
    const startHour = startTime // 9 AM
    const endHour = endTime // 9 PM (21:00)
    const interval = 30 // 30 minutes
    const now = new Date()
    const isToday = selectedDate.toDateString() === now.toDateString()

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = new Date()
        time.setHours(hour, minute, 0, 0)
        
        // If it's today, only include time slots that haven't passed yet
        if (isToday) {
          const timeSlotTime = new Date(selectedDate)
          timeSlotTime.setHours(hour, minute, 0, 0)
          
          // Add 30 minutes buffer to current time to allow for reasonable booking time
          const bufferTime = new Date(now.getTime())
          
          if (timeSlotTime > bufferTime) {
            slots.push(new Date(time))
          }
        } else {
          // For future dates, include all time slots
          slots.push(new Date(time))
        }
      }
    }
    return slots
  }

  const [timeSlots, setTimeSlots] = useState<Date[]>([])

  // Update time slots when selected date changes
  useEffect(() => {
    setTimeSlots(generateTimeSlots())
  }, [selectedDate, startTime, endTime])

  const handleDayClick = (index: number) => {
    setSelectedDay(index)
    setSelectedDate(days[index].fullDate)
    
    // Console log the selected date in IST format
    const selectedDateIST = new Date(days[index].fullDate.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
    setAppointmentDateTime(selectedDateIST)
  }

  const handleTimeSlotClick = (timeSlot: Date) => {
    const timeString = timeSlot.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
    setSelectedTimeSlot(timeString)
    
    const appointmentTime = new Date(selectedDate)
    appointmentTime.setHours(timeSlot.getHours(), timeSlot.getMinutes(), 0, 0)   
    setAppointmentDateTime(appointmentTime)
  }

  const handleDateSelect = (date: Date | null) => {
    if (!date) return
    
    setSelectedDate(date)
    setShowCalendar(false)

    // Console log the selected date from datepicker in IST format
    const selectedDateIST = new Date(date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
    setAppointmentDateTime(selectedDateIST)
    
    // Add the custom date as a new slot
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    const dayName = dayNames[date.getDay()]
    const monthName = monthNames[date.getMonth()]
    const dateNum = date.getDate()
    
    // Generate waiting number for the custom date
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const baseWaiting = isWeekend ? 120 : 80
    const randomVariation = Math.floor(Math.random() * 50)
    const waitingCount = baseWaiting + randomVariation
    
    setDays(prevDays => {
      const updatedDays = [...prevDays]
      // Add the custom date as a new slot at the end
      updatedDays.push({
        date: `${dayName}, ${monthName} ${dateNum}`,
        waiting: `${waitingCount} Waiting`,
        fullDate: new Date(date),
        isCustom: true
      })
      return updatedDays
    })
    
    // Set the selected day to the new custom date slot (last index)
    setSelectedDay(days.length)
  }

  const CalendarIcon = () => (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateSelect}
      open={showCalendar}
      onInputClick={() => setShowCalendar(true)}
      onClickOutside={() => setShowCalendar(false)}
      customInput={
        <button
          className="btn d-flex align-items-center justify-content-center border-0 rounded-2"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#2563eb",
            color: "white",
            transition: "all 0.15s ease-in-out",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1d4ed8"
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            e.currentTarget.style.transform = "translateY(-1px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb"
            e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </button>
      }
      dateFormat="MMM dd, yyyy"
      minDate={new Date()}
      showPopperArrow={false}
      popperClassName="custom-datepicker-popper"
      popperPlacement="bottom-start"
             popperModifiers={[
         {
           name: "offset",
           options: {
             offset: [0, 8],
           },
           fn: ({ x, y }) => ({ x, y }),
         },
       ]}
    />
  )

  const formatSelectedDate = () => {
    if (days.length === 0) return ""

    const selected = days[selectedDay]
    const today = new Date()
    const isToday = appointmentDateTime.toDateString() === today.toDateString()
    const isTomorrow =
      appointmentDateTime.toDateString() === new Date(today.getTime() + 24 * 60 * 60 * 1000).toDateString()

    if (isToday) return `Today, ${appointmentDateTime.toLocaleDateString() }`
    if (isTomorrow) return `Tomorrow, ${appointmentDateTime.toLocaleDateString()}`
    return appointmentDateTime.toLocaleDateString()
  }

  if (days.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div className="container-fluid py-5 px-4">
        {/* Header */}
        <div className="mb-5">
          <h1 className="h3 fw-bold mb-2" style={{ color: "#111827" }}>
            Select Your Appointment
          </h1>
                     <p className="text-muted mb-0" style={{ fontSize: "16px", color: "#6b7280" }}>
             Choose your preferred date and time slot for the next 7 days or add a custom date
           </p>
        </div>

        {/* Date Selection */}
        <div className="mb-5">
          <div className="row g-3 align-items-center">
                         {days.map((day, index) => {
               const isToday = index === 0
               const isTomorrow = index === 1
               const isCustomDate = day.isCustom

               return (
                 <div key={index} className="col">
                   <button
                     className={`btn w-100 text-start border-0 p-3 rounded-3 position-relative ${selectedDay === index ? "text-white" : ""}`}
                     style={{
                       backgroundColor: selectedDay === index ? "#2563eb" : isCustomDate ? "#f8fafc" : "white",
                       fontSize: "14px",
                       fontWeight: "500",
                       transition: "all 0.15s ease-in-out",
                       boxShadow:
                         selectedDay === index
                           ? "0 10px 15px -3px rgba(37, 99, 235, 0.2), 0 4px 6px -2px rgba(37, 99, 235, 0.1)"
                           : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                       border: selectedDay === index ? "none" : isCustomDate ? "2px dashed #d1d5db" : "1px solid #e5e7eb",
                     }}
                     onClick={() => handleDayClick(index)}
                     onMouseEnter={(e) => {
                       if (selectedDay !== index) {
                         e.currentTarget.style.backgroundColor = isCustomDate ? "#f1f5f9" : "#f8fafc"
                         e.currentTarget.style.borderColor = "#d1d5db"
                         e.currentTarget.style.transform = "translateY(-1px)"
                         e.currentTarget.style.boxShadow =
                           "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                       }
                     }}
                     onMouseLeave={(e) => {
                       if (selectedDay !== index) {
                         e.currentTarget.style.backgroundColor = isCustomDate ? "#f8fafc" : "white"
                         e.currentTarget.style.borderColor = isCustomDate ? "#d1d5db" : "#e5e7eb"
                         e.currentTarget.style.transform = "translateY(0)"
                         e.currentTarget.style.boxShadow =
                           "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                       }
                     }}
                   >
                     {isToday && (
                       <span
                         className="position-absolute top-0 end-0 badge bg-success rounded-pill"
                         style={{ fontSize: "10px", transform: "translate(25%, -25%)" }}
                       >
                         Today
                       </span>
                     )}
                     {isTomorrow && (
                       <span
                         className="position-absolute top-0 end-0 badge bg-info rounded-pill"
                         style={{ fontSize: "10px", transform: "translate(25%, -25%)" }}
                       >
                         Tomorrow
                       </span>
                     )}
                     {isCustomDate && (
                       <span
                         className="position-absolute top-0 end-0 badge bg-warning rounded-pill"
                         style={{ fontSize: "10px", transform: "translate(25%, -25%)" }}
                       >
                         Custom
                       </span>
                     )}
                     <div className="fw-semibold mb-1" style={{ fontSize: "15px" }}>
                       {day.date}
                     </div>
                     <div
                       style={{
                         fontSize: "12px",
                         opacity: selectedDay === index ? 0.9 : 0.7,
                         color: selectedDay === index ? "rgba(255,255,255,0.9)" : "#6b7280",
                       }}
                     >
                       {day.waiting}
                     </div>
                   </button>
                 </div>
               )
             })}

            <div className="col-auto">
              <CalendarIcon />
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h2 className="h5 fw-semibold mb-4" style={{ color: "#111827" }}>
            Available Time Slots
          </h2>

          <div className="d-flex flex-wrap gap-3">
            {timeSlots.map((timeSlot: Date, timeIndex: number) => {
              const timeString = timeSlot.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })
              
              return (
                <button
                  key={timeIndex}
                  className="btn border-0 fw-medium rounded-2"
                  style={{
                    backgroundColor: selectedTimeSlot === timeString ? "#f59e0b" : "white",
                    color: selectedTimeSlot === timeString ? "white" : "#374151",
                    fontSize: "14px",
                    width: "100px",
                    height: "44px",
                    transition: "all 0.15s ease-in-out",
                    boxShadow:
                      selectedTimeSlot === timeString
                        ? "0 10px 15px -3px rgba(245, 158, 11, 0.2), 0 4px 6px -2px rgba(245, 158, 11, 0.1)"
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    border: "1px solid #e5e7eb",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTimeSlotClick(timeSlot)}
                  onMouseEnter={(e) => {
                    if (selectedTimeSlot !== timeString) {
                      e.currentTarget.style.backgroundColor = "#f8fafc"
                      e.currentTarget.style.borderColor = "#d1d5db"
                      e.currentTarget.style.transform = "translateY(-1px)"
                      e.currentTarget.style.boxShadow =
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    } else {
                      e.currentTarget.style.transform = "translateY(-1px)"
                      e.currentTarget.style.boxShadow =
                        "0 20px 25px -5px rgba(245, 158, 11, 0.2), 0 10px 10px -5px rgba(245, 158, 11, 0.1)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTimeSlot !== timeString) {
                      e.currentTarget.style.backgroundColor = "white"
                      e.currentTarget.style.borderColor = "#e5e7eb"
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow =
                        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
                    } else {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow =
                        "0 10px 15px -3px rgba(245, 158, 11, 0.2), 0 4px 6px -2px rgba(245, 158, 11, 0.1)"
                    }
                  }}
                >
                  {timeString}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selection Summary */}
        <div className="mt-5">
          <div
            className="bg-white rounded-3 p-4 border"
            style={{
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              borderColor: "#e5e7eb",
            }}
          >
            <h3 className="h6 fw-semibold mb-3" style={{ color: "#111827" }}>
              Your Selection
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <span className="text-muted me-2" style={{ fontSize: "14px" }}>
                    Date:
                  </span>
                  <span className="fw-medium" style={{ color: "#374151", fontSize: "14px" }}>
                    {formatSelectedDate()}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <span className="text-muted me-2" style={{ fontSize: "14px" }}>
                    Time:
                  </span>
                  <span className="fw-medium" style={{ color: "#374151", fontSize: "14px" }}>
                    {selectedTimeSlot}
                  </span>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary mt-3 px-4 py-2 fw-medium rounded-2"
              style={{
                backgroundColor: "#2563eb",
                borderColor: "#2563eb",
                fontSize: "14px",
                transition: "all 0.15s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d4ed8"
                e.currentTarget.style.borderColor = "#1d4ed8"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb"
                e.currentTarget.style.borderColor = "#2563eb"
              }}
              onClick={handleBookingAppointment}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-datepicker-popper {
            z-index: 1050 !important;
          }
          
          .react-datepicker {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif !important;
            border: none !important;
            border-radius: 12px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          }
          
          .react-datepicker__header {
            background-color: #f8fafc !important;
            border-bottom: 1px solid #e5e7eb !important;
            border-radius: 12px 12px 0 0 !important;
            padding: 16px !important;
          }
          
          .react-datepicker__current-month {
            color: #111827 !important;
            font-weight: 600 !important;
            font-size: 18px !important;
          }
          
          .react-datepicker__day-name {
            color: #6b7280 !important;
            font-weight: 500 !important;
            font-size: 11px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.05em !important;
          }
          
          .react-datepicker__day {
            color: #374151 !important;
            font-weight: 500 !important;
            border-radius: 8px !important;
            transition: all 0.15s ease-in-out !important;
          }
          
          .react-datepicker__day:hover {
            background-color: #f3f4f6 !important;
          }
          
          .react-datepicker__day--selected {
            background-color: #2563eb !important;
            color: white !important;
          }
          
          .react-datepicker__day--today {
            background-color: #dbeafe !important;
            color: #2563eb !important;
            font-weight: 600 !important;
          }
          
          .react-datepicker__day--disabled {
            color: #d1d5db !important;
            cursor: not-allowed !important;
          }
        `
      }} />
    </div>
  )
}
