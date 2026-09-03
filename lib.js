// Common definitions
var COMMON_DMARC = "v=DMARC1;p=quarantine;aspf=s;adkim=r;fo=1;ri=60480";
var COMMON_DMARC = COMMON_DMARC + ";rua=mailto:d34e0f7d@dmarc.mailgun.org,mailto:ee82b118@inbox.ondmarc.com";
var COMMON_DMARC = COMMON_DMARC + ";ruf=mailto:d34e0f7d@dmarc.mailgun.org,mailto:ee82b118@inbox.ondmarc.com";
var COMMON_TXT   = [
  TXT("@", "#66CCFF | 2012.07.12~Infinity"),
];
var WEBHOST_VERCEL = [
  A     ("@",   "76.76.21.21"),
  CAA   ("@",   "issue", "letsencrypt.org"),
  CAA   ("@",   "issue", "pki.goog"),
  CAA   ("@",   "issue", "sectigo.com"),
  CAA   ("@",   "issue", "globalsign.com"),
  CNAME ("www", "cname-china.vercel-dns.com."),
];
var DKIM_GOOGLE  = "v=DKIM1;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnAeJDreAJmXHMYI5OYtSUlopWOz4bchQPfo7qTmqZjdKr/nU1DPic30l9zarSNx8vv+6QKNVWUFULqfFRfUDllgKt4Sxh0K9BOERkk8Dqn7O4o/xUlcgV+E8mopcD4MB62+BQsmn1DTObNnepy4CAF7FlxAVZPXyo+dknT1KlwF9LsYjhI8Frw1xeHJA1LcxykX90c9ppG8zNzwAUjTlyzCSVcqsLikMccI4V7RLYk2colPBVO9o3oke+BNUmdxYbkZdUAb6jAoDultjrCrnZx8muWyOr06+0/S9SGUHd1qaWSXO4mtJnzji+0vzRxgl0ci4PghruUjW6Jy66/uYaQIDAQAB";
var DKIM_MAILGUN = "v=DKIM1;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4/pNtz3CziuyKAcJM7iEJfCOJu3NFCzQNgXmz5M+u/GcyBULaYQCq2CWKDVXsLwrjT8TUE3ryKT06HoKAtpkh5jJyVzzddLkqVGHksJnnWVeXzQrLExr85Bn9jWy1YsNOS3CgOL/tKlk1z/XpowpseeApysrts43E2sMob0Brm23BY5kqE49kr3PFXGCVDKzobk0ra//oZHnp9ENABAdVcK6m84fK/OMc5vdJXuEYG09GpcIFqvaoylKJPOhwe79FM5cn4vLavPoaiaWeosw2grlaPjOe7iMUYntiBPxcKPd20dVIRdxJhQd2Z7AcdLO2rGIUsbK1ZDIYcLKDTgrLQIDAQAB";


/**
 * @param {string} name
 * @param {string} ipv4
 * @param {string} ipv6
 */
function A_AAAA(name, ipv4, ipv6) {
  return [A(name, ipv4), AAAA(name, ipv6)];
}
