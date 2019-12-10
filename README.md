# WallstreetBets
[Live Demo](http://wallstreet-bets.herokuapp.com/#/)!

 An investment app with a simple interactive design that allows new users to invest and trade stocks with no commission fees.

## Technologies

- Frontend: React/Redux, HTML5, CSS
- Backend: Ruby on Rails, PostgreSQL
- [IEX Trading API](https://iexcloud.io/)
- [News API](https://newsapi.org/)
- [Recharts JS](http://recharts.org/en-US/)
- [Odometer JS](https://github.hubspot.com/odometer/docs/welcome/)

## Features

- Secure frontend to backend user authentication using BCrypt
- Real-time and historical price data of all stocks traded on the NASDAQ
- Interactive dashboard showing a user's relavant owned as well as watched stocks
- Interactive charts displaying stock price and portfolio price fluctuation over time
- Allow search for a specific stock by ticker symbol or company name
- Relevant news displayed for the general market on home page, and for specific stock on the stock's show page
 
 ### Dashboard and Portfolio
 
 ### Dynamic Chart Rendering
 
 ### Stock Show Page
 
 The stock show page contains current and historical price information about the specific stock as well as general company information and relevant news. The order form allows the user to purchase and sell the stock at the most recent market price indicated. The chart is dynamically displayed by parsing historical information and colored elements; red and green are used to show a positive or negative price fluctuation over the given period.
 
## Bonus Features to be made

**Order/Transaction**
Users are able to purchase/sell stocks given their buying power and stocks owned respectively.
**Search**
User is able to use a search bar to search up a stock by their company name or symbol and redirects to the stock show page.
