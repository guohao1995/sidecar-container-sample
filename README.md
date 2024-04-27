# Sidecar Container Sample

This is a code sample for sidecar containers in custom container in App Service. You can deploy this frontend application as main container and backend API application as sidecar container

In Azure App Service, you can add up to 4 sidecar containers for each sidecar-enabled custom container app. Sidecar containers let you deploy extra services and features to your container application without making them tightly coupled to your main application container.

# Run the sameple in local environment

## For frontend app
1. Install the required package.
```
    npm install
```
2. Run the application by using "npm start", the application will be listening by default on **http://localhost:3000**
```
    npm start
```

## For backend API app
1. Create a **virtual environment** with any python version >=3.
    - If you are using Windows:
        ```shell
            python -m venv env
        ```
    - If you are using Linux:
        ```shell
            python3 -m venv env
       ```
2. Activate the virtual environment.
    - If you are using Windows in cmd:
        ```shell
            env\Scripts\activate
        ```
    - If you are using Linux
        ```shell
            source env/bin/activate
        ```
3. Once the virtual environment is activated, install **requirements.txt**.
    ```shell
        pip install -r requirements.txt
    ```
4. Run the application with `uvicorn main:app --reload`

    > The application will be listening by default on **http://127.0.0.1:8000/**
