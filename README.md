# @lydio/meta

**DISCLAIMER:**

#### 🚨This project is **NOT** open source. It is exposed to satisfy requirements related to my business.

_Thank you for your understanding._

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

See `LICENSE` and `TRADEMARK.md` for more.

---

**Structured composition for the HTML < head >**

**`@lydio/meta`** provides a **structured, automated way** to manage the **entire** `<head>` section of an HTML document.  
It ensures **SEO best practices**, **social media preview optimization**, and **modern web standards compliance**.

**Automatically generates:**  
✅ **Essential meta tags** (SEO, Open Graph, Twitter Cards)  
✅ **Canonical URLs & structured metadata**  
✅ **Title, description, viewport, theme color, and more**  
✅ **Warnings for missing critical metadata**

Built on **Lydio’s HTML components**, `@lydio/meta` simplifies metadata management with its **MetaFragment** class, which dynamically constructs a **fully optimized** `<head>` section.

**Github:**
[https://github.com/alexstevovich/lydio-meta](https://github.com/alexstevovich/lydio-meta)

**Lydio (Core):**
[https://github.com/alexstevovich/lydio](https://github.com/alexstevovich/lydio)

## Installation

```bash
npm install lydio
npm install @lydio/meta
```

**Note** lydio is required but not listed as a dependency to simplify installation on private package managers. Please ensure both are installed!

## Usage

```js
import { MetaFragment } from '@lydio/meta';

// This is only a sample of possibilities
const meta = new MetaFragment({
    title: 'Example Page',
    description: 'This is a structured meta tag generator',
    canonical: 'https://example.com',
    ogType: 'website',
    ogTitle: 'Example Open Graph Title',
    ogDescription: 'Description for Open Graph metadata',
    ogImage: 'https://example.com/image.jpg',
    twitterTitle: 'Twitter Card Title',
    twitterDescription: 'Description for Twitter preview',
    twitterImage: 'https://example.com/twitter-image.jpg',
});

console.log(meta.toHtml());
```

**Generated Output Example**

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Example Page</title>
<link rel="canonical" href="https://example.com" />
<meta name="robots" content="index, follow" />
<meta name="description" content="This is a structured meta tag generator" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Example Open Graph Title" />
<meta property="og:description" content="Description for Open Graph metadata" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Twitter Card Title" />
<meta name="twitter:description" content="Description for Twitter preview" />
<meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
```

## **Features**

- **Automated Metadata Generation** – SEO, Open Graph (Facebook, LinkedIn, etc.), Twitter Cards.
- **Canonical URL Support** – Prevents duplicate content issues for search engines.
- **Theme & Branding** – Supports `theme-color`, `og:site_name`, and more.
- **Social Media Optimization** – Automatically generates **Open Graph** (`og:*`) and **Twitter** (`twitter:*`) meta tags.
- **Locale Awareness** – Handles `og:locale`, `og:determiner`, and `twitter:site`.
- **Viewport & Charset Defaults** – Ensures **best-practice settings** for mobile and modern browsers.
- **Warnings for Missing Best-Practice Tags** – Ensures **completeness** and **proper metadata structure**.

## License

Copyright © 2015-2025 Alex Stevovich. All Rights Reserved.
No permission is granted to use, copy, modify, distribute, sublicense, or create derivative works of this software, in whole or in part, without explicit prior written permission from the copyright holder.

This project is **NOT** open source. It is exposed to satisfy requirements related to my business.
_Thank you for your understanding._

See `LICENSE` and `TRADEMARK.md` for more.
