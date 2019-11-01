export interface ISeasonalIframe {
    insertGlobalcss(css: string): void;
    insertCodeBlock(code: string): void;
    insertLogo(logo: string): void;
    insertLogoWidth(width: number): void;
    insertLogoWhiteBackground(white: boolean): void;
    insertHeadline(headline: string): void;
    insertProductNames(products: any): void;
    insertProductImages(products: any): void;
}
