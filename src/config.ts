declare global {
  interface ConfigType {
    ROOTURL: {
      prod: string;
    };
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
};

export default global.config;