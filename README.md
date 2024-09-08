# RDF SHACL Validator

## Description

This project is a web application built using React and Vite that allows users to validate RDF data against SHACL shapes. The app provides an easy-to-use interface where you can upload `.ttl` (Turtle) files for both RDF data and SHACL shapes, either by selecting files or using the drag-and-drop functionality. Users can also input RDF and SHACL data manually. After validation, a report is generated displaying any validation errors if they exist.

## Features

- **RDF and SHACL File Uploads**: Select or drag-and-drop `.ttl` files for RDF data and SHACL shapes.
- **Manual Input**: Type RDF and SHACL data directly into the input fields.
- **Validation Report**: Upon validation, the application generates a detailed report highlighting any errors found.
- **Architecture**: FSD (Feature-Sliced Design) approach for clean, maintainable, and scalable project architecture. For more information, visit [Feature-Sliced Design](https://feature-sliced.design/).
- **Styling**: The app uses `sass` and the `scss modules` approach to ensure style encapsulation and avoid global CSS conflicts.
- **UI Components**: All user interface elements are built using MUI (Material-UI) for a polished and responsive design. Learn more about MUI at [MUI Official Website](https://mui.com/).
- **State Management**: The application uses `react-redux` and `@reduxjs/toolkit` for efficient and scalable state management.
- **Report Processing**: Validation reports are processed using the `jsonld` and `n3` libraries for handling JSON-LD data and working with RDF triples.

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Anastasia520/RDF-SHACL-Validator.git
    cd rdf-shacl-validator
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm run dev
    ```

4. Open the app in your browser by visiting: `http://localhost:8000`
