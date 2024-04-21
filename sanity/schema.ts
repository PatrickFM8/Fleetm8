import { type SchemaTypeDefinition } from 'sanity'
import { feature } from './schemaTypes/feature'
import { post } from './schemaTypes/post'
import { author } from './schemaTypes/author'
import { category } from './schemaTypes/category'
import { blockContent } from './schemaTypes/blockContent'
import { heroSection } from './schemaTypes/heroSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, feature, heroSection],
}
