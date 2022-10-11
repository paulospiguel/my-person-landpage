import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
}

export interface IAggregate {
  count: Scalars['Int'];
}

/** Asset system model */
export interface IAsset extends INode {
  avatarPersonalInfo: Array<IPersonalInfo>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IAsset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: ILocale;
  /** Get the other localizations for this document */
  localizations: Array<IAsset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: IStage;
  thumbnailProject: Array<IProject>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
}


/** Asset system model */
export interface IAssetAvatarPersonalInfoArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IPersonalInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPersonalInfoWhereInput>;
}


/** Asset system model */
export interface IAssetCreatedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetCreatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Asset system model */
export interface IAssetHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


/** Asset system model */
export interface IAssetLocalizationsArgs {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<ILocale>;
}


/** Asset system model */
export interface IAssetPublishedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetPublishedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


/** Asset system model */
export interface IAssetThumbnailProjectArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IProjectWhereInput>;
}


/** Asset system model */
export interface IAssetUpdatedAtArgs {
  variation?: ISystemDateTimeFieldVariation;
}


/** Asset system model */
export interface IAssetUpdatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Asset system model */
export interface IAssetUrlArgs {
  transformation?: InputMaybe<IAssetTransformationInput>;
}

export interface IAssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IAssetWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IAssetConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IAssetCreateInput {
  avatarPersonalInfo?: InputMaybe<IPersonalInfoCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  iconSocialMedia?: InputMaybe<ISocialMediaCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<IAssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailProject?: InputMaybe<IProjectCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetCreateLocalizationInput {
  /** Localization input */
  data: IAssetCreateLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
}

export interface IAssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
}

export interface IAssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
}

/** An edge in a connection. */
export interface IAssetEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IAsset;
}

/** Identifies documents */
export interface IAssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarPersonalInfo_every?: InputMaybe<IPersonalInfoWhereInput>;
  avatarPersonalInfo_none?: InputMaybe<IPersonalInfoWhereInput>;
  avatarPersonalInfo_some?: InputMaybe<IPersonalInfoWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_none?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_some?: InputMaybe<IAssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  thumbnailProject_every?: InputMaybe<IProjectWhereInput>;
  thumbnailProject_none?: InputMaybe<IProjectWhereInput>;
  thumbnailProject_some?: InputMaybe<IProjectWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IAssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export interface IAssetTransformationInput {
  document?: InputMaybe<IDocumentTransformationInput>;
  image?: InputMaybe<IImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
}

export interface IAssetUpdateInput {
  avatarPersonalInfo?: InputMaybe<IPersonalInfoUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  iconSocialMedia?: InputMaybe<ISocialMediaUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<IAssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  thumbnailProject?: InputMaybe<IProjectUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateLocalizationInput {
  data: IAssetUpdateLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<IAssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<ILocale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<IAssetUpsertLocalizationInput>>;
}

export interface IAssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<IAssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<IAssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<IAssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<IAssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<IAssetUpsertWithNestedWhereUniqueInput>>;
}

export interface IAssetUpdateManyInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<IAssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateManyLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface IAssetUpdateManyLocalizationInput {
  data: IAssetUpdateManyLocalizationDataInput;
  locale: ILocale;
}

export interface IAssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<IAssetUpdateManyLocalizationInput>>;
}

export interface IAssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IAssetUpdateManyInput;
  /** Document search */
  where: IAssetWhereInput;
}

export interface IAssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<IAssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<IAssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<IAssetUpsertWithNestedWhereUniqueInput>;
}

export interface IAssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IAssetUpdateInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
}

export interface IAssetUpsertInput {
  /** Create document if it didn't exist */
  create: IAssetCreateInput;
  /** Update document if it exists */
  update: IAssetUpdateInput;
}

export interface IAssetUpsertLocalizationInput {
  create: IAssetCreateLocalizationDataInput;
  locale: ILocale;
  update: IAssetUpdateLocalizationDataInput;
}

export interface IAssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IAssetUpsertInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IAssetWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IAssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarPersonalInfo_every?: InputMaybe<IPersonalInfoWhereInput>;
  avatarPersonalInfo_none?: InputMaybe<IPersonalInfoWhereInput>;
  avatarPersonalInfo_some?: InputMaybe<IPersonalInfoWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  documentInStages_every?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_none?: InputMaybe<IAssetWhereStageInput>;
  documentInStages_some?: InputMaybe<IAssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  thumbnailProject_every?: InputMaybe<IProjectWhereInput>;
  thumbnailProject_none?: InputMaybe<IProjectWhereInput>;
  thumbnailProject_some?: InputMaybe<IProjectWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IAssetWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IAssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IAssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Asset record uniquely */
export interface IAssetWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IBatchPayload {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
}

export enum ICodeLanguages {
  Git = 'Git',
  Javascript = 'Javascript',
  NodeJs = 'NodeJS',
  ReactJs = 'ReactJS',
  Typescript = 'Typescript'
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export interface IColor {
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: IRgba;
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface IColorInput {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<IRgbaInput>;
}

export interface IConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
}

export enum IDocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export interface IDocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<IDocumentFileTypes>;
}

/** Transformations for Documents */
export interface IDocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<IDocumentOutputInput>;
}

