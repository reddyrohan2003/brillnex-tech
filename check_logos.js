const https = require('https');

const COMPANIES = [
  { name: "Google", domain: "google.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "HCL", domain: "hcltech.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "Autodesk", domain: "autodesk.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Intuit", domain: "intuit.com" },
  { name: "EY", domain: "ey.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Intel", domain: "intel.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "Reliance", domain: "ril.com" },
  { name: "Airtel", domain: "airtel.in" },
  { name: "Apple", domain: "apple.com" },
];

async function checkLogos() {
  const valid = [];
  const invalid = [];

  for (const company of COMPANIES) {
    const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${company.domain}&size=128`;
    
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          valid.push(company.name);
        } else {
          invalid.push(company.name);
        }
        resolve();
      }).on('error', (e) => {
        invalid.push(company.name);
        resolve();
      });
    });
  }

  console.log("Valid Companies:", valid);
  console.log("Invalid Companies:", invalid);
}

checkLogos();
