# Installation
``npm install``

MongoDB is required aswell, installed and running.

# Execution
``node bin/www``

# Info
#### What has been done
- CRUD can be done with users.
- Diagram showing the code flow (``Persistance.pdf``)
- Screenshots (see further paragraph)

#### What has not been done
- I did not implement the login because i found useless to login without credentials. Logging in without password, providing a username only, can be accomplished with similar logic as the ``find_user`` function.

## Design Patterns
Regarding the Database, a gateway has been implemented: For example, finding a user implies calling a function called ``insert_user``, from the ``users.js`` module.

In this scenario, ``users.js`` contains all the implementations regarding the users.
``db_gateway.js`` is the gateway, linked with ``users.js``.

If other entities must be added to the system, we can simply create a module for this entity and link it to the gateway. 
Using a gateway adds flexibility to the system and implements separation of concerns. 

## Screenshots
Some screenshots can be found in the directory ``Examples``. Those screenshots have been done while the application was not completed yet. I recommend running the final application. 

## Checks

No checks are done in any operation, since this part of code is to be added to an existing system, where checks are assumed to be done, both clientside and serverside.

