const fs = require('fs');
const https = require('https');

const emailListUrl = "https://raw.githubusercontent.com/wesbos/burner-email-providers/master/emails.txt";

async function getEmailList() {
  return new Promise((resolve, reject) => {
    https.get(emailListUrl, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });

      res.on('error', (err) => {
        reject(new Error(`Failed to fetch email list: ${err.message}`));
      });
    });
  });
}

async function generateEmailList() {
  try {
    const emailListData = await getEmailList();
    const emails = emailListData.split('\n').filter(email => email.trim());

    const emailObject = emails.reduce((acc, email) => {
      acc[email.trim()] = "";
      return acc;
    }, {});

    const fileContent = `// Generated on ${new Date().toISOString()}
// This file should not be modified manually

const allowedEmails = ${JSON.stringify(emailObject, null, 2)};
`;

    fs.writeFileSync('generated-file.js', fileContent);
    console.log('Successfully generated email list file!');
  } catch (error) {
    console.error('Error generating email list:', error);
  }
}

// Execute the generation
generateEmailList();