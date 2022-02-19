const {
    getAuthToken,
    getSpreadSheetValues,
} = require('./googleServices.js');
  
const spreadsheetId = '1iL_nySopsVud3quBUchbYWsdz4LHwCP4qih4dY_9QJg';
const sheetName = 'Inventory';
  
const getSpreadSheetData = async () => {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth,
        });
        console.log(
            'output for getSpreadSheetValues',
            JSON.stringify(response.data, null, 2)
        );
        return response.data;
    } catch (error) {
        console.log(error.message, error.stack);
    }
};

module.exports = {
    getSpreadSheetData,
};
  