export interface IDocumentVersion {
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export enum IImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export interface IImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<IImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
}

/** Transformations for Images */
export interface IImageTransformationInput {
  /** Resizes the image */
  resize?: InputMaybe<IImageResizeInput>;
}

export enum ILanguages {
  English = 'English',
  Portuguese = 'Portuguese',
  Spanish = 'Spanish'
}

/** Locale system enumeration */
export enum ILocale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export interface ILocation {
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


/** Representing a geolocation point with latitude and longitude */
export interface ILocationDistanceArgs {
  from: ILocationInput;
}

/** Input for a geolocation point with latitude and longitude */
export interface ILocationInput {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}

export interface IMutation {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<IAsset>;
  /** Create one personalInfo */
  createPersonalInfo?: Maybe<IPersonalInfo>;
  /** Create one project */
  createProject?: Maybe<IProject>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<IScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<IAsset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: IBatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: IAssetConnection;
  /**
   * Delete many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (deleteManyPersonalInfosConnection)
   */
  deleteManyPersonalInfos: IBatchPayload;
  /** Delete many PersonalInfo documents, return deleted documents */
  deleteManyPersonalInfosConnection: IPersonalInfoConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: IBatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: IProjectConnection;
  /** Delete one personalInfo from _all_ existing stages. Returns deleted document. */
  deletePersonalInfo?: Maybe<IPersonalInfo>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<IProject>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<IScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<IScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<IAsset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: IBatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: IAssetConnection;
  /**
   * Publish many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (publishManyPersonalInfosConnection)
   */
  publishManyPersonalInfos: IBatchPayload;
  /** Publish many PersonalInfo documents */
  publishManyPersonalInfosConnection: IPersonalInfoConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: IBatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: IProjectConnection;
  /** Publish one personalInfo */
  publishPersonalInfo?: Maybe<IPersonalInfo>;
  /** Publish one project */
  publishProject?: Maybe<IProject>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<IAsset>;
  /** Schedule to publish one personalInfo */
  schedulePublishPersonalInfo?: Maybe<IPersonalInfo>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<IProject>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<IAsset>;
  /** Unpublish one personalInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPersonalInfo?: Maybe<IPersonalInfo>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<IProject>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<IAsset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: IBatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: IAssetConnection;
  /**
   * Unpublish many PersonalInfo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPersonalInfosConnection)
   */
  unpublishManyPersonalInfos: IBatchPayload;
  /** Find many PersonalInfo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPersonalInfosConnection: IPersonalInfoConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: IBatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: IProjectConnection;
  /** Unpublish one personalInfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPersonalInfo?: Maybe<IPersonalInfo>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<IProject>;
  /** Update one asset */
  updateAsset?: Maybe<IAsset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: IBatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: IAssetConnection;
  /**
   * Update many personalInfos
   * @deprecated Please use the new paginated many mutation (updateManyPersonalInfosConnection)
   */
  updateManyPersonalInfos: IBatchPayload;
  /** Update many PersonalInfo documents */
  updateManyPersonalInfosConnection: IPersonalInfoConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: IBatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: IProjectConnection;
  /** Update one personalInfo */
  updatePersonalInfo?: Maybe<IPersonalInfo>;
  /** Update one project */
  updateProject?: Maybe<IProject>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<IScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<IAsset>;
  /** Upsert one personalInfo */
  upsertPersonalInfo?: Maybe<IPersonalInfo>;
  /** Upsert one project */
  upsertProject?: Maybe<IProject>;
}


export interface IMutationCreateAssetArgs {
  data: IAssetCreateInput;
}


export interface IMutationCreatePersonalInfoArgs {
  data: IPersonalInfoCreateInput;
}


export interface IMutationCreateProjectArgs {
  data: IProjectCreateInput;
}


export interface IMutationCreateScheduledReleaseArgs {
  data: IScheduledReleaseCreateInput;
}


export interface IMutationDeleteAssetArgs {
  where: IAssetWhereUniqueInput;
}


export interface IMutationDeleteManyAssetsArgs {
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationDeleteManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationDeleteManyPersonalInfosArgs {
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationDeleteManyPersonalInfosConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationDeleteManyProjectsArgs {
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationDeleteManyProjectsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationDeletePersonalInfoArgs {
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationDeleteProjectArgs {
  where: IProjectWhereUniqueInput;
}


export interface IMutationDeleteScheduledOperationArgs {
  where: IScheduledOperationWhereUniqueInput;
}


export interface IMutationDeleteScheduledReleaseArgs {
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IMutationPublishAssetArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishManyAssetsArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IAssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationPublishManyPersonalInfosArgs {
  to?: Array<IStage>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationPublishManyPersonalInfosConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationPublishManyProjectsArgs {
  to?: Array<IStage>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationPublishManyProjectsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<IStage>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationPublishPersonalInfoArgs {
  to?: Array<IStage>;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationPublishProjectArgs {
  to?: Array<IStage>;
  where: IProjectWhereUniqueInput;
}


export interface IMutationSchedulePublishAssetArgs {
  locales?: InputMaybe<Array<ILocale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationSchedulePublishPersonalInfoArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationSchedulePublishProjectArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IProjectWhereUniqueInput;
}


export interface IMutationScheduleUnpublishAssetArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
}


export interface IMutationScheduleUnpublishPersonalInfoArgs {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationScheduleUnpublishProjectArgs {
  from?: Array<IStage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: IProjectWhereUniqueInput;
}


export interface IMutationUnpublishAssetArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUnpublishManyAssetsArgs {
  from?: Array<IStage>;
  locales?: InputMaybe<Array<ILocale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUnpublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUnpublishManyPersonalInfosArgs {
  from?: Array<IStage>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationUnpublishManyPersonalInfosConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationUnpublishManyProjectsArgs {
  from?: Array<IStage>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationUnpublishManyProjectsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<IStage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<IStage>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationUnpublishPersonalInfoArgs {
  from?: Array<IStage>;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationUnpublishProjectArgs {
  from?: Array<IStage>;
  where: IProjectWhereUniqueInput;
}


export interface IMutationUpdateAssetArgs {
  data: IAssetUpdateInput;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUpdateManyAssetsArgs {
  data: IAssetUpdateManyInput;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUpdateManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IAssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetManyWhereInput>;
}


export interface IMutationUpdateManyPersonalInfosArgs {
  data: IPersonalInfoUpdateManyInput;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationUpdateManyPersonalInfosConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IPersonalInfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPersonalInfoManyWhereInput>;
}


export interface IMutationUpdateManyProjectsArgs {
  data: IProjectUpdateManyInput;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationUpdateManyProjectsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: IProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IProjectManyWhereInput>;
}


export interface IMutationUpdatePersonalInfoArgs {
  data: IPersonalInfoUpdateInput;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationUpdateProjectArgs {
  data: IProjectUpdateInput;
  where: IProjectWhereUniqueInput;
}


export interface IMutationUpdateScheduledReleaseArgs {
  data: IScheduledReleaseUpdateInput;
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IMutationUpsertAssetArgs {
  upsert: IAssetUpsertInput;
  where: IAssetWhereUniqueInput;
}


export interface IMutationUpsertPersonalInfoArgs {
  upsert: IPersonalInfoUpsertInput;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IMutationUpsertProjectArgs {
  upsert: IProjectUpsertInput;
  where: IProjectWhereUniqueInput;
}

/** An object with an ID */
export interface INode {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: IStage;
}

/** Information about pagination in a connection. */
export interface IPageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
}

export interface IPersonalInfo extends INode {
  avatar?: Maybe<IAsset>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  displayName: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<IPersonalInfo>;
  email?: Maybe<Scalars['String']>;
  hardSkills: Array<ICodeLanguages>;
  /** List of PersonalInfo versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  socialMedia: Array<IPersonalInfosocialMediaUnion>;
  /** System stage field */
  stage: IStage;
  summary: IPersonalInfoSummaryRichText;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


export interface IPersonalInfoAvatarArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPersonalInfoCreatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPersonalInfoDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


export interface IPersonalInfoHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


export interface IPersonalInfoPublishedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IPersonalInfoScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IPersonalInfoSocialMediaArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
}


export interface IPersonalInfoUpdatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IPersonalInfoConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IPersonalInfoWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IPersonalInfoConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IPersonalInfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IPersonalInfoCreateInput {
  avatar?: InputMaybe<IAssetCreateOneInlineInput>;
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  hardSkills?: InputMaybe<Array<ICodeLanguages>>;
  location?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  socialMedia?: InputMaybe<IPersonalInfosocialMediaUnionCreateManyInlineInput>;
  summary: Scalars['RichTextAST'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface IPersonalInfoCreateManyInlineInput {
  /** Connect multiple existing PersonalInfo documents */
  connect?: InputMaybe<Array<IPersonalInfoWhereUniqueInput>>;
  /** Create and connect multiple existing PersonalInfo documents */
  create?: InputMaybe<Array<IPersonalInfoCreateInput>>;
}

export interface IPersonalInfoCreateOneInlineInput {
  /** Connect one existing PersonalInfo document */
  connect?: InputMaybe<IPersonalInfoWhereUniqueInput>;
  /** Create and connect one PersonalInfo document */
  create?: InputMaybe<IPersonalInfoCreateInput>;
}

/** An edge in a connection. */
export interface IPersonalInfoEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IPersonalInfo;
}

/** Identifies documents */
export interface IPersonalInfoManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<IAssetWhereInput>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthday_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthday_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthday_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  birthday_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthday_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthday_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  birthday_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  displayName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<IPersonalInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<IPersonalInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<IPersonalInfoWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  hardSkills?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array contains *all* items provided to the filter */
  hardSkills_contains_all?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  hardSkills_contains_none?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array contains at least one item provided to the filter */
  hardSkills_contains_some?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  hardSkills_not?: InputMaybe<Array<ICodeLanguages>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nationality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nationality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nationality_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  occupation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IPersonalInfoOrderByInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  BirthdayAsc = 'birthday_ASC',
  BirthdayDesc = 'birthday_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  HardSkillsAsc = 'hardSkills_ASC',
  HardSkillsDesc = 'hardSkills_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NationalityAsc = 'nationality_ASC',
  NationalityDesc = 'nationality_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface IPersonalInfoSummaryRichText {
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<IPersonalInfoSummaryRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
}

export type IPersonalInfoSummaryRichTextEmbeddedTypes = IAsset;

export interface IPersonalInfoUpdateInput {
  avatar?: InputMaybe<IAssetUpdateOneInlineInput>;
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hardSkills?: InputMaybe<Array<ICodeLanguages>>;
  location?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  socialMedia?: InputMaybe<IPersonalInfosocialMediaUnionUpdateManyInlineInput>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
}

export interface IPersonalInfoUpdateManyInlineInput {
  /** Connect multiple existing PersonalInfo documents */
  connect?: InputMaybe<Array<IPersonalInfoConnectInput>>;
  /** Create and connect multiple PersonalInfo documents */
  create?: InputMaybe<Array<IPersonalInfoCreateInput>>;
  /** Delete multiple PersonalInfo documents */
  delete?: InputMaybe<Array<IPersonalInfoWhereUniqueInput>>;
  /** Disconnect multiple PersonalInfo documents */
  disconnect?: InputMaybe<Array<IPersonalInfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonalInfo documents */
  set?: InputMaybe<Array<IPersonalInfoWhereUniqueInput>>;
  /** Update multiple PersonalInfo documents */
  update?: InputMaybe<Array<IPersonalInfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonalInfo documents */
  upsert?: InputMaybe<Array<IPersonalInfoUpsertWithNestedWhereUniqueInput>>;
}

export interface IPersonalInfoUpdateManyInput {
  bio?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hardSkills?: InputMaybe<Array<ICodeLanguages>>;
  location?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['RichTextAST']>;
}

export interface IPersonalInfoUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IPersonalInfoUpdateManyInput;
  /** Document search */
  where: IPersonalInfoWhereInput;
}

export interface IPersonalInfoUpdateOneInlineInput {
  /** Connect existing PersonalInfo document */
  connect?: InputMaybe<IPersonalInfoWhereUniqueInput>;
  /** Create and connect one PersonalInfo document */
  create?: InputMaybe<IPersonalInfoCreateInput>;
  /** Delete currently connected PersonalInfo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PersonalInfo document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PersonalInfo document */
  update?: InputMaybe<IPersonalInfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalInfo document */
  upsert?: InputMaybe<IPersonalInfoUpsertWithNestedWhereUniqueInput>;
}

export interface IPersonalInfoUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IPersonalInfoUpdateInput;
  /** Unique document search */
  where: IPersonalInfoWhereUniqueInput;
}

export interface IPersonalInfoUpsertInput {
  /** Create document if it didn't exist */
  create: IPersonalInfoCreateInput;
  /** Update document if it exists */
  update: IPersonalInfoUpdateInput;
}

export interface IPersonalInfoUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IPersonalInfoUpsertInput;
  /** Unique document search */
  where: IPersonalInfoWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IPersonalInfoWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IPersonalInfoWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPersonalInfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<IAssetWhereInput>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthday_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthday_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthday_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  birthday_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthday_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthday_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  birthday_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  displayName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<IPersonalInfoWhereStageInput>;
  documentInStages_none?: InputMaybe<IPersonalInfoWhereStageInput>;
  documentInStages_some?: InputMaybe<IPersonalInfoWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  hardSkills?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array contains *all* items provided to the filter */
  hardSkills_contains_all?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  hardSkills_contains_none?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array contains at least one item provided to the filter */
  hardSkills_contains_some?: InputMaybe<Array<ICodeLanguages>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  hardSkills_not?: InputMaybe<Array<ICodeLanguages>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nationality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nationality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nationality_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  occupation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IPersonalInfoWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IPersonalInfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IPersonalInfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IPersonalInfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IPersonalInfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References PersonalInfo record uniquely */
export interface IPersonalInfoWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export type IPersonalInfosocialMediaUnion = ISocialMedia;

export interface IPersonalInfosocialMediaUnionConnectInput {
  SocialMedia?: InputMaybe<ISocialMediaConnectInput>;
}

export interface IPersonalInfosocialMediaUnionCreateInput {
  SocialMedia?: InputMaybe<ISocialMediaCreateInput>;
}

export interface IPersonalInfosocialMediaUnionCreateManyInlineInput {
  /** Create and connect multiple existing PersonalInfosocialMediaUnion documents */
  create?: InputMaybe<Array<IPersonalInfosocialMediaUnionCreateInput>>;
}

export interface IPersonalInfosocialMediaUnionCreateOneInlineInput {
  /** Create and connect one PersonalInfosocialMediaUnion document */
  create?: InputMaybe<IPersonalInfosocialMediaUnionCreateInput>;
}

export interface IPersonalInfosocialMediaUnionCreateWithPositionInput {
  SocialMedia?: InputMaybe<ISocialMediaCreateWithPositionInput>;
}

export interface IPersonalInfosocialMediaUnionUpdateInput {
  SocialMedia?: InputMaybe<ISocialMediaUpdateInput>;
}

export interface IPersonalInfosocialMediaUnionUpdateManyInlineInput {
  /** Create and connect multiple PersonalInfosocialMediaUnion component instances */
  create?: InputMaybe<Array<IPersonalInfosocialMediaUnionCreateWithPositionInput>>;
  /** Delete multiple PersonalInfosocialMediaUnion documents */
  delete?: InputMaybe<Array<IPersonalInfosocialMediaUnionWhereUniqueInput>>;
  /** Update multiple PersonalInfosocialMediaUnion component instances */
  update?: InputMaybe<Array<IPersonalInfosocialMediaUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PersonalInfosocialMediaUnion component instances */
  upsert?: InputMaybe<Array<IPersonalInfosocialMediaUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
}

export interface IPersonalInfosocialMediaUnionUpdateManyWithNestedWhereInput {
  SocialMedia?: InputMaybe<ISocialMediaUpdateManyWithNestedWhereInput>;
}

export interface IPersonalInfosocialMediaUnionUpdateOneInlineInput {
  /** Create and connect one PersonalInfosocialMediaUnion document */
  create?: InputMaybe<IPersonalInfosocialMediaUnionCreateInput>;
  /** Delete currently connected PersonalInfosocialMediaUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single PersonalInfosocialMediaUnion document */
  update?: InputMaybe<IPersonalInfosocialMediaUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonalInfosocialMediaUnion document */
  upsert?: InputMaybe<IPersonalInfosocialMediaUnionUpsertWithNestedWhereUniqueInput>;
}

export interface IPersonalInfosocialMediaUnionUpdateWithNestedWhereUniqueAndPositionInput {
  SocialMedia?: InputMaybe<ISocialMediaUpdateWithNestedWhereUniqueAndPositionInput>;
}

export interface IPersonalInfosocialMediaUnionUpdateWithNestedWhereUniqueInput {
  SocialMedia?: InputMaybe<ISocialMediaUpdateWithNestedWhereUniqueInput>;
}

export interface IPersonalInfosocialMediaUnionUpsertWithNestedWhereUniqueAndPositionInput {
  SocialMedia?: InputMaybe<ISocialMediaUpsertWithNestedWhereUniqueAndPositionInput>;
}

export interface IPersonalInfosocialMediaUnionUpsertWithNestedWhereUniqueInput {
  SocialMedia?: InputMaybe<ISocialMediaUpsertWithNestedWhereUniqueInput>;
}

export interface IPersonalInfosocialMediaUnionWhereInput {
  SocialMedia?: InputMaybe<ISocialMediaWhereInput>;
}

export interface IPersonalInfosocialMediaUnionWhereUniqueInput {
  SocialMedia?: InputMaybe<ISocialMediaWhereUniqueInput>;
}

export interface IProject extends INode {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IProject>;
  /** List of Project versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  thumbnail?: Maybe<IAsset>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
  url: Scalars['String'];
}


export interface IProjectCreatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IProjectDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


export interface IProjectHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<IStage>;
}


export interface IProjectPublishedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IProjectScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IProjectThumbnailArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


export interface IProjectUpdatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IProjectConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IProjectWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IProjectConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IProjectCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<IAssetCreateOneInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
}

export interface IProjectCreateManyInlineInput {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<IProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<IProjectCreateInput>>;
}

export interface IProjectCreateOneInlineInput {
  /** Connect one existing Project document */
  connect?: InputMaybe<IProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<IProjectCreateInput>;
}

/** An edge in a connection. */
export interface IProjectEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IProject;
}

/** Identifies documents */
export interface IProjectManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<IProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<IProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<IProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  thumbnail?: InputMaybe<IAssetWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
}

export enum IProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export interface IProjectUpdateInput {
  description?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<IAssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IProjectUpdateManyInlineInput {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<IProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<IProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<IProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<IProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<IProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<IProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<IProjectUpsertWithNestedWhereUniqueInput>>;
}

export interface IProjectUpdateManyInput {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IProjectUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IProjectUpdateManyInput;
  /** Document search */
  where: IProjectWhereInput;
}

export interface IProjectUpdateOneInlineInput {
  /** Connect existing Project document */
  connect?: InputMaybe<IProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<IProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Project document */
  update?: InputMaybe<IProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<IProjectUpsertWithNestedWhereUniqueInput>;
}

export interface IProjectUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IProjectUpdateInput;
  /** Unique document search */
  where: IProjectWhereUniqueInput;
}

export interface IProjectUpsertInput {
  /** Create document if it didn't exist */
  create: IProjectCreateInput;
  /** Update document if it exists */
  update: IProjectUpdateInput;
}

export interface IProjectUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IProjectUpsertInput;
  /** Unique document search */
  where: IProjectWhereUniqueInput;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IProjectWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IProjectWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<IProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<IProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<IProjectWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  scheduledIn_every?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<IScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<IScheduledOperationWhereInput>;
  thumbnail?: InputMaybe<IAssetWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IProjectWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References Project record uniquely */
export interface IProjectWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IPublishLocaleInput {
  /** Locales to publish */
  locale: ILocale;
  /** Stages to publish selected locales to */
  stages: Array<IStage>;
}

export interface IQuery {
  /** Retrieve a single asset */
  asset?: Maybe<IAsset>;
  /** Retrieve document version */
  assetVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<IAsset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: IAssetConnection;
  /** Fetches an object given its ID */
  node?: Maybe<INode>;
  /** Retrieve a single personalInfo */
  personalInfo?: Maybe<IPersonalInfo>;
  /** Retrieve document version */
  personalInfoVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple personalInfos */
  personalInfos: Array<IPersonalInfo>;
  /** Retrieve multiple personalInfos using the Relay connection interface */
  personalInfosConnection: IPersonalInfoConnection;
  /** Retrieve a single project */
  project?: Maybe<IProject>;
  /** Retrieve document version */
  projectVersion?: Maybe<IDocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<IProject>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: IProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: IScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: IScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<IUser>;
  /** Retrieve multiple users */
  users: Array<IUser>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: IUserConnection;
}


export interface IQueryAssetArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IAssetWhereUniqueInput;
}


export interface IQueryAssetVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryAssetsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
}


export interface IQueryAssetsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IAssetWhereInput>;
}


export interface IQueryNodeArgs {
  id: Scalars['ID'];
  locales?: Array<ILocale>;
  stage?: IStage;
}


export interface IQueryPersonalInfoArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IPersonalInfoWhereUniqueInput;
}


export interface IQueryPersonalInfoVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryPersonalInfosArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IPersonalInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IPersonalInfoWhereInput>;
}


export interface IQueryPersonalInfosConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IPersonalInfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IPersonalInfoWhereInput>;
}


export interface IQueryProjectArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IProjectWhereUniqueInput;
}


export interface IQueryProjectVersionArgs {
  where: IVersionWhereInput;
}


export interface IQueryProjectsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IProjectWhereInput>;
}


export interface IQueryProjectsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IProjectWhereInput>;
}


export interface IQueryScheduledOperationArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledOperationWhereUniqueInput;
}


export interface IQueryScheduledOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IQueryScheduledOperationsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


export interface IQueryScheduledReleaseArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledReleaseWhereUniqueInput;
}


export interface IQueryScheduledReleasesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
}


