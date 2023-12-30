# README: Setting Up SL Portal

This guide will help you set up the SL Portal on your local system. The SL Portal is a Python-based web application, and the following steps assume that you have Python installed on your machine.

## Prerequisites

1. **Python Installation:**
   Make sure Python is installed on your system. You can check your Python version by running the following command in your terminal or command prompt:
   ```bash
   py --version
   ```

## Installation Steps

1. **Install Requirements:**
   Install the required Python packages by running the following command:
   ```bash
   pip install -r requirements.txt
   ```

2. **Database Migration:**
   Change into the `sl_portal` folder and apply database migrations:
   ```bash
   cd sl_portal
   py manage.py migrate
   ```

3. **Create Superuser:**
   After applying the database migrations, it's essential to create a superuser account to manage the SL Portal's administrative functionalities. Run the following command:
   ```bash
   py manage.py createsuperuser
   ```
   Follow the prompts to enter a username, email address, and password for the superuser account. This account will have access to the Django admin interface, allowing you to manage users, content, and other essential aspects of the SL Portal.

   Once the superuser account is created, you can log in to the admin interface by navigating to [http://localhost:8000/admin/](http://localhost:8000/admin/) and using the credentials you just set up.

   Congratulations! You have now successfully set up the SL Portal on your local system. You can explore and customize the portal further based on your project requirements.


4. **Run the Development Server:**
   Start the Django development server:
   ```bash
   py manage.py runserver
   ```

   This will start the development server, and you should see output indicating that the server is running. Open your web browser and navigate to [http://localhost:8000/](http://localhost:8000/) to access the SL Portal.
