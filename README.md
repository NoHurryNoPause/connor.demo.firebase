# Tool versions

> Firebase 8.9.2
> Node 10.18.1
> npm 6.13.4

# Express

    We use express to setup the different routes for our endpoints

# firebase deploy

    This will deploy the rules, functions, and storage for firebase

# Emulator

    Used to locally emulate the functions and storage available without making changes to the production server

# Postman

    For endpoints that I wish to test without having to call them from the client side I usually first call them from postman while running the emulator

# Serve.sh

    Even though the command to run the emulator is common and easily run, I will often use .sh scripts for deployment and emulators so that, along the development cycle, if any flags are necessary or if other actions need be taken prior to running commands they will be done with an added layer of risk mitigation. If another developer comes onto my project I can simply have them run the command and not worry about any additional command flags or previous actions that might be project specific