export interface IQueryScheduledReleasesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IScheduledReleaseWhereInput>;
}


export interface IQueryUserArgs {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IUserWhereUniqueInput;
}


export interface IQueryUsersArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
}


export interface IQueryUsersConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy?: InputMaybe<IUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: IStage;
  where?: InputMaybe<IUserWhereInput>;
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface IRgba {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface IRgbaInput {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface IRichText {
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
}

/** Scheduled Operation system model */
export interface IScheduledOperation extends INode {
  affectedDocuments: Array<IScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<IScheduledRelease>;
  /** System stage field */
  stage: IStage;
  /** operation Status */
  status: IScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationAffectedDocumentsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  skip?: InputMaybe<Scalars['Int']>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationCreatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationPublishedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationReleaseArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Operation system model */
export interface IScheduledOperationUpdatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}

export type IScheduledOperationAffectedDocument = IAsset | IPersonalInfo | IProject;

export interface IScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledOperationWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IScheduledOperationConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
}

export interface IScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
}

/** An edge in a connection. */
export interface IScheduledOperationEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledOperation;
}

/** Identifies documents */
export interface IScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum IScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface IScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<IScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<IScheduledOperationWhereUniqueInput>>;
}

export interface IScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<IScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  release?: InputMaybe<IScheduledReleaseWhereInput>;
  status?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** References ScheduledOperation record uniquely */
