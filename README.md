# valrt-server-example
This document contains sample Twilio Functions code and endpoints used for V.ALRT to establish voice calls to users devices and land/PSTN phone numbers without users physically pressing a button on the iOS UI to start the call. 
  

Steps/flow of calling on V.ALRT 

Mobile Application receives Bluetooth event. 
Mobile application request access token from Twilio
Access token returns the SID of the TWIML App that points to the Voice Request URL for the outgoing call( /client-voice endpoint) from the twilio sdk on the mobile app
(https://support.twilio.com/hc/en-us/articles/223180928-How-Do-I-Create-a-TwiML-App-)

The mobile app follows the logic/process explained on this twilio sample regarding outgoing call
https://github.com/twilio/voice-quickstart-objc#quickstart

Twilio endpoints used:
[/Accesstoken](accessToken.js)
[/client-voice](client-voice.js)
