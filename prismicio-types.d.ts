// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Content documents
 */
interface ContentDocumentData {
  /**
   * Dashboard Content field in *Content*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.dashboard_content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  dashboard_content: prismic.KeyTextField;
}

/**
 * Content document from Prismic
 *
 * - **API ID**: `content`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContentDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContentDocumentData>,
    "content",
    Lang
  >;

export type AllDocumentTypes = ContentDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type { ContentDocument, ContentDocumentData, AllDocumentTypes };
  }
}
