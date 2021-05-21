# codenotary.com

CodeNotary - Immutable recording of data and processes with CodeNotary Immutable Ledger®
On-premise or in the cloud, easy to use tamperproof ledger with cryptographic verification, processing millions of transactions a second.

documentation and homepage is built with Vuepress and publicly hosted on GitHub Pages.



# CodeNotary Immutable Ledger Front-end

## Development Setup

1. Install dependencies.

```bash
npm install
```

2. Generate support json files

```bash
npm run scripts
```

3. Start the application: 

```bash
npm run dev
```

### Production setup

1. Install dependencies.

```bash
npm install && npm run scripts
```

2. Generate support json files

```bash
npm run scripts
```

3. Build for production and launch server. (dist will contain the result)

```bash
npm run build
npm run start
```

4. Optionally test the production frontend

```bash
http-server ./dist
```

### IDE Support
* Webstorm: natively support test runners.
* VSCode: in order to add support for jest you should add the `orta.vscode-jest` extension.
