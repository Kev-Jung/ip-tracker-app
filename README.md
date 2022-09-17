# IP Address Tracker Solution

This is a solution to the [IP Address Tracker Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

[View Live Solution](https://kev-jung.github.io/ip-tracker-app/)

## The Challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for any IP addresses and see the key information and location

## Built With

- HTML5 markup
- CSS
- ES6 Javascript
- Mobile-first workflow
- React - functional components
- [IP Geolocation Api - Ipify](https://geo.ipify.org/)
- [Google Maps Api - @react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)

## Screenshot

### Mobile

![mobile](https://user-images.githubusercontent.com/86936720/190877719-a767a94c-9b11-4d33-8e03-982b423ade80.png)

### Desktop

![desktop](https://user-images.githubusercontent.com/86936720/190877724-eb01bb0c-3f5d-493c-ae43-84975e1de874.png)

## My Process

Looking at the challenge designs, I decided to build the mobile layout first and built responsiveness with media queries for subsequent breakpoints until desktop view. I began this challenge by brainstorming what components would be needed to create this React app. These were the searchbar, results field, and the map display. The search bar would need to have state, set to `searchField`, to capture the input field keystrokes and to make a controlled component.

```js
const [searchField, setSearchField] = useState("");

<input
  type="text"
  placeholder="Search for any IP address"
  onChange={(e) => setSearchField(e.target.value)}
  value={searchField}
/>;
```

When the user submits the input by clicking the submit button, the `validateIPaddress` handler function was called to verify if the string entered was a valid IP address with four octets, each in the range of 0-255.

```js
  function validateIPaddress(ipAddress) {
    // Regex validation commented for brevity, returns true or false
      ? // invokes API to get data on valid IP
        fetchApi(ipAddress)
      : alert("Please enter a valid IP address!");
  }
```

If the validation was successful, an API request was made to Ipify using the `searchField` state as the parameter for the API fetch call. The returned response was saved into state as `queryResponse` after transforming the data into an object with custom keys.

```js
const fetchApi = async (query) => {
  // some fetch function to return json data to save to state below

  setQueryResponse((prevState) => {
    const { ip, isp, location } = data;
    const { city, country, postalCode, timezone, lat, lng } = location;
    return {
      ...prevState,
      ip,
      timezone,
      isp,
      lat,
      lng,
      location: `${city}, ${country} ${postalCode === "" ? "" : postalCode}`,
    };
  });
};
```

The `queryResponse` state was important as this contained the API response and was passed as props to the other components (ResultField and Map) for displaying data in the UI.

## Takeaway

This challenge was a great exercise on building an app using an API and tested my abilities to read documentation and research how to use unfamiliar APIs. Some roadblocks I ran into was using an incorrect version of the Ipify API which did not contain the latitude and longitude data. After an attempt to use a secondary API to pass the initial Ipify response, I realized that Ipify had 3 versions, one of which contained latitude and longitude data. I also spent time researching how to use the Google Map's API specifically for React. I found this [Medium article](https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d) by Allyn Alda particulary helpful by installing the react-google-maps/api npm package. Overall, I really enjoyed this challenge by Front End Mentor and reinforced many React concepts as well as fetching APIs.
