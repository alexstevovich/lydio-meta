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
 * file_name: src/index.js
 * purpose: {{PURPOSE}}
 *
 * @system
 *
 * generated_on: 2025-03-11T04:11:40.154Z
 * certified_version: 1.0.0
 * file_uuid: 2adf7740-5490-4429-9c41-b2a9f750c553
 * file_size: 7187 bytes
 * file_hash: 65864f11f3997b840319987daf0dc8eb460122da2e9d339932d45ea4a343a03e
 * mast_hash: 848559697c94dbcafa7faef77e272696e90ac8d7e1704eec6e98d2a749125a4c
 * generated_by: preamble on npm!
 *
 * [Preamble Metadata]
 ********************************************************/
import { Tag, Fragment, Leaf } from 'lydio';

export class Link extends Leaf {
    constructor() {
        super('link');
    }
}

export class Meta extends Leaf {
    constructor() {
        super('meta');
    }
}

export class Title extends Tag {
    constructor(value) {
        super('title');
        this.text(value);
    }
}

export class MetaCharset extends Meta {
    constructor(value = 'UTF-8') {
        super();
        this.attr('charset', value);
    }
}

export class MetaFragment extends Fragment {
    constructor(options = {}) {
        super();

        const themeColor = options.themeColor || null;
        const ogDeterminer = options.ogDeterminer || '';
        const locale = options.locale || null;
        const ogLocale = options.ogLocale || locale;
        const robots = options.robots || 'index, follow';
        const canonical = options.canonical || null;
        const ogUrl = options.ogUrl || canonical;
        const keywords = options.keywords || null;

        const title = options.title || null;
        const ogTitle = options.ogTitle || title;
        const twitterTitle = options.twitterTitle || title;
        const description = options.description || null;
        const ogDescription = options.ogDescription || description;
        const twitterDescription = options.twitterDescription || description;

        const ogType = options.ogType || 'website';
        const ogImage = options.ogImage || null;
        const ogImageHeight = options.ogImageHeight || null;
        const ogImageWidth = options.ogImageWidth || null;

        const twitterImage = options.twitterImage || null;
        const twitterCard = options.twitterCard || 'summary_large_image';
        const ogSiteName = options.ogSiteName || null;
        const twitterSite = options.twitterSite || null;
        const twitterCreator = options.twitterCreator || twitterSite;

        const complain = options.complain || true;

        this.append(new MetaCharset());

        this.leaf('meta')
            .attr('name', 'viewport')
            .attr('content', 'width=device-width, initial-scale=1.0');

        if (canonical) {
            this.leaf('link').attr('rel', 'canonical').attr('href', canonical);
        }
        if (title) {
            this.apppend(new Title()).text(title);
        }

        if (robots) {
            this.leaf('meta').attr('name', 'robots').attr('content', robots);
        }
        if (description) {
            this.leaf('meta')
                .attr('name', 'description')
                .attr('content', description);
        }
        if (keywords) {
            this.leaf('meta')
                .attr('name', 'keywords')
                .attr('content', keywords);
        }

        if (themeColor) {
            this.leaf('meta')
                .attr('name', 'theme-color')
                .attr('content', themeColor);
        }

        if (ogType) {
            this.leaf('meta')
                .attr('property', 'og:type')
                .attr('content', ogType);
        }
        if (ogUrl) {
            this.leaf('meta').attr('property', 'og:url').attr('content', ogUrl);
        }
        if (ogLocale) {
            this.leaf('meta')
                .attr('property', 'og:locale')
                .attr('content', ogLocale);
        }
        if (ogDeterminer) {
            this.leaf('meta')
                .attr('property', 'og:determiner')
                .attr('content', ogDeterminer);
        }
        if (ogSiteName) {
            this.leaf('meta')
                .attr('property', 'og:site_name')
                .attr('content', ogSiteName);
        }
        if (ogTitle) {
            this.leaf('meta')
                .attr('property', 'og:title')
                .attr('content', title);
        }
        if (ogDescription) {
            this.leaf('meta')
                .attr('property', 'og:description')
                .attr('content', ogDescription);
        }
        if (ogImage) {
            this.leaf('meta')
                .attr('property', 'og:image')
                .attr('content', ogImage);
        }
        if (ogImage && ogImageHeight && ogImageWidth) {
            this.leaf('meta')
                .attr('property', 'og:image:width')
                .attr('content', ogImageWidth);
            this.leaf('meta')
                .attr('property', 'og:image:height')
                .attr('content', ogImageHeight);
        }
        if (twitterCard) {
            this.leaf('meta')
                .attr('name', 'twitter:card')
                .attr('content', twitterCard);
        }
        if (twitterSite) {
            this.leaf('meta')
                .attr('name', 'twitter:site')
                .attr('content', twitterSite);
        }
        if (twitterCreator) {
            this.leaf('meta')
                .attr('name', 'twitter:creator')
                .attr('content', twitterCreator);
        }
        if (twitterTitle) {
            this.leaf('meta')
                .attr('name', 'twitter:title')
                .attr('content', twitterTitle);
        }
        if (twitterDescription) {
            this.leaf('meta')
                .attr('name', 'twitter:description')
                .attr('content', twitterDescription);
        }
        if (twitterImage) {
            this.leaf('meta')
                .attr('name', 'twitter:image')
                .attr('content', twitterImage);
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
                twitterCreator,
            };

            Object.entries(requiredFields).forEach(([key, value]) => {
                if (!value)
                    console.warn(
                        `⚠️ MetaPage Warning: "${key}" is recommended to be set.`,
                    );
            });
        }
    }
}