export interface IScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Scheduled Release system model */
export interface IScheduledRelease extends INode {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<IUser>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<IScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<IUser>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** Release Status */
  status: IScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<IUser>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseCreatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<ILocale>>;
  orderBy?: InputMaybe<IScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IScheduledOperationWhereInput>;
}


/** Scheduled Release system model */
export interface IScheduledReleasePublishedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}


/** Scheduled Release system model */
export interface IScheduledReleaseUpdatedByArgs {
  locales?: InputMaybe<Array<ILocale>>;
}

export interface IScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledReleaseWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IScheduledReleaseConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface IScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
}

export interface IScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
}

/** An edge in a connection. */
export interface IScheduledReleaseEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledRelease;
}

/** Identifies documents */
export interface IScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

export enum IScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum IScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface IScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<IScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<IScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<IScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<IScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
}

export interface IScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: IScheduledReleaseUpdateManyInput;
  /** Document search */
  where: IScheduledReleaseWhereInput;
}

export interface IScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<IScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<IScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<IScheduledReleaseUpsertWithNestedWhereUniqueInput>;
}

export interface IScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: IScheduledReleaseUpdateInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
}

export interface IScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: IScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: IScheduledReleaseUpdateInput;
}

