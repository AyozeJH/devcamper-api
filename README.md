# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website.

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/setting to your own.

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "/_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo
Extensive documentation with examples [here](https://documenter.getpostman.com/view/14612101/TzJsfHzU)

- Version: 1.00
- License: MIT
- Author: Ayoze JH