declare global {
  interface ConfigType {
    ROOTURL: {
      prod: string;
    };
    MAPBOX_TOKEN: string,
    MAP_COORDINATES: [number, number],
    MAP_ZOOM: number
    DAYS: number
    STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRET_KEY: string
  }

  interface Global {
    config: ConfigType;
  }

  // Extend globalThis
  var config: ConfigType;
}

global.config = {
  ROOTURL: {
    prod: 'http://localhost:3002',
    // prod: 'https://message-booking.onrender.com',
  },
  MAPBOX_TOKEN: "pk.eyJ1IjoiamF5bWF3YXJpIiwiYSI6ImNrdWhiZXRlODJhNzUycG12YW1ubGJvb3kifQ.tNmhwcgvyLZxZIMZw0MHLA",
  MAP_COORDINATES: [-74.0242, 40.6941],
  MAP_ZOOM: 10.12,
  DAYS:7,
  STRIPE_PUBLISHABLE_KEY:"pk_test_51RyF2pGaTWaLZtyml1YEgHj1gGToKXaNFTftQ2S3XbXQq3Mn0jdygqsaOAfkm5RzrX0ezwjCN3eP34eQWnITz6KU00rxfDFu5v",
  STRIPE_SECRET_KEY:"sk_test_51RyF2pGaTWaLZtymqn3GBJKv5ubRZgrM1UrGGhsE3vnTNVgjhPV9WaHxj9IUUNcecFyiWn83oNlH3WyrrcBgUaT000wdNOIM9c"
};

export default global.config;