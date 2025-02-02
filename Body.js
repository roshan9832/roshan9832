// Gemini API को कॉल करें
const response = await axios.post('https://gemini-api.com/process', {
  image: imagePath,
});

// बॉडी मापन डेटा प्राप्त करें
const bodyMeasurements = response.data.measurements;
console.log('Body Measurements:', bodyMeasurements);
