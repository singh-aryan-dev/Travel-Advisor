# 🌍 Travel Advisor

> A robust, location-based travel application built with React — helping users discover nearby restaurants and attractions in real time.

🔗 **Live Demo:** [travel-advisor-two-xi.vercel.app](https://travel-advisor-two-xi.vercel.app/)

---

## 📌 Overview

Travel Advisor is an interactive travel discovery app that leverages live geolocation and dynamic API fetching to present a clean, intuitive interface. Whether you're exploring a new city or looking for hidden gems nearby, Travel Advisor delivers real-time results tailored to your current location.

---

## ✨ Features

- 📍 **Live Geolocation** — Automatically detects the user's current location to surface nearby results
- 🍽️ **Restaurant Discovery** — Browse and explore dining options around you with ratings and details
- 🏛️ **Attractions Finder** — Discover local points of interest and tourist spots
- 🔄 **Dynamic API Fetching** — Real-time data fetching based on map bounds and user location
- 🗺️ **Interactive Map** — Explore results visually on an embedded map interface
- 📱 **Responsive Design** — Optimized for both desktop and mobile viewing

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend UI framework |
| **JavaScript (ES6+)** | Core application logic |
| **Geolocation API** | User location detection |
| **RapidAPI / Travel Advisor API** | Restaurant and attractions data |
| **Google Maps API** | Interactive map rendering |
| **Material UI** | UI components and styling |
| **Vercel** | Deployment and hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- API keys for Google Maps and RapidAPI (Travel Advisor)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travel-advisor.git
   cd travel-advisor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`

---

## 📁 Project Structure

```
travel-advisor/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Map/
│   │   ├── List/
│   │   └── PlaceDetails/
│   ├── api/
│   │   └── index.js        # API calls to Travel Advisor & Google Maps
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

```bash
npm run build
```

Then connect your GitHub repo to [Vercel](https://vercel.com/) for automatic deployments on every push.

---

## 🔑 API References

- [Travel Advisor API via RapidAPI](https://rapidapi.com/apidojo/api/travel-advisor)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed by Aryan Singh

⭐ **If you found this project helpful, please give it a star!**
