# Express PDF Watermark API

A simple Express.js API for embedding watermarks on PDF files using [pdf-lib](https://pdf-lib.js.org/) and [Multer](https://github.com/expressjs/multer). This project demonstrates how to apply forensic watermarks with user details (or unique identifiers) to each page of a PDF, helping deter unauthorized distribution while maintaining user privacy.

## Features

- **PDF Upload:** Accepts PDF files through a REST API endpoint.
- **Dynamic Watermarking:** Applies a customizable watermark on every page of the uploaded PDF.
- **User Data Integration:** Incorporates user details such as name, email, phone, and IP into the watermark text.
- **Simple & Extendable:** Built with Express.js, making it easy to integrate or extend for your needs.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/)

## Installation

Follow these step-by-step instructions to get the project running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/express-pdf-watermark-api.git
   cd express-pdf-watermark-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Project Structure:**

   - `server.js` – The main Express server file containing the watermarking API endpoint.
   - `package.json` – Contains project metadata and dependencies.

## Usage

### Running the Server

Start the Express server by running:

```bash
node server.js
```

By default, the server listens on port `3000`. You should see a message similar to:

```
Server started on port 3000
```

### Testing the API with Postman

To test the watermark API endpoint using Postman:

1. **Create a New Request:**
   - Set the HTTP method to `POST`.
   - Enter the URL: `http://localhost:3000/watermark`.

2. **Configure the Request Body:**
   - Click on the **Body** tab.
   - Select **form-data**.
   - Add the following keys:
     - **pdf:** Change the type to **File** and select a PDF file from your computer.
     - **name:** Enter a sample name (e.g., `John Doe`).
     - **email:** Enter a sample email (e.g., `john@example.com`).
     - **phone:** Enter a sample phone number (e.g., `1234567890`).
     - **ip:** Enter a sample IP address (e.g., `192.168.1.1`).

3. **Send the Request:**
   - Click the **Send** button.
   - The API processes the PDF and returns the watermarked PDF file.
   - You can use the **Save Response** option to download and view the watermarked PDF.

## Customization

You can modify the watermark's content and style by editing the code in `server.js`. For example, you might change the text formatting, position, rotation angle, or opacity to suit your needs. If you prefer not to expose full personal data, consider using a unique transaction identifier instead.

## Contributing

Contributions, bug reports, and feature requests are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

## Disclaimer

Embedding personal data directly into documents may have privacy implications. Evaluate your approach and consider using less intrusive methods (such as unique transaction IDs) if privacy is a major concern.
