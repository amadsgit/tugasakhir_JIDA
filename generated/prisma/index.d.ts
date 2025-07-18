
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
 * Model Posyandu
 * 
 */
export type Posyandu = $Result.DefaultSelection<Prisma.$PosyanduPayload>
/**
 * Model Kader
 * 
 */
export type Kader = $Result.DefaultSelection<Prisma.$KaderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Akreditasi: {
  Paripurna: 'Paripurna',
  Pratama: 'Pratama',
  Madya: 'Madya',
  Purnama: 'Purnama',
  Mandiri: 'Mandiri',
  Belum_akreditasi: 'Belum_akreditasi'
};

export type Akreditasi = (typeof Akreditasi)[keyof typeof Akreditasi]

}

export type Akreditasi = $Enums.Akreditasi

export const Akreditasi: typeof $Enums.Akreditasi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posyandus
 * const posyandus = await prisma.posyandu.findMany()
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
   * // Fetch zero or more Posyandus
   * const posyandus = await prisma.posyandu.findMany()
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
   * `prisma.posyandu`: Exposes CRUD operations for the **Posyandu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posyandus
    * const posyandus = await prisma.posyandu.findMany()
    * ```
    */
  get posyandu(): Prisma.PosyanduDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kader`: Exposes CRUD operations for the **Kader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kaders
    * const kaders = await prisma.kader.findMany()
    * ```
    */
  get kader(): Prisma.KaderDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Posyandu: 'Posyandu',
    Kader: 'Kader'
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
      modelProps: "posyandu" | "kader"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Posyandu: {
        payload: Prisma.$PosyanduPayload<ExtArgs>
        fields: Prisma.PosyanduFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PosyanduFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PosyanduFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          findFirst: {
            args: Prisma.PosyanduFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PosyanduFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          findMany: {
            args: Prisma.PosyanduFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>[]
          }
          create: {
            args: Prisma.PosyanduCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          createMany: {
            args: Prisma.PosyanduCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PosyanduCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>[]
          }
          delete: {
            args: Prisma.PosyanduDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          update: {
            args: Prisma.PosyanduUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          deleteMany: {
            args: Prisma.PosyanduDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PosyanduUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PosyanduUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>[]
          }
          upsert: {
            args: Prisma.PosyanduUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PosyanduPayload>
          }
          aggregate: {
            args: Prisma.PosyanduAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosyandu>
          }
          groupBy: {
            args: Prisma.PosyanduGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosyanduGroupByOutputType>[]
          }
          count: {
            args: Prisma.PosyanduCountArgs<ExtArgs>
            result: $Utils.Optional<PosyanduCountAggregateOutputType> | number
          }
        }
      }
      Kader: {
        payload: Prisma.$KaderPayload<ExtArgs>
        fields: Prisma.KaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          findFirst: {
            args: Prisma.KaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          findMany: {
            args: Prisma.KaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>[]
          }
          create: {
            args: Prisma.KaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          createMany: {
            args: Prisma.KaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>[]
          }
          delete: {
            args: Prisma.KaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          update: {
            args: Prisma.KaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          deleteMany: {
            args: Prisma.KaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>[]
          }
          upsert: {
            args: Prisma.KaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KaderPayload>
          }
          aggregate: {
            args: Prisma.KaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKader>
          }
          groupBy: {
            args: Prisma.KaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<KaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.KaderCountArgs<ExtArgs>
            result: $Utils.Optional<KaderCountAggregateOutputType> | number
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
    posyandu?: PosyanduOmit
    kader?: KaderOmit
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
   * Count Type PosyanduCountOutputType
   */

  export type PosyanduCountOutputType = {
    kader: number
  }

  export type PosyanduCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kader?: boolean | PosyanduCountOutputTypeCountKaderArgs
  }

  // Custom InputTypes
  /**
   * PosyanduCountOutputType without action
   */
  export type PosyanduCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PosyanduCountOutputType
     */
    select?: PosyanduCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PosyanduCountOutputType without action
   */
  export type PosyanduCountOutputTypeCountKaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Posyandu
   */

  export type AggregatePosyandu = {
    _count: PosyanduCountAggregateOutputType | null
    _avg: PosyanduAvgAggregateOutputType | null
    _sum: PosyanduSumAggregateOutputType | null
    _min: PosyanduMinAggregateOutputType | null
    _max: PosyanduMaxAggregateOutputType | null
  }

  export type PosyanduAvgAggregateOutputType = {
    id: number | null
  }

  export type PosyanduSumAggregateOutputType = {
    id: number | null
  }

  export type PosyanduMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    wilayah: string | null
    kelurahan: string | null
    penanggungJawab: string | null
    noHp: string | null
    akreditasi: $Enums.Akreditasi | null
    longitude: string | null
    lattitude: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosyanduMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    wilayah: string | null
    kelurahan: string | null
    penanggungJawab: string | null
    noHp: string | null
    akreditasi: $Enums.Akreditasi | null
    longitude: string | null
    lattitude: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosyanduCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    wilayah: number
    kelurahan: number
    penanggungJawab: number
    noHp: number
    akreditasi: number
    longitude: number
    lattitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosyanduAvgAggregateInputType = {
    id?: true
  }

  export type PosyanduSumAggregateInputType = {
    id?: true
  }

  export type PosyanduMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahan?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    lattitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosyanduMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahan?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    lattitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosyanduCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahan?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    lattitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PosyanduAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posyandu to aggregate.
     */
    where?: PosyanduWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posyandus to fetch.
     */
    orderBy?: PosyanduOrderByWithRelationInput | PosyanduOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PosyanduWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posyandus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posyandus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posyandus
    **/
    _count?: true | PosyanduCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PosyanduAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PosyanduSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosyanduMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosyanduMaxAggregateInputType
  }

  export type GetPosyanduAggregateType<T extends PosyanduAggregateArgs> = {
        [P in keyof T & keyof AggregatePosyandu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosyandu[P]>
      : GetScalarType<T[P], AggregatePosyandu[P]>
  }




  export type PosyanduGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosyanduWhereInput
    orderBy?: PosyanduOrderByWithAggregationInput | PosyanduOrderByWithAggregationInput[]
    by: PosyanduScalarFieldEnum[] | PosyanduScalarFieldEnum
    having?: PosyanduScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosyanduCountAggregateInputType | true
    _avg?: PosyanduAvgAggregateInputType
    _sum?: PosyanduSumAggregateInputType
    _min?: PosyanduMinAggregateInputType
    _max?: PosyanduMaxAggregateInputType
  }

  export type PosyanduGroupByOutputType = {
    id: number
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt: Date
    updatedAt: Date
    _count: PosyanduCountAggregateOutputType | null
    _avg: PosyanduAvgAggregateOutputType | null
    _sum: PosyanduSumAggregateOutputType | null
    _min: PosyanduMinAggregateOutputType | null
    _max: PosyanduMaxAggregateOutputType | null
  }

  type GetPosyanduGroupByPayload<T extends PosyanduGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosyanduGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosyanduGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosyanduGroupByOutputType[P]>
            : GetScalarType<T[P], PosyanduGroupByOutputType[P]>
        }
      >
    >


  export type PosyanduSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahan?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    lattitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kader?: boolean | Posyandu$kaderArgs<ExtArgs>
    _count?: boolean | PosyanduCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahan?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    lattitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahan?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    lattitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahan?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    lattitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosyanduOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "wilayah" | "kelurahan" | "penanggungJawab" | "noHp" | "akreditasi" | "longitude" | "lattitude" | "createdAt" | "updatedAt", ExtArgs["result"]["posyandu"]>
  export type PosyanduInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kader?: boolean | Posyandu$kaderArgs<ExtArgs>
    _count?: boolean | PosyanduCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PosyanduIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PosyanduIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PosyanduPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posyandu"
    objects: {
      kader: Prisma.$KaderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alamat: string
      wilayah: string
      kelurahan: string
      penanggungJawab: string
      noHp: string
      akreditasi: $Enums.Akreditasi
      longitude: string
      lattitude: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["posyandu"]>
    composites: {}
  }

  type PosyanduGetPayload<S extends boolean | null | undefined | PosyanduDefaultArgs> = $Result.GetResult<Prisma.$PosyanduPayload, S>

  type PosyanduCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PosyanduFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosyanduCountAggregateInputType | true
    }

  export interface PosyanduDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posyandu'], meta: { name: 'Posyandu' } }
    /**
     * Find zero or one Posyandu that matches the filter.
     * @param {PosyanduFindUniqueArgs} args - Arguments to find a Posyandu
     * @example
     * // Get one Posyandu
     * const posyandu = await prisma.posyandu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PosyanduFindUniqueArgs>(args: SelectSubset<T, PosyanduFindUniqueArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posyandu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PosyanduFindUniqueOrThrowArgs} args - Arguments to find a Posyandu
     * @example
     * // Get one Posyandu
     * const posyandu = await prisma.posyandu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PosyanduFindUniqueOrThrowArgs>(args: SelectSubset<T, PosyanduFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posyandu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduFindFirstArgs} args - Arguments to find a Posyandu
     * @example
     * // Get one Posyandu
     * const posyandu = await prisma.posyandu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PosyanduFindFirstArgs>(args?: SelectSubset<T, PosyanduFindFirstArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posyandu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduFindFirstOrThrowArgs} args - Arguments to find a Posyandu
     * @example
     * // Get one Posyandu
     * const posyandu = await prisma.posyandu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PosyanduFindFirstOrThrowArgs>(args?: SelectSubset<T, PosyanduFindFirstOrThrowArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posyandus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posyandus
     * const posyandus = await prisma.posyandu.findMany()
     * 
     * // Get first 10 Posyandus
     * const posyandus = await prisma.posyandu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posyanduWithIdOnly = await prisma.posyandu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PosyanduFindManyArgs>(args?: SelectSubset<T, PosyanduFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posyandu.
     * @param {PosyanduCreateArgs} args - Arguments to create a Posyandu.
     * @example
     * // Create one Posyandu
     * const Posyandu = await prisma.posyandu.create({
     *   data: {
     *     // ... data to create a Posyandu
     *   }
     * })
     * 
     */
    create<T extends PosyanduCreateArgs>(args: SelectSubset<T, PosyanduCreateArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posyandus.
     * @param {PosyanduCreateManyArgs} args - Arguments to create many Posyandus.
     * @example
     * // Create many Posyandus
     * const posyandu = await prisma.posyandu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PosyanduCreateManyArgs>(args?: SelectSubset<T, PosyanduCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posyandus and returns the data saved in the database.
     * @param {PosyanduCreateManyAndReturnArgs} args - Arguments to create many Posyandus.
     * @example
     * // Create many Posyandus
     * const posyandu = await prisma.posyandu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posyandus and only return the `id`
     * const posyanduWithIdOnly = await prisma.posyandu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PosyanduCreateManyAndReturnArgs>(args?: SelectSubset<T, PosyanduCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posyandu.
     * @param {PosyanduDeleteArgs} args - Arguments to delete one Posyandu.
     * @example
     * // Delete one Posyandu
     * const Posyandu = await prisma.posyandu.delete({
     *   where: {
     *     // ... filter to delete one Posyandu
     *   }
     * })
     * 
     */
    delete<T extends PosyanduDeleteArgs>(args: SelectSubset<T, PosyanduDeleteArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posyandu.
     * @param {PosyanduUpdateArgs} args - Arguments to update one Posyandu.
     * @example
     * // Update one Posyandu
     * const posyandu = await prisma.posyandu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PosyanduUpdateArgs>(args: SelectSubset<T, PosyanduUpdateArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posyandus.
     * @param {PosyanduDeleteManyArgs} args - Arguments to filter Posyandus to delete.
     * @example
     * // Delete a few Posyandus
     * const { count } = await prisma.posyandu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PosyanduDeleteManyArgs>(args?: SelectSubset<T, PosyanduDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posyandus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posyandus
     * const posyandu = await prisma.posyandu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PosyanduUpdateManyArgs>(args: SelectSubset<T, PosyanduUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posyandus and returns the data updated in the database.
     * @param {PosyanduUpdateManyAndReturnArgs} args - Arguments to update many Posyandus.
     * @example
     * // Update many Posyandus
     * const posyandu = await prisma.posyandu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posyandus and only return the `id`
     * const posyanduWithIdOnly = await prisma.posyandu.updateManyAndReturn({
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
    updateManyAndReturn<T extends PosyanduUpdateManyAndReturnArgs>(args: SelectSubset<T, PosyanduUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posyandu.
     * @param {PosyanduUpsertArgs} args - Arguments to update or create a Posyandu.
     * @example
     * // Update or create a Posyandu
     * const posyandu = await prisma.posyandu.upsert({
     *   create: {
     *     // ... data to create a Posyandu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posyandu we want to update
     *   }
     * })
     */
    upsert<T extends PosyanduUpsertArgs>(args: SelectSubset<T, PosyanduUpsertArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posyandus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduCountArgs} args - Arguments to filter Posyandus to count.
     * @example
     * // Count the number of Posyandus
     * const count = await prisma.posyandu.count({
     *   where: {
     *     // ... the filter for the Posyandus we want to count
     *   }
     * })
    **/
    count<T extends PosyanduCountArgs>(
      args?: Subset<T, PosyanduCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosyanduCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posyandu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosyanduAggregateArgs>(args: Subset<T, PosyanduAggregateArgs>): Prisma.PrismaPromise<GetPosyanduAggregateType<T>>

    /**
     * Group by Posyandu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosyanduGroupByArgs} args - Group by arguments.
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
      T extends PosyanduGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PosyanduGroupByArgs['orderBy'] }
        : { orderBy?: PosyanduGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PosyanduGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosyanduGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posyandu model
   */
  readonly fields: PosyanduFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posyandu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PosyanduClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kader<T extends Posyandu$kaderArgs<ExtArgs> = {}>(args?: Subset<T, Posyandu$kaderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posyandu model
   */
  interface PosyanduFieldRefs {
    readonly id: FieldRef<"Posyandu", 'Int'>
    readonly nama: FieldRef<"Posyandu", 'String'>
    readonly alamat: FieldRef<"Posyandu", 'String'>
    readonly wilayah: FieldRef<"Posyandu", 'String'>
    readonly kelurahan: FieldRef<"Posyandu", 'String'>
    readonly penanggungJawab: FieldRef<"Posyandu", 'String'>
    readonly noHp: FieldRef<"Posyandu", 'String'>
    readonly akreditasi: FieldRef<"Posyandu", 'Akreditasi'>
    readonly longitude: FieldRef<"Posyandu", 'String'>
    readonly lattitude: FieldRef<"Posyandu", 'String'>
    readonly createdAt: FieldRef<"Posyandu", 'DateTime'>
    readonly updatedAt: FieldRef<"Posyandu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posyandu findUnique
   */
  export type PosyanduFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter, which Posyandu to fetch.
     */
    where: PosyanduWhereUniqueInput
  }

  /**
   * Posyandu findUniqueOrThrow
   */
  export type PosyanduFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter, which Posyandu to fetch.
     */
    where: PosyanduWhereUniqueInput
  }

  /**
   * Posyandu findFirst
   */
  export type PosyanduFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter, which Posyandu to fetch.
     */
    where?: PosyanduWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posyandus to fetch.
     */
    orderBy?: PosyanduOrderByWithRelationInput | PosyanduOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posyandus.
     */
    cursor?: PosyanduWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posyandus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posyandus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posyandus.
     */
    distinct?: PosyanduScalarFieldEnum | PosyanduScalarFieldEnum[]
  }

  /**
   * Posyandu findFirstOrThrow
   */
  export type PosyanduFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter, which Posyandu to fetch.
     */
    where?: PosyanduWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posyandus to fetch.
     */
    orderBy?: PosyanduOrderByWithRelationInput | PosyanduOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posyandus.
     */
    cursor?: PosyanduWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posyandus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posyandus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posyandus.
     */
    distinct?: PosyanduScalarFieldEnum | PosyanduScalarFieldEnum[]
  }

  /**
   * Posyandu findMany
   */
  export type PosyanduFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter, which Posyandus to fetch.
     */
    where?: PosyanduWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posyandus to fetch.
     */
    orderBy?: PosyanduOrderByWithRelationInput | PosyanduOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posyandus.
     */
    cursor?: PosyanduWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posyandus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posyandus.
     */
    skip?: number
    distinct?: PosyanduScalarFieldEnum | PosyanduScalarFieldEnum[]
  }

  /**
   * Posyandu create
   */
  export type PosyanduCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * The data needed to create a Posyandu.
     */
    data: XOR<PosyanduCreateInput, PosyanduUncheckedCreateInput>
  }

  /**
   * Posyandu createMany
   */
  export type PosyanduCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posyandus.
     */
    data: PosyanduCreateManyInput | PosyanduCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posyandu createManyAndReturn
   */
  export type PosyanduCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * The data used to create many Posyandus.
     */
    data: PosyanduCreateManyInput | PosyanduCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posyandu update
   */
  export type PosyanduUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * The data needed to update a Posyandu.
     */
    data: XOR<PosyanduUpdateInput, PosyanduUncheckedUpdateInput>
    /**
     * Choose, which Posyandu to update.
     */
    where: PosyanduWhereUniqueInput
  }

  /**
   * Posyandu updateMany
   */
  export type PosyanduUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posyandus.
     */
    data: XOR<PosyanduUpdateManyMutationInput, PosyanduUncheckedUpdateManyInput>
    /**
     * Filter which Posyandus to update
     */
    where?: PosyanduWhereInput
    /**
     * Limit how many Posyandus to update.
     */
    limit?: number
  }

  /**
   * Posyandu updateManyAndReturn
   */
  export type PosyanduUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * The data used to update Posyandus.
     */
    data: XOR<PosyanduUpdateManyMutationInput, PosyanduUncheckedUpdateManyInput>
    /**
     * Filter which Posyandus to update
     */
    where?: PosyanduWhereInput
    /**
     * Limit how many Posyandus to update.
     */
    limit?: number
  }

  /**
   * Posyandu upsert
   */
  export type PosyanduUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * The filter to search for the Posyandu to update in case it exists.
     */
    where: PosyanduWhereUniqueInput
    /**
     * In case the Posyandu found by the `where` argument doesn't exist, create a new Posyandu with this data.
     */
    create: XOR<PosyanduCreateInput, PosyanduUncheckedCreateInput>
    /**
     * In case the Posyandu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PosyanduUpdateInput, PosyanduUncheckedUpdateInput>
  }

  /**
   * Posyandu delete
   */
  export type PosyanduDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
    /**
     * Filter which Posyandu to delete.
     */
    where: PosyanduWhereUniqueInput
  }

  /**
   * Posyandu deleteMany
   */
  export type PosyanduDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posyandus to delete
     */
    where?: PosyanduWhereInput
    /**
     * Limit how many Posyandus to delete.
     */
    limit?: number
  }

  /**
   * Posyandu.kader
   */
  export type Posyandu$kaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    where?: KaderWhereInput
    orderBy?: KaderOrderByWithRelationInput | KaderOrderByWithRelationInput[]
    cursor?: KaderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KaderScalarFieldEnum | KaderScalarFieldEnum[]
  }

  /**
   * Posyandu without action
   */
  export type PosyanduDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posyandu
     */
    select?: PosyanduSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posyandu
     */
    omit?: PosyanduOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduInclude<ExtArgs> | null
  }


  /**
   * Model Kader
   */

  export type AggregateKader = {
    _count: KaderCountAggregateOutputType | null
    _avg: KaderAvgAggregateOutputType | null
    _sum: KaderSumAggregateOutputType | null
    _min: KaderMinAggregateOutputType | null
    _max: KaderMaxAggregateOutputType | null
  }

  export type KaderAvgAggregateOutputType = {
    id: number | null
    posyanduId: number | null
  }

  export type KaderSumAggregateOutputType = {
    id: number | null
    posyanduId: number | null
  }

  export type KaderMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nik: string | null
    noHp: string | null
    alamat: string | null
    posyanduId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaderMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nik: string | null
    noHp: string | null
    alamat: string | null
    posyanduId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaderCountAggregateOutputType = {
    id: number
    nama: number
    nik: number
    noHp: number
    alamat: number
    posyanduId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KaderAvgAggregateInputType = {
    id?: true
    posyanduId?: true
  }

  export type KaderSumAggregateInputType = {
    id?: true
    posyanduId?: true
  }

  export type KaderMinAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    noHp?: true
    alamat?: true
    posyanduId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaderMaxAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    noHp?: true
    alamat?: true
    posyanduId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaderCountAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    noHp?: true
    alamat?: true
    posyanduId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kader to aggregate.
     */
    where?: KaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kaders to fetch.
     */
    orderBy?: KaderOrderByWithRelationInput | KaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kaders
    **/
    _count?: true | KaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaderMaxAggregateInputType
  }

  export type GetKaderAggregateType<T extends KaderAggregateArgs> = {
        [P in keyof T & keyof AggregateKader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKader[P]>
      : GetScalarType<T[P], AggregateKader[P]>
  }




  export type KaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaderWhereInput
    orderBy?: KaderOrderByWithAggregationInput | KaderOrderByWithAggregationInput[]
    by: KaderScalarFieldEnum[] | KaderScalarFieldEnum
    having?: KaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaderCountAggregateInputType | true
    _avg?: KaderAvgAggregateInputType
    _sum?: KaderSumAggregateInputType
    _min?: KaderMinAggregateInputType
    _max?: KaderMaxAggregateInputType
  }

  export type KaderGroupByOutputType = {
    id: number
    nama: string
    nik: string
    noHp: string
    alamat: string
    posyanduId: number
    createdAt: Date
    updatedAt: Date
    _count: KaderCountAggregateOutputType | null
    _avg: KaderAvgAggregateOutputType | null
    _sum: KaderSumAggregateOutputType | null
    _min: KaderMinAggregateOutputType | null
    _max: KaderMaxAggregateOutputType | null
  }

  type GetKaderGroupByPayload<T extends KaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaderGroupByOutputType[P]>
            : GetScalarType<T[P], KaderGroupByOutputType[P]>
        }
      >
    >


  export type KaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    noHp?: boolean
    alamat?: boolean
    posyanduId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kader"]>

  export type KaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    noHp?: boolean
    alamat?: boolean
    posyanduId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kader"]>

  export type KaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    noHp?: boolean
    alamat?: boolean
    posyanduId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kader"]>

  export type KaderSelectScalar = {
    id?: boolean
    nama?: boolean
    nik?: boolean
    noHp?: boolean
    alamat?: boolean
    posyanduId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nik" | "noHp" | "alamat" | "posyanduId" | "createdAt" | "updatedAt", ExtArgs["result"]["kader"]>
  export type KaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }
  export type KaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }
  export type KaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posyandu?: boolean | PosyanduDefaultArgs<ExtArgs>
  }

  export type $KaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kader"
    objects: {
      posyandu: Prisma.$PosyanduPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      nik: string
      noHp: string
      alamat: string
      posyanduId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kader"]>
    composites: {}
  }

  type KaderGetPayload<S extends boolean | null | undefined | KaderDefaultArgs> = $Result.GetResult<Prisma.$KaderPayload, S>

  type KaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KaderCountAggregateInputType | true
    }

  export interface KaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kader'], meta: { name: 'Kader' } }
    /**
     * Find zero or one Kader that matches the filter.
     * @param {KaderFindUniqueArgs} args - Arguments to find a Kader
     * @example
     * // Get one Kader
     * const kader = await prisma.kader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KaderFindUniqueArgs>(args: SelectSubset<T, KaderFindUniqueArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KaderFindUniqueOrThrowArgs} args - Arguments to find a Kader
     * @example
     * // Get one Kader
     * const kader = await prisma.kader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KaderFindUniqueOrThrowArgs>(args: SelectSubset<T, KaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderFindFirstArgs} args - Arguments to find a Kader
     * @example
     * // Get one Kader
     * const kader = await prisma.kader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KaderFindFirstArgs>(args?: SelectSubset<T, KaderFindFirstArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderFindFirstOrThrowArgs} args - Arguments to find a Kader
     * @example
     * // Get one Kader
     * const kader = await prisma.kader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KaderFindFirstOrThrowArgs>(args?: SelectSubset<T, KaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kaders
     * const kaders = await prisma.kader.findMany()
     * 
     * // Get first 10 Kaders
     * const kaders = await prisma.kader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kaderWithIdOnly = await prisma.kader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KaderFindManyArgs>(args?: SelectSubset<T, KaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kader.
     * @param {KaderCreateArgs} args - Arguments to create a Kader.
     * @example
     * // Create one Kader
     * const Kader = await prisma.kader.create({
     *   data: {
     *     // ... data to create a Kader
     *   }
     * })
     * 
     */
    create<T extends KaderCreateArgs>(args: SelectSubset<T, KaderCreateArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kaders.
     * @param {KaderCreateManyArgs} args - Arguments to create many Kaders.
     * @example
     * // Create many Kaders
     * const kader = await prisma.kader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KaderCreateManyArgs>(args?: SelectSubset<T, KaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kaders and returns the data saved in the database.
     * @param {KaderCreateManyAndReturnArgs} args - Arguments to create many Kaders.
     * @example
     * // Create many Kaders
     * const kader = await prisma.kader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kaders and only return the `id`
     * const kaderWithIdOnly = await prisma.kader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KaderCreateManyAndReturnArgs>(args?: SelectSubset<T, KaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kader.
     * @param {KaderDeleteArgs} args - Arguments to delete one Kader.
     * @example
     * // Delete one Kader
     * const Kader = await prisma.kader.delete({
     *   where: {
     *     // ... filter to delete one Kader
     *   }
     * })
     * 
     */
    delete<T extends KaderDeleteArgs>(args: SelectSubset<T, KaderDeleteArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kader.
     * @param {KaderUpdateArgs} args - Arguments to update one Kader.
     * @example
     * // Update one Kader
     * const kader = await prisma.kader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KaderUpdateArgs>(args: SelectSubset<T, KaderUpdateArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kaders.
     * @param {KaderDeleteManyArgs} args - Arguments to filter Kaders to delete.
     * @example
     * // Delete a few Kaders
     * const { count } = await prisma.kader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KaderDeleteManyArgs>(args?: SelectSubset<T, KaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kaders
     * const kader = await prisma.kader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KaderUpdateManyArgs>(args: SelectSubset<T, KaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kaders and returns the data updated in the database.
     * @param {KaderUpdateManyAndReturnArgs} args - Arguments to update many Kaders.
     * @example
     * // Update many Kaders
     * const kader = await prisma.kader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kaders and only return the `id`
     * const kaderWithIdOnly = await prisma.kader.updateManyAndReturn({
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
    updateManyAndReturn<T extends KaderUpdateManyAndReturnArgs>(args: SelectSubset<T, KaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kader.
     * @param {KaderUpsertArgs} args - Arguments to update or create a Kader.
     * @example
     * // Update or create a Kader
     * const kader = await prisma.kader.upsert({
     *   create: {
     *     // ... data to create a Kader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kader we want to update
     *   }
     * })
     */
    upsert<T extends KaderUpsertArgs>(args: SelectSubset<T, KaderUpsertArgs<ExtArgs>>): Prisma__KaderClient<$Result.GetResult<Prisma.$KaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderCountArgs} args - Arguments to filter Kaders to count.
     * @example
     * // Count the number of Kaders
     * const count = await prisma.kader.count({
     *   where: {
     *     // ... the filter for the Kaders we want to count
     *   }
     * })
    **/
    count<T extends KaderCountArgs>(
      args?: Subset<T, KaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KaderAggregateArgs>(args: Subset<T, KaderAggregateArgs>): Prisma.PrismaPromise<GetKaderAggregateType<T>>

    /**
     * Group by Kader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaderGroupByArgs} args - Group by arguments.
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
      T extends KaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KaderGroupByArgs['orderBy'] }
        : { orderBy?: KaderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kader model
   */
  readonly fields: KaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posyandu<T extends PosyanduDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PosyanduDefaultArgs<ExtArgs>>): Prisma__PosyanduClient<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Kader model
   */
  interface KaderFieldRefs {
    readonly id: FieldRef<"Kader", 'Int'>
    readonly nama: FieldRef<"Kader", 'String'>
    readonly nik: FieldRef<"Kader", 'String'>
    readonly noHp: FieldRef<"Kader", 'String'>
    readonly alamat: FieldRef<"Kader", 'String'>
    readonly posyanduId: FieldRef<"Kader", 'Int'>
    readonly createdAt: FieldRef<"Kader", 'DateTime'>
    readonly updatedAt: FieldRef<"Kader", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kader findUnique
   */
  export type KaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter, which Kader to fetch.
     */
    where: KaderWhereUniqueInput
  }

  /**
   * Kader findUniqueOrThrow
   */
  export type KaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter, which Kader to fetch.
     */
    where: KaderWhereUniqueInput
  }

  /**
   * Kader findFirst
   */
  export type KaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter, which Kader to fetch.
     */
    where?: KaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kaders to fetch.
     */
    orderBy?: KaderOrderByWithRelationInput | KaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kaders.
     */
    cursor?: KaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kaders.
     */
    distinct?: KaderScalarFieldEnum | KaderScalarFieldEnum[]
  }

  /**
   * Kader findFirstOrThrow
   */
  export type KaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter, which Kader to fetch.
     */
    where?: KaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kaders to fetch.
     */
    orderBy?: KaderOrderByWithRelationInput | KaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kaders.
     */
    cursor?: KaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kaders.
     */
    distinct?: KaderScalarFieldEnum | KaderScalarFieldEnum[]
  }

  /**
   * Kader findMany
   */
  export type KaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter, which Kaders to fetch.
     */
    where?: KaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kaders to fetch.
     */
    orderBy?: KaderOrderByWithRelationInput | KaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kaders.
     */
    cursor?: KaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kaders.
     */
    skip?: number
    distinct?: KaderScalarFieldEnum | KaderScalarFieldEnum[]
  }

  /**
   * Kader create
   */
  export type KaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * The data needed to create a Kader.
     */
    data: XOR<KaderCreateInput, KaderUncheckedCreateInput>
  }

  /**
   * Kader createMany
   */
  export type KaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kaders.
     */
    data: KaderCreateManyInput | KaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kader createManyAndReturn
   */
  export type KaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * The data used to create many Kaders.
     */
    data: KaderCreateManyInput | KaderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kader update
   */
  export type KaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * The data needed to update a Kader.
     */
    data: XOR<KaderUpdateInput, KaderUncheckedUpdateInput>
    /**
     * Choose, which Kader to update.
     */
    where: KaderWhereUniqueInput
  }

  /**
   * Kader updateMany
   */
  export type KaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kaders.
     */
    data: XOR<KaderUpdateManyMutationInput, KaderUncheckedUpdateManyInput>
    /**
     * Filter which Kaders to update
     */
    where?: KaderWhereInput
    /**
     * Limit how many Kaders to update.
     */
    limit?: number
  }

  /**
   * Kader updateManyAndReturn
   */
  export type KaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * The data used to update Kaders.
     */
    data: XOR<KaderUpdateManyMutationInput, KaderUncheckedUpdateManyInput>
    /**
     * Filter which Kaders to update
     */
    where?: KaderWhereInput
    /**
     * Limit how many Kaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kader upsert
   */
  export type KaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * The filter to search for the Kader to update in case it exists.
     */
    where: KaderWhereUniqueInput
    /**
     * In case the Kader found by the `where` argument doesn't exist, create a new Kader with this data.
     */
    create: XOR<KaderCreateInput, KaderUncheckedCreateInput>
    /**
     * In case the Kader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KaderUpdateInput, KaderUncheckedUpdateInput>
  }

  /**
   * Kader delete
   */
  export type KaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
    /**
     * Filter which Kader to delete.
     */
    where: KaderWhereUniqueInput
  }

  /**
   * Kader deleteMany
   */
  export type KaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kaders to delete
     */
    where?: KaderWhereInput
    /**
     * Limit how many Kaders to delete.
     */
    limit?: number
  }

  /**
   * Kader without action
   */
  export type KaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kader
     */
    select?: KaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kader
     */
    omit?: KaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PosyanduScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    wilayah: 'wilayah',
    kelurahan: 'kelurahan',
    penanggungJawab: 'penanggungJawab',
    noHp: 'noHp',
    akreditasi: 'akreditasi',
    longitude: 'longitude',
    lattitude: 'lattitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PosyanduScalarFieldEnum = (typeof PosyanduScalarFieldEnum)[keyof typeof PosyanduScalarFieldEnum]


  export const KaderScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nik: 'nik',
    noHp: 'noHp',
    alamat: 'alamat',
    posyanduId: 'posyanduId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KaderScalarFieldEnum = (typeof KaderScalarFieldEnum)[keyof typeof KaderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Akreditasi'
   */
  export type EnumAkreditasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Akreditasi'>
    


  /**
   * Reference to a field of type 'Akreditasi[]'
   */
  export type ListEnumAkreditasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Akreditasi[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PosyanduWhereInput = {
    AND?: PosyanduWhereInput | PosyanduWhereInput[]
    OR?: PosyanduWhereInput[]
    NOT?: PosyanduWhereInput | PosyanduWhereInput[]
    id?: IntFilter<"Posyandu"> | number
    nama?: StringFilter<"Posyandu"> | string
    alamat?: StringFilter<"Posyandu"> | string
    wilayah?: StringFilter<"Posyandu"> | string
    kelurahan?: StringFilter<"Posyandu"> | string
    penanggungJawab?: StringFilter<"Posyandu"> | string
    noHp?: StringFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: StringFilter<"Posyandu"> | string
    lattitude?: StringFilter<"Posyandu"> | string
    createdAt?: DateTimeFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeFilter<"Posyandu"> | Date | string
    kader?: KaderListRelationFilter
  }

  export type PosyanduOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahan?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    lattitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kader?: KaderOrderByRelationAggregateInput
  }

  export type PosyanduWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PosyanduWhereInput | PosyanduWhereInput[]
    OR?: PosyanduWhereInput[]
    NOT?: PosyanduWhereInput | PosyanduWhereInput[]
    nama?: StringFilter<"Posyandu"> | string
    alamat?: StringFilter<"Posyandu"> | string
    wilayah?: StringFilter<"Posyandu"> | string
    kelurahan?: StringFilter<"Posyandu"> | string
    penanggungJawab?: StringFilter<"Posyandu"> | string
    noHp?: StringFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: StringFilter<"Posyandu"> | string
    lattitude?: StringFilter<"Posyandu"> | string
    createdAt?: DateTimeFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeFilter<"Posyandu"> | Date | string
    kader?: KaderListRelationFilter
  }, "id">

  export type PosyanduOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahan?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    lattitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PosyanduCountOrderByAggregateInput
    _avg?: PosyanduAvgOrderByAggregateInput
    _max?: PosyanduMaxOrderByAggregateInput
    _min?: PosyanduMinOrderByAggregateInput
    _sum?: PosyanduSumOrderByAggregateInput
  }

  export type PosyanduScalarWhereWithAggregatesInput = {
    AND?: PosyanduScalarWhereWithAggregatesInput | PosyanduScalarWhereWithAggregatesInput[]
    OR?: PosyanduScalarWhereWithAggregatesInput[]
    NOT?: PosyanduScalarWhereWithAggregatesInput | PosyanduScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posyandu"> | number
    nama?: StringWithAggregatesFilter<"Posyandu"> | string
    alamat?: StringWithAggregatesFilter<"Posyandu"> | string
    wilayah?: StringWithAggregatesFilter<"Posyandu"> | string
    kelurahan?: StringWithAggregatesFilter<"Posyandu"> | string
    penanggungJawab?: StringWithAggregatesFilter<"Posyandu"> | string
    noHp?: StringWithAggregatesFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiWithAggregatesFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: StringWithAggregatesFilter<"Posyandu"> | string
    lattitude?: StringWithAggregatesFilter<"Posyandu"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Posyandu"> | Date | string
  }

  export type KaderWhereInput = {
    AND?: KaderWhereInput | KaderWhereInput[]
    OR?: KaderWhereInput[]
    NOT?: KaderWhereInput | KaderWhereInput[]
    id?: IntFilter<"Kader"> | number
    nama?: StringFilter<"Kader"> | string
    nik?: StringFilter<"Kader"> | string
    noHp?: StringFilter<"Kader"> | string
    alamat?: StringFilter<"Kader"> | string
    posyanduId?: IntFilter<"Kader"> | number
    createdAt?: DateTimeFilter<"Kader"> | Date | string
    updatedAt?: DateTimeFilter<"Kader"> | Date | string
    posyandu?: XOR<PosyanduScalarRelationFilter, PosyanduWhereInput>
  }

  export type KaderOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    posyanduId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posyandu?: PosyanduOrderByWithRelationInput
  }

  export type KaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nik?: string
    AND?: KaderWhereInput | KaderWhereInput[]
    OR?: KaderWhereInput[]
    NOT?: KaderWhereInput | KaderWhereInput[]
    nama?: StringFilter<"Kader"> | string
    noHp?: StringFilter<"Kader"> | string
    alamat?: StringFilter<"Kader"> | string
    posyanduId?: IntFilter<"Kader"> | number
    createdAt?: DateTimeFilter<"Kader"> | Date | string
    updatedAt?: DateTimeFilter<"Kader"> | Date | string
    posyandu?: XOR<PosyanduScalarRelationFilter, PosyanduWhereInput>
  }, "id" | "nik">

  export type KaderOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    posyanduId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KaderCountOrderByAggregateInput
    _avg?: KaderAvgOrderByAggregateInput
    _max?: KaderMaxOrderByAggregateInput
    _min?: KaderMinOrderByAggregateInput
    _sum?: KaderSumOrderByAggregateInput
  }

  export type KaderScalarWhereWithAggregatesInput = {
    AND?: KaderScalarWhereWithAggregatesInput | KaderScalarWhereWithAggregatesInput[]
    OR?: KaderScalarWhereWithAggregatesInput[]
    NOT?: KaderScalarWhereWithAggregatesInput | KaderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kader"> | number
    nama?: StringWithAggregatesFilter<"Kader"> | string
    nik?: StringWithAggregatesFilter<"Kader"> | string
    noHp?: StringWithAggregatesFilter<"Kader"> | string
    alamat?: StringWithAggregatesFilter<"Kader"> | string
    posyanduId?: IntWithAggregatesFilter<"Kader"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Kader"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kader"> | Date | string
  }

  export type PosyanduCreateInput = {
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kader?: KaderCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduUncheckedCreateInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kader?: KaderUncheckedCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kader?: KaderUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kader?: KaderUncheckedUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduCreateManyInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosyanduUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosyanduUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderCreateInput = {
    nama: string
    nik: string
    noHp: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posyandu: PosyanduCreateNestedOneWithoutKaderInput
  }

  export type KaderUncheckedCreateInput = {
    id?: number
    nama: string
    nik: string
    noHp: string
    alamat: string
    posyanduId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaderUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posyandu?: PosyanduUpdateOneRequiredWithoutKaderNestedInput
  }

  export type KaderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    posyanduId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderCreateManyInput = {
    id?: number
    nama: string
    nik: string
    noHp: string
    alamat: string
    posyanduId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaderUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    posyanduId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAkreditasiFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiFilter<$PrismaModel> | $Enums.Akreditasi
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KaderListRelationFilter = {
    every?: KaderWhereInput
    some?: KaderWhereInput
    none?: KaderWhereInput
  }

  export type KaderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PosyanduCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahan?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    lattitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PosyanduMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahan?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    lattitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahan?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    lattitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAkreditasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiWithAggregatesFilter<$PrismaModel> | $Enums.Akreditasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAkreditasiFilter<$PrismaModel>
    _max?: NestedEnumAkreditasiFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PosyanduScalarRelationFilter = {
    is?: PosyanduWhereInput
    isNot?: PosyanduWhereInput
  }

  export type KaderCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    posyanduId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaderAvgOrderByAggregateInput = {
    id?: SortOrder
    posyanduId?: SortOrder
  }

  export type KaderMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    posyanduId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaderMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    posyanduId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaderSumOrderByAggregateInput = {
    id?: SortOrder
    posyanduId?: SortOrder
  }

  export type KaderCreateNestedManyWithoutPosyanduInput = {
    create?: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput> | KaderCreateWithoutPosyanduInput[] | KaderUncheckedCreateWithoutPosyanduInput[]
    connectOrCreate?: KaderCreateOrConnectWithoutPosyanduInput | KaderCreateOrConnectWithoutPosyanduInput[]
    createMany?: KaderCreateManyPosyanduInputEnvelope
    connect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
  }

  export type KaderUncheckedCreateNestedManyWithoutPosyanduInput = {
    create?: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput> | KaderCreateWithoutPosyanduInput[] | KaderUncheckedCreateWithoutPosyanduInput[]
    connectOrCreate?: KaderCreateOrConnectWithoutPosyanduInput | KaderCreateOrConnectWithoutPosyanduInput[]
    createMany?: KaderCreateManyPosyanduInputEnvelope
    connect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAkreditasiFieldUpdateOperationsInput = {
    set?: $Enums.Akreditasi
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KaderUpdateManyWithoutPosyanduNestedInput = {
    create?: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput> | KaderCreateWithoutPosyanduInput[] | KaderUncheckedCreateWithoutPosyanduInput[]
    connectOrCreate?: KaderCreateOrConnectWithoutPosyanduInput | KaderCreateOrConnectWithoutPosyanduInput[]
    upsert?: KaderUpsertWithWhereUniqueWithoutPosyanduInput | KaderUpsertWithWhereUniqueWithoutPosyanduInput[]
    createMany?: KaderCreateManyPosyanduInputEnvelope
    set?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    disconnect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    delete?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    connect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    update?: KaderUpdateWithWhereUniqueWithoutPosyanduInput | KaderUpdateWithWhereUniqueWithoutPosyanduInput[]
    updateMany?: KaderUpdateManyWithWhereWithoutPosyanduInput | KaderUpdateManyWithWhereWithoutPosyanduInput[]
    deleteMany?: KaderScalarWhereInput | KaderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KaderUncheckedUpdateManyWithoutPosyanduNestedInput = {
    create?: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput> | KaderCreateWithoutPosyanduInput[] | KaderUncheckedCreateWithoutPosyanduInput[]
    connectOrCreate?: KaderCreateOrConnectWithoutPosyanduInput | KaderCreateOrConnectWithoutPosyanduInput[]
    upsert?: KaderUpsertWithWhereUniqueWithoutPosyanduInput | KaderUpsertWithWhereUniqueWithoutPosyanduInput[]
    createMany?: KaderCreateManyPosyanduInputEnvelope
    set?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    disconnect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    delete?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    connect?: KaderWhereUniqueInput | KaderWhereUniqueInput[]
    update?: KaderUpdateWithWhereUniqueWithoutPosyanduInput | KaderUpdateWithWhereUniqueWithoutPosyanduInput[]
    updateMany?: KaderUpdateManyWithWhereWithoutPosyanduInput | KaderUpdateManyWithWhereWithoutPosyanduInput[]
    deleteMany?: KaderScalarWhereInput | KaderScalarWhereInput[]
  }

  export type PosyanduCreateNestedOneWithoutKaderInput = {
    create?: XOR<PosyanduCreateWithoutKaderInput, PosyanduUncheckedCreateWithoutKaderInput>
    connectOrCreate?: PosyanduCreateOrConnectWithoutKaderInput
    connect?: PosyanduWhereUniqueInput
  }

  export type PosyanduUpdateOneRequiredWithoutKaderNestedInput = {
    create?: XOR<PosyanduCreateWithoutKaderInput, PosyanduUncheckedCreateWithoutKaderInput>
    connectOrCreate?: PosyanduCreateOrConnectWithoutKaderInput
    upsert?: PosyanduUpsertWithoutKaderInput
    connect?: PosyanduWhereUniqueInput
    update?: XOR<XOR<PosyanduUpdateToOneWithWhereWithoutKaderInput, PosyanduUpdateWithoutKaderInput>, PosyanduUncheckedUpdateWithoutKaderInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAkreditasiFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiFilter<$PrismaModel> | $Enums.Akreditasi
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumAkreditasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiWithAggregatesFilter<$PrismaModel> | $Enums.Akreditasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAkreditasiFilter<$PrismaModel>
    _max?: NestedEnumAkreditasiFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KaderCreateWithoutPosyanduInput = {
    nama: string
    nik: string
    noHp: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaderUncheckedCreateWithoutPosyanduInput = {
    id?: number
    nama: string
    nik: string
    noHp: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaderCreateOrConnectWithoutPosyanduInput = {
    where: KaderWhereUniqueInput
    create: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput>
  }

  export type KaderCreateManyPosyanduInputEnvelope = {
    data: KaderCreateManyPosyanduInput | KaderCreateManyPosyanduInput[]
    skipDuplicates?: boolean
  }

  export type KaderUpsertWithWhereUniqueWithoutPosyanduInput = {
    where: KaderWhereUniqueInput
    update: XOR<KaderUpdateWithoutPosyanduInput, KaderUncheckedUpdateWithoutPosyanduInput>
    create: XOR<KaderCreateWithoutPosyanduInput, KaderUncheckedCreateWithoutPosyanduInput>
  }

  export type KaderUpdateWithWhereUniqueWithoutPosyanduInput = {
    where: KaderWhereUniqueInput
    data: XOR<KaderUpdateWithoutPosyanduInput, KaderUncheckedUpdateWithoutPosyanduInput>
  }

  export type KaderUpdateManyWithWhereWithoutPosyanduInput = {
    where: KaderScalarWhereInput
    data: XOR<KaderUpdateManyMutationInput, KaderUncheckedUpdateManyWithoutPosyanduInput>
  }

  export type KaderScalarWhereInput = {
    AND?: KaderScalarWhereInput | KaderScalarWhereInput[]
    OR?: KaderScalarWhereInput[]
    NOT?: KaderScalarWhereInput | KaderScalarWhereInput[]
    id?: IntFilter<"Kader"> | number
    nama?: StringFilter<"Kader"> | string
    nik?: StringFilter<"Kader"> | string
    noHp?: StringFilter<"Kader"> | string
    alamat?: StringFilter<"Kader"> | string
    posyanduId?: IntFilter<"Kader"> | number
    createdAt?: DateTimeFilter<"Kader"> | Date | string
    updatedAt?: DateTimeFilter<"Kader"> | Date | string
  }

  export type PosyanduCreateWithoutKaderInput = {
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosyanduUncheckedCreateWithoutKaderInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahan: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: string
    lattitude: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosyanduCreateOrConnectWithoutKaderInput = {
    where: PosyanduWhereUniqueInput
    create: XOR<PosyanduCreateWithoutKaderInput, PosyanduUncheckedCreateWithoutKaderInput>
  }

  export type PosyanduUpsertWithoutKaderInput = {
    update: XOR<PosyanduUpdateWithoutKaderInput, PosyanduUncheckedUpdateWithoutKaderInput>
    create: XOR<PosyanduCreateWithoutKaderInput, PosyanduUncheckedCreateWithoutKaderInput>
    where?: PosyanduWhereInput
  }

  export type PosyanduUpdateToOneWithWhereWithoutKaderInput = {
    where?: PosyanduWhereInput
    data: XOR<PosyanduUpdateWithoutKaderInput, PosyanduUncheckedUpdateWithoutKaderInput>
  }

  export type PosyanduUpdateWithoutKaderInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosyanduUncheckedUpdateWithoutKaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: StringFieldUpdateOperationsInput | string
    lattitude?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderCreateManyPosyanduInput = {
    id?: number
    nama: string
    nik: string
    noHp: string
    alamat: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaderUpdateWithoutPosyanduInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderUncheckedUpdateWithoutPosyanduInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaderUncheckedUpdateManyWithoutPosyanduInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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