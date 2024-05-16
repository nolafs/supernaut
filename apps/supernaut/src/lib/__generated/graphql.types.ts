export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  contentImageGridComponentCollection?: Maybe<ContentImageGridComponentCollection>;
  contentVideoComponentCollection?: Maybe<ContentVideoComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  profileCollection?: Maybe<ProfileCollection>;
  seoCollection?: Maybe<SeoCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
  workCollection?: Maybe<WorkCollection>;
};


export type AssetLinkingCollectionsContentImageGridComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsContentVideoComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
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


export type AssetLinkingCollectionsProfileCollectionArgs = {
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


export type AssetLinkingCollectionsWorkCollectionArgs = {
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

/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CategoryDescription>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  servicesCollection?: Maybe<CategoryServicesCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategoryDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategoryInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategoryServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryServicesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServicesFilter>;
};


/** Service Category [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryDescription = {
  __typename?: 'CategoryDescription';
  json: Scalars['JSON']['output'];
  links: CategoryDescriptionLinks;
};

export type CategoryDescriptionAssets = {
  __typename?: 'CategoryDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CategoryDescriptionEntries = {
  __typename?: 'CategoryDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CategoryDescriptionLinks = {
  __typename?: 'CategoryDescriptionLinks';
  assets: CategoryDescriptionAssets;
  entries: CategoryDescriptionEntries;
  resources: CategoryDescriptionResources;
};

export type CategoryDescriptionResources = {
  __typename?: 'CategoryDescriptionResources';
  block: Array<CategoryDescriptionResourcesBlock>;
  hyperlink: Array<CategoryDescriptionResourcesHyperlink>;
  inline: Array<CategoryDescriptionResourcesInline>;
};

export type CategoryDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CategoryDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CategoryDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CategoryDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CategoryDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CategoryDescriptionResourcesInline';
  sys: ResourceSys;
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  services?: InputMaybe<CfServicesNestedFilter>;
  servicesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  contentServiceListCollection?: Maybe<ContentServiceListCollection>;
  entryCollection?: Maybe<EntryCollection>;
  workCollection?: Maybe<WorkCollection>;
};


export type CategoryLinkingCollectionsContentServiceListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsContentServiceListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsWorkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CategoryLinkingCollectionsContentServiceListCollectionOrder {
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
  TitleDesc = 'title_DESC'
}

export enum CategoryLinkingCollectionsWorkCollectionOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

export enum CategoryOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

export type CategoryServicesCollection = {
  __typename?: 'CategoryServicesCollection';
  items: Array<Maybe<Services>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CategoryServicesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponent = Entry & {
  __typename?: 'ContentColumnComponent';
  align?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  hTag?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentColumnComponentLinkingCollections>;
  mode?: Maybe<Scalars['String']['output']>;
  padding?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentAlignArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentHTagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentPaddingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Simple block for text in columns [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentColumnComponent) */
export type ContentColumnComponentUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentColumnComponentCollection = {
  __typename?: 'ContentColumnComponentCollection';
  items: Array<Maybe<ContentColumnComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentColumnComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentColumnComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentColumnComponentFilter>>>;
  align?: InputMaybe<Scalars['String']['input']>;
  align_contains?: InputMaybe<Scalars['String']['input']>;
  align_exists?: InputMaybe<Scalars['Boolean']['input']>;
  align_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  align_not?: InputMaybe<Scalars['String']['input']>;
  align_not_contains?: InputMaybe<Scalars['String']['input']>;
  align_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body?: InputMaybe<Scalars['String']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_not?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hTag?: InputMaybe<Scalars['String']['input']>;
  hTag_contains?: InputMaybe<Scalars['String']['input']>;
  hTag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hTag_not?: InputMaybe<Scalars['String']['input']>;
  hTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  hTag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  padding?: InputMaybe<Scalars['String']['input']>;
  padding_contains?: InputMaybe<Scalars['String']['input']>;
  padding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  padding_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  padding_not?: InputMaybe<Scalars['String']['input']>;
  padding_not_contains?: InputMaybe<Scalars['String']['input']>;
  padding_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type ContentColumnComponentLinkingCollections = {
  __typename?: 'ContentColumnComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentColumnComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentColumnComponentLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentColumnComponentLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentColumnComponentLinkingCollectionsSectionCollectionOrder {
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

export enum ContentColumnComponentOrder {
  AlignAsc = 'align_ASC',
  AlignDesc = 'align_DESC',
  HTagAsc = 'hTag_ASC',
  HTagDesc = 'hTag_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  PaddingAsc = 'padding_ASC',
  PaddingDesc = 'padding_DESC',
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
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponent = Entry & {
  __typename?: 'ContentImageGridComponent';
  columnsLg?: Maybe<Scalars['Int']['output']>;
  columnsMd?: Maybe<Scalars['Int']['output']>;
  columnsSm?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  hasTitle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  itemHeight?: Maybe<Scalars['Int']['output']>;
  itemWidth?: Maybe<Scalars['Int']['output']>;
  itemsCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ContentImageGridComponentLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentColumnsLgArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentColumnsMdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentColumnsSmArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentHasTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentItemHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentItemWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Images lists [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentImageGridComponent) */
export type ContentImageGridComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentImageGridComponentCollection = {
  __typename?: 'ContentImageGridComponentCollection';
  items: Array<Maybe<ContentImageGridComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentImageGridComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentImageGridComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentImageGridComponentFilter>>>;
  columnsLg?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnsLg_gt?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_gte?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnsLg_lt?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_lte?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_not?: InputMaybe<Scalars['Int']['input']>;
  columnsLg_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnsMd?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnsMd_gt?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_gte?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnsMd_lt?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_lte?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_not?: InputMaybe<Scalars['Int']['input']>;
  columnsMd_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnsSm?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnsSm_gt?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_gte?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  columnsSm_lt?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_lte?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_not?: InputMaybe<Scalars['Int']['input']>;
  columnsSm_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hasTitle?: InputMaybe<Scalars['Boolean']['input']>;
  hasTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hasTitle_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemHeight?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  itemHeight_gt?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_gte?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  itemHeight_lt?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_lte?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_not?: InputMaybe<Scalars['Int']['input']>;
  itemHeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  itemWidth?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  itemWidth_gt?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_gte?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  itemWidth_lt?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_lte?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_not?: InputMaybe<Scalars['Int']['input']>;
  itemWidth_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentImageGridComponentLinkingCollections = {
  __typename?: 'ContentImageGridComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentImageGridComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentImageGridComponentLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentImageGridComponentLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentImageGridComponentLinkingCollectionsSectionCollectionOrder {
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

export enum ContentImageGridComponentOrder {
  ColumnsLgAsc = 'columnsLg_ASC',
  ColumnsLgDesc = 'columnsLg_DESC',
  ColumnsMdAsc = 'columnsMd_ASC',
  ColumnsMdDesc = 'columnsMd_DESC',
  ColumnsSmAsc = 'columnsSm_ASC',
  ColumnsSmDesc = 'columnsSm_DESC',
  HasTitleAsc = 'hasTitle_ASC',
  HasTitleDesc = 'hasTitle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ItemHeightAsc = 'itemHeight_ASC',
  ItemHeightDesc = 'itemHeight_DESC',
  ItemWidthAsc = 'itemWidth_ASC',
  ItemWidthDesc = 'itemWidth_DESC',
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

/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponent = Entry & {
  __typename?: 'ContentListComponent';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  itemsCollection?: Maybe<ContentListComponentItemsCollection>;
  linkedFrom?: Maybe<ContentListComponentLinkingCollections>;
  mode?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponentItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentListComponentItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentListItemFilter>;
};


/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** List of 3 level deep [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListComponent) */
export type ContentListComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentListComponentCollection = {
  __typename?: 'ContentListComponentCollection';
  items: Array<Maybe<ContentListComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentListComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentListComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentListComponentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<CfContentListItemNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentListComponentItemsCollection = {
  __typename?: 'ContentListComponentItemsCollection';
  items: Array<Maybe<ContentListItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentListComponentItemsCollectionOrder {
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
  TitleDesc = 'title_DESC'
}

export type ContentListComponentLinkingCollections = {
  __typename?: 'ContentListComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentListComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentListComponentLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentListComponentLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentListComponentLinkingCollectionsSectionCollectionOrder {
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

export enum ContentListComponentOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
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

/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItem = Entry & {
  __typename?: 'ContentListItem';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentListItemLinkingCollections>;
  sys: Sys;
  test?: Maybe<ContentListItemTest>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItemItemsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItemTestArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content list Component item [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentListItem) */
export type ContentListItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentListItemCollection = {
  __typename?: 'ContentListItemCollection';
  items: Array<Maybe<ContentListItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentListItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentListItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentListItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<Scalars['String']['input']>;
  items_contains?: InputMaybe<Scalars['String']['input']>;
  items_exists?: InputMaybe<Scalars['Boolean']['input']>;
  items_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items_not?: InputMaybe<Scalars['String']['input']>;
  items_not_contains?: InputMaybe<Scalars['String']['input']>;
  items_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  test_contains?: InputMaybe<Scalars['String']['input']>;
  test_exists?: InputMaybe<Scalars['Boolean']['input']>;
  test_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentListItemLinkingCollections = {
  __typename?: 'ContentListItemLinkingCollections';
  contentListComponentCollection?: Maybe<ContentListComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentListItemLinkingCollectionsContentListComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentListItemLinkingCollectionsContentListComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentListItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentListItemLinkingCollectionsContentListComponentCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
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

export enum ContentListItemOrder {
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
  TitleDesc = 'title_DESC'
}

export type ContentListItemTest = {
  __typename?: 'ContentListItemTest';
  json: Scalars['JSON']['output'];
  links: ContentListItemTestLinks;
};

export type ContentListItemTestAssets = {
  __typename?: 'ContentListItemTestAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentListItemTestEntries = {
  __typename?: 'ContentListItemTestEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentListItemTestLinks = {
  __typename?: 'ContentListItemTestLinks';
  assets: ContentListItemTestAssets;
  entries: ContentListItemTestEntries;
  resources: ContentListItemTestResources;
};

export type ContentListItemTestResources = {
  __typename?: 'ContentListItemTestResources';
  block: Array<ContentListItemTestResourcesBlock>;
  hyperlink: Array<ContentListItemTestResourcesHyperlink>;
  inline: Array<ContentListItemTestResourcesInline>;
};

export type ContentListItemTestResourcesBlock = ResourceLink & {
  __typename?: 'ContentListItemTestResourcesBlock';
  sys: ResourceSys;
};

export type ContentListItemTestResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentListItemTestResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentListItemTestResourcesInline = ResourceLink & {
  __typename?: 'ContentListItemTestResourcesInline';
  sys: ResourceSys;
};

/** Profile list [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentProfileComponent) */
export type ContentProfileComponent = Entry & {
  __typename?: 'ContentProfileComponent';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  itemsCollection?: Maybe<ContentProfileComponentItemsCollection>;
  linkedFrom?: Maybe<ContentProfileComponentLinkingCollections>;
  mode?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Profile list [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentProfileComponent) */
export type ContentProfileComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Profile list [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentProfileComponent) */
export type ContentProfileComponentItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentProfileComponentItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileFilter>;
};


/** Profile list [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentProfileComponent) */
export type ContentProfileComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Profile list [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentProfileComponent) */
export type ContentProfileComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentProfileComponentCollection = {
  __typename?: 'ContentProfileComponentCollection';
  items: Array<Maybe<ContentProfileComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentProfileComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentProfileComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentProfileComponentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<CfProfileNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentProfileComponentItemsCollection = {
  __typename?: 'ContentProfileComponentItemsCollection';
  items: Array<Maybe<Profile>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentProfileComponentItemsCollectionOrder {
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentProfileComponentLinkingCollections = {
  __typename?: 'ContentProfileComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentProfileComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentProfileComponentLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentProfileComponentLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentProfileComponentLinkingCollectionsSectionCollectionOrder {
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

export enum ContentProfileComponentOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** List of all services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentServiceList) */
export type ContentServiceList = Entry & {
  __typename?: 'ContentServiceList';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentServiceListLinkingCollections>;
  servicesCollection?: Maybe<ContentServiceListServicesCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** List of all services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentServiceList) */
export type ContentServiceListInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** List of all services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentServiceList) */
export type ContentServiceListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** List of all services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentServiceList) */
export type ContentServiceListServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentServiceListServicesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


/** List of all services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentServiceList) */
export type ContentServiceListTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentServiceListCollection = {
  __typename?: 'ContentServiceListCollection';
  items: Array<Maybe<ContentServiceList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentServiceListFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentServiceListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentServiceListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  services?: InputMaybe<CfCategoryNestedFilter>;
  servicesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentServiceListLinkingCollections = {
  __typename?: 'ContentServiceListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentServiceListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentServiceListLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentServiceListLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentServiceListLinkingCollectionsSectionCollectionOrder {
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

export enum ContentServiceListOrder {
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
  TitleDesc = 'title_DESC'
}

export type ContentServiceListServicesCollection = {
  __typename?: 'ContentServiceListServicesCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentServiceListServicesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponent = Entry & {
  __typename?: 'ContentVideoComponent';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  controls?: Maybe<Scalars['Boolean']['output']>;
  frame?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentVideoComponentLinkingCollections>;
  mode?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Asset>;
  src?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videoUpload?: Maybe<Scalars['JSON']['output']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentControlsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentFrameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentPosterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentSrcArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video content component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/contentVideoComponent) */
export type ContentVideoComponentVideoUploadArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentVideoComponentCollection = {
  __typename?: 'ContentVideoComponentCollection';
  items: Array<Maybe<ContentVideoComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentVideoComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentVideoComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentVideoComponentFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  controls?: InputMaybe<Scalars['Boolean']['input']>;
  controls_exists?: InputMaybe<Scalars['Boolean']['input']>;
  controls_not?: InputMaybe<Scalars['Boolean']['input']>;
  frame?: InputMaybe<Scalars['Boolean']['input']>;
  frame_exists?: InputMaybe<Scalars['Boolean']['input']>;
  frame_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  poster_exists?: InputMaybe<Scalars['Boolean']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  src_contains?: InputMaybe<Scalars['String']['input']>;
  src_exists?: InputMaybe<Scalars['Boolean']['input']>;
  src_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  src_not?: InputMaybe<Scalars['String']['input']>;
  src_not_contains?: InputMaybe<Scalars['String']['input']>;
  src_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoUpload_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentVideoComponentLinkingCollections = {
  __typename?: 'ContentVideoComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContentVideoComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentVideoComponentOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  ControlsAsc = 'controls_ASC',
  ControlsDesc = 'controls_DESC',
  FrameAsc = 'frame_ASC',
  FrameDesc = 'frame_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  SrcAsc = 'src_ASC',
  SrcDesc = 'src_DESC',
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
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
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

/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponent = Entry & {
  __typename?: 'HeaderComponent';
  columnLayout?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeaderComponentLinkingCollections>;
  marginBottom?: Maybe<Scalars['Boolean']['output']>;
  marginTop?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentColumnLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentMarginBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentMarginTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Page Header component [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/headerComponent) */
export type HeaderComponentTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderComponentCollection = {
  __typename?: 'HeaderComponentCollection';
  items: Array<Maybe<HeaderComponent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderComponentFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderComponentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderComponentFilter>>>;
  columnLayout?: InputMaybe<Scalars['Boolean']['input']>;
  columnLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnLayout_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
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
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderComponentLinkingCollections = {
  __typename?: 'HeaderComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pagesCollection?: Maybe<PagesCollection>;
  workCollection?: Maybe<WorkCollection>;
};


export type HeaderComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderComponentLinkingCollectionsPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderComponentLinkingCollectionsPagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderComponentLinkingCollectionsWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderComponentLinkingCollectionsWorkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderComponentLinkingCollectionsPagesCollectionOrder {
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

export enum HeaderComponentLinkingCollectionsWorkCollectionOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

export enum HeaderComponentOrder {
  ColumnLayoutAsc = 'columnLayout_ASC',
  ColumnLayoutDesc = 'columnLayout_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MarginBottomAsc = 'marginBottom_ASC',
  MarginBottomDesc = 'marginBottom_DESC',
  MarginTopAsc = 'marginTop_ASC',
  MarginTopDesc = 'marginTop_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
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


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Top Level Page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/pages) */
export type PagesTopSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PagesTopSectionsFilter>;
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
  topSections?: InputMaybe<CftopSectionsMultiTypeNestedFilter>;
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
  items: Array<Maybe<PagesTopSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PagesTopSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagesTopSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagesTopSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
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
  sys?: InputMaybe<SysFilter>;
};

export type PagesTopSectionsItem = HeaderComponent | Section;

/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type Profile = Entry & {
  __typename?: 'Profile';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProfileDescription>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ProfileLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  socialCollection?: Maybe<ProfileSocialCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileSocialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProfileSocialCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaItemFilter>;
};


/** Profile or Author [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/profile) */
export type ProfileTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileCollection = {
  __typename?: 'ProfileCollection';
  items: Array<Maybe<Profile>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProfileDescription = {
  __typename?: 'ProfileDescription';
  json: Scalars['JSON']['output'];
  links: ProfileDescriptionLinks;
};

export type ProfileDescriptionAssets = {
  __typename?: 'ProfileDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProfileDescriptionEntries = {
  __typename?: 'ProfileDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProfileDescriptionLinks = {
  __typename?: 'ProfileDescriptionLinks';
  assets: ProfileDescriptionAssets;
  entries: ProfileDescriptionEntries;
  resources: ProfileDescriptionResources;
};

export type ProfileDescriptionResources = {
  __typename?: 'ProfileDescriptionResources';
  block: Array<ProfileDescriptionResourcesBlock>;
  hyperlink: Array<ProfileDescriptionResourcesHyperlink>;
  inline: Array<ProfileDescriptionResourcesInline>;
};

export type ProfileDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ProfileDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ProfileDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ProfileDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ProfileDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ProfileDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ProfileFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProfileFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProfileFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  social?: InputMaybe<CfSocialMediaItemNestedFilter>;
  socialCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProfileLinkingCollections = {
  __typename?: 'ProfileLinkingCollections';
  contentProfileComponentCollection?: Maybe<ContentProfileComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ProfileLinkingCollectionsContentProfileComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProfileLinkingCollectionsContentProfileComponentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProfileLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProfileLinkingCollectionsContentProfileComponentCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProfileOrder {
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProfileSocialCollection = {
  __typename?: 'ProfileSocialCollection';
  items: Array<Maybe<SocialMediaItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProfileSocialCollectionOrder {
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

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  contentColumnComponent?: Maybe<ContentColumnComponent>;
  contentColumnComponentCollection?: Maybe<ContentColumnComponentCollection>;
  contentImageGridComponent?: Maybe<ContentImageGridComponent>;
  contentImageGridComponentCollection?: Maybe<ContentImageGridComponentCollection>;
  contentListComponent?: Maybe<ContentListComponent>;
  contentListComponentCollection?: Maybe<ContentListComponentCollection>;
  contentListItem?: Maybe<ContentListItem>;
  contentListItemCollection?: Maybe<ContentListItemCollection>;
  contentProfileComponent?: Maybe<ContentProfileComponent>;
  contentProfileComponentCollection?: Maybe<ContentProfileComponentCollection>;
  contentServiceList?: Maybe<ContentServiceList>;
  contentServiceListCollection?: Maybe<ContentServiceListCollection>;
  contentVideoComponent?: Maybe<ContentVideoComponent>;
  contentVideoComponentCollection?: Maybe<ContentVideoComponentCollection>;
  entryCollection?: Maybe<EntryCollection>;
  headerComponent?: Maybe<HeaderComponent>;
  headerComponentCollection?: Maybe<HeaderComponentCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  pages?: Maybe<Pages>;
  pagesCollection?: Maybe<PagesCollection>;
  profile?: Maybe<Profile>;
  profileCollection?: Maybe<ProfileCollection>;
  quoteComponent?: Maybe<QuoteComponent>;
  quoteComponentCollection?: Maybe<QuoteComponentCollection>;
  quotes?: Maybe<Quotes>;
  quotesCollection?: Maybe<QuotesCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  services?: Maybe<Services>;
  servicesCollection?: Maybe<ServicesCollection>;
  settings?: Maybe<Settings>;
  settingsCollection?: Maybe<SettingsCollection>;
  slider?: Maybe<Slider>;
  sliderCollection?: Maybe<SliderCollection>;
  sliderItem?: Maybe<SliderItem>;
  sliderItemCollection?: Maybe<SliderItemCollection>;
  socialMediaItem?: Maybe<SocialMediaItem>;
  socialMediaItemCollection?: Maybe<SocialMediaItemCollection>;
  work?: Maybe<Work>;
  workCollection?: Maybe<WorkCollection>;
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


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryContentColumnComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentColumnComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentColumnComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentColumnComponentFilter>;
};


export type QueryContentImageGridComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentImageGridComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentImageGridComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentImageGridComponentFilter>;
};


export type QueryContentListComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentListComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentListComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentListComponentFilter>;
};


export type QueryContentListItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentListItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentListItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentListItemFilter>;
};


export type QueryContentProfileComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentProfileComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentProfileComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentProfileComponentFilter>;
};


export type QueryContentServiceListArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentServiceListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentServiceListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentServiceListFilter>;
};


export type QueryContentVideoComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentVideoComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentVideoComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentVideoComponentFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHeaderComponentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderComponentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderComponentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderComponentFilter>;
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


export type QueryProfileArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProfileOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileFilter>;
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


export type QueryServicesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServicesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServicesFilter>;
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


export type QueryWorkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkFilter>;
};

/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponent = Entry & {
  __typename?: 'QuoteComponent';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuoteComponentLinkingCollections>;
  mode?: Maybe<Scalars['String']['output']>;
  quotesCollection?: Maybe<QuoteComponentQuotesCollection>;
  sys: Sys;
};


/** Quotes [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quoteComponent) */
export type QuoteComponentAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
export type QuoteComponentModeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  mode?: InputMaybe<Scalars['String']['input']>;
  mode_contains?: InputMaybe<Scalars['String']['input']>;
  mode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode_not?: InputMaybe<Scalars['String']['input']>;
  mode_not_contains?: InputMaybe<Scalars['String']['input']>;
  mode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quotes?: InputMaybe<CfQuotesNestedFilter>;
  quotesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type QuoteComponentLinkingCollections = {
  __typename?: 'QuoteComponentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type QuoteComponentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteComponentLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuoteComponentLinkingCollectionsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuoteComponentLinkingCollectionsSectionCollectionOrder {
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

export enum QuoteComponentOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
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

/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
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


/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
export type QuotesPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Inspirational Quote [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/quotes) */
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

export enum QuotesLinkingCollectionsQuoteComponentCollectionOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  ModeAsc = 'mode_ASC',
  ModeDesc = 'mode_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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

export type SectionComponent = ContentColumnComponent | ContentImageGridComponent | ContentListComponent | ContentProfileComponent | ContentServiceList | QuoteComponent | Slider;

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
  workCollection?: Maybe<WorkCollection>;
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


export type SectionLinkingCollectionsWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionLinkingCollectionsWorkCollectionOrder>>>;
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

export enum SectionLinkingCollectionsWorkCollectionOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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
  workCollection?: Maybe<WorkCollection>;
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


export type SeoLinkingCollectionsWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsWorkCollectionOrder>>>;
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

export enum SeoLinkingCollectionsWorkCollectionOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type Services = Entry & {
  __typename?: 'Services';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ServicesDescription>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ServicesLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type ServicesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type ServicesInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type ServicesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type ServicesNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work Services [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/services) */
export type ServicesSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServicesCollection = {
  __typename?: 'ServicesCollection';
  items: Array<Maybe<Services>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServicesDescription = {
  __typename?: 'ServicesDescription';
  json: Scalars['JSON']['output'];
  links: ServicesDescriptionLinks;
};

export type ServicesDescriptionAssets = {
  __typename?: 'ServicesDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ServicesDescriptionEntries = {
  __typename?: 'ServicesDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ServicesDescriptionLinks = {
  __typename?: 'ServicesDescriptionLinks';
  assets: ServicesDescriptionAssets;
  entries: ServicesDescriptionEntries;
  resources: ServicesDescriptionResources;
};

export type ServicesDescriptionResources = {
  __typename?: 'ServicesDescriptionResources';
  block: Array<ServicesDescriptionResourcesBlock>;
  hyperlink: Array<ServicesDescriptionResourcesHyperlink>;
  inline: Array<ServicesDescriptionResourcesInline>;
};

export type ServicesDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'ServicesDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type ServicesDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'ServicesDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type ServicesDescriptionResourcesInline = ResourceLink & {
  __typename?: 'ServicesDescriptionResourcesInline';
  sys: ResourceSys;
};

export type ServicesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ServicesLinkingCollections = {
  __typename?: 'ServicesLinkingCollections';
  categoryCollection?: Maybe<CategoryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  workCollection?: Maybe<WorkCollection>;
};


export type ServicesLinkingCollectionsCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServicesLinkingCollectionsCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServicesLinkingCollectionsWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServicesLinkingCollectionsWorkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServicesLinkingCollectionsCategoryCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

export enum ServicesLinkingCollectionsWorkCollectionOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

export enum ServicesOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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
  slideDuration?: Maybe<Scalars['Int']['output']>;
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
export type SliderSlideDurationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  slideDuration?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slideDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slideDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_not?: InputMaybe<Scalars['Int']['input']>;
  slideDuration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
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
  video?: Maybe<Scalars['JSON']['output']>;
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
  SlideDurationAsc = 'slideDuration_ASC',
  SlideDurationDesc = 'slideDuration_DESC',
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
  SlideDurationAsc = 'slideDuration_ASC',
  SlideDurationDesc = 'slideDuration_DESC',
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
  profileCollection?: Maybe<ProfileCollection>;
  settingsCollection?: Maybe<SettingsCollection>;
};


export type SocialMediaItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SocialMediaItemLinkingCollectionsProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaItemLinkingCollectionsProfileCollectionOrder>>>;
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

export enum SocialMediaItemLinkingCollectionsProfileCollectionOrder {
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
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

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

/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type Work = Entry & {
  __typename?: 'Work';
  contentfulMetadata: ContentfulMetadata;
  featureImage?: Maybe<Asset>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<WorkLinkingCollections>;
  pageName?: Maybe<Scalars['String']['output']>;
  publishingDate?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<Seo>;
  serviceCategoryCollection?: Maybe<WorkServiceCategoryCollection>;
  servicesCollection?: Maybe<WorkServicesCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topSectionsCollection?: Maybe<WorkTopSectionsCollection>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkFeatureImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkPublishingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkServiceCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkServiceCategoryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkServicesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServicesFilter>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Work page [See type definition](https://app.contentful.com/spaces/njzagoag3ndp/content_types/work) */
export type WorkTopSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkTopSectionsFilter>;
};

export type WorkCollection = {
  __typename?: 'WorkCollection';
  items: Array<Maybe<Work>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type WorkFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featureImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
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
  publishingDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceCategory?: InputMaybe<CfCategoryNestedFilter>;
  serviceCategoryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<CfServicesNestedFilter>;
  servicesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSections?: InputMaybe<CftopSectionsMultiTypeNestedFilter>;
  topSectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkLinkingCollections = {
  __typename?: 'WorkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type WorkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum WorkOrder {
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
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

export type WorkServiceCategoryCollection = {
  __typename?: 'WorkServiceCategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum WorkServiceCategoryCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

export type WorkServicesCollection = {
  __typename?: 'WorkServicesCollection';
  items: Array<Maybe<Services>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum WorkServicesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
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

export type WorkTopSectionsCollection = {
  __typename?: 'WorkTopSectionsCollection';
  items: Array<Maybe<WorkTopSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type WorkTopSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorkTopSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkTopSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
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
  sys?: InputMaybe<SysFilter>;
};

export type WorkTopSectionsItem = HeaderComponent | Section;

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  servicesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContentListItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContentListItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContentListItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<Scalars['String']['input']>;
  items_contains?: InputMaybe<Scalars['String']['input']>;
  items_exists?: InputMaybe<Scalars['Boolean']['input']>;
  items_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items_not?: InputMaybe<Scalars['String']['input']>;
  items_not_contains?: InputMaybe<Scalars['String']['input']>;
  items_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  test_contains?: InputMaybe<Scalars['String']['input']>;
  test_exists?: InputMaybe<Scalars['Boolean']['input']>;
  test_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type CfProfileNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProfileNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProfileNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  socialCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type CfServicesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServicesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServicesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
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

export type CftopSectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CftopSectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CftopSectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  marginBottom?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marginBottom_not?: InputMaybe<Scalars['Boolean']['input']>;
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
  sys?: InputMaybe<SysFilter>;
};