export interface IScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: IScheduledReleaseUpsertInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
}

/** Identifies documents */
export interface IScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<IUserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<IScheduledOperationWhereInput>;
  operations_none?: InputMaybe<IScheduledOperationWhereInput>;
  operations_some?: InputMaybe<IScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<IUserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<IScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<IUserWhereInput>;
}

/** References ScheduledRelease record uniquely */
export interface IScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface ISocialMedia {
  icon?: Maybe<IAsset>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: IStage;
  url?: Maybe<Scalars['String']>;
}


export interface ISocialMediaIconArgs {
  locales?: InputMaybe<Array<ILocale>>;
}

export interface ISocialMediaConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: ISocialMediaWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ISocialMediaConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ISocialMediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface ISocialMediaCreateInput {
  icon?: InputMaybe<IAssetCreateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface ISocialMediaCreateManyInlineInput {
  /** Create and connect multiple existing SocialMedia documents */
  create?: InputMaybe<Array<ISocialMediaCreateInput>>;
}

export interface ISocialMediaCreateOneInlineInput {
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<ISocialMediaCreateInput>;
}

export interface ISocialMediaCreateWithPositionInput {
  /** Document to create */
  data: ISocialMediaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<IConnectPositionInput>;
}

/** An edge in a connection. */
export interface ISocialMediaEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ISocialMedia;
}

