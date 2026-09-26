## FitLog — Workout Library
FitLog is a modern workout library and workout-planning web application built with Next.js. It allows users to explore workouts, view detailed exercise information, build a daily workout plan, save exercises for later, and track basic workout statistics.

The application focuses on a clean, dark, fitness-oriented interface with responsive layouts for mobile, tablet, and desktop devices.


## 🚀 Live Demo

🔗 **Live Website:** https://fit-log-by-asif.vercel.app/my-plan

🔗 **GitHub Repository:** https://github.com/asif213067/Fit-Log

## 📌 About The Project

FitLog is designed as a simple workout companion where users can discover exercises and organize their workouts in one place.

Users can:

- Browse the complete workout library
- View detailed information about individual exercises
- Add exercises to Today's Plan
- Save workouts for later
- Sort workouts by duration, calories, or rating
- Search workouts by name or muscle group/tag
- Track total exercises, workout minutes, and calories
- Mark planned workouts as completed
- Remove workouts from their plan
- Keep their plan and saved workouts after refreshing the page

The project uses a responsive dark interface with a lime-green accent to create a focused and modern fitness experience.

---

## ✨ Features

### 1. 🏋️ Workout Library

Browse all available workouts in a responsive card-based library.

Each workout card includes:

- Workout image
- Muscle group/category tags
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

Clicking a workout opens its dedicated details page.

### 2. 📋 Today's Plan

Users can build a personal workout plan by adding exercises from the library or workout details page.

The plan includes:

- Maximum of 5 exercises
- Exercise count
- Total workout duration
- Total calories
- View Details action
- Mark as Done action
- Remove action
- Toast notifications for actions

### 3. 🔖 Save For Later

Users can save workouts they want to revisit later.

The Saved section provides:

- Saved workout list
- Workout details
- Remove functionality
- Live saved counter in the navbar

### 4. 🔍 Sort

The application provides tools for quickly finding and organizing workouts.

Users can:

- Sort by Duration
- Sort by Calories
- Sort by Rating

The selected sorting option updates the current workout list dynamically.

### 5. 📊 Workout Statistics

The My Plan page provides live workout statistics.

It displays:

- **Exercises** — number of workouts
- **Minutes** — total workout duration
- **Calories** — total estimated calories

The statistics automatically update when workouts are added, completed, or removed.

### 6. 📄 Workout Details

Every workout has a dedicated details page containing:

- Large workout image
- Workout title
- Description
- Muscle group tags
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can also add the workout to Today's Plan or save it for later directly from the details page.

### 7. 💾 Local Storage Persistence

FitLog uses browser local storage to preserve:

- Today's Plan
- Saved workouts

This allows users to refresh or revisit the application without immediately losing their selected workouts.

---

### 8. 🔔 Toast Notifications

User actions provide immediate feedback through toast notifications.

Examples include:

- Workout added to Today's Plan
- Workout saved
- Workout already exists
- Workout removed
- Workout marked as completed

---

### 9. 📱 Fully Responsive Design

The interface is designed to work across:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

Responsive behavior includes:

- Mobile navigation
- Responsive hero section
- Responsive workout grid
- Responsive workout cards
- Responsive details page
- Responsive My Plan layout
- Responsive footer

---

### 10. ⚠️ Loading & Error States

The application includes dedicated UI states for better user experience.

- Loading animation while workout data is being fetched
- Custom 404 page for invalid workout routes
- Empty states when no workouts are available
- Search empty state when no matching workout is found

---

## 🛠️ Technologies Used

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Libraries

- **React Icons** — UI icons
- **React Toastify** — toast notifications

### Data & State

- REST API
- React Context API
- Browser Local Storage

### Development Tools

- Git
- GitHub
- VS Code
- npm
