import { useState, useEffect } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"

export default function DateTimeComponent() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("2:00 AM")
  const [selectedDay, setSelectedDay] = useState(0) // Default to today (first day)
  const [days, setDays] = useState<Array<{ date: string; waiting: string; fullDate: Date }>>([])

  // Generate dynamic dates based on today
  useEffect(() => {
    const generateDays = () => {
      const today = new Date()
      const generatedDays = []

      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

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

      return generatedDays
    }

    setDays(generateDays())
  }, [])

  const timeSlots = [
    ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"],
    ["8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"],
    ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM"],
    ["3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"],
    ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM"],
  ]

  const handleDayClick = (index: number) => {
    setSelectedDay(index)
    setSelectedDate(days[index].fullDate)
  }

  const handleTimeSlotClick = (time: string) => {
    setSelectedTimeSlot(time)
  }

  const handleCalendarClick = () => {
    setShowCalendar(true)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setShowCalendar(false)

    // Check if selected date matches any of the 7 days, if so update selectedDay
    const matchingDayIndex = days.findIndex((day) => day.fullDate.toDateString() === date.toDateString())
    if (matchingDayIndex !== -1) {
      setSelectedDay(matchingDayIndex)
    }
  }

  const CalendarIcon = () => (
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
      onClick={handleCalendarClick}
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
  )

  const CustomCalendar = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const calendarDays = []
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day)
    }

    const isToday = (day: number) => {
      const today = new Date()
      return day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
    }

    const isPastDate = (day: number) => {
      const today = new Date()
      const checkDate = new Date(year, month, day)
      return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    }

    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1050,
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setShowCalendar(false)}
      >
        <div
          className="bg-white rounded-3 shadow-lg border-0"
          style={{
            width: "380px",
            maxWidth: "90vw",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-bottom">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0 fw-semibold text-gray-900" style={{ color: "#111827", fontSize: "18px" }}>
                {monthNames[month]} {year}
              </h4>
              <button
                className="btn-close"
                onClick={() => setShowCalendar(false)}
                aria-label="Close"
                style={{ fontSize: "12px" }}
              ></button>
            </div>
          </div>

          <div className="p-4">
            <div className="row g-0 mb-3">
              {dayNames.map((dayName) => (
                <div key={dayName} className="col text-center">
                  <div
                    className="fw-medium text-uppercase"
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {dayName}
                  </div>
                </div>
              ))}
            </div>

            <div className="row g-1">
              {calendarDays.map((day, index) => (
                <div key={index} className="col">
                  {day && (
                    <button
                      className="btn w-100 border-0 fw-medium"
                      disabled={isPastDate(day)}
                      style={{
                        height: "44px",
                        backgroundColor:
                          day === selectedDate.getDate() && month === selectedDate.getMonth()
                            ? "#2563eb"
                            : isToday(day)
                              ? "#dbeafe"
                              : "transparent",
                        color:
                          day === selectedDate.getDate() && month === selectedDate.getMonth()
                            ? "white"
                            : isPastDate(day)
                              ? "#d1d5db"
                              : isToday(day)
                                ? "#2563eb"
                                : "#374151",
                        fontSize: "14px",
                        borderRadius: "8px",
                        transition: "all 0.15s ease-in-out",
                        cursor: isPastDate(day) ? "not-allowed" : "pointer",
                      }}
                      onClick={() => !isPastDate(day) && handleDateSelect(new Date(year, month, day))}
                      onMouseEnter={(e) => {
                        if (
                          !isPastDate(day) &&
                          !(day === selectedDate.getDate() && month === selectedDate.getMonth())
                        ) {
                          e.currentTarget.style.backgroundColor = "#f3f4f6"
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (
                          !isPastDate(day) &&
                          !(day === selectedDate.getDate() && month === selectedDate.getMonth())
                        ) {
                          e.currentTarget.style.backgroundColor = isToday(day) ? "#dbeafe" : "transparent"
                        }
                      }}
                    >
                      {day}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const formatSelectedDate = () => {
    if (days.length === 0) return ""

    const selected = days[selectedDay]
    const today = new Date()
    const isToday = selected.fullDate.toDateString() === today.toDateString()
    const isTomorrow =
      selected.fullDate.toDateString() === new Date(today.getTime() + 24 * 60 * 60 * 1000).toDateString()

    if (isToday) return `Today, ${selected.date}`
    if (isTomorrow) return `Tomorrow, ${selected.date}`
    return selected.date
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
            Choose your preferred date and time slot for the next 7 days
          </p>
        </div>

        {/* Date Selection */}
        <div className="mb-5">
          <div className="row g-3 align-items-center">
            {days.map((day, index) => {
              const isToday = index === 0
              const isTomorrow = index === 1

              return (
                <div key={index} className="col">
                  <button
                    className={`btn w-100 text-start border-0 p-3 rounded-3 position-relative ${selectedDay === index ? "text-white" : ""}`}
                    style={{
                      backgroundColor: selectedDay === index ? "#2563eb" : "white",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.15s ease-in-out",
                      boxShadow:
                        selectedDay === index
                          ? "0 10px 15px -3px rgba(37, 99, 235, 0.2), 0 4px 6px -2px rgba(37, 99, 235, 0.1)"
                          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                      border: selectedDay === index ? "none" : "1px solid #e5e7eb",
                    }}
                    onClick={() => handleDayClick(index)}
                    onMouseEnter={(e) => {
                      if (selectedDay !== index) {
                        e.currentTarget.style.backgroundColor = "#f8fafc"
                        e.currentTarget.style.borderColor = "#d1d5db"
                        e.currentTarget.style.transform = "translateY(-1px)"
                        e.currentTarget.style.boxShadow =
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedDay !== index) {
                        e.currentTarget.style.backgroundColor = "white"
                        e.currentTarget.style.borderColor = "#e5e7eb"
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

          {timeSlots.map((row, rowIndex) => (
            <div key={rowIndex} className="d-flex flex-wrap gap-3 mb-4">
              {row.map((time, timeIndex) => (
                <button
                  key={timeIndex}
                  className="btn border-0 fw-medium rounded-2"
                  style={{
                    backgroundColor: selectedTimeSlot === time ? "#f59e0b" : "white",
                    color: selectedTimeSlot === time ? "white" : "#374151",
                    fontSize: "14px",
                    width: "90px",
                    height: "44px",
                    transition: "all 0.15s ease-in-out",
                    boxShadow:
                      selectedTimeSlot === time
                        ? "0 10px 15px -3px rgba(245, 158, 11, 0.2), 0 4px 6px -2px rgba(245, 158, 11, 0.1)"
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                    border: "1px solid #e5e7eb",
                  }}
                  onClick={() => handleTimeSlotClick(time)}
                  onMouseEnter={(e) => {
                    if (selectedTimeSlot !== time) {
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
                    if (selectedTimeSlot !== time) {
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
                  {time}
                </button>
              ))}
            </div>
          ))}
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
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>

      {showCalendar && <CustomCalendar />}
    </div>
  )
}
