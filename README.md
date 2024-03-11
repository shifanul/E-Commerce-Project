# E-Commerce-Project

# Wearables E-Commerce Project

You've and your team have been hired by a client to create an e-commerce website that will showcase wearable technology. The client believes that wearable tech is the way of the future!

Your job will be to build a functional e-commerce website where users can come in and shop around for the tech they want.

---

## Meet your Product Manager!

Each team has been assigned a product manager!
- This person is in charge of answering questions, guiding you and basically preventing everything from falling apart!
- This person will be directing a team stand-up every day.
    - A stand-up is a meeting that lasts around 10 to 15 minutes where each member of the team updates the PM (and other members) about their progress or problems they're facing.

---
> **✋ You CANNOT use any external styling libraries, including, but not limited to, Material UI, Bootstrap, and Tailwind to style your project!**
## Frontend

Users should be able to:

- View all items in the database.
- Purchase items that are in stock.
- View their cart containing the items they intend to purchase.
    - The cart **CANNOT** use `sessionStorage` or `localStorage`, and must be persistent.
    - **HINT**: use the database. Yes it will be slow, but use it anyways.
- Edit the cart before completing the purchase.
    - **HINT**: use a reducer.

## Backend Requirements

The Node server should

- Be RESTful (use the right `method` for the right job and hold nothing in memory).
- Provide the FE with the required data in a clear and organized way.
- Update the database as users make purchases.

## Project Requirements

You thought we were done? Oh there's more!

- Attendance to the daily stand-ups conducted by your PM.
- A [Trello](https://trello.com) board to divide up the tasks (other similar sites are fine too).
- A group chat or new private discord server for your team and your PM.

## About the Data

All about Wearables!
You will find 349 items in the `_data/items.json` file. The data is mostly clean, but there could be some irregularities, i.e. empty values, values that we really don't need. _This is common in large databases, and something that we have to deal with._

> No modifying the data at all. We use what we get!