/** Identifies documents */
export interface ISocialMediaManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<IAssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
}

export enum ISocialMediaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ISocialMediaParent = IPersonalInfo;

export interface ISocialMediaParentConnectInput {
  PersonalInfo?: InputMaybe<IPersonalInfoConnectInput>;
}

export interface ISocialMediaParentCreateInput {
  PersonalInfo?: InputMaybe<IPersonalInfoCreateInput>;
}

export interface ISocialMediaParentCreateManyInlineInput {
  /** Connect multiple existing SocialMediaParent documents */
  connect?: InputMaybe<Array<ISocialMediaParentWhereUniqueInput>>;
  /** Create and connect multiple existing SocialMediaParent documents */
  create?: InputMaybe<Array<ISocialMediaParentCreateInput>>;
}

export interface ISocialMediaParentCreateOneInlineInput {
  /** Connect one existing SocialMediaParent document */
  connect?: InputMaybe<ISocialMediaParentWhereUniqueInput>;
  /** Create and connect one SocialMediaParent document */
  create?: InputMaybe<ISocialMediaParentCreateInput>;
}

export interface ISocialMediaParentUpdateInput {
  PersonalInfo?: InputMaybe<IPersonalInfoUpdateInput>;
}

export interface ISocialMediaParentUpdateManyInlineInput {
  /** Connect multiple existing SocialMediaParent documents */
  connect?: InputMaybe<Array<ISocialMediaParentConnectInput>>;
  /** Create and connect multiple SocialMediaParent documents */
  create?: InputMaybe<Array<ISocialMediaParentCreateInput>>;
  /** Delete multiple SocialMediaParent documents */
  delete?: InputMaybe<Array<ISocialMediaParentWhereUniqueInput>>;
  /** Disconnect multiple SocialMediaParent documents */
  disconnect?: InputMaybe<Array<ISocialMediaParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialMediaParent documents */
  set?: InputMaybe<Array<ISocialMediaParentWhereUniqueInput>>;
  /** Update multiple SocialMediaParent documents */
  update?: InputMaybe<Array<ISocialMediaParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialMediaParent documents */
  upsert?: InputMaybe<Array<ISocialMediaParentUpsertWithNestedWhereUniqueInput>>;
}

