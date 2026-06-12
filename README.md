# AI-Area

A React-based web application that tracks and delivers the latest developments and breakthroughs in Artificial Intelligence across specialized fields. 

---

## 🚀 Features

* **Focused Categories:** Navigate through dedicated news feeds for specific sectors heavily impacted by AI, including:
  * Space
  * Robotics
  * DevOps
  * Cyber Security
  * Biology
* **Dark Mode Support:** Built-in "Dark Reader" toggle for comfortable reading in low-light environments.
* **Intuitive Layout:** A clean, two-column dashboard design featuring a sticky side navigation bar and a prominent main content area.
* **Real-Time Updates:** Stay informed with dynamic content rendering as new developments are published.

---

## 🛠️ Tech Stack & Structure

* **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3.
* **Suggested Component Architecture:**
  * `<App />`: The main container managing state (current category, dark mode).
  * `<Header />`: Displays the main "Artificial Intelligence" title and houses the "Dark Reader" toggle button.
  * `<Sidebar />`: Renders the navigation buttons (Space, Robotics, etc.) and updates the active category state.
  * `<ContentArea />`: The main display panel that renders the news cards based on the currently selected category from the sidebar.

---

## 📦 Getting Started

### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/ai-area.git](https://github.com/your-username/ai-area.git)
