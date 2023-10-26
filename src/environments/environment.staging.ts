// const  serverUrl = 'https://mealaweserver.el.r.appspot.com';
// const  serverUrl = 'https://mealaweserverprod.el.r.appspot.com';
// const  serverUrl = 'http://192.168.43.81:5000';
// const  serverUrl = 'http://192.168.1.119:5000';
// const  serverUrl = 'http://192.168.1.6:5000';
// const  serverUrl = 'http://localhost:5000';
const  serverUrl = 'http://mealawelbstaging-486868523.ap-southeast-1.elb.amazonaws.com:5000';
// const  serverUrl = 'http://mealaweLBprod-527069479.ap-southeast-1.elb.amazonaws.com:5000';
// const  serverUrl = 'https://aws-alb-prod.mealawe.com:5000'; 
export const environment = {
  production: false,
  withCredentials: true,
  serverUrl,
  imageUrl : serverUrl + '/images/',
  firebaseConfig: {
    apiKey: "AIzaSyBd3_DKxM7DmTru0bI1a0Kh1YOZcE47WCI",
    authDomain: "mymealawe.firebaseapp.com",
    projectId: "mymealawe",
    storageBucket: "mymealawe.appspot.com",
    messagingSenderId: "587646762370",
    appId: "1:587646762370:web:3dbe5f133fc3dcd998e39b",
    measurementId: "G-KXKTFHE1KS"
  },
  zohoConfig: {
    app_key: "GeuAlADsfErvT4Ls4ujWki5gpPRY6LuOGHqPxsVfvvy7%2FxcmtxXRmbieYv98LcT%2FC%2BD7gQj0fK5oxJgLStg6MxPtdsHPHvQX_in",
    access_key_android: "ZE2x25seckcdTNRtPWZ%2BwsB1LQjGAQT3nYE0tA9gXgQC%2BVitBaBVyMyyxWYS4z3k%2FAdjUTVw3vplBZviuewcZPt%2Bn0DWfp4nNNFrC%2FmDnbKV%2FEdusXPAYe3F7Wn4fTHdozUWYumY%2FH%2BHXZRs0f5gHRPCANC9LnQa",
    access_key_ios: "ZE2x25seckcdTNRtPWZ%2BwsB1LQjGAQT3nYE0tA9gXgQC%2BVitBaBVyMyyxWYS4z3kn7gYO2Id5u%2FLHkJpUoQtPLiXkzFemu0Kjo738wXwVxuV%2FEdusXPAYe3F7Wn4fTHdozUWYumY%2FH%2BHXZRs0f5gHRPCANC9LnQa"
  },
  razorPayKey: "rzp_test_vTMu3XincCvCBz",
  googelAppStoreUrl: "https://play.google.com/store/apps/details?id=com.mealawe.app",
  appleAppStoreUrl: "https://itunes.apple.com/app/1602148451",
  oneLinkAppStoreUrl: "http://onelink.to/536q9d",
  mixPanelToken: '0809a73cf108c46656f5a5a213321e3f',
  paytmMerchentId: 'CLIMBI33455635501584',
  paytmCallback: 'https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=',
  appName:'mealawe',
  appVersion: '1.2.3'
};
