import { type SchemaTypeDefinition } from 'sanity'
import { feature } from './schemaTypes/feature'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [feature],
}