export interface ISocialMediaParentUpdateManyWithNestedWhereInput {
  PersonalInfo?: InputMaybe<IPersonalInfoUpdateManyWithNestedWhereInput>;
}

export interface ISocialMediaParentUpdateOneInlineInput {
  /** Connect existing SocialMediaParent document */
  connect?: InputMaybe<ISocialMediaParentWhereUniqueInput>;
  /** Create and connect one SocialMediaParent document */
  create?: InputMaybe<ISocialMediaParentCreateInput>;
  /** Delete currently connected SocialMediaParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SocialMediaParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SocialMediaParent document */
  update?: InputMaybe<ISocialMediaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialMediaParent document */
  upsert?: InputMaybe<ISocialMediaParentUpsertWithNestedWhereUniqueInput>;
}

export interface ISocialMediaParentUpdateWithNestedWhereUniqueInput {
  PersonalInfo?: InputMaybe<IPersonalInfoUpdateWithNestedWhereUniqueInput>;
}

export interface ISocialMediaParentUpsertWithNestedWhereUniqueInput {
  PersonalInfo?: InputMaybe<IPersonalInfoUpsertWithNestedWhereUniqueInput>;
}

export interface ISocialMediaParentWhereInput {
  PersonalInfo?: InputMaybe<IPersonalInfoWhereInput>;
}

export interface ISocialMediaParentWhereUniqueInput {
  PersonalInfo?: InputMaybe<IPersonalInfoWhereUniqueInput>;
}

