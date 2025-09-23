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
  STRIPE_PUBLISHABLE_KEY:"pk_live_51RyF2e2euVADi7crPGGHc3sUtFX9jA3WZOAYtjBrIulNHERVaNe8234iR6gn29tZt2n0V0k3N5CCiMfNngTU0LIB0087CZUi00",
  STRIPE_SECRET_KEY:"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"
};

export default global.config;