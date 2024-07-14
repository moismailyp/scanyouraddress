export const extractAddressParts = (text) => {
    const patterns = {
        name: /^[A-Z][a-z]+ [A-Z][a-z]+/,
        addressLine1: /\d+\s[A-Za-z\s]+/,
        addressLine2: /(Apt|Suite|Unit)\s\d+/,
        city: /^[A-Za-z\s]+$/,
        state: /\b(?:AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\b/,
        postalCode: /\b\d{5}(?:-\d{4})?\b|\b\d{6}\b/,
        country: /\b(?:USA|United States|Canada|Mexico|UK|United Kingdom|Australia)\b/
    };

    const lines = text.split('\n').map(line => line.trim());

    const extractedParts = {
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
    };

    lines.forEach(line => {
        if (!extractedParts.name && patterns.name.test(line)) {
            extractedParts.name = line.match(patterns.name)[0];
            console.log('Name found:', extractedParts.name);
        } else if (!extractedParts.addressLine1 && patterns.addressLine1.test(line)) {
            extractedParts.addressLine1 = line.match(patterns.addressLine1)[0];
            console.log('Address Line 1 found:', extractedParts.addressLine1);
        } else if (!extractedParts.addressLine2 && patterns.addressLine2.test(line)) {
            extractedParts.addressLine2 = line.match(patterns.addressLine2)[0];
            console.log('Address Line 2 found:', extractedParts.addressLine2);
        } else if (!extractedParts.city && patterns.city.test(line)) {
            extractedParts.city = line.match(patterns.city)[0];
            console.log('City found:', extractedParts.city);
        } else if (!extractedParts.state && patterns.state.test(line)) {
            extractedParts.state = line.match(patterns.state)[0];
            console.log('State found:', extractedParts.state);
        } else if (!extractedParts.postalCode && patterns.postalCode.test(line)) {
            extractedParts.postalCode = line.match(patterns.postalCode)[0];
            console.log('Postal Code found:', extractedParts.postalCode);
        } else if (!extractedParts.country && patterns.country.test(line)) {
            extractedParts.country = line.match(patterns.country)[0];
            console.log('Country found:', extractedParts.country);
        }
    });

    const result = {};
    for (const key in extractedParts) {
        if (extractedParts[key]) {
            result[key] = extractedParts[key];
        }
    }

    const hasAddress = Object.keys(result).length > 0;

    if (!hasAddress) {
        console.log("No address found in the text.");
        return null;
    }

    return result;
};