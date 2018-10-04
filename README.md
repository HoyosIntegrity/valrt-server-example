# valrt-server-example
This document contains sample Twilio Functions code and endpoints used for V.ALRT to establish voice calls to users devices and land/PSTN phone numbers without users physically pressing a button on the iOS UI to start the call. 
  

Steps/flow of calling on V.ALRT 

1. Mobile Application receives Bluetooth event. 
2. Mobile application request access token from Twilio
3. Access token returns the SID of the TWIML App that points to the Voice Request URL to the outgoing call( /client-voice endpoint)
4. [How to create a twiml app and obtain a SID](https://support.twilio.com/hc/en-us/articles/223180928-How-Do-I-Create-a-TwiML-App-)

The mobile app follows the logic/process explained on this twilio sample regarding outgoing call
https://github.com/twilio/voice-quickstart-objc#quickstart

Twilio endpoints used:
1. [/Accesstoken](accessToken.js)
2. [/client-voice](client-voice.js)
