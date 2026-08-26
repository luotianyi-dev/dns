// @ts-check
/// <reference path="types-dnscontrol.d.ts" />
var REG_NONE    = NewRegistrar("none");
var DSP_BUNNY   = NewDnsProvider("bunny");
var DSP_CF_LTY  = NewDnsProvider("cloudflare");
var TTL_DEFAULT = DefaultTTL("1m");

// @ts-ignore
require("./lib.js");

// cloudflare:luotianyi.dev
D("luotianyi.dev", REG_NONE, DnsProvider(DSP_CF_LTY), TTL_DEFAULT,
  // Site Verification
  CAA("@", "issue",     "pki.goog"),
  CAA("@", "issuewild", "pki.goog"),
  TXT("_github-pages-challenge-luotianyi-dev", "09e40d1fa235cfdba1e74f2d90ba4d"),
  // Google Workspace - luotianyi.dev
  MX ("@", 1, "smtp.google.com."),
  TXT("@", "v=spf1 include:_spf.google.com include:spf.protection.outlook.com -all"),
  TXT("@", COMMON_DMARC),
  TXT("google._domainkey", "v=DKIM1;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnAeJDreAJmXHMYI5OYtSUlopWOz4bchQPfo7qTmqZjdKr/nU1DPic30l9zarSNx8vv+6QKNVWUFULqfFRfUDllgKt4Sxh0K9BOERkk8Dqn7O4o/xUlcgV+E8mopcD4MB62+BQsmn1DTObNnepy4CAF7FlxAVZPXyo+dknT1KlwF9LsYjhI8Frw1xeHJA1LcxykX90c9ppG8zNzwAUjTlyzCSVcqsLikMccI4V7RLYk2colPBVO9o3oke+BNUmdxYbkZdUAb6jAoDultjrCrnZx8muWyOr06+0/S9SGUHd1qaWSXO4mtJnzji+0vzRxgl0ci4PghruUjW6Jy66/uYaQIDAQAB"),
  CNAME("mail",   "ghs.googlehosted.com."),
  CNAME("groups", "ghs.googlehosted.com."),
  CNAME("cal",    "ghs.googlehosted.com."),
  CNAME("drive",  "ghs.googlehosted.com."),
  // Microsoft 365 - luotianyi.dev
  SRV("_sip._tls",                100, 1, 443,  "sipdir.online.lync.com."),
  SRV("_sipfederationtls._tcp",   100, 1, 5061, "sipfed.online.lync.com."),
  CNAME("sip",                    "sipdir.online.lync.com."),
  CNAME("autodiscover",           "autodiscover.outlook.com."),
  CNAME("lyncdiscover",           "webdir.online.lync.com."),
  CNAME("enterpriseenrollment",   "enterpriseenrollment-s.manage.microsoft.com."),
  CNAME("enterpriseregistration", "enterpriseregistration.windows.net."),
  // Microsoft 365 - m365.luotianyi.dev
  MX   ("m365", 0,    "m365-luotianyi-dev.mail.protection.outlook.com."),
  TXT  ("m365",       "v=spf1 include:spf.protection.outlook.com -all"),
  TXT  ("_dmarc.m365", COMMON_DMARC),
  CNAME("autodiscover.m365",         "autodiscover.outlook.com."),
  CNAME("selector1._domainkey.m365", "selector1-m365-luotianyi-dev._domainkey.luotianyi66ccff.p-v1.dkim.mail.microsoft."),
  CNAME("selector2._domainkey.m365", "selector2-m365-luotianyi-dev._domainkey.luotianyi66ccff.p-v1.dkim.mail.microsoft."),

  // DN42 (delegation for dn42.luotianyi.dev, zone itself lives in dn42/dns)
  A ("copy.ns.dn42", "23.95.252.138"),
  A ("ilem.ns.dn42", "107.174.242.9"),
  NS("dn42", "copy.ns.dn42.luotianyi.dev."),
  NS("dn42", "ilem.ns.dn42.luotianyi.dev."),
  DS("dn42", 2664, 13, 2, "ba0e712182e711d4d55c2c759a21457b0c42fa0c17a508813ced137aad662a86"),
);


D("lty.name",              REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
D("v3tianyi.com",          REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
D("luotianyi.us",          REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
D("vc123.xyz",             REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
D("xn--3bt625flzps8a.com", REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
D("lty.ac.cn",             REG_NONE, DnsProvider(DSP_BUNNY), TTL_DEFAULT, COMMON_TXT, WEBHOST_VERCEL);