export interface ISocialMediaUpdateInput {
  icon?: InputMaybe<IAssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface ISocialMediaUpdateManyInlineInput {
  /** Create and connect multiple SocialMedia component instances */
  create?: InputMaybe<Array<ISocialMediaCreateWithPositionInput>>;
  /** Delete multiple SocialMedia documents */
  delete?: InputMaybe<Array<ISocialMediaWhereUniqueInput>>;
  /** Update multiple SocialMedia component instances */
  update?: InputMaybe<Array<ISocialMediaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SocialMedia component instances */
  upsert?: InputMaybe<Array<ISocialMediaUpsertWithNestedWhereUniqueAndPositionInput>>;
}

export interface ISocialMediaUpdateManyInput {
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface ISocialMediaUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ISocialMediaUpdateManyInput;
  /** Document search */
  where: ISocialMediaWhereInput;
}

export interface ISocialMediaUpdateOneInlineInput {
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<ISocialMediaCreateInput>;
  /** Delete currently connected SocialMedia document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single SocialMedia document */
  update?: InputMaybe<ISocialMediaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialMedia document */
  upsert?: InputMaybe<ISocialMediaUpsertWithNestedWhereUniqueInput>;
}

export interface ISocialMediaUpdateWithNestedWhereUniqueAndPositionInput {
  /** Document to update */
  data?: InputMaybe<ISocialMediaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Unique component instance search */
  where: ISocialMediaWhereUniqueInput;
}

export interface ISocialMediaUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ISocialMediaUpdateInput;
  /** Unique document search */
  where: ISocialMediaWhereUniqueInput;
}

export interface ISocialMediaUpsertInput {
  /** Create document if it didn't exist */
  create: ISocialMediaCreateInput;
  /** Update document if it exists */
  update: ISocialMediaUpdateInput;
}

export interface ISocialMediaUpsertWithNestedWhereUniqueAndPositionInput {
  /** Document to upsert */
  data?: InputMaybe<ISocialMediaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Unique component instance search */
  where: ISocialMediaWhereUniqueInput;
}

export interface ISocialMediaUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ISocialMediaUpsertInput;
  /** Unique document search */
  where: ISocialMediaWhereUniqueInput;
}

/** Identifies documents */
export interface ISocialMediaWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ISocialMediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<IAssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
}

/** References SocialMedia record uniquely */
export interface ISocialMediaWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Stage system enumeration */
export enum IStage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum ISystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export interface IUnpublishLocaleInput {
  /** Locales to unpublish */
  locale: ILocale;
  /** Stages to unpublish selected locales from */
  stages: Array<IStage>;
}

/** User system model */
export interface IUser extends INode {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<IUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: IUserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
}


/** User system model */
export interface IUserDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
}

export interface IUserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<IConnectPositionInput>;
  /** Document to connect */
  where: IUserWhereUniqueInput;
}

/** A connection to a list of items. */
export interface IUserConnection {
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
}

export interface IUserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserWhereUniqueInput>>;
}

export interface IUserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
}

/** An edge in a connection. */
export interface IUserEdge {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IUser;
}

/** System User Kind */
export enum IUserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export interface IUserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<IUserWhereStageInput>;
  documentInStages_none?: InputMaybe<IUserWhereStageInput>;
  documentInStages_some?: InputMaybe<IUserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

export enum IUserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface IUserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<IUserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<IUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<IUserWhereUniqueInput>>;
}

export interface IUserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<IUserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** This contains a set of filters that can be used to compare values internally */
export interface IUserWhereComparatorInput {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface IUserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<IUserWhereStageInput>;
  documentInStages_none?: InputMaybe<IUserWhereStageInput>;
  documentInStages_some?: InputMaybe<IUserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<IUserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface IUserWhereStageInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<IUserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<IUserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<IUserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<IUserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<IStage>;
}

/** References User record uniquely */
export interface IUserWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface IVersion {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export interface IVersionWhereInput {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
}

export enum I_FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum I_MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum I_MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum I_OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum I_RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum I_RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum I_RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum I_SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type IGetPersonalInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetPersonalInfoQuery = { personalInfos: Array<{ id: string, displayName: string, bio?: string | null, birthday?: any | null, email?: string | null, hardSkills: Array<ICodeLanguages>, occupation?: string | null, nationality?: string | null, location?: string | null, socialMedia: Array<{ id: string, name?: string | null, url?: string | null }>, summary: { html: string, text: string } }> };


export const GetPersonalInfoDocument = gql`
    query GetPersonalInfo {
  personalInfos(first: 1) {
    id
    displayName
    bio
    birthday
    email
    hardSkills
    occupation
    nationality
    location
    socialMedia {
      ... on SocialMedia {
        id
        name
        url
      }
    }
    summary {
      html
      text
    }
  }
}
    `;

/**
 * __useGetPersonalInfoQuery__
 *
 * To run a query within a React component, call `useGetPersonalInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonalInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonalInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonalInfoQuery(baseOptions?: Apollo.QueryHookOptions<IGetPersonalInfoQuery, IGetPersonalInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGetPersonalInfoQuery, IGetPersonalInfoQueryVariables>(GetPersonalInfoDocument, options);
      }
export function useGetPersonalInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetPersonalInfoQuery, IGetPersonalInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGetPersonalInfoQuery, IGetPersonalInfoQueryVariables>(GetPersonalInfoDocument, options);
        }
export type GetPersonalInfoQueryHookResult = ReturnType<typeof useGetPersonalInfoQuery>;
export type GetPersonalInfoLazyQueryHookResult = ReturnType<typeof useGetPersonalInfoLazyQuery>;
export type GetPersonalInfoQueryResult = Apollo.QueryResult<IGetPersonalInfoQuery, IGetPersonalInfoQueryVariables>;