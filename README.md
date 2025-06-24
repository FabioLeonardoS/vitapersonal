# VitaPersonal Project 
vitapersonal/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authJwt.js
│   ├── models/
│   │   ├── User.js
│   │   └── Checkin.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services/
│   │   └── whatsappService.js
│   ├── utils/
│   │   └── jwtUtils.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/            # Opcionalmente
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml    # Para subir backend, frontend e Traefik
└── README.md             # Guia rápido de instalação