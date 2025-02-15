# Burner Email

Identify disposable email addresses easily.

## Installation

```sh
npm install burner-email
```

## Usage

```js
const { isBurnerEmail } = require('burner-email');

const email = "test@mailinator.com";

if (isBurnerEmail(email)) {
    console.log("This is a disposable email address.");
} else {
    console.log("This is a valid email address.");
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

MIT