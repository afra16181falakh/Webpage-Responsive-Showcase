const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.addTwoNumbersHandler = async (event) => {
  const num1 = event.num1;
  const num2 = event.num2;
  const result = num1 + num2;

  return {
    statusCode: 200,
    body: JSON.stringify({ result: result }),
  };
};

exports.storeDocumentHandler = async (event) => {
  const bucketName = "your-s3-bucket-name";
  const fileName = event.fileName;
  const fileContent = Buffer.from(event.fileContent, "base64"); // Assuming fileContent is base64 encoded

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileContent,
    ContentType: "application/pdf", // Change if the file is not a PDF
  };

  try {
    await s3.putObject(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "File uploaded successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
