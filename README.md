You just Need to change  const API = "http://16.171.39.41:31720"; this line with your backend service port and your worker node ip 
Code Structure -> 
3-tier-kubernetes/
│                                                                                                                                         
│   ├── backend/
│   │   ├── Dockerfile
│   │   ├── server.js      
│   │   └── package.json
│   ├── frontend/
│   │   ├── Dockerfile
│   │   └── index.html
│   └── db/
│       └── init.sql
├── k8s/
│   ├── backend/
│   │   ├── backend-deployment.yml
│   │   └── backend-service.yml
│   ├── frontend/
│   │   ├── frontend-deployment.yml
│   │   └── frontend-service.yml
│   ├── db/
│   │   ├── mysql-deployment.yml
│   |   └── mysql-service.yml
│   ├── storage/
│   │   ├── pv.yml
│   |   └── pvc.yml
│   ├── secrets/
│   |   └── secrets.yml  
└── README.md
