exports.handler = function(context, event, callback) {
    //THIS initiates a outgoing call to somebody else as a first emergency call
    //never to clients.
    //read from event parameters the 
    //emergencyNo destination
    //CallStatus
    //CallSid
    //From - not used
    //fromNo
    
    //Context.CALLER_ID
    let twiml = new Twilio.twiml.VoiceResponse();
 
    if(event.emergencyNo) {
      // Wrap the phone number or client name in the appropriate TwiML verb
      // if is a valid phone number
      //bad assumption for valrt...
      //changing this in case a typo is made on call to get a different twilio error
      //const attr = isAValidPhoneNumber(event.emergencyNo) ? 'number' : 'client';
      if(!isAValidPhoneNumber(event.emergencyNo))
      {
          twiml.say("incorrect phone number format");
      }
      const dial = twiml.dial({
        callerId: '18889094944', // call back number
      });
      dial['number']({}, event.emergencyNo);
    } else {
     twiml.say("missing emergency number");
    }

     callback(null, twiml);
};

/**
* Checks if the given value is valid as phone number
* @param {Number|String} number
* @return {Boolean}
*/
function isAValidPhoneNumber(number) {
  return /^[\d\+\-\(\) ]+$/.test(number);
}
