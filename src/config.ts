declare global {
  interface ConfigType {
    ROOTURL: {
      prod: string;
    };
    URL:{
      url:string
    }
    MAPBOX_TOKEN: string,
    MAP_COORDINATES: [number, number],
    MAP_ZOOM: number
    DAYS: number
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
    // prod:'http://srv1050458.hstgr.cloud:3002'
  },
  URL:{
    // url:"http://localhost:3000",
    // url:"https://massage-frontend-two.vercel.app",
    url:"http://srv1050458.hstgr.cloud:8080"
  },
  MAPBOX_TOKEN: "pk.eyJ1IjoiamF5bWF3YXJpIiwiYSI6ImNrdWhiZXRlODJhNzUycG12YW1ubGJvb3kifQ.tNmhwcgvyLZxZIMZw0MHLA",
  MAP_COORDINATES: [-74.0242, 40.6941],
  MAP_ZOOM: 10.12,
  DAYS:7,
};

export default global.config;