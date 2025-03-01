const employees = [
    {
        "id": 1,
        "firstName": "Aman",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Monthly Report",
                "description": "Generate and submit the financial report.",
                "date": "2025-03-01",
                "category": "Finance",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Attend the weekly performance review meeting.",
                "date": "2025-03-02",
                "category": "Management",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix UI Bug",
                "description": "Resolve the issue in the login page layout.",
                "date": "2025-03-03",
                "category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "new_task": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Arif",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Database Optimization",
                "description": "Improve query performance for reports.",
                "date": "2025-03-05",
                "category": "Database",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Presentation",
                "description": "Prepare slides for the new product demo.",
                "date": "2025-03-06",
                "category": "Sales",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "new_task": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Priyam",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Security Audit",
                "description": "Perform vulnerability assessment on servers.",
                "date": "2025-03-07",
                "category": "Cybersecurity",
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Write Documentation",
                "description": "Update the API documentation for new features.",
                "date": "2025-03-08",
                "category": "Documentation",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "new_task": 0,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Sharique",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Social Media Campaign",
                "description": "Plan and execute the Q2 marketing campaign.",
                "date": "2025-03-09",
                "category": "Marketing",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Employee Training",
                "description": "Conduct a workshop on agile methodologies.",
                "date": "2025-03-10",
                "category": "Training",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "new_task": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Shivam",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Network Upgrade",
                "description": "Upgrade network infrastructure to 5G.",
                "date": "2025-03-11",
                "category": "IT",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Bug Fixes",
                "description": "Fix critical bugs in the production system.",
                "date": "2025-03-12",
                "category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "new_task": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

  
  const admin = [
    {
      "id": 101,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  

export const setLocalStorage =() =>{
       localStorage.setItem("employees" , JSON.stringify(employees)) ;
       localStorage.setItem("admin" , JSON.stringify(admin)) ; 
}

export const getLocalStorage =() =>{
    const employees = JSON.parse(localStorage.getItem('employees'))  ; 

   const admin = JSON.parse(localStorage.getItem('admin')) ;

  return {employees , admin} ; 
}