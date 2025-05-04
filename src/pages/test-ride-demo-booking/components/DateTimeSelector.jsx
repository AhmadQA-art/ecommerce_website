import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const DateTimeSelector = ({ onDateTimeSelect, selectedDateTime }) => {
  const [selectedDate, setSelectedDate] = useState(selectedDateTime?.date || null);
  const [selectedTime, setSelectedTime] = useState(selectedDateTime?.time || null);

  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Generate random availability level (for demo purposes)
      const availabilityLevel = Math.floor(Math.random() * 3); // 0: low, 1: medium, 2: high
      
      dates.push({
        date,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        availability: availabilityLevel,
        isToday: i === 0
      });
    }
    
    return dates;
  };

  const dates = generateDates();

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const timeGroups = [
      { name: "Morning", slots: ["09:00", "10:00", "11:00"] },
      { name: "Afternoon", slots: ["12:00", "13:00", "14:00", "15:00", "16:00"] },
      { name: "Evening", slots: ["17:00", "18:00", "19:00"] }
    ];
    
    timeGroups.forEach(group => {
      const availableSlots = group.slots.map(time => {
        // Randomly determine if slot is available (for demo purposes)
        const isAvailable = Math.random() > 0.3;
        return { time, isAvailable };
      });
      
      slots.push({
        groupName: group.name,
        times: availableSlots
      });
    });
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getAvailabilityColor = (level) => {
    switch (level) {
      case 0: // Low
        return "bg-error bg-opacity-20";
      case 1: // Medium
        return "bg-warning bg-opacity-20";
      case 2: // High
        return "bg-success bg-opacity-20";
      default:
        return "bg-gray-200";
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time selection when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate && time) {
      onDateTimeSelect({ date: selectedDate, time });
    }
  };

  const formatDateForDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="heading-2 mb-6">Select Date & Time</h3>
      
      {/* Date Selection */}
      <div className="mb-8">
        <h4 className="heading-3 mb-4">Date</h4>
        <div className="flex overflow-x-auto pb-4 space-x-3">
          {dates.map((dateObj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex-shrink-0 w-20 h-24 rounded-lg ${
                getAvailabilityColor(dateObj.availability)
              } ${
                selectedDate && selectedDate.date.toDateString() === dateObj.date.toDateString()
                  ? "ring-2 ring-primary" :""
              } cursor-pointer hover:shadow-md transition-all`}
              onClick={() => handleDateSelect(dateObj)}
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-2">
                <span className="text-xs font-medium uppercase">{dateObj.dayName}</span>
                <span className="text-2xl font-bold my-1">{dateObj.dayNumber}</span>
                <span className="text-xs">{dateObj.month}</span>
                {dateObj.isToday && (
                  <span className="text-xs mt-1 bg-primary text-white px-2 py-0.5 rounded-full">Today</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Time Selection - Only show if date is selected */}
      {selectedDate && (
        <div>
          <h4 className="heading-3 mb-4">Time Slots for {formatDateForDisplay(selectedDate.date)}</h4>
          
          <div className="space-y-6">
            {timeSlots.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h5 className="label text-gray-500 mb-3">{group.groupName}</h5>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {group.times.map((slot, slotIndex) => (
                    <button
                      key={slotIndex}
                      className={`py-2 px-4 rounded-md text-center transition-all ${
                        !slot.isAvailable
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : selectedTime && selectedTime.time === slot.time
                          ? "bg-primary text-white" :"bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                      onClick={() => slot.isAvailable && handleTimeSelect(slot)}
                      disabled={!slot.isAvailable}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {!selectedDate && (
        <div className="text-center py-8 text-gray-500">
          <Icon name="Calendar" size={48} className="text-gray-300 mx-auto mb-4" />
          <p className="body">Please select a date to view available time slots.</p>
        </div>
      )}
    </div>
  );
};

export default DateTimeSelector;