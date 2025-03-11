/* *******************************************************
 * @lydio/semantics
 * 
 * 
 * Copyright (c) 2015-2025 Alex Stevovich. All Rights Reserved.
 *
 * No permission is granted to use, copy, modify, 
 * distribute, sublicense, or create derivative works 
 * of this software, in whole or in part, without explicit 
 * prior written permission from the copyright holder.
 *
 *
 * @meta
 *
 * package_name: @lydio/semantics
 * file_name: gen/index.cjs
 * purpose: {{PURPOSE}}
 *  
 * @system
 *
 * generated_on: 2025-03-11T04:13:06.039Z
 * certified_version: 1.0.0
 * file_uuid: 90f1e6c0-6a4c-4c7a-9c28-73a30288d9bf
 * file_size: 6132 bytes
 * file_hash: 3996d6e0bb1dde0594fc8ea0332939deb5e73154284899f92c42d5b86c64b77e
 * mast_hash: 27aed9b2c686e98bb6634ca83e972fd85ca096ed21b26b839b87a0eaacb2e132
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
********************************************************/ 
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  Link: () => Link,
  Meta: () => Meta,
  MetaCharset: () => MetaCharset,
  MetaFragment: () => MetaFragment,
  Title: () => Title
});
module.exports = __toCommonJS(index_exports);
var import_lydio = require("lydio");
class Link extends import_lydio.Leaf {
  constructor() {
    super("link");
  }
}
class Meta extends import_lydio.Leaf {
  constructor() {
    super("meta");
  }
}
class Title extends import_lydio.Tag {
  constructor(value) {
    super("title");
    this.text(value);
  }
}
class MetaCharset extends Meta {
  constructor(value = "UTF-8") {
    super();
    this.attr("charset", value);
  }
}
class MetaFragment extends import_lydio.Fragment {
  constructor(options = {}) {
    super();
    const themeColor = options.themeColor || null;
    const ogDeterminer = options.ogDeterminer || "";
    const locale = options.locale || null;
    const ogLocale = options.ogLocale || locale;
    const robots = options.robots || "index, follow";
    const canonical = options.canonical || null;
    const ogUrl = options.ogUrl || canonical;
    const keywords = options.keywords || null;
    const title = options.title || null;
    const ogTitle = options.ogTitle || title;
    const twitterTitle = options.twitterTitle || title;
    const description = options.description || null;
    const ogDescription = options.ogDescription || description;
    const twitterDescription = options.twitterDescription || description;
    const ogType = options.ogType || "website";
    const ogImage = options.ogImage || null;
    const ogImageHeight = options.ogImageHeight || null;
    const ogImageWidth = options.ogImageWidth || null;
    const twitterImage = options.twitterImage || null;
    const twitterCard = options.twitterCard || "summary_large_image";
    const ogSiteName = options.ogSiteName || null;
    const twitterSite = options.twitterSite || null;
    const twitterCreator = options.twitterCreator || twitterSite;
    const complain = options.complain || true;
    this.append(new MetaCharset());
    this.leaf("meta").attr("name", "viewport").attr("content", "width=device-width, initial-scale=1.0");
    if (canonical) {
      this.leaf("link").attr("rel", "canonical").attr("href", canonical);
    }
    if (title) {
      this.apppend(new Title()).text(title);
    }
    if (robots) {
      this.leaf("meta").attr("name", "robots").attr("content", robots);
    }
    if (description) {
      this.leaf("meta").attr("name", "description").attr("content", description);
    }
    if (keywords) {
      this.leaf("meta").attr("name", "keywords").attr("content", keywords);
    }
    if (themeColor) {
      this.leaf("meta").attr("name", "theme-color").attr("content", themeColor);
    }
    if (ogType) {
      this.leaf("meta").attr("property", "og:type").attr("content", ogType);
    }
    if (ogUrl) {
      this.leaf("meta").attr("property", "og:url").attr("content", ogUrl);
    }
    if (ogLocale) {
      this.leaf("meta").attr("property", "og:locale").attr("content", ogLocale);
    }
    if (ogDeterminer) {
      this.leaf("meta").attr("property", "og:determiner").attr("content", ogDeterminer);
    }
    if (ogSiteName) {
      this.leaf("meta").attr("property", "og:site_name").attr("content", ogSiteName);
    }
    if (ogTitle) {
      this.leaf("meta").attr("property", "og:title").attr("content", title);
    }
    if (ogDescription) {
      this.leaf("meta").attr("property", "og:description").attr("content", ogDescription);
    }
    if (ogImage) {
      this.leaf("meta").attr("property", "og:image").attr("content", ogImage);
    }
    if (ogImage && ogImageHeight && ogImageWidth) {
      this.leaf("meta").attr("property", "og:image:width").attr("content", ogImageWidth);
      this.leaf("meta").attr("property", "og:image:height").attr("content", ogImageHeight);
    }
    if (twitterCard) {
      this.leaf("meta").attr("name", "twitter:card").attr("content", twitterCard);
    }
    if (twitterSite) {
      this.leaf("meta").attr("name", "twitter:site").attr("content", twitterSite);
    }
    if (twitterCreator) {
      this.leaf("meta").attr("name", "twitter:creator").attr("content", twitterCreator);
    }
    if (twitterTitle) {
      this.leaf("meta").attr("name", "twitter:title").attr("content", twitterTitle);
    }
    if (twitterDescription) {
      this.leaf("meta").attr("name", "twitter:description").attr("content", twitterDescription);
    }
    if (twitterImage) {
      this.leaf("meta").attr("name", "twitter:image").attr("content", twitterImage);
    }
    if (complain) {
      const requiredFields = {
        title,
        locale,
        themeColor,
        description,
        ogSiteName,
        canonical,
        ogTitle,
        ogDescription,
        ogLocale,
        ogImage,
        ogImageHeight,
        ogImageWidth,
        twitterTitle,
        twitterDescription,
        twitterImage,
        twitterSite,
        twitterCreator
      };
      Object.entries(requiredFields).forEach(([key, value]) => {
        if (!value)
          console.warn(
            `\u26A0\uFE0F MetaPage Warning: "${key}" is recommended to be set.`
          );
      });
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Link,
  Meta,
  MetaCharset,
  MetaFragment,
  Title
});
