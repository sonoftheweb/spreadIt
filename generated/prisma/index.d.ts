
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Row
 * 
 */
export type Row = $Result.DefaultSelection<Prisma.$RowPayload>
/**
 * Model ColumnMetadata
 * 
 */
export type ColumnMetadata = $Result.DefaultSelection<Prisma.$ColumnMetadataPayload>
/**
 * Model DataValue
 * 
 */
export type DataValue = $Result.DefaultSelection<Prisma.$DataValuePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.row`: Exposes CRUD operations for the **Row** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rows
    * const rows = await prisma.row.findMany()
    * ```
    */
  get row(): Prisma.RowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.columnMetadata`: Exposes CRUD operations for the **ColumnMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColumnMetadata
    * const columnMetadata = await prisma.columnMetadata.findMany()
    * ```
    */
  get columnMetadata(): Prisma.ColumnMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataValue`: Exposes CRUD operations for the **DataValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataValues
    * const dataValues = await prisma.dataValue.findMany()
    * ```
    */
  get dataValue(): Prisma.DataValueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    File: 'File',
    Row: 'Row',
    ColumnMetadata: 'ColumnMetadata',
    DataValue: 'DataValue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "file" | "row" | "columnMetadata" | "dataValue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Row: {
        payload: Prisma.$RowPayload<ExtArgs>
        fields: Prisma.RowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          findFirst: {
            args: Prisma.RowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          findMany: {
            args: Prisma.RowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          create: {
            args: Prisma.RowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          createMany: {
            args: Prisma.RowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          delete: {
            args: Prisma.RowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          update: {
            args: Prisma.RowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          deleteMany: {
            args: Prisma.RowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          upsert: {
            args: Prisma.RowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          aggregate: {
            args: Prisma.RowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRow>
          }
          groupBy: {
            args: Prisma.RowGroupByArgs<ExtArgs>
            result: $Utils.Optional<RowGroupByOutputType>[]
          }
          count: {
            args: Prisma.RowCountArgs<ExtArgs>
            result: $Utils.Optional<RowCountAggregateOutputType> | number
          }
        }
      }
      ColumnMetadata: {
        payload: Prisma.$ColumnMetadataPayload<ExtArgs>
        fields: Prisma.ColumnMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          findFirst: {
            args: Prisma.ColumnMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          findMany: {
            args: Prisma.ColumnMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          create: {
            args: Prisma.ColumnMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          createMany: {
            args: Prisma.ColumnMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          delete: {
            args: Prisma.ColumnMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          update: {
            args: Prisma.ColumnMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ColumnMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          upsert: {
            args: Prisma.ColumnMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          aggregate: {
            args: Prisma.ColumnMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumnMetadata>
          }
          groupBy: {
            args: Prisma.ColumnMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnMetadataCountAggregateOutputType> | number
          }
        }
      }
      DataValue: {
        payload: Prisma.$DataValuePayload<ExtArgs>
        fields: Prisma.DataValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          findFirst: {
            args: Prisma.DataValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          findMany: {
            args: Prisma.DataValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>[]
          }
          create: {
            args: Prisma.DataValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          createMany: {
            args: Prisma.DataValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>[]
          }
          delete: {
            args: Prisma.DataValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          update: {
            args: Prisma.DataValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          deleteMany: {
            args: Prisma.DataValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>[]
          }
          upsert: {
            args: Prisma.DataValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataValuePayload>
          }
          aggregate: {
            args: Prisma.DataValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataValue>
          }
          groupBy: {
            args: Prisma.DataValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataValueCountArgs<ExtArgs>
            result: $Utils.Optional<DataValueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    file?: FileOmit
    row?: RowOmit
    columnMetadata?: ColumnMetadataOmit
    dataValue?: DataValueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    files: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | SessionCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    rows: number
    columns: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rows?: boolean | FileCountOutputTypeCountRowsArgs
    columns?: boolean | FileCountOutputTypeCountColumnsArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RowWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMetadataWhereInput
  }


  /**
   * Count Type RowCountOutputType
   */

  export type RowCountOutputType = {
    dataValues: number
  }

  export type RowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataValues?: boolean | RowCountOutputTypeCountDataValuesArgs
  }

  // Custom InputTypes
  /**
   * RowCountOutputType without action
   */
  export type RowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RowCountOutputType
     */
    select?: RowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RowCountOutputType without action
   */
  export type RowCountOutputTypeCountDataValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataValueWhereInput
  }


  /**
   * Count Type ColumnMetadataCountOutputType
   */

  export type ColumnMetadataCountOutputType = {
    dataValues: number
  }

  export type ColumnMetadataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataValues?: boolean | ColumnMetadataCountOutputTypeCountDataValuesArgs
  }

  // Custom InputTypes
  /**
   * ColumnMetadataCountOutputType without action
   */
  export type ColumnMetadataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadataCountOutputType
     */
    select?: ColumnMetadataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnMetadataCountOutputType without action
   */
  export type ColumnMetadataCountOutputTypeCountDataValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataValueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    name: string | null
    uploadTimestamp: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    uploadTimestamp: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    name: number
    uploadTimestamp: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    name?: true
    uploadTimestamp?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    name?: true
    uploadTimestamp?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    name?: true
    uploadTimestamp?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    name: string
    uploadTimestamp: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uploadTimestamp?: boolean
    files?: boolean | Session$filesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uploadTimestamp?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uploadTimestamp?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    name?: boolean
    uploadTimestamp?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "uploadTimestamp", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | Session$filesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      uploadTimestamp: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends Session$filesArgs<ExtArgs> = {}>(args?: Subset<T, Session$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly name: FieldRef<"Session", 'String'>
    readonly uploadTimestamp: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.files
   */
  export type Session$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    originalFilename: string | null
    uploadTimestamp: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    originalFilename: string | null
    uploadTimestamp: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    sessionId: number
    originalFilename: number
    uploadTimestamp: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    sessionId?: true
    originalFilename?: true
    uploadTimestamp?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    sessionId?: true
    originalFilename?: true
    uploadTimestamp?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    sessionId?: true
    originalFilename?: true
    uploadTimestamp?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    sessionId: number
    originalFilename: string
    uploadTimestamp: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    originalFilename?: boolean
    uploadTimestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    rows?: boolean | File$rowsArgs<ExtArgs>
    columns?: boolean | File$columnsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    originalFilename?: boolean
    uploadTimestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    originalFilename?: boolean
    uploadTimestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    sessionId?: boolean
    originalFilename?: boolean
    uploadTimestamp?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "originalFilename" | "uploadTimestamp", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    rows?: boolean | File$rowsArgs<ExtArgs>
    columns?: boolean | File$columnsArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      rows: Prisma.$RowPayload<ExtArgs>[]
      columns: Prisma.$ColumnMetadataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      originalFilename: string
      uploadTimestamp: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rows<T extends File$rowsArgs<ExtArgs> = {}>(args?: Subset<T, File$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    columns<T extends File$columnsArgs<ExtArgs> = {}>(args?: Subset<T, File$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly sessionId: FieldRef<"File", 'Int'>
    readonly originalFilename: FieldRef<"File", 'String'>
    readonly uploadTimestamp: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.rows
   */
  export type File$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    where?: RowWhereInput
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    cursor?: RowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * File.columns
   */
  export type File$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    where?: ColumnMetadataWhereInput
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    cursor?: ColumnMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Row
   */

  export type AggregateRow = {
    _count: RowCountAggregateOutputType | null
    _avg: RowAvgAggregateOutputType | null
    _sum: RowSumAggregateOutputType | null
    _min: RowMinAggregateOutputType | null
    _max: RowMaxAggregateOutputType | null
  }

  export type RowAvgAggregateOutputType = {
    id: number | null
    fileId: number | null
    rowNumberInFile: number | null
  }

  export type RowSumAggregateOutputType = {
    id: number | null
    fileId: number | null
    rowNumberInFile: number | null
  }

  export type RowMinAggregateOutputType = {
    id: number | null
    fileId: number | null
    rowNumberInFile: number | null
  }

  export type RowMaxAggregateOutputType = {
    id: number | null
    fileId: number | null
    rowNumberInFile: number | null
  }

  export type RowCountAggregateOutputType = {
    id: number
    fileId: number
    rowNumberInFile: number
    _all: number
  }


  export type RowAvgAggregateInputType = {
    id?: true
    fileId?: true
    rowNumberInFile?: true
  }

  export type RowSumAggregateInputType = {
    id?: true
    fileId?: true
    rowNumberInFile?: true
  }

  export type RowMinAggregateInputType = {
    id?: true
    fileId?: true
    rowNumberInFile?: true
  }

  export type RowMaxAggregateInputType = {
    id?: true
    fileId?: true
    rowNumberInFile?: true
  }

  export type RowCountAggregateInputType = {
    id?: true
    fileId?: true
    rowNumberInFile?: true
    _all?: true
  }

  export type RowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Row to aggregate.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rows
    **/
    _count?: true | RowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RowMaxAggregateInputType
  }

  export type GetRowAggregateType<T extends RowAggregateArgs> = {
        [P in keyof T & keyof AggregateRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRow[P]>
      : GetScalarType<T[P], AggregateRow[P]>
  }




  export type RowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RowWhereInput
    orderBy?: RowOrderByWithAggregationInput | RowOrderByWithAggregationInput[]
    by: RowScalarFieldEnum[] | RowScalarFieldEnum
    having?: RowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RowCountAggregateInputType | true
    _avg?: RowAvgAggregateInputType
    _sum?: RowSumAggregateInputType
    _min?: RowMinAggregateInputType
    _max?: RowMaxAggregateInputType
  }

  export type RowGroupByOutputType = {
    id: number
    fileId: number
    rowNumberInFile: number
    _count: RowCountAggregateOutputType | null
    _avg: RowAvgAggregateOutputType | null
    _sum: RowSumAggregateOutputType | null
    _min: RowMinAggregateOutputType | null
    _max: RowMaxAggregateOutputType | null
  }

  type GetRowGroupByPayload<T extends RowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RowGroupByOutputType[P]>
            : GetScalarType<T[P], RowGroupByOutputType[P]>
        }
      >
    >


  export type RowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    rowNumberInFile?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
    dataValues?: boolean | Row$dataValuesArgs<ExtArgs>
    _count?: boolean | RowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    rowNumberInFile?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    rowNumberInFile?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectScalar = {
    id?: boolean
    fileId?: boolean
    rowNumberInFile?: boolean
  }

  export type RowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "rowNumberInFile", ExtArgs["result"]["row"]>
  export type RowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
    dataValues?: boolean | Row$dataValuesArgs<ExtArgs>
    _count?: boolean | RowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type RowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $RowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Row"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
      dataValues: Prisma.$DataValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileId: number
      rowNumberInFile: number
    }, ExtArgs["result"]["row"]>
    composites: {}
  }

  type RowGetPayload<S extends boolean | null | undefined | RowDefaultArgs> = $Result.GetResult<Prisma.$RowPayload, S>

  type RowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RowCountAggregateInputType | true
    }

  export interface RowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Row'], meta: { name: 'Row' } }
    /**
     * Find zero or one Row that matches the filter.
     * @param {RowFindUniqueArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RowFindUniqueArgs>(args: SelectSubset<T, RowFindUniqueArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Row that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RowFindUniqueOrThrowArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RowFindUniqueOrThrowArgs>(args: SelectSubset<T, RowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Row that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindFirstArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RowFindFirstArgs>(args?: SelectSubset<T, RowFindFirstArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Row that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindFirstOrThrowArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RowFindFirstOrThrowArgs>(args?: SelectSubset<T, RowFindFirstOrThrowArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rows
     * const rows = await prisma.row.findMany()
     * 
     * // Get first 10 Rows
     * const rows = await prisma.row.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rowWithIdOnly = await prisma.row.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RowFindManyArgs>(args?: SelectSubset<T, RowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Row.
     * @param {RowCreateArgs} args - Arguments to create a Row.
     * @example
     * // Create one Row
     * const Row = await prisma.row.create({
     *   data: {
     *     // ... data to create a Row
     *   }
     * })
     * 
     */
    create<T extends RowCreateArgs>(args: SelectSubset<T, RowCreateArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rows.
     * @param {RowCreateManyArgs} args - Arguments to create many Rows.
     * @example
     * // Create many Rows
     * const row = await prisma.row.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RowCreateManyArgs>(args?: SelectSubset<T, RowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rows and returns the data saved in the database.
     * @param {RowCreateManyAndReturnArgs} args - Arguments to create many Rows.
     * @example
     * // Create many Rows
     * const row = await prisma.row.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rows and only return the `id`
     * const rowWithIdOnly = await prisma.row.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RowCreateManyAndReturnArgs>(args?: SelectSubset<T, RowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Row.
     * @param {RowDeleteArgs} args - Arguments to delete one Row.
     * @example
     * // Delete one Row
     * const Row = await prisma.row.delete({
     *   where: {
     *     // ... filter to delete one Row
     *   }
     * })
     * 
     */
    delete<T extends RowDeleteArgs>(args: SelectSubset<T, RowDeleteArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Row.
     * @param {RowUpdateArgs} args - Arguments to update one Row.
     * @example
     * // Update one Row
     * const row = await prisma.row.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RowUpdateArgs>(args: SelectSubset<T, RowUpdateArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rows.
     * @param {RowDeleteManyArgs} args - Arguments to filter Rows to delete.
     * @example
     * // Delete a few Rows
     * const { count } = await prisma.row.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RowDeleteManyArgs>(args?: SelectSubset<T, RowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rows
     * const row = await prisma.row.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RowUpdateManyArgs>(args: SelectSubset<T, RowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rows and returns the data updated in the database.
     * @param {RowUpdateManyAndReturnArgs} args - Arguments to update many Rows.
     * @example
     * // Update many Rows
     * const row = await prisma.row.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rows and only return the `id`
     * const rowWithIdOnly = await prisma.row.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RowUpdateManyAndReturnArgs>(args: SelectSubset<T, RowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Row.
     * @param {RowUpsertArgs} args - Arguments to update or create a Row.
     * @example
     * // Update or create a Row
     * const row = await prisma.row.upsert({
     *   create: {
     *     // ... data to create a Row
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Row we want to update
     *   }
     * })
     */
    upsert<T extends RowUpsertArgs>(args: SelectSubset<T, RowUpsertArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowCountArgs} args - Arguments to filter Rows to count.
     * @example
     * // Count the number of Rows
     * const count = await prisma.row.count({
     *   where: {
     *     // ... the filter for the Rows we want to count
     *   }
     * })
    **/
    count<T extends RowCountArgs>(
      args?: Subset<T, RowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RowAggregateArgs>(args: Subset<T, RowAggregateArgs>): Prisma.PrismaPromise<GetRowAggregateType<T>>

    /**
     * Group by Row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RowGroupByArgs['orderBy'] }
        : { orderBy?: RowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Row model
   */
  readonly fields: RowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Row.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataValues<T extends Row$dataValuesArgs<ExtArgs> = {}>(args?: Subset<T, Row$dataValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Row model
   */
  interface RowFieldRefs {
    readonly id: FieldRef<"Row", 'Int'>
    readonly fileId: FieldRef<"Row", 'Int'>
    readonly rowNumberInFile: FieldRef<"Row", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Row findUnique
   */
  export type RowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row findUniqueOrThrow
   */
  export type RowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row findFirst
   */
  export type RowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rows.
     */
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row findFirstOrThrow
   */
  export type RowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rows.
     */
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row findMany
   */
  export type RowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Rows to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row create
   */
  export type RowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The data needed to create a Row.
     */
    data: XOR<RowCreateInput, RowUncheckedCreateInput>
  }

  /**
   * Row createMany
   */
  export type RowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rows.
     */
    data: RowCreateManyInput | RowCreateManyInput[]
  }

  /**
   * Row createManyAndReturn
   */
  export type RowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * The data used to create many Rows.
     */
    data: RowCreateManyInput | RowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Row update
   */
  export type RowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The data needed to update a Row.
     */
    data: XOR<RowUpdateInput, RowUncheckedUpdateInput>
    /**
     * Choose, which Row to update.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row updateMany
   */
  export type RowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rows.
     */
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyInput>
    /**
     * Filter which Rows to update
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to update.
     */
    limit?: number
  }

  /**
   * Row updateManyAndReturn
   */
  export type RowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * The data used to update Rows.
     */
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyInput>
    /**
     * Filter which Rows to update
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Row upsert
   */
  export type RowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The filter to search for the Row to update in case it exists.
     */
    where: RowWhereUniqueInput
    /**
     * In case the Row found by the `where` argument doesn't exist, create a new Row with this data.
     */
    create: XOR<RowCreateInput, RowUncheckedCreateInput>
    /**
     * In case the Row was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RowUpdateInput, RowUncheckedUpdateInput>
  }

  /**
   * Row delete
   */
  export type RowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter which Row to delete.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row deleteMany
   */
  export type RowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rows to delete
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to delete.
     */
    limit?: number
  }

  /**
   * Row.dataValues
   */
  export type Row$dataValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    where?: DataValueWhereInput
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    cursor?: DataValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataValueScalarFieldEnum | DataValueScalarFieldEnum[]
  }

  /**
   * Row without action
   */
  export type RowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
  }


  /**
   * Model ColumnMetadata
   */

  export type AggregateColumnMetadata = {
    _count: ColumnMetadataCountAggregateOutputType | null
    _avg: ColumnMetadataAvgAggregateOutputType | null
    _sum: ColumnMetadataSumAggregateOutputType | null
    _min: ColumnMetadataMinAggregateOutputType | null
    _max: ColumnMetadataMaxAggregateOutputType | null
  }

  export type ColumnMetadataAvgAggregateOutputType = {
    id: number | null
    fileId: number | null
  }

  export type ColumnMetadataSumAggregateOutputType = {
    id: number | null
    fileId: number | null
  }

  export type ColumnMetadataMinAggregateOutputType = {
    id: number | null
    fileId: number | null
    columnName: string | null
    detectedDataType: string | null
  }

  export type ColumnMetadataMaxAggregateOutputType = {
    id: number | null
    fileId: number | null
    columnName: string | null
    detectedDataType: string | null
  }

  export type ColumnMetadataCountAggregateOutputType = {
    id: number
    fileId: number
    columnName: number
    detectedDataType: number
    _all: number
  }


  export type ColumnMetadataAvgAggregateInputType = {
    id?: true
    fileId?: true
  }

  export type ColumnMetadataSumAggregateInputType = {
    id?: true
    fileId?: true
  }

  export type ColumnMetadataMinAggregateInputType = {
    id?: true
    fileId?: true
    columnName?: true
    detectedDataType?: true
  }

  export type ColumnMetadataMaxAggregateInputType = {
    id?: true
    fileId?: true
    columnName?: true
    detectedDataType?: true
  }

  export type ColumnMetadataCountAggregateInputType = {
    id?: true
    fileId?: true
    columnName?: true
    detectedDataType?: true
    _all?: true
  }

  export type ColumnMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMetadata to aggregate.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColumnMetadata
    **/
    _count?: true | ColumnMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMetadataMaxAggregateInputType
  }

  export type GetColumnMetadataAggregateType<T extends ColumnMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateColumnMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumnMetadata[P]>
      : GetScalarType<T[P], AggregateColumnMetadata[P]>
  }




  export type ColumnMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMetadataWhereInput
    orderBy?: ColumnMetadataOrderByWithAggregationInput | ColumnMetadataOrderByWithAggregationInput[]
    by: ColumnMetadataScalarFieldEnum[] | ColumnMetadataScalarFieldEnum
    having?: ColumnMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnMetadataCountAggregateInputType | true
    _avg?: ColumnMetadataAvgAggregateInputType
    _sum?: ColumnMetadataSumAggregateInputType
    _min?: ColumnMetadataMinAggregateInputType
    _max?: ColumnMetadataMaxAggregateInputType
  }

  export type ColumnMetadataGroupByOutputType = {
    id: number
    fileId: number
    columnName: string
    detectedDataType: string
    _count: ColumnMetadataCountAggregateOutputType | null
    _avg: ColumnMetadataAvgAggregateOutputType | null
    _sum: ColumnMetadataSumAggregateOutputType | null
    _min: ColumnMetadataMinAggregateOutputType | null
    _max: ColumnMetadataMaxAggregateOutputType | null
  }

  type GetColumnMetadataGroupByPayload<T extends ColumnMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ColumnMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    columnName?: boolean
    detectedDataType?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
    dataValues?: boolean | ColumnMetadata$dataValuesArgs<ExtArgs>
    _count?: boolean | ColumnMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    columnName?: boolean
    detectedDataType?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    columnName?: boolean
    detectedDataType?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectScalar = {
    id?: boolean
    fileId?: boolean
    columnName?: boolean
    detectedDataType?: boolean
  }

  export type ColumnMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "columnName" | "detectedDataType", ExtArgs["result"]["columnMetadata"]>
  export type ColumnMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
    dataValues?: boolean | ColumnMetadata$dataValuesArgs<ExtArgs>
    _count?: boolean | ColumnMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type ColumnMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $ColumnMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColumnMetadata"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
      dataValues: Prisma.$DataValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileId: number
      columnName: string
      detectedDataType: string
    }, ExtArgs["result"]["columnMetadata"]>
    composites: {}
  }

  type ColumnMetadataGetPayload<S extends boolean | null | undefined | ColumnMetadataDefaultArgs> = $Result.GetResult<Prisma.$ColumnMetadataPayload, S>

  type ColumnMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnMetadataCountAggregateInputType | true
    }

  export interface ColumnMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColumnMetadata'], meta: { name: 'ColumnMetadata' } }
    /**
     * Find zero or one ColumnMetadata that matches the filter.
     * @param {ColumnMetadataFindUniqueArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnMetadataFindUniqueArgs>(args: SelectSubset<T, ColumnMetadataFindUniqueArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColumnMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnMetadataFindUniqueOrThrowArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColumnMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindFirstArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnMetadataFindFirstArgs>(args?: SelectSubset<T, ColumnMetadataFindFirstArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColumnMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindFirstOrThrowArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColumnMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findMany()
     * 
     * // Get first 10 ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnMetadataFindManyArgs>(args?: SelectSubset<T, ColumnMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColumnMetadata.
     * @param {ColumnMetadataCreateArgs} args - Arguments to create a ColumnMetadata.
     * @example
     * // Create one ColumnMetadata
     * const ColumnMetadata = await prisma.columnMetadata.create({
     *   data: {
     *     // ... data to create a ColumnMetadata
     *   }
     * })
     * 
     */
    create<T extends ColumnMetadataCreateArgs>(args: SelectSubset<T, ColumnMetadataCreateArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColumnMetadata.
     * @param {ColumnMetadataCreateManyArgs} args - Arguments to create many ColumnMetadata.
     * @example
     * // Create many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnMetadataCreateManyArgs>(args?: SelectSubset<T, ColumnMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColumnMetadata and returns the data saved in the database.
     * @param {ColumnMetadataCreateManyAndReturnArgs} args - Arguments to create many ColumnMetadata.
     * @example
     * // Create many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColumnMetadata and only return the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColumnMetadata.
     * @param {ColumnMetadataDeleteArgs} args - Arguments to delete one ColumnMetadata.
     * @example
     * // Delete one ColumnMetadata
     * const ColumnMetadata = await prisma.columnMetadata.delete({
     *   where: {
     *     // ... filter to delete one ColumnMetadata
     *   }
     * })
     * 
     */
    delete<T extends ColumnMetadataDeleteArgs>(args: SelectSubset<T, ColumnMetadataDeleteArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColumnMetadata.
     * @param {ColumnMetadataUpdateArgs} args - Arguments to update one ColumnMetadata.
     * @example
     * // Update one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnMetadataUpdateArgs>(args: SelectSubset<T, ColumnMetadataUpdateArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColumnMetadata.
     * @param {ColumnMetadataDeleteManyArgs} args - Arguments to filter ColumnMetadata to delete.
     * @example
     * // Delete a few ColumnMetadata
     * const { count } = await prisma.columnMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnMetadataDeleteManyArgs>(args?: SelectSubset<T, ColumnMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnMetadataUpdateManyArgs>(args: SelectSubset<T, ColumnMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColumnMetadata and returns the data updated in the database.
     * @param {ColumnMetadataUpdateManyAndReturnArgs} args - Arguments to update many ColumnMetadata.
     * @example
     * // Update many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColumnMetadata and only return the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColumnMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColumnMetadata.
     * @param {ColumnMetadataUpsertArgs} args - Arguments to update or create a ColumnMetadata.
     * @example
     * // Update or create a ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.upsert({
     *   create: {
     *     // ... data to create a ColumnMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColumnMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ColumnMetadataUpsertArgs>(args: SelectSubset<T, ColumnMetadataUpsertArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataCountArgs} args - Arguments to filter ColumnMetadata to count.
     * @example
     * // Count the number of ColumnMetadata
     * const count = await prisma.columnMetadata.count({
     *   where: {
     *     // ... the filter for the ColumnMetadata we want to count
     *   }
     * })
    **/
    count<T extends ColumnMetadataCountArgs>(
      args?: Subset<T, ColumnMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColumnMetadataAggregateArgs>(args: Subset<T, ColumnMetadataAggregateArgs>): Prisma.PrismaPromise<GetColumnMetadataAggregateType<T>>

    /**
     * Group by ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColumnMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ColumnMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColumnMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColumnMetadata model
   */
  readonly fields: ColumnMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColumnMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataValues<T extends ColumnMetadata$dataValuesArgs<ExtArgs> = {}>(args?: Subset<T, ColumnMetadata$dataValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ColumnMetadata model
   */
  interface ColumnMetadataFieldRefs {
    readonly id: FieldRef<"ColumnMetadata", 'Int'>
    readonly fileId: FieldRef<"ColumnMetadata", 'Int'>
    readonly columnName: FieldRef<"ColumnMetadata", 'String'>
    readonly detectedDataType: FieldRef<"ColumnMetadata", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ColumnMetadata findUnique
   */
  export type ColumnMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata findUniqueOrThrow
   */
  export type ColumnMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata findFirst
   */
  export type ColumnMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMetadata.
     */
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata findFirstOrThrow
   */
  export type ColumnMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMetadata.
     */
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata findMany
   */
  export type ColumnMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata create
   */
  export type ColumnMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a ColumnMetadata.
     */
    data: XOR<ColumnMetadataCreateInput, ColumnMetadataUncheckedCreateInput>
  }

  /**
   * ColumnMetadata createMany
   */
  export type ColumnMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColumnMetadata.
     */
    data: ColumnMetadataCreateManyInput | ColumnMetadataCreateManyInput[]
  }

  /**
   * ColumnMetadata createManyAndReturn
   */
  export type ColumnMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many ColumnMetadata.
     */
    data: ColumnMetadataCreateManyInput | ColumnMetadataCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColumnMetadata update
   */
  export type ColumnMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateInput, ColumnMetadataUncheckedUpdateInput>
    /**
     * Choose, which ColumnMetadata to update.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata updateMany
   */
  export type ColumnMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ColumnMetadata to update
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to update.
     */
    limit?: number
  }

  /**
   * ColumnMetadata updateManyAndReturn
   */
  export type ColumnMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * The data used to update ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ColumnMetadata to update
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColumnMetadata upsert
   */
  export type ColumnMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the ColumnMetadata to update in case it exists.
     */
    where: ColumnMetadataWhereUniqueInput
    /**
     * In case the ColumnMetadata found by the `where` argument doesn't exist, create a new ColumnMetadata with this data.
     */
    create: XOR<ColumnMetadataCreateInput, ColumnMetadataUncheckedCreateInput>
    /**
     * In case the ColumnMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnMetadataUpdateInput, ColumnMetadataUncheckedUpdateInput>
  }

  /**
   * ColumnMetadata delete
   */
  export type ColumnMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter which ColumnMetadata to delete.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata deleteMany
   */
  export type ColumnMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMetadata to delete
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to delete.
     */
    limit?: number
  }

  /**
   * ColumnMetadata.dataValues
   */
  export type ColumnMetadata$dataValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    where?: DataValueWhereInput
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    cursor?: DataValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataValueScalarFieldEnum | DataValueScalarFieldEnum[]
  }

  /**
   * ColumnMetadata without action
   */
  export type ColumnMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
  }


  /**
   * Model DataValue
   */

  export type AggregateDataValue = {
    _count: DataValueCountAggregateOutputType | null
    _avg: DataValueAvgAggregateOutputType | null
    _sum: DataValueSumAggregateOutputType | null
    _min: DataValueMinAggregateOutputType | null
    _max: DataValueMaxAggregateOutputType | null
  }

  export type DataValueAvgAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
    valueInteger: number | null
    valueReal: number | null
  }

  export type DataValueSumAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
    valueInteger: number | null
    valueReal: number | null
  }

  export type DataValueMinAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
    valueText: string | null
    valueInteger: number | null
    valueReal: number | null
    valueDatetime: string | null
    valueBoolean: boolean | null
  }

  export type DataValueMaxAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
    valueText: string | null
    valueInteger: number | null
    valueReal: number | null
    valueDatetime: string | null
    valueBoolean: boolean | null
  }

  export type DataValueCountAggregateOutputType = {
    id: number
    rowId: number
    columnId: number
    valueText: number
    valueInteger: number
    valueReal: number
    valueDatetime: number
    valueBoolean: number
    _all: number
  }


  export type DataValueAvgAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
    valueInteger?: true
    valueReal?: true
  }

  export type DataValueSumAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
    valueInteger?: true
    valueReal?: true
  }

  export type DataValueMinAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
    valueText?: true
    valueInteger?: true
    valueReal?: true
    valueDatetime?: true
    valueBoolean?: true
  }

  export type DataValueMaxAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
    valueText?: true
    valueInteger?: true
    valueReal?: true
    valueDatetime?: true
    valueBoolean?: true
  }

  export type DataValueCountAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
    valueText?: true
    valueInteger?: true
    valueReal?: true
    valueDatetime?: true
    valueBoolean?: true
    _all?: true
  }

  export type DataValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataValue to aggregate.
     */
    where?: DataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataValues to fetch.
     */
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataValues
    **/
    _count?: true | DataValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataValueMaxAggregateInputType
  }

  export type GetDataValueAggregateType<T extends DataValueAggregateArgs> = {
        [P in keyof T & keyof AggregateDataValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataValue[P]>
      : GetScalarType<T[P], AggregateDataValue[P]>
  }




  export type DataValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataValueWhereInput
    orderBy?: DataValueOrderByWithAggregationInput | DataValueOrderByWithAggregationInput[]
    by: DataValueScalarFieldEnum[] | DataValueScalarFieldEnum
    having?: DataValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataValueCountAggregateInputType | true
    _avg?: DataValueAvgAggregateInputType
    _sum?: DataValueSumAggregateInputType
    _min?: DataValueMinAggregateInputType
    _max?: DataValueMaxAggregateInputType
  }

  export type DataValueGroupByOutputType = {
    id: number
    rowId: number
    columnId: number
    valueText: string | null
    valueInteger: number | null
    valueReal: number | null
    valueDatetime: string | null
    valueBoolean: boolean | null
    _count: DataValueCountAggregateOutputType | null
    _avg: DataValueAvgAggregateOutputType | null
    _sum: DataValueSumAggregateOutputType | null
    _min: DataValueMinAggregateOutputType | null
    _max: DataValueMaxAggregateOutputType | null
  }

  type GetDataValueGroupByPayload<T extends DataValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataValueGroupByOutputType[P]>
            : GetScalarType<T[P], DataValueGroupByOutputType[P]>
        }
      >
    >


  export type DataValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rowId?: boolean
    columnId?: boolean
    valueText?: boolean
    valueInteger?: boolean
    valueReal?: boolean
    valueDatetime?: boolean
    valueBoolean?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataValue"]>

  export type DataValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rowId?: boolean
    columnId?: boolean
    valueText?: boolean
    valueInteger?: boolean
    valueReal?: boolean
    valueDatetime?: boolean
    valueBoolean?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataValue"]>

  export type DataValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rowId?: boolean
    columnId?: boolean
    valueText?: boolean
    valueInteger?: boolean
    valueReal?: boolean
    valueDatetime?: boolean
    valueBoolean?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataValue"]>

  export type DataValueSelectScalar = {
    id?: boolean
    rowId?: boolean
    columnId?: boolean
    valueText?: boolean
    valueInteger?: boolean
    valueReal?: boolean
    valueDatetime?: boolean
    valueBoolean?: boolean
  }

  export type DataValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rowId" | "columnId" | "valueText" | "valueInteger" | "valueReal" | "valueDatetime" | "valueBoolean", ExtArgs["result"]["dataValue"]>
  export type DataValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }
  export type DataValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }
  export type DataValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnMetadataDefaultArgs<ExtArgs>
  }

  export type $DataValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataValue"
    objects: {
      row: Prisma.$RowPayload<ExtArgs>
      column: Prisma.$ColumnMetadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rowId: number
      columnId: number
      valueText: string | null
      valueInteger: number | null
      valueReal: number | null
      valueDatetime: string | null
      valueBoolean: boolean | null
    }, ExtArgs["result"]["dataValue"]>
    composites: {}
  }

  type DataValueGetPayload<S extends boolean | null | undefined | DataValueDefaultArgs> = $Result.GetResult<Prisma.$DataValuePayload, S>

  type DataValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataValueCountAggregateInputType | true
    }

  export interface DataValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataValue'], meta: { name: 'DataValue' } }
    /**
     * Find zero or one DataValue that matches the filter.
     * @param {DataValueFindUniqueArgs} args - Arguments to find a DataValue
     * @example
     * // Get one DataValue
     * const dataValue = await prisma.dataValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataValueFindUniqueArgs>(args: SelectSubset<T, DataValueFindUniqueArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataValueFindUniqueOrThrowArgs} args - Arguments to find a DataValue
     * @example
     * // Get one DataValue
     * const dataValue = await prisma.dataValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataValueFindUniqueOrThrowArgs>(args: SelectSubset<T, DataValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueFindFirstArgs} args - Arguments to find a DataValue
     * @example
     * // Get one DataValue
     * const dataValue = await prisma.dataValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataValueFindFirstArgs>(args?: SelectSubset<T, DataValueFindFirstArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueFindFirstOrThrowArgs} args - Arguments to find a DataValue
     * @example
     * // Get one DataValue
     * const dataValue = await prisma.dataValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataValueFindFirstOrThrowArgs>(args?: SelectSubset<T, DataValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataValues
     * const dataValues = await prisma.dataValue.findMany()
     * 
     * // Get first 10 DataValues
     * const dataValues = await prisma.dataValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataValueWithIdOnly = await prisma.dataValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataValueFindManyArgs>(args?: SelectSubset<T, DataValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataValue.
     * @param {DataValueCreateArgs} args - Arguments to create a DataValue.
     * @example
     * // Create one DataValue
     * const DataValue = await prisma.dataValue.create({
     *   data: {
     *     // ... data to create a DataValue
     *   }
     * })
     * 
     */
    create<T extends DataValueCreateArgs>(args: SelectSubset<T, DataValueCreateArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataValues.
     * @param {DataValueCreateManyArgs} args - Arguments to create many DataValues.
     * @example
     * // Create many DataValues
     * const dataValue = await prisma.dataValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataValueCreateManyArgs>(args?: SelectSubset<T, DataValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataValues and returns the data saved in the database.
     * @param {DataValueCreateManyAndReturnArgs} args - Arguments to create many DataValues.
     * @example
     * // Create many DataValues
     * const dataValue = await prisma.dataValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataValues and only return the `id`
     * const dataValueWithIdOnly = await prisma.dataValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataValueCreateManyAndReturnArgs>(args?: SelectSubset<T, DataValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataValue.
     * @param {DataValueDeleteArgs} args - Arguments to delete one DataValue.
     * @example
     * // Delete one DataValue
     * const DataValue = await prisma.dataValue.delete({
     *   where: {
     *     // ... filter to delete one DataValue
     *   }
     * })
     * 
     */
    delete<T extends DataValueDeleteArgs>(args: SelectSubset<T, DataValueDeleteArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataValue.
     * @param {DataValueUpdateArgs} args - Arguments to update one DataValue.
     * @example
     * // Update one DataValue
     * const dataValue = await prisma.dataValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataValueUpdateArgs>(args: SelectSubset<T, DataValueUpdateArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataValues.
     * @param {DataValueDeleteManyArgs} args - Arguments to filter DataValues to delete.
     * @example
     * // Delete a few DataValues
     * const { count } = await prisma.dataValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataValueDeleteManyArgs>(args?: SelectSubset<T, DataValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataValues
     * const dataValue = await prisma.dataValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataValueUpdateManyArgs>(args: SelectSubset<T, DataValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataValues and returns the data updated in the database.
     * @param {DataValueUpdateManyAndReturnArgs} args - Arguments to update many DataValues.
     * @example
     * // Update many DataValues
     * const dataValue = await prisma.dataValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataValues and only return the `id`
     * const dataValueWithIdOnly = await prisma.dataValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataValueUpdateManyAndReturnArgs>(args: SelectSubset<T, DataValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataValue.
     * @param {DataValueUpsertArgs} args - Arguments to update or create a DataValue.
     * @example
     * // Update or create a DataValue
     * const dataValue = await prisma.dataValue.upsert({
     *   create: {
     *     // ... data to create a DataValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataValue we want to update
     *   }
     * })
     */
    upsert<T extends DataValueUpsertArgs>(args: SelectSubset<T, DataValueUpsertArgs<ExtArgs>>): Prisma__DataValueClient<$Result.GetResult<Prisma.$DataValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueCountArgs} args - Arguments to filter DataValues to count.
     * @example
     * // Count the number of DataValues
     * const count = await prisma.dataValue.count({
     *   where: {
     *     // ... the filter for the DataValues we want to count
     *   }
     * })
    **/
    count<T extends DataValueCountArgs>(
      args?: Subset<T, DataValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataValueAggregateArgs>(args: Subset<T, DataValueAggregateArgs>): Prisma.PrismaPromise<GetDataValueAggregateType<T>>

    /**
     * Group by DataValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataValueGroupByArgs['orderBy'] }
        : { orderBy?: DataValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataValue model
   */
  readonly fields: DataValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    row<T extends RowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RowDefaultArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnMetadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnMetadataDefaultArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataValue model
   */
  interface DataValueFieldRefs {
    readonly id: FieldRef<"DataValue", 'Int'>
    readonly rowId: FieldRef<"DataValue", 'Int'>
    readonly columnId: FieldRef<"DataValue", 'Int'>
    readonly valueText: FieldRef<"DataValue", 'String'>
    readonly valueInteger: FieldRef<"DataValue", 'Int'>
    readonly valueReal: FieldRef<"DataValue", 'Float'>
    readonly valueDatetime: FieldRef<"DataValue", 'String'>
    readonly valueBoolean: FieldRef<"DataValue", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DataValue findUnique
   */
  export type DataValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter, which DataValue to fetch.
     */
    where: DataValueWhereUniqueInput
  }

  /**
   * DataValue findUniqueOrThrow
   */
  export type DataValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter, which DataValue to fetch.
     */
    where: DataValueWhereUniqueInput
  }

  /**
   * DataValue findFirst
   */
  export type DataValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter, which DataValue to fetch.
     */
    where?: DataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataValues to fetch.
     */
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataValues.
     */
    cursor?: DataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataValues.
     */
    distinct?: DataValueScalarFieldEnum | DataValueScalarFieldEnum[]
  }

  /**
   * DataValue findFirstOrThrow
   */
  export type DataValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter, which DataValue to fetch.
     */
    where?: DataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataValues to fetch.
     */
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataValues.
     */
    cursor?: DataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataValues.
     */
    distinct?: DataValueScalarFieldEnum | DataValueScalarFieldEnum[]
  }

  /**
   * DataValue findMany
   */
  export type DataValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter, which DataValues to fetch.
     */
    where?: DataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataValues to fetch.
     */
    orderBy?: DataValueOrderByWithRelationInput | DataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataValues.
     */
    cursor?: DataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataValues.
     */
    skip?: number
    distinct?: DataValueScalarFieldEnum | DataValueScalarFieldEnum[]
  }

  /**
   * DataValue create
   */
  export type DataValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * The data needed to create a DataValue.
     */
    data: XOR<DataValueCreateInput, DataValueUncheckedCreateInput>
  }

  /**
   * DataValue createMany
   */
  export type DataValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataValues.
     */
    data: DataValueCreateManyInput | DataValueCreateManyInput[]
  }

  /**
   * DataValue createManyAndReturn
   */
  export type DataValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * The data used to create many DataValues.
     */
    data: DataValueCreateManyInput | DataValueCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataValue update
   */
  export type DataValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * The data needed to update a DataValue.
     */
    data: XOR<DataValueUpdateInput, DataValueUncheckedUpdateInput>
    /**
     * Choose, which DataValue to update.
     */
    where: DataValueWhereUniqueInput
  }

  /**
   * DataValue updateMany
   */
  export type DataValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataValues.
     */
    data: XOR<DataValueUpdateManyMutationInput, DataValueUncheckedUpdateManyInput>
    /**
     * Filter which DataValues to update
     */
    where?: DataValueWhereInput
    /**
     * Limit how many DataValues to update.
     */
    limit?: number
  }

  /**
   * DataValue updateManyAndReturn
   */
  export type DataValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * The data used to update DataValues.
     */
    data: XOR<DataValueUpdateManyMutationInput, DataValueUncheckedUpdateManyInput>
    /**
     * Filter which DataValues to update
     */
    where?: DataValueWhereInput
    /**
     * Limit how many DataValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataValue upsert
   */
  export type DataValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * The filter to search for the DataValue to update in case it exists.
     */
    where: DataValueWhereUniqueInput
    /**
     * In case the DataValue found by the `where` argument doesn't exist, create a new DataValue with this data.
     */
    create: XOR<DataValueCreateInput, DataValueUncheckedCreateInput>
    /**
     * In case the DataValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataValueUpdateInput, DataValueUncheckedUpdateInput>
  }

  /**
   * DataValue delete
   */
  export type DataValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
    /**
     * Filter which DataValue to delete.
     */
    where: DataValueWhereUniqueInput
  }

  /**
   * DataValue deleteMany
   */
  export type DataValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataValues to delete
     */
    where?: DataValueWhereInput
    /**
     * Limit how many DataValues to delete.
     */
    limit?: number
  }

  /**
   * DataValue without action
   */
  export type DataValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataValue
     */
    select?: DataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataValue
     */
    omit?: DataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataValueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    uploadTimestamp: 'uploadTimestamp'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    originalFilename: 'originalFilename',
    uploadTimestamp: 'uploadTimestamp'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const RowScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    rowNumberInFile: 'rowNumberInFile'
  };

  export type RowScalarFieldEnum = (typeof RowScalarFieldEnum)[keyof typeof RowScalarFieldEnum]


  export const ColumnMetadataScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    columnName: 'columnName',
    detectedDataType: 'detectedDataType'
  };

  export type ColumnMetadataScalarFieldEnum = (typeof ColumnMetadataScalarFieldEnum)[keyof typeof ColumnMetadataScalarFieldEnum]


  export const DataValueScalarFieldEnum: {
    id: 'id',
    rowId: 'rowId',
    columnId: 'columnId',
    valueText: 'valueText',
    valueInteger: 'valueInteger',
    valueReal: 'valueReal',
    valueDatetime: 'valueDatetime',
    valueBoolean: 'valueBoolean'
  };

  export type DataValueScalarFieldEnum = (typeof DataValueScalarFieldEnum)[keyof typeof DataValueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    name?: StringFilter<"Session"> | string
    uploadTimestamp?: DateTimeFilter<"Session"> | Date | string
    files?: FileListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    uploadTimestamp?: SortOrder
    files?: FileOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    uploadTimestamp?: DateTimeFilter<"Session"> | Date | string
    files?: FileListRelationFilter
  }, "id" | "name">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    uploadTimestamp?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    name?: StringWithAggregatesFilter<"Session"> | string
    uploadTimestamp?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    sessionId?: IntFilter<"File"> | number
    originalFilename?: StringFilter<"File"> | string
    uploadTimestamp?: DateTimeFilter<"File"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    rows?: RowListRelationFilter
    columns?: ColumnMetadataListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    originalFilename?: SortOrder
    uploadTimestamp?: SortOrder
    session?: SessionOrderByWithRelationInput
    rows?: RowOrderByRelationAggregateInput
    columns?: ColumnMetadataOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    sessionId?: IntFilter<"File"> | number
    originalFilename?: StringFilter<"File"> | string
    uploadTimestamp?: DateTimeFilter<"File"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    rows?: RowListRelationFilter
    columns?: ColumnMetadataListRelationFilter
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    originalFilename?: SortOrder
    uploadTimestamp?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    sessionId?: IntWithAggregatesFilter<"File"> | number
    originalFilename?: StringWithAggregatesFilter<"File"> | string
    uploadTimestamp?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type RowWhereInput = {
    AND?: RowWhereInput | RowWhereInput[]
    OR?: RowWhereInput[]
    NOT?: RowWhereInput | RowWhereInput[]
    id?: IntFilter<"Row"> | number
    fileId?: IntFilter<"Row"> | number
    rowNumberInFile?: IntFilter<"Row"> | number
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    dataValues?: DataValueListRelationFilter
  }

  export type RowOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
    file?: FileOrderByWithRelationInput
    dataValues?: DataValueOrderByRelationAggregateInput
  }

  export type RowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fileId_rowNumberInFile?: RowFileIdRowNumberInFileCompoundUniqueInput
    AND?: RowWhereInput | RowWhereInput[]
    OR?: RowWhereInput[]
    NOT?: RowWhereInput | RowWhereInput[]
    fileId?: IntFilter<"Row"> | number
    rowNumberInFile?: IntFilter<"Row"> | number
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    dataValues?: DataValueListRelationFilter
  }, "id" | "fileId_rowNumberInFile">

  export type RowOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
    _count?: RowCountOrderByAggregateInput
    _avg?: RowAvgOrderByAggregateInput
    _max?: RowMaxOrderByAggregateInput
    _min?: RowMinOrderByAggregateInput
    _sum?: RowSumOrderByAggregateInput
  }

  export type RowScalarWhereWithAggregatesInput = {
    AND?: RowScalarWhereWithAggregatesInput | RowScalarWhereWithAggregatesInput[]
    OR?: RowScalarWhereWithAggregatesInput[]
    NOT?: RowScalarWhereWithAggregatesInput | RowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Row"> | number
    fileId?: IntWithAggregatesFilter<"Row"> | number
    rowNumberInFile?: IntWithAggregatesFilter<"Row"> | number
  }

  export type ColumnMetadataWhereInput = {
    AND?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    OR?: ColumnMetadataWhereInput[]
    NOT?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    id?: IntFilter<"ColumnMetadata"> | number
    fileId?: IntFilter<"ColumnMetadata"> | number
    columnName?: StringFilter<"ColumnMetadata"> | string
    detectedDataType?: StringFilter<"ColumnMetadata"> | string
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    dataValues?: DataValueListRelationFilter
  }

  export type ColumnMetadataOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    columnName?: SortOrder
    detectedDataType?: SortOrder
    file?: FileOrderByWithRelationInput
    dataValues?: DataValueOrderByRelationAggregateInput
  }

  export type ColumnMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fileId_columnName?: ColumnMetadataFileIdColumnNameCompoundUniqueInput
    AND?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    OR?: ColumnMetadataWhereInput[]
    NOT?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    fileId?: IntFilter<"ColumnMetadata"> | number
    columnName?: StringFilter<"ColumnMetadata"> | string
    detectedDataType?: StringFilter<"ColumnMetadata"> | string
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
    dataValues?: DataValueListRelationFilter
  }, "id" | "fileId_columnName">

  export type ColumnMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    columnName?: SortOrder
    detectedDataType?: SortOrder
    _count?: ColumnMetadataCountOrderByAggregateInput
    _avg?: ColumnMetadataAvgOrderByAggregateInput
    _max?: ColumnMetadataMaxOrderByAggregateInput
    _min?: ColumnMetadataMinOrderByAggregateInput
    _sum?: ColumnMetadataSumOrderByAggregateInput
  }

  export type ColumnMetadataScalarWhereWithAggregatesInput = {
    AND?: ColumnMetadataScalarWhereWithAggregatesInput | ColumnMetadataScalarWhereWithAggregatesInput[]
    OR?: ColumnMetadataScalarWhereWithAggregatesInput[]
    NOT?: ColumnMetadataScalarWhereWithAggregatesInput | ColumnMetadataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColumnMetadata"> | number
    fileId?: IntWithAggregatesFilter<"ColumnMetadata"> | number
    columnName?: StringWithAggregatesFilter<"ColumnMetadata"> | string
    detectedDataType?: StringWithAggregatesFilter<"ColumnMetadata"> | string
  }

  export type DataValueWhereInput = {
    AND?: DataValueWhereInput | DataValueWhereInput[]
    OR?: DataValueWhereInput[]
    NOT?: DataValueWhereInput | DataValueWhereInput[]
    id?: IntFilter<"DataValue"> | number
    rowId?: IntFilter<"DataValue"> | number
    columnId?: IntFilter<"DataValue"> | number
    valueText?: StringNullableFilter<"DataValue"> | string | null
    valueInteger?: IntNullableFilter<"DataValue"> | number | null
    valueReal?: FloatNullableFilter<"DataValue"> | number | null
    valueDatetime?: StringNullableFilter<"DataValue"> | string | null
    valueBoolean?: BoolNullableFilter<"DataValue"> | boolean | null
    row?: XOR<RowScalarRelationFilter, RowWhereInput>
    column?: XOR<ColumnMetadataScalarRelationFilter, ColumnMetadataWhereInput>
  }

  export type DataValueOrderByWithRelationInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueInteger?: SortOrderInput | SortOrder
    valueReal?: SortOrderInput | SortOrder
    valueDatetime?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    row?: RowOrderByWithRelationInput
    column?: ColumnMetadataOrderByWithRelationInput
  }

  export type DataValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rowId_columnId?: DataValueRowIdColumnIdCompoundUniqueInput
    AND?: DataValueWhereInput | DataValueWhereInput[]
    OR?: DataValueWhereInput[]
    NOT?: DataValueWhereInput | DataValueWhereInput[]
    rowId?: IntFilter<"DataValue"> | number
    columnId?: IntFilter<"DataValue"> | number
    valueText?: StringNullableFilter<"DataValue"> | string | null
    valueInteger?: IntNullableFilter<"DataValue"> | number | null
    valueReal?: FloatNullableFilter<"DataValue"> | number | null
    valueDatetime?: StringNullableFilter<"DataValue"> | string | null
    valueBoolean?: BoolNullableFilter<"DataValue"> | boolean | null
    row?: XOR<RowScalarRelationFilter, RowWhereInput>
    column?: XOR<ColumnMetadataScalarRelationFilter, ColumnMetadataWhereInput>
  }, "id" | "rowId_columnId">

  export type DataValueOrderByWithAggregationInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueInteger?: SortOrderInput | SortOrder
    valueReal?: SortOrderInput | SortOrder
    valueDatetime?: SortOrderInput | SortOrder
    valueBoolean?: SortOrderInput | SortOrder
    _count?: DataValueCountOrderByAggregateInput
    _avg?: DataValueAvgOrderByAggregateInput
    _max?: DataValueMaxOrderByAggregateInput
    _min?: DataValueMinOrderByAggregateInput
    _sum?: DataValueSumOrderByAggregateInput
  }

  export type DataValueScalarWhereWithAggregatesInput = {
    AND?: DataValueScalarWhereWithAggregatesInput | DataValueScalarWhereWithAggregatesInput[]
    OR?: DataValueScalarWhereWithAggregatesInput[]
    NOT?: DataValueScalarWhereWithAggregatesInput | DataValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataValue"> | number
    rowId?: IntWithAggregatesFilter<"DataValue"> | number
    columnId?: IntWithAggregatesFilter<"DataValue"> | number
    valueText?: StringNullableWithAggregatesFilter<"DataValue"> | string | null
    valueInteger?: IntNullableWithAggregatesFilter<"DataValue"> | number | null
    valueReal?: FloatNullableWithAggregatesFilter<"DataValue"> | number | null
    valueDatetime?: StringNullableWithAggregatesFilter<"DataValue"> | string | null
    valueBoolean?: BoolNullableWithAggregatesFilter<"DataValue"> | boolean | null
  }

  export type SessionCreateInput = {
    name: string
    uploadTimestamp?: Date | string
    files?: FileCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    name: string
    uploadTimestamp?: Date | string
    files?: FileUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: FileUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: number
    name: string
    uploadTimestamp?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    originalFilename: string
    uploadTimestamp?: Date | string
    session: SessionCreateNestedOneWithoutFilesInput
    rows?: RowCreateNestedManyWithoutFileInput
    columns?: ColumnMetadataCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    sessionId: number
    originalFilename: string
    uploadTimestamp?: Date | string
    rows?: RowUncheckedCreateNestedManyWithoutFileInput
    columns?: ColumnMetadataUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutFilesNestedInput
    rows?: RowUpdateManyWithoutFileNestedInput
    columns?: ColumnMetadataUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: RowUncheckedUpdateManyWithoutFileNestedInput
    columns?: ColumnMetadataUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    sessionId: number
    originalFilename: string
    uploadTimestamp?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RowCreateInput = {
    rowNumberInFile: number
    file: FileCreateNestedOneWithoutRowsInput
    dataValues?: DataValueCreateNestedManyWithoutRowInput
  }

  export type RowUncheckedCreateInput = {
    id?: number
    fileId: number
    rowNumberInFile: number
    dataValues?: DataValueUncheckedCreateNestedManyWithoutRowInput
  }

  export type RowUpdateInput = {
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
    file?: FileUpdateOneRequiredWithoutRowsNestedInput
    dataValues?: DataValueUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
    dataValues?: DataValueUncheckedUpdateManyWithoutRowNestedInput
  }

  export type RowCreateManyInput = {
    id?: number
    fileId: number
    rowNumberInFile: number
  }

  export type RowUpdateManyMutationInput = {
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
  }

  export type RowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnMetadataCreateInput = {
    columnName: string
    detectedDataType: string
    file: FileCreateNestedOneWithoutColumnsInput
    dataValues?: DataValueCreateNestedManyWithoutColumnInput
  }

  export type ColumnMetadataUncheckedCreateInput = {
    id?: number
    fileId: number
    columnName: string
    detectedDataType: string
    dataValues?: DataValueUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnMetadataUpdateInput = {
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
    file?: FileUpdateOneRequiredWithoutColumnsNestedInput
    dataValues?: DataValueUpdateManyWithoutColumnNestedInput
  }

  export type ColumnMetadataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
    dataValues?: DataValueUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnMetadataCreateManyInput = {
    id?: number
    fileId: number
    columnName: string
    detectedDataType: string
  }

  export type ColumnMetadataUpdateManyMutationInput = {
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnMetadataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
  }

  export type DataValueCreateInput = {
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
    row: RowCreateNestedOneWithoutDataValuesInput
    column: ColumnMetadataCreateNestedOneWithoutDataValuesInput
  }

  export type DataValueUncheckedCreateInput = {
    id?: number
    rowId: number
    columnId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueUpdateInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    row?: RowUpdateOneRequiredWithoutDataValuesNestedInput
    column?: ColumnMetadataUpdateOneRequiredWithoutDataValuesNestedInput
  }

  export type DataValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DataValueCreateManyInput = {
    id?: number
    rowId: number
    columnId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueUpdateManyMutationInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DataValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type RowListRelationFilter = {
    every?: RowWhereInput
    some?: RowWhereInput
    none?: RowWhereInput
  }

  export type ColumnMetadataListRelationFilter = {
    every?: ColumnMetadataWhereInput
    some?: ColumnMetadataWhereInput
    none?: ColumnMetadataWhereInput
  }

  export type RowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColumnMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    originalFilename?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    originalFilename?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    originalFilename?: SortOrder
    uploadTimestamp?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type FileScalarRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type DataValueListRelationFilter = {
    every?: DataValueWhereInput
    some?: DataValueWhereInput
    none?: DataValueWhereInput
  }

  export type DataValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RowFileIdRowNumberInFileCompoundUniqueInput = {
    fileId: number
    rowNumberInFile: number
  }

  export type RowCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
  }

  export type RowAvgOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
  }

  export type RowMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
  }

  export type RowMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
  }

  export type RowSumOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    rowNumberInFile?: SortOrder
  }

  export type ColumnMetadataFileIdColumnNameCompoundUniqueInput = {
    fileId: number
    columnName: string
  }

  export type ColumnMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    columnName?: SortOrder
    detectedDataType?: SortOrder
  }

  export type ColumnMetadataAvgOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
  }

  export type ColumnMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    columnName?: SortOrder
    detectedDataType?: SortOrder
  }

  export type ColumnMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    columnName?: SortOrder
    detectedDataType?: SortOrder
  }

  export type ColumnMetadataSumOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RowScalarRelationFilter = {
    is?: RowWhereInput
    isNot?: RowWhereInput
  }

  export type ColumnMetadataScalarRelationFilter = {
    is?: ColumnMetadataWhereInput
    isNot?: ColumnMetadataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DataValueRowIdColumnIdCompoundUniqueInput = {
    rowId: number
    columnId: number
  }

  export type DataValueCountOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueText?: SortOrder
    valueInteger?: SortOrder
    valueReal?: SortOrder
    valueDatetime?: SortOrder
    valueBoolean?: SortOrder
  }

  export type DataValueAvgOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueInteger?: SortOrder
    valueReal?: SortOrder
  }

  export type DataValueMaxOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueText?: SortOrder
    valueInteger?: SortOrder
    valueReal?: SortOrder
    valueDatetime?: SortOrder
    valueBoolean?: SortOrder
  }

  export type DataValueMinOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueText?: SortOrder
    valueInteger?: SortOrder
    valueReal?: SortOrder
    valueDatetime?: SortOrder
    valueBoolean?: SortOrder
  }

  export type DataValueSumOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    valueInteger?: SortOrder
    valueReal?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FileCreateNestedManyWithoutSessionInput = {
    create?: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput> | FileCreateWithoutSessionInput[] | FileUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSessionInput | FileCreateOrConnectWithoutSessionInput[]
    createMany?: FileCreateManySessionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput> | FileCreateWithoutSessionInput[] | FileUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSessionInput | FileCreateOrConnectWithoutSessionInput[]
    createMany?: FileCreateManySessionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FileUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput> | FileCreateWithoutSessionInput[] | FileUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSessionInput | FileCreateOrConnectWithoutSessionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutSessionInput | FileUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FileCreateManySessionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutSessionInput | FileUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutSessionInput | FileUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FileUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput> | FileCreateWithoutSessionInput[] | FileUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSessionInput | FileCreateOrConnectWithoutSessionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutSessionInput | FileUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FileCreateManySessionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutSessionInput | FileUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutSessionInput | FileUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutFilesInput = {
    create?: XOR<SessionCreateWithoutFilesInput, SessionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFilesInput
    connect?: SessionWhereUniqueInput
  }

  export type RowCreateNestedManyWithoutFileInput = {
    create?: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput> | RowCreateWithoutFileInput[] | RowUncheckedCreateWithoutFileInput[]
    connectOrCreate?: RowCreateOrConnectWithoutFileInput | RowCreateOrConnectWithoutFileInput[]
    createMany?: RowCreateManyFileInputEnvelope
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
  }

  export type ColumnMetadataCreateNestedManyWithoutFileInput = {
    create?: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput> | ColumnMetadataCreateWithoutFileInput[] | ColumnMetadataUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutFileInput | ColumnMetadataCreateOrConnectWithoutFileInput[]
    createMany?: ColumnMetadataCreateManyFileInputEnvelope
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
  }

  export type RowUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput> | RowCreateWithoutFileInput[] | RowUncheckedCreateWithoutFileInput[]
    connectOrCreate?: RowCreateOrConnectWithoutFileInput | RowCreateOrConnectWithoutFileInput[]
    createMany?: RowCreateManyFileInputEnvelope
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
  }

  export type ColumnMetadataUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput> | ColumnMetadataCreateWithoutFileInput[] | ColumnMetadataUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutFileInput | ColumnMetadataCreateOrConnectWithoutFileInput[]
    createMany?: ColumnMetadataCreateManyFileInputEnvelope
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<SessionCreateWithoutFilesInput, SessionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFilesInput
    upsert?: SessionUpsertWithoutFilesInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutFilesInput, SessionUpdateWithoutFilesInput>, SessionUncheckedUpdateWithoutFilesInput>
  }

  export type RowUpdateManyWithoutFileNestedInput = {
    create?: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput> | RowCreateWithoutFileInput[] | RowUncheckedCreateWithoutFileInput[]
    connectOrCreate?: RowCreateOrConnectWithoutFileInput | RowCreateOrConnectWithoutFileInput[]
    upsert?: RowUpsertWithWhereUniqueWithoutFileInput | RowUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: RowCreateManyFileInputEnvelope
    set?: RowWhereUniqueInput | RowWhereUniqueInput[]
    disconnect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    delete?: RowWhereUniqueInput | RowWhereUniqueInput[]
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    update?: RowUpdateWithWhereUniqueWithoutFileInput | RowUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: RowUpdateManyWithWhereWithoutFileInput | RowUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: RowScalarWhereInput | RowScalarWhereInput[]
  }

  export type ColumnMetadataUpdateManyWithoutFileNestedInput = {
    create?: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput> | ColumnMetadataCreateWithoutFileInput[] | ColumnMetadataUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutFileInput | ColumnMetadataCreateOrConnectWithoutFileInput[]
    upsert?: ColumnMetadataUpsertWithWhereUniqueWithoutFileInput | ColumnMetadataUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ColumnMetadataCreateManyFileInputEnvelope
    set?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    disconnect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    delete?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    update?: ColumnMetadataUpdateWithWhereUniqueWithoutFileInput | ColumnMetadataUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ColumnMetadataUpdateManyWithWhereWithoutFileInput | ColumnMetadataUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
  }

  export type RowUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput> | RowCreateWithoutFileInput[] | RowUncheckedCreateWithoutFileInput[]
    connectOrCreate?: RowCreateOrConnectWithoutFileInput | RowCreateOrConnectWithoutFileInput[]
    upsert?: RowUpsertWithWhereUniqueWithoutFileInput | RowUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: RowCreateManyFileInputEnvelope
    set?: RowWhereUniqueInput | RowWhereUniqueInput[]
    disconnect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    delete?: RowWhereUniqueInput | RowWhereUniqueInput[]
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    update?: RowUpdateWithWhereUniqueWithoutFileInput | RowUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: RowUpdateManyWithWhereWithoutFileInput | RowUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: RowScalarWhereInput | RowScalarWhereInput[]
  }

  export type ColumnMetadataUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput> | ColumnMetadataCreateWithoutFileInput[] | ColumnMetadataUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutFileInput | ColumnMetadataCreateOrConnectWithoutFileInput[]
    upsert?: ColumnMetadataUpsertWithWhereUniqueWithoutFileInput | ColumnMetadataUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ColumnMetadataCreateManyFileInputEnvelope
    set?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    disconnect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    delete?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    update?: ColumnMetadataUpdateWithWhereUniqueWithoutFileInput | ColumnMetadataUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ColumnMetadataUpdateManyWithWhereWithoutFileInput | ColumnMetadataUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutRowsInput = {
    create?: XOR<FileCreateWithoutRowsInput, FileUncheckedCreateWithoutRowsInput>
    connectOrCreate?: FileCreateOrConnectWithoutRowsInput
    connect?: FileWhereUniqueInput
  }

  export type DataValueCreateNestedManyWithoutRowInput = {
    create?: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput> | DataValueCreateWithoutRowInput[] | DataValueUncheckedCreateWithoutRowInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutRowInput | DataValueCreateOrConnectWithoutRowInput[]
    createMany?: DataValueCreateManyRowInputEnvelope
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
  }

  export type DataValueUncheckedCreateNestedManyWithoutRowInput = {
    create?: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput> | DataValueCreateWithoutRowInput[] | DataValueUncheckedCreateWithoutRowInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutRowInput | DataValueCreateOrConnectWithoutRowInput[]
    createMany?: DataValueCreateManyRowInputEnvelope
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
  }

  export type FileUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<FileCreateWithoutRowsInput, FileUncheckedCreateWithoutRowsInput>
    connectOrCreate?: FileCreateOrConnectWithoutRowsInput
    upsert?: FileUpsertWithoutRowsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutRowsInput, FileUpdateWithoutRowsInput>, FileUncheckedUpdateWithoutRowsInput>
  }

  export type DataValueUpdateManyWithoutRowNestedInput = {
    create?: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput> | DataValueCreateWithoutRowInput[] | DataValueUncheckedCreateWithoutRowInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutRowInput | DataValueCreateOrConnectWithoutRowInput[]
    upsert?: DataValueUpsertWithWhereUniqueWithoutRowInput | DataValueUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: DataValueCreateManyRowInputEnvelope
    set?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    disconnect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    delete?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    update?: DataValueUpdateWithWhereUniqueWithoutRowInput | DataValueUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: DataValueUpdateManyWithWhereWithoutRowInput | DataValueUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
  }

  export type DataValueUncheckedUpdateManyWithoutRowNestedInput = {
    create?: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput> | DataValueCreateWithoutRowInput[] | DataValueUncheckedCreateWithoutRowInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutRowInput | DataValueCreateOrConnectWithoutRowInput[]
    upsert?: DataValueUpsertWithWhereUniqueWithoutRowInput | DataValueUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: DataValueCreateManyRowInputEnvelope
    set?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    disconnect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    delete?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    update?: DataValueUpdateWithWhereUniqueWithoutRowInput | DataValueUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: DataValueUpdateManyWithWhereWithoutRowInput | DataValueUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
  }

  export type FileCreateNestedOneWithoutColumnsInput = {
    create?: XOR<FileCreateWithoutColumnsInput, FileUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: FileCreateOrConnectWithoutColumnsInput
    connect?: FileWhereUniqueInput
  }

  export type DataValueCreateNestedManyWithoutColumnInput = {
    create?: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput> | DataValueCreateWithoutColumnInput[] | DataValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutColumnInput | DataValueCreateOrConnectWithoutColumnInput[]
    createMany?: DataValueCreateManyColumnInputEnvelope
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
  }

  export type DataValueUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput> | DataValueCreateWithoutColumnInput[] | DataValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutColumnInput | DataValueCreateOrConnectWithoutColumnInput[]
    createMany?: DataValueCreateManyColumnInputEnvelope
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
  }

  export type FileUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<FileCreateWithoutColumnsInput, FileUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: FileCreateOrConnectWithoutColumnsInput
    upsert?: FileUpsertWithoutColumnsInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutColumnsInput, FileUpdateWithoutColumnsInput>, FileUncheckedUpdateWithoutColumnsInput>
  }

  export type DataValueUpdateManyWithoutColumnNestedInput = {
    create?: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput> | DataValueCreateWithoutColumnInput[] | DataValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutColumnInput | DataValueCreateOrConnectWithoutColumnInput[]
    upsert?: DataValueUpsertWithWhereUniqueWithoutColumnInput | DataValueUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: DataValueCreateManyColumnInputEnvelope
    set?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    disconnect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    delete?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    update?: DataValueUpdateWithWhereUniqueWithoutColumnInput | DataValueUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: DataValueUpdateManyWithWhereWithoutColumnInput | DataValueUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
  }

  export type DataValueUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput> | DataValueCreateWithoutColumnInput[] | DataValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: DataValueCreateOrConnectWithoutColumnInput | DataValueCreateOrConnectWithoutColumnInput[]
    upsert?: DataValueUpsertWithWhereUniqueWithoutColumnInput | DataValueUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: DataValueCreateManyColumnInputEnvelope
    set?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    disconnect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    delete?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    connect?: DataValueWhereUniqueInput | DataValueWhereUniqueInput[]
    update?: DataValueUpdateWithWhereUniqueWithoutColumnInput | DataValueUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: DataValueUpdateManyWithWhereWithoutColumnInput | DataValueUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
  }

  export type RowCreateNestedOneWithoutDataValuesInput = {
    create?: XOR<RowCreateWithoutDataValuesInput, RowUncheckedCreateWithoutDataValuesInput>
    connectOrCreate?: RowCreateOrConnectWithoutDataValuesInput
    connect?: RowWhereUniqueInput
  }

  export type ColumnMetadataCreateNestedOneWithoutDataValuesInput = {
    create?: XOR<ColumnMetadataCreateWithoutDataValuesInput, ColumnMetadataUncheckedCreateWithoutDataValuesInput>
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDataValuesInput
    connect?: ColumnMetadataWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RowUpdateOneRequiredWithoutDataValuesNestedInput = {
    create?: XOR<RowCreateWithoutDataValuesInput, RowUncheckedCreateWithoutDataValuesInput>
    connectOrCreate?: RowCreateOrConnectWithoutDataValuesInput
    upsert?: RowUpsertWithoutDataValuesInput
    connect?: RowWhereUniqueInput
    update?: XOR<XOR<RowUpdateToOneWithWhereWithoutDataValuesInput, RowUpdateWithoutDataValuesInput>, RowUncheckedUpdateWithoutDataValuesInput>
  }

  export type ColumnMetadataUpdateOneRequiredWithoutDataValuesNestedInput = {
    create?: XOR<ColumnMetadataCreateWithoutDataValuesInput, ColumnMetadataUncheckedCreateWithoutDataValuesInput>
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDataValuesInput
    upsert?: ColumnMetadataUpsertWithoutDataValuesInput
    connect?: ColumnMetadataWhereUniqueInput
    update?: XOR<XOR<ColumnMetadataUpdateToOneWithWhereWithoutDataValuesInput, ColumnMetadataUpdateWithoutDataValuesInput>, ColumnMetadataUncheckedUpdateWithoutDataValuesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FileCreateWithoutSessionInput = {
    originalFilename: string
    uploadTimestamp?: Date | string
    rows?: RowCreateNestedManyWithoutFileInput
    columns?: ColumnMetadataCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutSessionInput = {
    id?: number
    originalFilename: string
    uploadTimestamp?: Date | string
    rows?: RowUncheckedCreateNestedManyWithoutFileInput
    columns?: ColumnMetadataUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutSessionInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput>
  }

  export type FileCreateManySessionInputEnvelope = {
    data: FileCreateManySessionInput | FileCreateManySessionInput[]
  }

  export type FileUpsertWithWhereUniqueWithoutSessionInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutSessionInput, FileUncheckedUpdateWithoutSessionInput>
    create: XOR<FileCreateWithoutSessionInput, FileUncheckedCreateWithoutSessionInput>
  }

  export type FileUpdateWithWhereUniqueWithoutSessionInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutSessionInput, FileUncheckedUpdateWithoutSessionInput>
  }

  export type FileUpdateManyWithWhereWithoutSessionInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutSessionInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    sessionId?: IntFilter<"File"> | number
    originalFilename?: StringFilter<"File"> | string
    uploadTimestamp?: DateTimeFilter<"File"> | Date | string
  }

  export type SessionCreateWithoutFilesInput = {
    name: string
    uploadTimestamp?: Date | string
  }

  export type SessionUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    uploadTimestamp?: Date | string
  }

  export type SessionCreateOrConnectWithoutFilesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutFilesInput, SessionUncheckedCreateWithoutFilesInput>
  }

  export type RowCreateWithoutFileInput = {
    rowNumberInFile: number
    dataValues?: DataValueCreateNestedManyWithoutRowInput
  }

  export type RowUncheckedCreateWithoutFileInput = {
    id?: number
    rowNumberInFile: number
    dataValues?: DataValueUncheckedCreateNestedManyWithoutRowInput
  }

  export type RowCreateOrConnectWithoutFileInput = {
    where: RowWhereUniqueInput
    create: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput>
  }

  export type RowCreateManyFileInputEnvelope = {
    data: RowCreateManyFileInput | RowCreateManyFileInput[]
  }

  export type ColumnMetadataCreateWithoutFileInput = {
    columnName: string
    detectedDataType: string
    dataValues?: DataValueCreateNestedManyWithoutColumnInput
  }

  export type ColumnMetadataUncheckedCreateWithoutFileInput = {
    id?: number
    columnName: string
    detectedDataType: string
    dataValues?: DataValueUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnMetadataCreateOrConnectWithoutFileInput = {
    where: ColumnMetadataWhereUniqueInput
    create: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput>
  }

  export type ColumnMetadataCreateManyFileInputEnvelope = {
    data: ColumnMetadataCreateManyFileInput | ColumnMetadataCreateManyFileInput[]
  }

  export type SessionUpsertWithoutFilesInput = {
    update: XOR<SessionUpdateWithoutFilesInput, SessionUncheckedUpdateWithoutFilesInput>
    create: XOR<SessionCreateWithoutFilesInput, SessionUncheckedCreateWithoutFilesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutFilesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutFilesInput, SessionUncheckedUpdateWithoutFilesInput>
  }

  export type SessionUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RowUpsertWithWhereUniqueWithoutFileInput = {
    where: RowWhereUniqueInput
    update: XOR<RowUpdateWithoutFileInput, RowUncheckedUpdateWithoutFileInput>
    create: XOR<RowCreateWithoutFileInput, RowUncheckedCreateWithoutFileInput>
  }

  export type RowUpdateWithWhereUniqueWithoutFileInput = {
    where: RowWhereUniqueInput
    data: XOR<RowUpdateWithoutFileInput, RowUncheckedUpdateWithoutFileInput>
  }

  export type RowUpdateManyWithWhereWithoutFileInput = {
    where: RowScalarWhereInput
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyWithoutFileInput>
  }

  export type RowScalarWhereInput = {
    AND?: RowScalarWhereInput | RowScalarWhereInput[]
    OR?: RowScalarWhereInput[]
    NOT?: RowScalarWhereInput | RowScalarWhereInput[]
    id?: IntFilter<"Row"> | number
    fileId?: IntFilter<"Row"> | number
    rowNumberInFile?: IntFilter<"Row"> | number
  }

  export type ColumnMetadataUpsertWithWhereUniqueWithoutFileInput = {
    where: ColumnMetadataWhereUniqueInput
    update: XOR<ColumnMetadataUpdateWithoutFileInput, ColumnMetadataUncheckedUpdateWithoutFileInput>
    create: XOR<ColumnMetadataCreateWithoutFileInput, ColumnMetadataUncheckedCreateWithoutFileInput>
  }

  export type ColumnMetadataUpdateWithWhereUniqueWithoutFileInput = {
    where: ColumnMetadataWhereUniqueInput
    data: XOR<ColumnMetadataUpdateWithoutFileInput, ColumnMetadataUncheckedUpdateWithoutFileInput>
  }

  export type ColumnMetadataUpdateManyWithWhereWithoutFileInput = {
    where: ColumnMetadataScalarWhereInput
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyWithoutFileInput>
  }

  export type ColumnMetadataScalarWhereInput = {
    AND?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
    OR?: ColumnMetadataScalarWhereInput[]
    NOT?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
    id?: IntFilter<"ColumnMetadata"> | number
    fileId?: IntFilter<"ColumnMetadata"> | number
    columnName?: StringFilter<"ColumnMetadata"> | string
    detectedDataType?: StringFilter<"ColumnMetadata"> | string
  }

  export type FileCreateWithoutRowsInput = {
    originalFilename: string
    uploadTimestamp?: Date | string
    session: SessionCreateNestedOneWithoutFilesInput
    columns?: ColumnMetadataCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutRowsInput = {
    id?: number
    sessionId: number
    originalFilename: string
    uploadTimestamp?: Date | string
    columns?: ColumnMetadataUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutRowsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutRowsInput, FileUncheckedCreateWithoutRowsInput>
  }

  export type DataValueCreateWithoutRowInput = {
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
    column: ColumnMetadataCreateNestedOneWithoutDataValuesInput
  }

  export type DataValueUncheckedCreateWithoutRowInput = {
    id?: number
    columnId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueCreateOrConnectWithoutRowInput = {
    where: DataValueWhereUniqueInput
    create: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput>
  }

  export type DataValueCreateManyRowInputEnvelope = {
    data: DataValueCreateManyRowInput | DataValueCreateManyRowInput[]
  }

  export type FileUpsertWithoutRowsInput = {
    update: XOR<FileUpdateWithoutRowsInput, FileUncheckedUpdateWithoutRowsInput>
    create: XOR<FileCreateWithoutRowsInput, FileUncheckedCreateWithoutRowsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutRowsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutRowsInput, FileUncheckedUpdateWithoutRowsInput>
  }

  export type FileUpdateWithoutRowsInput = {
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutFilesNestedInput
    columns?: ColumnMetadataUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutRowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnMetadataUncheckedUpdateManyWithoutFileNestedInput
  }

  export type DataValueUpsertWithWhereUniqueWithoutRowInput = {
    where: DataValueWhereUniqueInput
    update: XOR<DataValueUpdateWithoutRowInput, DataValueUncheckedUpdateWithoutRowInput>
    create: XOR<DataValueCreateWithoutRowInput, DataValueUncheckedCreateWithoutRowInput>
  }

  export type DataValueUpdateWithWhereUniqueWithoutRowInput = {
    where: DataValueWhereUniqueInput
    data: XOR<DataValueUpdateWithoutRowInput, DataValueUncheckedUpdateWithoutRowInput>
  }

  export type DataValueUpdateManyWithWhereWithoutRowInput = {
    where: DataValueScalarWhereInput
    data: XOR<DataValueUpdateManyMutationInput, DataValueUncheckedUpdateManyWithoutRowInput>
  }

  export type DataValueScalarWhereInput = {
    AND?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
    OR?: DataValueScalarWhereInput[]
    NOT?: DataValueScalarWhereInput | DataValueScalarWhereInput[]
    id?: IntFilter<"DataValue"> | number
    rowId?: IntFilter<"DataValue"> | number
    columnId?: IntFilter<"DataValue"> | number
    valueText?: StringNullableFilter<"DataValue"> | string | null
    valueInteger?: IntNullableFilter<"DataValue"> | number | null
    valueReal?: FloatNullableFilter<"DataValue"> | number | null
    valueDatetime?: StringNullableFilter<"DataValue"> | string | null
    valueBoolean?: BoolNullableFilter<"DataValue"> | boolean | null
  }

  export type FileCreateWithoutColumnsInput = {
    originalFilename: string
    uploadTimestamp?: Date | string
    session: SessionCreateNestedOneWithoutFilesInput
    rows?: RowCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutColumnsInput = {
    id?: number
    sessionId: number
    originalFilename: string
    uploadTimestamp?: Date | string
    rows?: RowUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutColumnsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutColumnsInput, FileUncheckedCreateWithoutColumnsInput>
  }

  export type DataValueCreateWithoutColumnInput = {
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
    row: RowCreateNestedOneWithoutDataValuesInput
  }

  export type DataValueUncheckedCreateWithoutColumnInput = {
    id?: number
    rowId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueCreateOrConnectWithoutColumnInput = {
    where: DataValueWhereUniqueInput
    create: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput>
  }

  export type DataValueCreateManyColumnInputEnvelope = {
    data: DataValueCreateManyColumnInput | DataValueCreateManyColumnInput[]
  }

  export type FileUpsertWithoutColumnsInput = {
    update: XOR<FileUpdateWithoutColumnsInput, FileUncheckedUpdateWithoutColumnsInput>
    create: XOR<FileCreateWithoutColumnsInput, FileUncheckedCreateWithoutColumnsInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutColumnsInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutColumnsInput, FileUncheckedUpdateWithoutColumnsInput>
  }

  export type FileUpdateWithoutColumnsInput = {
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutFilesNestedInput
    rows?: RowUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutColumnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: RowUncheckedUpdateManyWithoutFileNestedInput
  }

  export type DataValueUpsertWithWhereUniqueWithoutColumnInput = {
    where: DataValueWhereUniqueInput
    update: XOR<DataValueUpdateWithoutColumnInput, DataValueUncheckedUpdateWithoutColumnInput>
    create: XOR<DataValueCreateWithoutColumnInput, DataValueUncheckedCreateWithoutColumnInput>
  }

  export type DataValueUpdateWithWhereUniqueWithoutColumnInput = {
    where: DataValueWhereUniqueInput
    data: XOR<DataValueUpdateWithoutColumnInput, DataValueUncheckedUpdateWithoutColumnInput>
  }

  export type DataValueUpdateManyWithWhereWithoutColumnInput = {
    where: DataValueScalarWhereInput
    data: XOR<DataValueUpdateManyMutationInput, DataValueUncheckedUpdateManyWithoutColumnInput>
  }

  export type RowCreateWithoutDataValuesInput = {
    rowNumberInFile: number
    file: FileCreateNestedOneWithoutRowsInput
  }

  export type RowUncheckedCreateWithoutDataValuesInput = {
    id?: number
    fileId: number
    rowNumberInFile: number
  }

  export type RowCreateOrConnectWithoutDataValuesInput = {
    where: RowWhereUniqueInput
    create: XOR<RowCreateWithoutDataValuesInput, RowUncheckedCreateWithoutDataValuesInput>
  }

  export type ColumnMetadataCreateWithoutDataValuesInput = {
    columnName: string
    detectedDataType: string
    file: FileCreateNestedOneWithoutColumnsInput
  }

  export type ColumnMetadataUncheckedCreateWithoutDataValuesInput = {
    id?: number
    fileId: number
    columnName: string
    detectedDataType: string
  }

  export type ColumnMetadataCreateOrConnectWithoutDataValuesInput = {
    where: ColumnMetadataWhereUniqueInput
    create: XOR<ColumnMetadataCreateWithoutDataValuesInput, ColumnMetadataUncheckedCreateWithoutDataValuesInput>
  }

  export type RowUpsertWithoutDataValuesInput = {
    update: XOR<RowUpdateWithoutDataValuesInput, RowUncheckedUpdateWithoutDataValuesInput>
    create: XOR<RowCreateWithoutDataValuesInput, RowUncheckedCreateWithoutDataValuesInput>
    where?: RowWhereInput
  }

  export type RowUpdateToOneWithWhereWithoutDataValuesInput = {
    where?: RowWhereInput
    data: XOR<RowUpdateWithoutDataValuesInput, RowUncheckedUpdateWithoutDataValuesInput>
  }

  export type RowUpdateWithoutDataValuesInput = {
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
    file?: FileUpdateOneRequiredWithoutRowsNestedInput
  }

  export type RowUncheckedUpdateWithoutDataValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnMetadataUpsertWithoutDataValuesInput = {
    update: XOR<ColumnMetadataUpdateWithoutDataValuesInput, ColumnMetadataUncheckedUpdateWithoutDataValuesInput>
    create: XOR<ColumnMetadataCreateWithoutDataValuesInput, ColumnMetadataUncheckedCreateWithoutDataValuesInput>
    where?: ColumnMetadataWhereInput
  }

  export type ColumnMetadataUpdateToOneWithWhereWithoutDataValuesInput = {
    where?: ColumnMetadataWhereInput
    data: XOR<ColumnMetadataUpdateWithoutDataValuesInput, ColumnMetadataUncheckedUpdateWithoutDataValuesInput>
  }

  export type ColumnMetadataUpdateWithoutDataValuesInput = {
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
    file?: FileUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type ColumnMetadataUncheckedUpdateWithoutDataValuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileId?: IntFieldUpdateOperationsInput | number
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManySessionInput = {
    id?: number
    originalFilename: string
    uploadTimestamp?: Date | string
  }

  export type FileUpdateWithoutSessionInput = {
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: RowUpdateManyWithoutFileNestedInput
    columns?: ColumnMetadataUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rows?: RowUncheckedUpdateManyWithoutFileNestedInput
    columns?: ColumnMetadataUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalFilename?: StringFieldUpdateOperationsInput | string
    uploadTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RowCreateManyFileInput = {
    id?: number
    rowNumberInFile: number
  }

  export type ColumnMetadataCreateManyFileInput = {
    id?: number
    columnName: string
    detectedDataType: string
  }

  export type RowUpdateWithoutFileInput = {
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
    dataValues?: DataValueUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
    dataValues?: DataValueUncheckedUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowNumberInFile?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnMetadataUpdateWithoutFileInput = {
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
    dataValues?: DataValueUpdateManyWithoutColumnNestedInput
  }

  export type ColumnMetadataUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
    dataValues?: DataValueUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnMetadataUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnName?: StringFieldUpdateOperationsInput | string
    detectedDataType?: StringFieldUpdateOperationsInput | string
  }

  export type DataValueCreateManyRowInput = {
    id?: number
    columnId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueUpdateWithoutRowInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    column?: ColumnMetadataUpdateOneRequiredWithoutDataValuesNestedInput
  }

  export type DataValueUncheckedUpdateWithoutRowInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DataValueUncheckedUpdateManyWithoutRowInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DataValueCreateManyColumnInput = {
    id?: number
    rowId: number
    valueText?: string | null
    valueInteger?: number | null
    valueReal?: number | null
    valueDatetime?: string | null
    valueBoolean?: boolean | null
  }

  export type DataValueUpdateWithoutColumnInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
    row?: RowUpdateOneRequiredWithoutDataValuesNestedInput
  }

  export type DataValueUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DataValueUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowId?: IntFieldUpdateOperationsInput | number
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueInteger?: NullableIntFieldUpdateOperationsInput | number | null
    valueReal?: NullableFloatFieldUpdateOperationsInput | number | null
    valueDatetime?: NullableStringFieldUpdateOperationsInput | string | null
    valueBoolean?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}