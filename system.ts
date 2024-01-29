/**
 * System is a collection of components.
 */
export interface System<TSchema extends Schema> {
  components: ComponentsOf<TSchema>;
}

/**
 * ComponentsOf is a list of components from a schema.
 */
export type ComponentsOf<TSchema extends Schema> = Array<ComponentOf<TSchema>>;

/**
 * ComponentOf is a component from a schema.
 */
export type ComponentOf<TSchema extends Schema> = {
  [TType in keyof TSchema]: Component<TType, TSchema>;
}[keyof TSchema];

/**
 * Component is a component from a schema by kind.
 */
export type Component<
  TType extends keyof TSchema,
  TSchema extends Schema,
> =
  & { type: TType }
  & {
    [TFieldName in keyof TSchema[TType]]: FieldTypeOf<
      TSchema[TType][TFieldName]
    >;
  };

/**
 * FieldTypeOf converts a schema field type to a TypeScript type.
 */
export type FieldTypeOf<TSchemaFieldType extends keyof FieldTypeMap> =
  FieldTypeMap[TSchemaFieldType];

/**
 * FieldTypeMap is a map of schema field types to TypeScript types.
 */
export interface FieldTypeMap {
  string: string;
  number: number;
  boolean: boolean;
  "string[]": string[];
  "number[]": number[];
  "boolean[]": boolean[];
}

/**
 * Schema is a collection of components.
 */
export type Schema = Record<string, SchemaComponent>;

/**
 * SchemaComponent is a component from a schema.
 */
export type SchemaComponent = Record<string, keyof FieldTypeMap>;
