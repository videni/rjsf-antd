<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/videni/rjsf-antd">
    <img src="https://raw.githubusercontent.com/videni/rjsf-antd/master/rjsf-antd-logo.png" alt="Logo" width="140" height="120">
  </a>

  <h3 align="center">rjsf-antd</h3>

  <p align="center">
  Ant Design theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://github.com/videni/rjsf-antd"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/videni/rjsf-antd/">View Playground</a>
    ·
    <a href="https://github.com/videni/rjsf-antd/issues">Report Bug</a>
    ·
    <a href="https://github.com/videni/rjsf-antd/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

[![rjsf-antd Screen Shot][product-screenshot]](https://github.com/videni/rjsf-antd)

Exports `material-ui` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [Ant Design](https://ant.design/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

```sh
yarn add antd react-jsonschema-form
```

### Installation

```sh
yarn add rjsf-antd
```

<!-- USAGE EXAMPLES -->

## Usage

```javascript
import { withTheme } from 'react-jsonschema-form';
import { Theme } from 'rjsf-antd';

const Form = withTheme(Theme);
```

or

```javascript
import Form from 'rjsf-antd';
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/videni/rjsf-antd/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://raw.githubusercontent.com/videni/rjsf-antd/master/screenshot.png
