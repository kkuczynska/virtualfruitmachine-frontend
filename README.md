Virtual Fruit Machine
-----------------

This application is a virtual gambling tool built with React that fetches data from 
REST API endpoints.

###
### Description

The machine has four empty slots, filles with color previously fetched through an API 
call after user clicks on the `Draw` button. Every time the button is pressed, the 
application makes a `GET` call to backend app to get colors for each slot and aside 
from that it makes two more `GET` calls to fetch result of the draw and the current
jackpot. The result is a `WIN` when all four colors in slots are the same or `LOSS`
when it is not the case as long as the jackpot is not yet empty. 

In case the user looses or wins, appropriate message, also fetched with API
is displayed to user. With a `WIN` user gets what is left in the jackpot. Moreover, if 
the jackpot is empty, the user looses too.

### Endpoints

This application uses three `GET` endpoints, all returning `JSON`:

* `/draw` - main endpoint, returns four hex colors for each machine slot
* `/jackpot` - returns current jackpot value
* `/result` - returns draw result: loss, win or try again 

### Installation

To install the application, clone the repository and run the following command:

``` npm start ```

### Access

The application runs on default port `3000`.

Once the application is running, you can access it using a web browser.
 The base URL is http://localhost:3000, and no authentication is required.