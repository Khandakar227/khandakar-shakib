//@ts-check
import { google } from "googleapis";

/**
 *
 * @param {Object} body data for sheet
 * @param {Array} additionalData data for sheet
 * @param {string} range Sheet name with rows name divided by !. row name are divied by :, example: "Sheet1!A:B"
 */
export default function addSheetData(body, additionalData=[], range = "Sheet1") {
  const { name, email, description } = body;

  //Setup auth
  const googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
      // client_id: process.env.CLIENT_ID
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Get client instance of auth
  // const client = await googleAuth.getClient();

  const sheets = google.sheets({ version: "v4", auth: googleAuth });

  const spreadsheetId = process.env.SPREADSHEETID;
  const timestamp = new Date;

  // @ts-ignore
  //Write to sheet
  return sheets.spreadsheets.values
    .append({
      auth: googleAuth,
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [
          [
            name,
            email,
            description,
            ...additionalData,
            timestamp.toLocaleString('en-US', { timeZone: 'BST' }) /*Cel values ...*/,
          ],
          // Additional rows ...
        ],
      },
    })
    .then(result => ({data: result.data, status: result.status, statusText: result.statusText, error: null}))
    .catch(err => ({error: err}));
}
