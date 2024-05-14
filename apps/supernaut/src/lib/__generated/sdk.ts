// @ts-nocheck
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  seoCollection?: Maybe<SeoCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItem = Entry & {
  __typename?: 'NavigationItem';
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  iconLibary?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationItemLinkingCollections>;
  pageName?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subsectionCollection?: Maybe<NavigationItemSubsectionCollection>;
  sys: Sys;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemIconLibaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/navigationItem) */
export type NavigationItemSubsectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemSubsectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationItemFilter>;
};

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconLibary?: InputMaybe<Scalars['String']['input']>;
  iconLibary_contains?: InputMaybe<Scalars['String']['input']>;
  iconLibary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconLibary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconLibary_not?: InputMaybe<Scalars['String']['input']>;
  iconLibary_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconLibary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subsection?: InputMaybe<CfNavigationItemNestedFilter>;
  subsectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationItemLinkingCollections = {
  __typename?: 'NavigationItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationItemLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationItemLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationItemLinkingCollectionsNavigationItemCollectionOrder {
  IconLibaryAsc = 'iconLibary_ASC',
  IconLibaryDesc = 'iconLibary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationItemLinkingCollectionsSettingsCollectionOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  ContactDialogButtonLabelAsc = 'contactDialogButtonLabel_ASC',
  ContactDialogButtonLabelDesc = 'contactDialogButtonLabel_DESC',
  ContactFormDialogAsc = 'contactFormDialog_ASC',
  ContactFormDialogDesc = 'contactFormDialog_DESC',
  CopyrightLineAsc = 'copyrightLine_ASC',
  CopyrightLineDesc = 'copyrightLine_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterHandlerAsc = 'twitterHandler_ASC',
  TwitterHandlerDesc = 'twitterHandler_DESC'
}

export enum NavigationItemOrder {
  IconLibaryAsc = 'iconLibary_ASC',
  IconLibaryDesc = 'iconLibary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationItemSubsectionCollection = {
  __typename?: 'NavigationItemSubsectionCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationItemSubsectionCollectionOrder {
  IconLibaryAsc = 'iconLibary_ASC',
  IconLibaryDesc = 'iconLibary_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type Pages = Entry & {
  __typename?: 'Pages';
  bodyText?: Maybe<PagesBodyText>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PagesLinkingCollections>;
  pageName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topSectionsCollection?: Maybe<PagesTopSectionsCollection>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Pages [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesTopSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PagesTopSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};

export type PagesBodyText = {
  __typename?: 'PagesBodyText';
  json: Scalars['JSON']['output'];
  links: PagesBodyTextLinks;
};

export type PagesBodyTextAssets = {
  __typename?: 'PagesBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PagesBodyTextEntries = {
  __typename?: 'PagesBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PagesBodyTextLinks = {
  __typename?: 'PagesBodyTextLinks';
  assets: PagesBodyTextAssets;
  entries: PagesBodyTextEntries;
  resources: PagesBodyTextResources;
};

export type PagesBodyTextResources = {
  __typename?: 'PagesBodyTextResources';
  block: Array<PagesBodyTextResourcesBlock>;
  hyperlink: Array<PagesBodyTextResourcesHyperlink>;
  inline: Array<PagesBodyTextResourcesInline>;
};

export type PagesBodyTextResourcesBlock = ResourceLink & {
  __typename?: 'PagesBodyTextResourcesBlock';
  sys: ResourceSys;
};

export type PagesBodyTextResourcesHyperlink = ResourceLink & {
  __typename?: 'PagesBodyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type PagesBodyTextResourcesInline = ResourceLink & {
  __typename?: 'PagesBodyTextResourcesInline';
  sys: ResourceSys;
};

export type PagesCollection = {
  __typename?: 'PagesCollection';
  items: Array<Maybe<Pages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagesFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSections?: InputMaybe<CfSectionNestedFilter>;
  topSectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PagesLinkingCollections = {
  __typename?: 'PagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type PagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PagesLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PagesLinkingCollectionsSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PagesLinkingCollectionsSettingsCollectionOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  ContactDialogButtonLabelAsc = 'contactDialogButtonLabel_ASC',
  ContactDialogButtonLabelDesc = 'contactDialogButtonLabel_DESC',
  ContactFormDialogAsc = 'contactFormDialog_ASC',
  ContactFormDialogDesc = 'contactFormDialog_DESC',
  CopyrightLineAsc = 'copyrightLine_ASC',
  CopyrightLineDesc = 'copyrightLine_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterHandlerAsc = 'twitterHandler_ASC',
  TwitterHandlerDesc = 'twitterHandler_DESC'
}

export enum PagesOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PagesTopSectionsCollection = {
  __typename?: 'PagesTopSectionsCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PagesTopSectionsCollectionOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ClassNameAsc = 'className_ASC',
  ClassNameDesc = 'className_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LineBottomAsc = 'lineBottom_ASC',
  LineBottomDesc = 'lineBottom_DESC',
  LineTopAsc = 'lineTop_ASC',
  LineTopDesc = 'lineTop_DESC',
  MarginBottomAsc = 'marginBottom_ASC',
  MarginBottomDesc = 'marginBottom_DESC',
  MarginSizeAsc = 'marginSize_ASC',
  MarginSizeDesc = 'marginSize_DESC',
  MarginTopAsc = 'marginTop_ASC',
  MarginTopDesc = 'marginTop_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingSizeAsc = 'paddingSize_ASC',
  PaddingSizeDesc = 'paddingSize_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  pages?: Maybe<Pages>;
  pagesCollection?: Maybe<PagesCollection>;
  quoteComponent?: Maybe<QuoteComponent>;
  quoteComponentCollection?: Maybe<QuoteComponentCollection>;
  quotes?: Maybe<Quotes>;
  quotesCollection?: Maybe<QuotesCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  slider?: Maybe<Slider>;
  sliderCollection?: Maybe<SliderCollection>;
  sliderItem?: Maybe<SliderItem>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
  socialMediaItem?: Maybe<SocialMediaItem>;
  socialMediaItemCollection?: Maybe<SocialMediaItemCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNavigationItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationItemFilter>;
};


export type QueryPagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PagesFilter>;
};


export type QueryQuoteComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuoteComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuoteComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuoteComponentFilter>;
};


