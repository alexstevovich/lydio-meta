declare module "index" {
    export class Link {
    }
    export class Meta {
    }
    export class Title {
        constructor(value: any);
    }
    export class MetaCharset extends Meta {
        constructor(value?: string);
    }
    export class MetaFragment {
        constructor(options?: {});
    }
}
