# HelloWorld
HelloWorld Web App


As requested, the “Hello, World” app is already done and deployed, ready for being used with the following instructions

  GitHub repository: https://github.com/AleJo2995/HelloWorld

  Deployed Application: http://40.119.31.135:8080/
  
  Postman Collection: look at the HelloWorldApp.postman_collection.json export file under utils/PostmanCollection folder on the repository

Technical Overview

    Application is intended to demonstrate the usage and building of a REST API, implementing the most basic requests that can be done with it. Languages/Technologies/Libraries used are described above: 
    
    •	Node.js
    
    •	Mongoose – ODM
    
    •	Express
    
    •	Atlas DB – Mongo db provider
    
    •	Docker
    
    •	Azure Cloud (AKS, Azure Container Registry)
    
User Overview
  
  The API is intended to simulate ´CRUD’ operations from a store inventory so it has 4 different endpoints so far. As a user do the following for testing purposes:
  
1.	Make use of the postman collection uploaded to the repo under folder utils/ PostmanCollection - HelloWorldApp.postman_collection.json. All endpoints are done to be used  in there

      a.	GET – Get all inventory items – URL: http://40.119.31.135:8080/items/getAllItems
      
        i.	This will retrive all items on the inventory
        
      b.	GET – Get specific item by id – URL: http://40.119.31.135:8080/items/getSpecificItem/:id
      
        i.	This endpoint will retrieve an item information based on its provided id
        ii.	Remember to replace :id in the URL by a valid id from data store (check valid ids executing the http://40.119.31.135:8080/items/getAllItems request)
        
      c.	POST – Creates a new item – URL: http://40.119.31.135:8080/items/createItem
      
        i.	This endpoint will create a new item on the inventory
        ii.	Request body fields are already set/structured on the postman collection. Feel free to change the values as you wish
        
      d.	UPDATE – Update item – URL: http://40.119.31.135:8080/items/updateItem/:id
      
        i.	This endpoint will update only “title” property of an existing item on the inventory
        ii.	Remember to replace :id in the URL by a valid id from data store (check valid ids executing the http://40.119.31.135:8080/items/getAllItems request)
        
      e.	DELETE – Deletes an item from inventory – URL: http://40.119.31.135:8080/items/deleteItem/:id
      
        i.	This endpoint will delete an existing item on the inventory
        ii.	Remember to replace :id in the URL by a valid id from data store (check valid ids executing the http://40.119.31.135:8080/items/getAllItems request)
        

Local Testing steps/tips

Downloading and running docker image “locally” 

•	docker pull helloworldapp1020acr.azurecr.io/helloworldapi:latest

•	docker run -it -p {port}:8080 helloworldapp1020acr.azurecr.io/helloworldapi:latest