export type QueryQuotesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuotesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuotesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuotesFilter>;
};


export type QuerySectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySettingsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsFilter>;
};


export type QuerySliderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderFilter>;
};


export type QuerySliderItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySliderItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderItemFilter>;
};


export type QuerySocialMediaItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySocialMediaItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaItemFilter>;
};

/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponent = Entry & {
  __typename?: 'QuoteComponent';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuoteComponentLinkingCollections>;
  quotesCollection?: Maybe<QuoteComponentQuotesCollection>;
  sys: Sys;
};


/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponentQuotesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuoteComponentQuotesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuotesFilter>;
};

export type QuoteComponentCollection = {
  __typename?: 'QuoteComponentCollection';
  items: Array<Maybe<QuoteComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuoteComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuoteComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuoteComponentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quotes?: InputMaybe<CfQuotesNestedFilter>;
  quotesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuoteComponentLinkingCollections = {
  __typename?: 'QuoteComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type QuoteComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuoteComponentOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuoteComponentQuotesCollection = {
  __typename?: 'QuoteComponentQuotesCollection';
  items: Array<Maybe<Quotes>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum QuoteComponentQuotesCollectionOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type Quotes = Entry & {
  __typename?: 'Quotes';
  author?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuotesLinkingCollections>;
  position?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspriational Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuotesCollection = {
  __typename?: 'QuotesCollection';
  items: Array<Maybe<Quotes>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuotesFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuotesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuotesFilter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type QuotesLinkingCollections = {
  __typename?: 'QuotesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  quoteComponentCollection?: Maybe<QuoteComponentCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type QuotesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuotesLinkingCollectionsQuoteComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuotesLinkingCollectionsQuoteComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuotesLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuotesLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuotesLinkingCollectionsQuoteComponentCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuotesLinkingCollectionsSectionCollectionOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ClassNameAsc = 'className_ASC',
  ClassNameDesc = 'className_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LineBottomAsc = 'lineBottom_ASC',
  LineBottomDesc = 'lineBottom_DESC',
  LineTopAsc = 'lineTop_ASC',
  LineTopDesc = 'lineTop_DESC',
  MarginBottomAsc = 'marginBottom_ASC',
  MarginBottomDesc = 'marginBottom_DESC',
  MarginSizeAsc = 'marginSize_ASC',
  MarginSizeDesc = 'marginSize_DESC',
  MarginTopAsc = 'marginTop_ASC',
  MarginTopDesc = 'marginTop_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingSizeAsc = 'paddingSize_ASC',
  PaddingSizeDesc = 'paddingSize_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum QuotesOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type Section = Entry & {
  __typename?: 'Section';
  align?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  component?: Maybe<SectionComponent>;
  contentfulMetadata: ContentfulMetadata;
  height?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  lineBottom?: Maybe<Scalars['Boolean']['output']>;
  lineTop?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  marginBottom?: Maybe<Scalars['Boolean']['output']>;
  marginSize?: Maybe<Scalars['String']['output']>;
  marginTop?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  paddingBottom?: Maybe<Scalars['Boolean']['output']>;
  paddingSize?: Maybe<Scalars['String']['output']>;
  paddingTop?: Maybe<Scalars['Boolean']['output']>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textColor?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionAlignArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionClassNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionComponentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionLineBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionLineTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionMarginBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionMarginSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionMarginTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionPaddingBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionPaddingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionPaddingTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionSectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Section wrapper for components [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/section) */
export type SectionWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionComponent = Quotes | Slider;

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  align?: InputMaybe<Scalars['String']['input']>;
  align_contains?: InputMaybe<Scalars['String']['input']>;
  align_exists?: InputMaybe<Scalars['Boolean']['input']>;
  align_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  align_not?: InputMaybe<Scalars['String']['input']>;
  align_not_contains?: InputMaybe<Scalars['String']['input']>;
  align_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  className?: InputMaybe<Scalars['String']['input']>;
  className_contains?: InputMaybe<Scalars['String']['input']>;
  className_exists?: InputMaybe<Scalars['Boolean']['input']>;
  className_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  className_not?: InputMaybe<Scalars['String']['input']>;
  className_not_contains?: InputMaybe<Scalars['String']['input']>;
  className_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  component_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  height?: InputMaybe<Scalars['String']['input']>;
  height_contains?: InputMaybe<Scalars['String']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height_not?: InputMaybe<Scalars['String']['input']>;
  height_not_contains?: InputMaybe<Scalars['String']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lineBottom?: InputMaybe<Scalars['Boolean']['input']>;
  lineBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lineBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  marginSize?: InputMaybe<Scalars['String']['input']>;
  marginSize_contains?: InputMaybe<Scalars['String']['input']>;
  marginSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginSize_not?: InputMaybe<Scalars['String']['input']>;
  marginSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  marginSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginTop?: InputMaybe<Scalars['Boolean']['input']>;
  marginTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  paddingSize?: InputMaybe<Scalars['String']['input']>;
  paddingSize_contains?: InputMaybe<Scalars['String']['input']>;
  paddingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingSize_not?: InputMaybe<Scalars['String']['input']>;
  paddingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['String']['input']>;
  width_contains?: InputMaybe<Scalars['String']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width_not?: InputMaybe<Scalars['String']['input']>;
  width_not_contains?: InputMaybe<Scalars['String']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pagesCollection?: Maybe<PagesCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionLinkingCollectionsPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsPagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SectionLinkingCollectionsPagesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SectionOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ClassNameAsc = 'className_ASC',
  ClassNameDesc = 'className_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LineBottomAsc = 'lineBottom_ASC',
  LineBottomDesc = 'lineBottom_DESC',
  LineTopAsc = 'lineTop_ASC',
  LineTopDesc = 'lineTop_DESC',
  MarginBottomAsc = 'marginBottom_ASC',
  MarginBottomDesc = 'marginBottom_DESC',
  MarginSizeAsc = 'marginSize_ASC',
  MarginSizeDesc = 'marginSize_DESC',
  MarginTopAsc = 'marginTop_ASC',
  MarginTopDesc = 'marginTop_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingSizeAsc = 'paddingSize_ASC',
  PaddingSizeDesc = 'paddingSize_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pagesCollection?: Maybe<PagesCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoLinkingCollectionsPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoLinkingCollectionsPagesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type Settings = Entry & {
  __typename?: 'Settings';
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contactDialogButtonLabel?: Maybe<Scalars['String']['output']>;
  contactFormDialog?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  copyrightLine?: Maybe<Scalars['String']['output']>;
  footerNavigationCollection?: Maybe<SettingsFooterNavigationCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  legalNavigationCollection?: Maybe<SettingsLegalNavigationCollection>;
  linkedFrom?: Maybe<SettingsLinkingCollections>;
  logo?: Maybe<Asset>;
  mainNavigationCollection?: Maybe<SettingsMainNavigationCollection>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Asset>;
  siteTitle?: Maybe<Scalars['String']['output']>;
  socialMediaCollection?: Maybe<SettingsSocialMediaCollection>;
  strapline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  twitterCardType?: Maybe<Scalars['String']['output']>;
  twitterHandler?: Maybe<Scalars['String']['output']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsContactDialogButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsContactFormDialogArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsCopyrightLineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsFooterNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsFooterNavigationFilter>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsLegalNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsLegalNavigationFilter>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SettingsMainNavigationFilter>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsMetaKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsOgImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsSiteTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SettingsSocialMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaItemFilter>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsStraplineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsTwitterCardTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site settings [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/settings) */
export type SettingsTwitterHandlerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SettingsCollection = {
  __typename?: 'SettingsCollection';
  items: Array<Maybe<Settings>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactDialogButtonLabel?: InputMaybe<Scalars['String']['input']>;
  contactDialogButtonLabel_contains?: InputMaybe<Scalars['String']['input']>;
  contactDialogButtonLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactDialogButtonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactDialogButtonLabel_not?: InputMaybe<Scalars['String']['input']>;
  contactDialogButtonLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactDialogButtonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormDialog?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormDialog_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormDialog_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyrightLine?: InputMaybe<Scalars['String']['input']>;
  copyrightLine_contains?: InputMaybe<Scalars['String']['input']>;
  copyrightLine_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyrightLine_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyrightLine_not?: InputMaybe<Scalars['String']['input']>;
  copyrightLine_not_contains?: InputMaybe<Scalars['String']['input']>;
  copyrightLine_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerNavigation?: InputMaybe<CffooterNavigationMultiTypeNestedFilter>;
  footerNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalNavigation?: InputMaybe<CflegalNavigationMultiTypeNestedFilter>;
  legalNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainNavigation?: InputMaybe<CfmainNavigationMultiTypeNestedFilter>;
  mainNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords?: InputMaybe<Scalars['String']['input']>;
  metaKeywords_contains?: InputMaybe<Scalars['String']['input']>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaKeywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_not?: InputMaybe<Scalars['String']['input']>;
  metaKeywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaKeywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteTitle?: InputMaybe<Scalars['String']['input']>;
  siteTitle_contains?: InputMaybe<Scalars['String']['input']>;
  siteTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  siteTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteTitle_not?: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  siteTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialMedia?: InputMaybe<CfSocialMediaItemNestedFilter>;
  socialMediaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  strapline?: InputMaybe<Scalars['String']['input']>;
  strapline_contains?: InputMaybe<Scalars['String']['input']>;
  strapline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  strapline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  strapline_not?: InputMaybe<Scalars['String']['input']>;
  strapline_not_contains?: InputMaybe<Scalars['String']['input']>;
  strapline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  twitterCardType?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCardType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCardType_not?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterHandler?: InputMaybe<Scalars['String']['input']>;
  twitterHandler_contains?: InputMaybe<Scalars['String']['input']>;
  twitterHandler_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterHandler_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterHandler_not?: InputMaybe<Scalars['String']['input']>;
  twitterHandler_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterHandler_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SettingsFooterNavigationCollection = {
  __typename?: 'SettingsFooterNavigationCollection';
  items: Array<Maybe<SettingsFooterNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsFooterNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsFooterNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsFooterNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SettingsFooterNavigationItem = NavigationItem | Pages;

export type SettingsLegalNavigationCollection = {
  __typename?: 'SettingsLegalNavigationCollection';
  items: Array<Maybe<SettingsLegalNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsLegalNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsLegalNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsLegalNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SettingsLegalNavigationItem = NavigationItem | Pages;

export type SettingsLinkingCollections = {
  __typename?: 'SettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SettingsMainNavigationCollection = {
  __typename?: 'SettingsMainNavigationCollection';
  items: Array<Maybe<SettingsMainNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SettingsMainNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<SettingsMainNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SettingsMainNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SettingsMainNavigationItem = NavigationItem | Pages;

export enum SettingsOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  ContactDialogButtonLabelAsc = 'contactDialogButtonLabel_ASC',
  ContactDialogButtonLabelDesc = 'contactDialogButtonLabel_DESC',
  ContactFormDialogAsc = 'contactFormDialog_ASC',
  ContactFormDialogDesc = 'contactFormDialog_DESC',
  CopyrightLineAsc = 'copyrightLine_ASC',
  CopyrightLineDesc = 'copyrightLine_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterHandlerAsc = 'twitterHandler_ASC',
  TwitterHandlerDesc = 'twitterHandler_DESC'
}

export type SettingsSocialMediaCollection = {
  __typename?: 'SettingsSocialMediaCollection';
  items: Array<Maybe<SocialMediaItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SettingsSocialMediaCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type Slider = Entry & {
  __typename?: 'Slider';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SliderLinkingCollections>;
  slidesCollection?: Maybe<SliderSlidesCollection>;
  strapline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type SliderAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type SliderInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type SliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type SliderSlidesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderSlidesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SliderItemFilter>;
};


/** Slider [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/slider) */
export type SliderStraplineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SliderCollection = {
  __typename?: 'SliderCollection';
  items: Array<Maybe<Slider>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slides?: InputMaybe<CfSliderItemNestedFilter>;
  slidesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  strapline?: InputMaybe<Scalars['String']['input']>;
  strapline_contains?: InputMaybe<Scalars['String']['input']>;
  strapline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  strapline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  strapline_not?: InputMaybe<Scalars['String']['input']>;
  strapline_not_contains?: InputMaybe<Scalars['String']['input']>;
  strapline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItem = Entry & {
  __typename?: 'SliderItem';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SliderItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Asset>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Slider Item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/sliderItem) */
export type SliderItemVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SliderItemCollection = {
  __typename?: 'SliderItemCollection';
  items: Array<Maybe<SliderItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SliderItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SliderItemLinkingCollections = {
  __typename?: 'SliderItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sliderCollection?: Maybe<SliderCollection>;
};


export type SliderItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SliderItemLinkingCollectionsSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderItemLinkingCollectionsSliderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SliderItemLinkingCollectionsSliderCollectionOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SliderItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type SliderLinkingCollections = {
  __typename?: 'SliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type SliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SliderLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SliderLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SliderLinkingCollectionsSectionCollectionOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ClassNameAsc = 'className_ASC',
  ClassNameDesc = 'className_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LineBottomAsc = 'lineBottom_ASC',
  LineBottomDesc = 'lineBottom_DESC',
  LineTopAsc = 'lineTop_ASC',
  LineTopDesc = 'lineTop_DESC',
  MarginBottomAsc = 'marginBottom_ASC',
  MarginBottomDesc = 'marginBottom_DESC',
  MarginSizeAsc = 'marginSize_ASC',
  MarginSizeDesc = 'marginSize_DESC',
  MarginTopAsc = 'marginTop_ASC',
  MarginTopDesc = 'marginTop_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingSizeAsc = 'paddingSize_ASC',
  PaddingSizeDesc = 'paddingSize_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum SliderOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SliderSlidesCollection = {
  __typename?: 'SliderSlidesCollection';
  items: Array<Maybe<SliderItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SliderSlidesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItem = Entry & {
  __typename?: 'SocialMediaItem';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SocialMediaItemLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItemNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItemTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Social Media Links [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/socialMediaItem) */
export type SocialMediaItemUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SocialMediaItemCollection = {
  __typename?: 'SocialMediaItemCollection';
  items: Array<Maybe<SocialMediaItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SocialMediaItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialMediaItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMediaItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMediaItemLinkingCollections = {
  __typename?: 'SocialMediaItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type SocialMediaItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialMediaItemLinkingCollectionsSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaItemLinkingCollectionsSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SocialMediaItemLinkingCollectionsSettingsCollectionOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  ContactDialogButtonLabelAsc = 'contactDialogButtonLabel_ASC',
  ContactDialogButtonLabelDesc = 'contactDialogButtonLabel_DESC',
  ContactFormDialogAsc = 'contactFormDialog_ASC',
  ContactFormDialogDesc = 'contactFormDialog_DESC',
  CopyrightLineAsc = 'copyrightLine_ASC',
  CopyrightLineDesc = 'copyrightLine_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  SiteTitleAsc = 'siteTitle_ASC',
  SiteTitleDesc = 'siteTitle_DESC',
  StraplineAsc = 'strapline_ASC',
  StraplineDesc = 'strapline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterHandlerAsc = 'twitterHandler_ASC',
  TwitterHandlerDesc = 'twitterHandler_DESC'
}

export enum SocialMediaItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconLibary?: InputMaybe<Scalars['String']['input']>;
  iconLibary_contains?: InputMaybe<Scalars['String']['input']>;
  iconLibary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconLibary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconLibary_not?: InputMaybe<Scalars['String']['input']>;
  iconLibary_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconLibary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subsectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfQuotesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuotesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuotesNestedFilter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_exists?: InputMaybe<Scalars['Boolean']['input']>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSectionNestedFilter>>>;
  align?: InputMaybe<Scalars['String']['input']>;
  align_contains?: InputMaybe<Scalars['String']['input']>;
  align_exists?: InputMaybe<Scalars['Boolean']['input']>;
  align_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  align_not?: InputMaybe<Scalars['String']['input']>;
  align_not_contains?: InputMaybe<Scalars['String']['input']>;
  align_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  className?: InputMaybe<Scalars['String']['input']>;
  className_contains?: InputMaybe<Scalars['String']['input']>;
  className_exists?: InputMaybe<Scalars['Boolean']['input']>;
  className_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  className_not?: InputMaybe<Scalars['String']['input']>;
  className_not_contains?: InputMaybe<Scalars['String']['input']>;
  className_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  component_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  height?: InputMaybe<Scalars['String']['input']>;
  height_contains?: InputMaybe<Scalars['String']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height_not?: InputMaybe<Scalars['String']['input']>;
  height_not_contains?: InputMaybe<Scalars['String']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lineBottom?: InputMaybe<Scalars['Boolean']['input']>;
  lineBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lineBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lineTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  marginSize?: InputMaybe<Scalars['String']['input']>;
  marginSize_contains?: InputMaybe<Scalars['String']['input']>;
  marginSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginSize_not?: InputMaybe<Scalars['String']['input']>;
  marginSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  marginSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginTop?: InputMaybe<Scalars['Boolean']['input']>;
  marginTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
  paddingSize?: InputMaybe<Scalars['String']['input']>;
  paddingSize_contains?: InputMaybe<Scalars['String']['input']>;
  paddingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingSize_not?: InputMaybe<Scalars['String']['input']>;
  paddingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_not?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['String']['input']>;
  width_contains?: InputMaybe<Scalars['String']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width_not?: InputMaybe<Scalars['String']['input']>;
  width_not_contains?: InputMaybe<Scalars['String']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSliderItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSliderItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSliderItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfSocialMediaItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSocialMediaItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSocialMediaItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CffooterNavigationMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CffooterNavigationMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CffooterNavigationMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CflegalNavigationMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CflegalNavigationMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CflegalNavigationMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfmainNavigationMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmainNavigationMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmainNavigationMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type PagesQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages?: { __typename?: 'Pages', pageName?: string | null } | null };

export type PageFieldsFragment = { __typename: 'Pages', pageName?: string | null, title?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, id: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'PagesBodyText', json: any } | null, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null, topSectionsCollection?: { __typename?: 'PagesTopSectionsCollection', items: Array<(
      { __typename: 'Section', sys: { __typename?: 'Sys', id: string } }
      & SectionFieldsFragment
    ) | null> } | null };

export type PagesCollectionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PagesCollectionQuery = { __typename?: 'Query', pagesCollection?: { __typename?: 'PagesCollection', items: Array<(
      { __typename?: 'Pages' }
      & PageFieldsFragment
    ) | null> } | null };

export type QuoteFieldsFragment = { __typename: 'Quotes', quote?: string | null, author?: string | null, position?: string | null, sys: { __typename?: 'Sys', id: string } };

export type QuoteComponentFieldsFragment = { __typename: 'QuoteComponent', internalName?: string | null, sys: { __typename?: 'Sys', id: string }, quotesCollection?: { __typename?: 'QuoteComponentQuotesCollection', items: Array<{ __typename: 'Quotes', quote?: string | null, author?: string | null, position?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type QuoteComponentQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type QuoteComponentQuery = { __typename?: 'Query', quoteComponent?: { __typename: 'QuoteComponent', sys: { __typename?: 'Sys', id: string } } | null };

export type SectionComponentFields_Quotes_Fragment = (
  { __typename?: 'Quotes' }
  & QuoteFieldsFragment
);

export type SectionComponentFields_Slider_Fragment = (
  { __typename?: 'Slider' }
  & SliderFieldsFragment
);

export type SectionComponentFieldsFragment = SectionComponentFields_Quotes_Fragment | SectionComponentFields_Slider_Fragment;

export type SectionFieldsFragment = { __typename: 'Section', internalName?: string | null, sectionId?: string | null, marginSize?: string | null, paddingSize?: string | null, marginTop?: boolean | null, marginBottom?: boolean | null, paddingTop?: boolean | null, paddingBottom?: boolean | null, mode?: string | null, backgroundColor?: string | null, textColor?: string | null, align?: string | null, width?: string | null, height?: string | null, lineTop?: boolean | null, lineBottom?: boolean | null, className?: string | null, sys: { __typename?: 'Sys', id: string }, component?: (
    { __typename: 'Quotes' }
    & SectionComponentFields_Quotes_Fragment
  ) | (
    { __typename: 'Slider' }
    & SectionComponentFields_Slider_Fragment
  ) | null };

export type SectionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SectionQuery = { __typename?: 'Query', section?: (
    { __typename?: 'Section' }
    & SectionFieldsFragment
  ) | null };

export type NavigationPageFieldsFragment = { __typename: 'Pages', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

export type NavigationItemFieldsFragment = { __typename: 'NavigationItem', internalName?: string | null, slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, subsectionCollection?: { __typename?: 'NavigationItemSubsectionCollection', items: Array<{ __typename: 'NavigationItem', pageName?: string | null, slug?: string | null, iconLibary?: string | null, sys: { __typename?: 'Sys', id: string }, icon?: (
        { __typename?: 'Asset' }
        & AssetFieldsFragment
      ) | null } | null> } | null };

export type SettingsFieldsFragment = { __typename: 'Settings', siteTitle?: string | null, strapline?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: string | null, canonicalUrl?: string | null, twitterCardType?: string | null, twitterHandler?: string | null, contactDialogButtonLabel?: string | null, contactFormDialog?: boolean | null, internalName?: string | null, copyrightLine?: string | null, sys: { __typename?: 'Sys', id: string }, ogImage?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, mainNavigationCollection?: { __typename?: 'SettingsMainNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, footerNavigationCollection?: { __typename?: 'SettingsFooterNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, legalNavigationCollection?: { __typename?: 'SettingsLegalNavigationCollection', items: Array<(
      { __typename: 'NavigationItem', sys: { __typename?: 'Sys', id: string } }
      & NavigationItemFieldsFragment
    ) | (
      { __typename: 'Pages', sys: { __typename?: 'Sys', id: string } }
      & NavigationPageFieldsFragment
    ) | null> } | null, socialMediaCollection?: { __typename?: 'SettingsSocialMediaCollection', items: Array<{ __typename: 'SocialMediaItem', type?: string | null, name?: string | null, internalName?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string }, id: { __typename?: 'Sys', id: string } } | null> } | null };

export type SettingsCollectionQueryVariables = Exact<{
  internName: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SettingsCollectionQuery = { __typename?: 'Query', settingsCollection?: { __typename?: 'SettingsCollection', items: Array<(
      { __typename?: 'Settings' }
      & SettingsFieldsFragment
    ) | null> } | null };

export type SliderItemFragment = { __typename: 'SliderItem', internalName?: string | null, title?: string | null, description?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string }, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null, video?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type SliderFieldsFragment = { __typename: 'Slider', internalName?: string | null, autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, slidesCollection?: { __typename?: 'SliderSlidesCollection', items: Array<(
      { __typename?: 'SliderItem' }
      & SliderItemFragment
    ) | null> } | null };

export type SliderQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SliderQuery = { __typename?: 'Query', slider?: (
    { __typename?: 'Slider' }
    & SliderFieldsFragment
  ) | null };

export const QuoteFieldsFragmentDoc = gql`
    fragment QuoteFields on Quotes {
  __typename
  sys {
    id
  }
  quote
  author
  position
}
    `;
export const AssetFieldsFragmentDoc = gql`
    fragment AssetFields on Asset {
  __typename
  sys {
    id
  }
  contentType
  title
  description
  width
  height
  url
}
    `;
export const SliderItemFragmentDoc = gql`
    fragment SliderItem on SliderItem {
  __typename
  sys {
    id
  }
  internalName
  title
  description
  image {
    ...AssetFields
  }
  video {
    ...AssetFields
  }
  url
}
    `;
export const SliderFieldsFragmentDoc = gql`
    fragment SliderFields on Slider {
  __typename
  sys {
    id
  }
  internalName
  autoplay
  slidesCollection(limit: 10) {
    items {
      ...SliderItem
    }
  }
}
    `;
export const SectionComponentFieldsFragmentDoc = gql`
    fragment SectionComponentFields on SectionComponent {
  ...QuoteFields
  ...SliderFields
}
    `;
export const SectionFieldsFragmentDoc = gql`
    fragment SectionFields on Section {
  __typename
  sys {
    id
  }
  internalName
  sectionId
  marginSize
  paddingSize
  marginTop
  marginBottom
  paddingTop
  paddingBottom
  mode
  backgroundColor
  textColor
  align
  width
  height
  lineTop
  lineBottom
  className
  component {
    __typename
    ...SectionComponentFields
  }
}
    `;
export const PageFieldsFragmentDoc = gql`
    fragment PageFields on Pages {
  __typename
  sys {
    id
  }
  id: sys {
    id
  }
  pageName
  title
  internalName: pageName
  slug
  bodyText {
    json
  }
  seo {
    title
    description
    image {
      url
    }
    noIndex
    noFollow
  }
  topSectionsCollection(limit: 20) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
        ...SectionFields
      }
    }
  }
}
    `;
export const QuoteComponentFieldsFragmentDoc = gql`
    fragment QuoteComponentFields on QuoteComponent {
  __typename
  sys {
    id
  }
  internalName
  quotesCollection(limit: 10) {
    items {
      __typename
      sys {
        id
      }
      quote
      author
      position
    }
  }
}
    `;
export const NavigationPageFieldsFragmentDoc = gql`
    fragment NavigationPageFields on Pages {
  __typename
  sys {
    id
  }
  pageName
  internalName: pageName
  slug
}
    `;
export const NavigationItemFieldsFragmentDoc = gql`
    fragment NavigationItemFields on NavigationItem {
  __typename
  sys {
    id
  }
  internalName
  slug
  pageName
  subsectionCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      pageName
      slug
      icon {
        ...AssetFields
      }
      iconLibary
    }
  }
}
    `;
export const SettingsFieldsFragmentDoc = gql`
    fragment SettingsFields on Settings {
  __typename
  sys {
    id
  }
  siteTitle
  strapline
  metaTitle
  metaDescription
  metaKeywords
  canonicalUrl
  twitterCardType
  twitterHandler
  contactDialogButtonLabel
  contactFormDialog
  ogImage {
    ...AssetFields
  }
  internalName
  copyrightLine
  mainNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  footerNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  legalNavigationCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      ...NavigationPageFields
      ...NavigationItemFields
    }
  }
  socialMediaCollection(limit: 10) {
    items {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
      id: sys {
        id
      }
      type
      name
      internalName
      url
    }
  }
}
    `;
export const PagesDocument = gql`
    query pages($id: String!, $locale: String, $preview: Boolean) {
  pages(id: $id, locale: $locale, preview: $preview) {
    pageName
  }
}
    `;
export const PagesCollectionDocument = gql`
    query pagesCollection($slug: String!, $locale: String, $preview: Boolean) {
  pagesCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}
${SectionFieldsFragmentDoc}
${SectionComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}
${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const QuoteComponentDocument = gql`
    query QuoteComponent($id: String!, $locale: String, $preview: Boolean) {
  quoteComponent(id: $id, locale: $locale, preview: $preview) {
    __typename
    sys {
      id
    }
  }
}
    `;
export const SectionDocument = gql`
    query section($id: String!, $locale: String, $preview: Boolean) {
  section(id: $id, locale: $locale, preview: $preview) {
    ...SectionFields
  }
}
    ${SectionFieldsFragmentDoc}
${SectionComponentFieldsFragmentDoc}
${QuoteFieldsFragmentDoc}
${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const SettingsCollectionDocument = gql`
    query settingsCollection($internName: String!, $locale: String, $preview: Boolean) {
  settingsCollection(
    where: {internalName: $internName}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      ...SettingsFields
    }
  }
}
    ${SettingsFieldsFragmentDoc}
${AssetFieldsFragmentDoc}
${NavigationPageFieldsFragmentDoc}
${NavigationItemFieldsFragmentDoc}`;
export const SliderDocument = gql`
    query slider($id: String!, $locale: String, $preview: Boolean) {
  slider(id: $id, locale: $locale, preview: $preview) {
    ...SliderFields
  }
}
    ${SliderFieldsFragmentDoc}
${SliderItemFragmentDoc}
${AssetFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pages(variables: PagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pages', 'query', variables);
    },
    pagesCollection(variables: PagesCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PagesCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesCollectionQuery>(PagesCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pagesCollection', 'query', variables);
    },
    QuoteComponent(variables: QuoteComponentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<QuoteComponentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QuoteComponentQuery>(QuoteComponentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QuoteComponent', 'query', variables);
    },
    section(variables: SectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SectionQuery>(SectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'section', 'query', variables);
    },
    settingsCollection(variables: SettingsCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SettingsCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SettingsCollectionQuery>(SettingsCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'settingsCollection', 'query', variables);
    },
    slider(variables: SliderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SliderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SliderQuery>(SliderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'slider', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;