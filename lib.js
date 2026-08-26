// Common definitions
var COMMON_DMARC = "v=DMARC1; p=quarantine; aspf=s; adkim=r; fo=1; ri=60480";
var COMMON_TXT   = [
  TXT("@", "#66CCFF | 2012.07.12~Infinity"),
];
var WEBHOST_VERCEL = [
  A     ("@",   "76.76.21.21"),
  CNAME ("www", "cname-china.vercel-dns.com."),
];


/**
 * @param {string} name
 * @param {string} ipv4
 * @param {string} ipv6
 */
function A_AAAA(name, ipv4, ipv6) {
  return [A(name, ipv4), AAAA(name, ipv6)];
}
