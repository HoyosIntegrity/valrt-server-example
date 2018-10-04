exports.handler = function(context, event, callback) {
  
  // Parse the identity from the http request
  var identity = null;
  
  if(!identity) {
    identity = 'user';
  }
  const AccessToken = Twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;
  // Used when generating any kind of tokens
  const accountSid = context.ACCOUNT_SID;
  const apiKey = context.TWILIO_API_KEY;
  const apiSecret = context.TWILIO_API_SECRET;

  // Used specifically for creating Voice tokens
  
  //find the APP SID from the database twilio table where biren patel is the email and the column says getfriendlyname
  //const outgoingApplicationSid = context.TWIML_APP_SID;
  
  //  const pushCredSid = context.PUSH_CREDENTIAL_SID;

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const voiceGrant = new VoiceGrant({
      outgoingApplicationSid: 'APxxxxxxxxxxxx',
      //pushCredentialSid: pushCredSid
    });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const accessToken = new AccessToken(
      accountSid,
      apiKey,
      apiSecret
  );
  
  accessToken.addGrant(voiceGrant);
  accessToken.identity = identity;
  
  callback(null, accessToken.toJwt() );
};
