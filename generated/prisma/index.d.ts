
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
 * Model Kelurahan
 * 
 */
export type Kelurahan = $Result.DefaultSelection<Prisma.$KelurahanPayload>
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Akreditasi: {
  PARIPURNA: 'PARIPURNA',
  PRATAMA: 'PRATAMA',
  MADYA: 'MADYA',
  PURNAMA: 'PURNAMA',
  MANDIRI: 'MANDIRI',
  BELUM_AKREDITASI: 'BELUM_AKREDITASI'
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
 * // Fetch zero or more Kelurahans
 * const kelurahans = await prisma.kelurahan.findMany()
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
   * // Fetch zero or more Kelurahans
   * const kelurahans = await prisma.kelurahan.findMany()
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
   * `prisma.kelurahan`: Exposes CRUD operations for the **Kelurahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelurahans
    * const kelurahans = await prisma.kelurahan.findMany()
    * ```
    */
  get kelurahan(): Prisma.KelurahanDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;
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
    Kelurahan: 'Kelurahan',
    Posyandu: 'Posyandu',
    Kader: 'Kader',
    Role: 'Role',
    User: 'User',
    Otp: 'Otp'
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
      modelProps: "kelurahan" | "posyandu" | "kader" | "role" | "user" | "otp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kelurahan: {
        payload: Prisma.$KelurahanPayload<ExtArgs>
        fields: Prisma.KelurahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelurahanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelurahanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          findFirst: {
            args: Prisma.KelurahanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelurahanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          findMany: {
            args: Prisma.KelurahanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>[]
          }
          create: {
            args: Prisma.KelurahanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          createMany: {
            args: Prisma.KelurahanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelurahanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>[]
          }
          delete: {
            args: Prisma.KelurahanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          update: {
            args: Prisma.KelurahanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          deleteMany: {
            args: Prisma.KelurahanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelurahanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelurahanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>[]
          }
          upsert: {
            args: Prisma.KelurahanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelurahanPayload>
          }
          aggregate: {
            args: Prisma.KelurahanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelurahan>
          }
          groupBy: {
            args: Prisma.KelurahanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelurahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelurahanCountArgs<ExtArgs>
            result: $Utils.Optional<KelurahanCountAggregateOutputType> | number
          }
        }
      }
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
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
    kelurahan?: KelurahanOmit
    posyandu?: PosyanduOmit
    kader?: KaderOmit
    role?: RoleOmit
    user?: UserOmit
    otp?: OtpOmit
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
   * Count Type KelurahanCountOutputType
   */

  export type KelurahanCountOutputType = {
    posyandu: number
  }

  export type KelurahanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posyandu?: boolean | KelurahanCountOutputTypeCountPosyanduArgs
  }

  // Custom InputTypes
  /**
   * KelurahanCountOutputType without action
   */
  export type KelurahanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelurahanCountOutputType
     */
    select?: KelurahanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelurahanCountOutputType without action
   */
  export type KelurahanCountOutputTypeCountPosyanduArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PosyanduWhereInput
  }


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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Kelurahan
   */

  export type AggregateKelurahan = {
    _count: KelurahanCountAggregateOutputType | null
    _avg: KelurahanAvgAggregateOutputType | null
    _sum: KelurahanSumAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  export type KelurahanAvgAggregateOutputType = {
    id: number | null
  }

  export type KelurahanSumAggregateOutputType = {
    id: number | null
  }

  export type KelurahanMinAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KelurahanMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KelurahanCountAggregateOutputType = {
    id: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KelurahanAvgAggregateInputType = {
    id?: true
  }

  export type KelurahanSumAggregateInputType = {
    id?: true
  }

  export type KelurahanMinAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KelurahanMaxAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KelurahanCountAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KelurahanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelurahan to aggregate.
     */
    where?: KelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelurahans to fetch.
     */
    orderBy?: KelurahanOrderByWithRelationInput | KelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelurahans
    **/
    _count?: true | KelurahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelurahanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelurahanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelurahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelurahanMaxAggregateInputType
  }

  export type GetKelurahanAggregateType<T extends KelurahanAggregateArgs> = {
        [P in keyof T & keyof AggregateKelurahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelurahan[P]>
      : GetScalarType<T[P], AggregateKelurahan[P]>
  }




  export type KelurahanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelurahanWhereInput
    orderBy?: KelurahanOrderByWithAggregationInput | KelurahanOrderByWithAggregationInput[]
    by: KelurahanScalarFieldEnum[] | KelurahanScalarFieldEnum
    having?: KelurahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelurahanCountAggregateInputType | true
    _avg?: KelurahanAvgAggregateInputType
    _sum?: KelurahanSumAggregateInputType
    _min?: KelurahanMinAggregateInputType
    _max?: KelurahanMaxAggregateInputType
  }

  export type KelurahanGroupByOutputType = {
    id: number
    nama: string
    createdAt: Date
    updatedAt: Date
    _count: KelurahanCountAggregateOutputType | null
    _avg: KelurahanAvgAggregateOutputType | null
    _sum: KelurahanSumAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  type GetKelurahanGroupByPayload<T extends KelurahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelurahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelurahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
            : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
        }
      >
    >


  export type KelurahanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posyandu?: boolean | Kelurahan$posyanduArgs<ExtArgs>
    _count?: boolean | KelurahanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelurahan"]>

  export type KelurahanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kelurahan"]>

  export type KelurahanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kelurahan"]>

  export type KelurahanSelectScalar = {
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KelurahanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["kelurahan"]>
  export type KelurahanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posyandu?: boolean | Kelurahan$posyanduArgs<ExtArgs>
    _count?: boolean | KelurahanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelurahanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KelurahanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KelurahanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelurahan"
    objects: {
      posyandu: Prisma.$PosyanduPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kelurahan"]>
    composites: {}
  }

  type KelurahanGetPayload<S extends boolean | null | undefined | KelurahanDefaultArgs> = $Result.GetResult<Prisma.$KelurahanPayload, S>

  type KelurahanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelurahanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelurahanCountAggregateInputType | true
    }

  export interface KelurahanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelurahan'], meta: { name: 'Kelurahan' } }
    /**
     * Find zero or one Kelurahan that matches the filter.
     * @param {KelurahanFindUniqueArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelurahanFindUniqueArgs>(args: SelectSubset<T, KelurahanFindUniqueArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelurahan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelurahanFindUniqueOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelurahanFindUniqueOrThrowArgs>(args: SelectSubset<T, KelurahanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelurahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanFindFirstArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelurahanFindFirstArgs>(args?: SelectSubset<T, KelurahanFindFirstArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelurahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanFindFirstOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelurahanFindFirstOrThrowArgs>(args?: SelectSubset<T, KelurahanFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelurahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany()
     * 
     * // Get first 10 Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelurahanWithIdOnly = await prisma.kelurahan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelurahanFindManyArgs>(args?: SelectSubset<T, KelurahanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelurahan.
     * @param {KelurahanCreateArgs} args - Arguments to create a Kelurahan.
     * @example
     * // Create one Kelurahan
     * const Kelurahan = await prisma.kelurahan.create({
     *   data: {
     *     // ... data to create a Kelurahan
     *   }
     * })
     * 
     */
    create<T extends KelurahanCreateArgs>(args: SelectSubset<T, KelurahanCreateArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelurahans.
     * @param {KelurahanCreateManyArgs} args - Arguments to create many Kelurahans.
     * @example
     * // Create many Kelurahans
     * const kelurahan = await prisma.kelurahan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelurahanCreateManyArgs>(args?: SelectSubset<T, KelurahanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelurahans and returns the data saved in the database.
     * @param {KelurahanCreateManyAndReturnArgs} args - Arguments to create many Kelurahans.
     * @example
     * // Create many Kelurahans
     * const kelurahan = await prisma.kelurahan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelurahans and only return the `id`
     * const kelurahanWithIdOnly = await prisma.kelurahan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelurahanCreateManyAndReturnArgs>(args?: SelectSubset<T, KelurahanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelurahan.
     * @param {KelurahanDeleteArgs} args - Arguments to delete one Kelurahan.
     * @example
     * // Delete one Kelurahan
     * const Kelurahan = await prisma.kelurahan.delete({
     *   where: {
     *     // ... filter to delete one Kelurahan
     *   }
     * })
     * 
     */
    delete<T extends KelurahanDeleteArgs>(args: SelectSubset<T, KelurahanDeleteArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelurahan.
     * @param {KelurahanUpdateArgs} args - Arguments to update one Kelurahan.
     * @example
     * // Update one Kelurahan
     * const kelurahan = await prisma.kelurahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelurahanUpdateArgs>(args: SelectSubset<T, KelurahanUpdateArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelurahans.
     * @param {KelurahanDeleteManyArgs} args - Arguments to filter Kelurahans to delete.
     * @example
     * // Delete a few Kelurahans
     * const { count } = await prisma.kelurahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelurahanDeleteManyArgs>(args?: SelectSubset<T, KelurahanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelurahans
     * const kelurahan = await prisma.kelurahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelurahanUpdateManyArgs>(args: SelectSubset<T, KelurahanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelurahans and returns the data updated in the database.
     * @param {KelurahanUpdateManyAndReturnArgs} args - Arguments to update many Kelurahans.
     * @example
     * // Update many Kelurahans
     * const kelurahan = await prisma.kelurahan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelurahans and only return the `id`
     * const kelurahanWithIdOnly = await prisma.kelurahan.updateManyAndReturn({
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
    updateManyAndReturn<T extends KelurahanUpdateManyAndReturnArgs>(args: SelectSubset<T, KelurahanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelurahan.
     * @param {KelurahanUpsertArgs} args - Arguments to update or create a Kelurahan.
     * @example
     * // Update or create a Kelurahan
     * const kelurahan = await prisma.kelurahan.upsert({
     *   create: {
     *     // ... data to create a Kelurahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelurahan we want to update
     *   }
     * })
     */
    upsert<T extends KelurahanUpsertArgs>(args: SelectSubset<T, KelurahanUpsertArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanCountArgs} args - Arguments to filter Kelurahans to count.
     * @example
     * // Count the number of Kelurahans
     * const count = await prisma.kelurahan.count({
     *   where: {
     *     // ... the filter for the Kelurahans we want to count
     *   }
     * })
    **/
    count<T extends KelurahanCountArgs>(
      args?: Subset<T, KelurahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelurahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelurahanAggregateArgs>(args: Subset<T, KelurahanAggregateArgs>): Prisma.PrismaPromise<GetKelurahanAggregateType<T>>

    /**
     * Group by Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanGroupByArgs} args - Group by arguments.
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
      T extends KelurahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelurahanGroupByArgs['orderBy'] }
        : { orderBy?: KelurahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KelurahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelurahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelurahan model
   */
  readonly fields: KelurahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelurahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelurahanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posyandu<T extends Kelurahan$posyanduArgs<ExtArgs> = {}>(args?: Subset<T, Kelurahan$posyanduArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PosyanduPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kelurahan model
   */
  interface KelurahanFieldRefs {
    readonly id: FieldRef<"Kelurahan", 'Int'>
    readonly nama: FieldRef<"Kelurahan", 'String'>
    readonly createdAt: FieldRef<"Kelurahan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kelurahan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kelurahan findUnique
   */
  export type KelurahanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter, which Kelurahan to fetch.
     */
    where: KelurahanWhereUniqueInput
  }

  /**
   * Kelurahan findUniqueOrThrow
   */
  export type KelurahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter, which Kelurahan to fetch.
     */
    where: KelurahanWhereUniqueInput
  }

  /**
   * Kelurahan findFirst
   */
  export type KelurahanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter, which Kelurahan to fetch.
     */
    where?: KelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelurahans to fetch.
     */
    orderBy?: KelurahanOrderByWithRelationInput | KelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelurahans.
     */
    cursor?: KelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * Kelurahan findFirstOrThrow
   */
  export type KelurahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter, which Kelurahan to fetch.
     */
    where?: KelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelurahans to fetch.
     */
    orderBy?: KelurahanOrderByWithRelationInput | KelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelurahans.
     */
    cursor?: KelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * Kelurahan findMany
   */
  export type KelurahanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter, which Kelurahans to fetch.
     */
    where?: KelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelurahans to fetch.
     */
    orderBy?: KelurahanOrderByWithRelationInput | KelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelurahans.
     */
    cursor?: KelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelurahans.
     */
    skip?: number
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * Kelurahan create
   */
  export type KelurahanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelurahan.
     */
    data: XOR<KelurahanCreateInput, KelurahanUncheckedCreateInput>
  }

  /**
   * Kelurahan createMany
   */
  export type KelurahanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelurahans.
     */
    data: KelurahanCreateManyInput | KelurahanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelurahan createManyAndReturn
   */
  export type KelurahanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * The data used to create many Kelurahans.
     */
    data: KelurahanCreateManyInput | KelurahanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelurahan update
   */
  export type KelurahanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelurahan.
     */
    data: XOR<KelurahanUpdateInput, KelurahanUncheckedUpdateInput>
    /**
     * Choose, which Kelurahan to update.
     */
    where: KelurahanWhereUniqueInput
  }

  /**
   * Kelurahan updateMany
   */
  export type KelurahanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelurahans.
     */
    data: XOR<KelurahanUpdateManyMutationInput, KelurahanUncheckedUpdateManyInput>
    /**
     * Filter which Kelurahans to update
     */
    where?: KelurahanWhereInput
    /**
     * Limit how many Kelurahans to update.
     */
    limit?: number
  }

  /**
   * Kelurahan updateManyAndReturn
   */
  export type KelurahanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * The data used to update Kelurahans.
     */
    data: XOR<KelurahanUpdateManyMutationInput, KelurahanUncheckedUpdateManyInput>
    /**
     * Filter which Kelurahans to update
     */
    where?: KelurahanWhereInput
    /**
     * Limit how many Kelurahans to update.
     */
    limit?: number
  }

  /**
   * Kelurahan upsert
   */
  export type KelurahanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelurahan to update in case it exists.
     */
    where: KelurahanWhereUniqueInput
    /**
     * In case the Kelurahan found by the `where` argument doesn't exist, create a new Kelurahan with this data.
     */
    create: XOR<KelurahanCreateInput, KelurahanUncheckedCreateInput>
    /**
     * In case the Kelurahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelurahanUpdateInput, KelurahanUncheckedUpdateInput>
  }

  /**
   * Kelurahan delete
   */
  export type KelurahanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    /**
     * Filter which Kelurahan to delete.
     */
    where: KelurahanWhereUniqueInput
  }

  /**
   * Kelurahan deleteMany
   */
  export type KelurahanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelurahans to delete
     */
    where?: KelurahanWhereInput
    /**
     * Limit how many Kelurahans to delete.
     */
    limit?: number
  }

  /**
   * Kelurahan.posyandu
   */
  export type Kelurahan$posyanduArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: PosyanduWhereInput
    orderBy?: PosyanduOrderByWithRelationInput | PosyanduOrderByWithRelationInput[]
    cursor?: PosyanduWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PosyanduScalarFieldEnum | PosyanduScalarFieldEnum[]
  }

  /**
   * Kelurahan without action
   */
  export type KelurahanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
  }


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
    kelurahanId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type PosyanduSumAggregateOutputType = {
    id: number | null
    kelurahanId: number | null
    longitude: number | null
    latitude: number | null
  }

  export type PosyanduMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    wilayah: string | null
    kelurahanId: number | null
    penanggungJawab: string | null
    noHp: string | null
    akreditasi: $Enums.Akreditasi | null
    longitude: number | null
    latitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosyanduMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    wilayah: string | null
    kelurahanId: number | null
    penanggungJawab: string | null
    noHp: string | null
    akreditasi: $Enums.Akreditasi | null
    longitude: number | null
    latitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PosyanduCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    wilayah: number
    kelurahanId: number
    penanggungJawab: number
    noHp: number
    akreditasi: number
    longitude: number
    latitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PosyanduAvgAggregateInputType = {
    id?: true
    kelurahanId?: true
    longitude?: true
    latitude?: true
  }

  export type PosyanduSumAggregateInputType = {
    id?: true
    kelurahanId?: true
    longitude?: true
    latitude?: true
  }

  export type PosyanduMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahanId?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    latitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosyanduMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahanId?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    latitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PosyanduCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    wilayah?: true
    kelurahanId?: true
    penanggungJawab?: true
    noHp?: true
    akreditasi?: true
    longitude?: true
    latitude?: true
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
    kelurahanId: number | null
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
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
    kelurahanId?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
    kader?: boolean | Posyandu$kaderArgs<ExtArgs>
    _count?: boolean | PosyanduCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahanId?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahanId?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
  }, ExtArgs["result"]["posyandu"]>

  export type PosyanduSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    wilayah?: boolean
    kelurahanId?: boolean
    penanggungJawab?: boolean
    noHp?: boolean
    akreditasi?: boolean
    longitude?: boolean
    latitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PosyanduOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "wilayah" | "kelurahanId" | "penanggungJawab" | "noHp" | "akreditasi" | "longitude" | "latitude" | "createdAt" | "updatedAt", ExtArgs["result"]["posyandu"]>
  export type PosyanduInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
    kader?: boolean | Posyandu$kaderArgs<ExtArgs>
    _count?: boolean | PosyanduCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PosyanduIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
  }
  export type PosyanduIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelurahan?: boolean | Posyandu$kelurahanArgs<ExtArgs>
  }

  export type $PosyanduPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posyandu"
    objects: {
      kelurahan: Prisma.$KelurahanPayload<ExtArgs> | null
      kader: Prisma.$KaderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alamat: string
      wilayah: string
      kelurahanId: number | null
      penanggungJawab: string
      noHp: string
      akreditasi: $Enums.Akreditasi
      longitude: number
      latitude: number
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
    kelurahan<T extends Posyandu$kelurahanArgs<ExtArgs> = {}>(args?: Subset<T, Posyandu$kelurahanArgs<ExtArgs>>): Prisma__KelurahanClient<$Result.GetResult<Prisma.$KelurahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly kelurahanId: FieldRef<"Posyandu", 'Int'>
    readonly penanggungJawab: FieldRef<"Posyandu", 'String'>
    readonly noHp: FieldRef<"Posyandu", 'String'>
    readonly akreditasi: FieldRef<"Posyandu", 'Akreditasi'>
    readonly longitude: FieldRef<"Posyandu", 'Float'>
    readonly latitude: FieldRef<"Posyandu", 'Float'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PosyanduIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Posyandu.kelurahan
   */
  export type Posyandu$kelurahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelurahan
     */
    select?: KelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelurahan
     */
    omit?: KelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelurahanInclude<ExtArgs> | null
    where?: KelurahanWhereInput
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    nama: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nama: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nama?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    nama: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    nama?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly nama: FieldRef<"Role", 'String'>
    readonly slug: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    noHp: string | null
    noKK: string | null
    nik: string | null
    tanggalLahir: Date | null
    alamat: string | null
    password: string | null
    isVerified: boolean | null
    resetToken: string | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    noHp: string | null
    noKK: string | null
    nik: string | null
    tanggalLahir: Date | null
    alamat: string | null
    password: string | null
    isVerified: boolean | null
    resetToken: string | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    noHp: number
    noKK: number
    nik: number
    tanggalLahir: number
    alamat: number
    password: number
    isVerified: number
    resetToken: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
    noKK?: true
    nik?: true
    tanggalLahir?: true
    alamat?: true
    password?: true
    isVerified?: true
    resetToken?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
    noKK?: true
    nik?: true
    tanggalLahir?: true
    alamat?: true
    password?: true
    isVerified?: true
    resetToken?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    noHp?: true
    noKK?: true
    nik?: true
    tanggalLahir?: true
    alamat?: true
    password?: true
    isVerified?: true
    resetToken?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nama: string
    email: string
    noHp: string
    noKK: string | null
    nik: string
    tanggalLahir: Date
    alamat: string
    password: string
    isVerified: boolean
    resetToken: string | null
    roleId: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    noKK?: boolean
    nik?: boolean
    tanggalLahir?: boolean
    alamat?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    noKK?: boolean
    nik?: boolean
    tanggalLahir?: boolean
    alamat?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    noKK?: boolean
    nik?: boolean
    tanggalLahir?: boolean
    alamat?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    noKK?: boolean
    nik?: boolean
    tanggalLahir?: boolean
    alamat?: boolean
    password?: boolean
    isVerified?: boolean
    resetToken?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "noHp" | "noKK" | "nik" | "tanggalLahir" | "alamat" | "password" | "isVerified" | "resetToken" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      noHp: string
      noKK: string | null
      nik: string
      tanggalLahir: Date
      alamat: string
      password: string
      isVerified: boolean
      resetToken: string | null
      roleId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly noHp: FieldRef<"User", 'String'>
    readonly noKK: FieldRef<"User", 'String'>
    readonly nik: FieldRef<"User", 'String'>
    readonly tanggalLahir: FieldRef<"User", 'DateTime'>
    readonly alamat: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    email: string | null
    kode: string | null
    expiredAt: Date | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    email: string | null
    kode: string | null
    expiredAt: Date | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    kode: number
    expiredAt: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    kode?: true
    expiredAt?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    kode?: true
    expiredAt?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    kode?: true
    expiredAt?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    email: string
    kode: string
    expiredAt: Date
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    kode?: boolean
    expiredAt?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    kode?: boolean
    expiredAt?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    kode?: boolean
    expiredAt?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    kode?: boolean
    expiredAt?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "kode" | "expiredAt" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      kode: string
      expiredAt: Date
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly kode: FieldRef<"Otp", 'String'>
    readonly expiredAt: FieldRef<"Otp", 'DateTime'>
    readonly verified: FieldRef<"Otp", 'Boolean'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
    readonly updatedAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
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


  export const KelurahanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KelurahanScalarFieldEnum = (typeof KelurahanScalarFieldEnum)[keyof typeof KelurahanScalarFieldEnum]


  export const PosyanduScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    wilayah: 'wilayah',
    kelurahanId: 'kelurahanId',
    penanggungJawab: 'penanggungJawab',
    noHp: 'noHp',
    akreditasi: 'akreditasi',
    longitude: 'longitude',
    latitude: 'latitude',
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    noHp: 'noHp',
    noKK: 'noKK',
    nik: 'nik',
    tanggalLahir: 'tanggalLahir',
    alamat: 'alamat',
    password: 'password',
    isVerified: 'isVerified',
    resetToken: 'resetToken',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    kode: 'kode',
    expiredAt: 'expiredAt',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Akreditasi'
   */
  export type EnumAkreditasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Akreditasi'>
    


  /**
   * Reference to a field of type 'Akreditasi[]'
   */
  export type ListEnumAkreditasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Akreditasi[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type KelurahanWhereInput = {
    AND?: KelurahanWhereInput | KelurahanWhereInput[]
    OR?: KelurahanWhereInput[]
    NOT?: KelurahanWhereInput | KelurahanWhereInput[]
    id?: IntFilter<"Kelurahan"> | number
    nama?: StringFilter<"Kelurahan"> | string
    createdAt?: DateTimeFilter<"Kelurahan"> | Date | string
    updatedAt?: DateTimeFilter<"Kelurahan"> | Date | string
    posyandu?: PosyanduListRelationFilter
  }

  export type KelurahanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posyandu?: PosyanduOrderByRelationAggregateInput
  }

  export type KelurahanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: KelurahanWhereInput | KelurahanWhereInput[]
    OR?: KelurahanWhereInput[]
    NOT?: KelurahanWhereInput | KelurahanWhereInput[]
    createdAt?: DateTimeFilter<"Kelurahan"> | Date | string
    updatedAt?: DateTimeFilter<"Kelurahan"> | Date | string
    posyandu?: PosyanduListRelationFilter
  }, "id" | "nama">

  export type KelurahanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KelurahanCountOrderByAggregateInput
    _avg?: KelurahanAvgOrderByAggregateInput
    _max?: KelurahanMaxOrderByAggregateInput
    _min?: KelurahanMinOrderByAggregateInput
    _sum?: KelurahanSumOrderByAggregateInput
  }

  export type KelurahanScalarWhereWithAggregatesInput = {
    AND?: KelurahanScalarWhereWithAggregatesInput | KelurahanScalarWhereWithAggregatesInput[]
    OR?: KelurahanScalarWhereWithAggregatesInput[]
    NOT?: KelurahanScalarWhereWithAggregatesInput | KelurahanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kelurahan"> | number
    nama?: StringWithAggregatesFilter<"Kelurahan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kelurahan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kelurahan"> | Date | string
  }

  export type PosyanduWhereInput = {
    AND?: PosyanduWhereInput | PosyanduWhereInput[]
    OR?: PosyanduWhereInput[]
    NOT?: PosyanduWhereInput | PosyanduWhereInput[]
    id?: IntFilter<"Posyandu"> | number
    nama?: StringFilter<"Posyandu"> | string
    alamat?: StringFilter<"Posyandu"> | string
    wilayah?: StringFilter<"Posyandu"> | string
    kelurahanId?: IntNullableFilter<"Posyandu"> | number | null
    penanggungJawab?: StringFilter<"Posyandu"> | string
    noHp?: StringFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: FloatFilter<"Posyandu"> | number
    latitude?: FloatFilter<"Posyandu"> | number
    createdAt?: DateTimeFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeFilter<"Posyandu"> | Date | string
    kelurahan?: XOR<KelurahanNullableScalarRelationFilter, KelurahanWhereInput> | null
    kader?: KaderListRelationFilter
  }

  export type PosyanduOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahanId?: SortOrderInput | SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelurahan?: KelurahanOrderByWithRelationInput
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
    kelurahanId?: IntNullableFilter<"Posyandu"> | number | null
    penanggungJawab?: StringFilter<"Posyandu"> | string
    noHp?: StringFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: FloatFilter<"Posyandu"> | number
    latitude?: FloatFilter<"Posyandu"> | number
    createdAt?: DateTimeFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeFilter<"Posyandu"> | Date | string
    kelurahan?: XOR<KelurahanNullableScalarRelationFilter, KelurahanWhereInput> | null
    kader?: KaderListRelationFilter
  }, "id">

  export type PosyanduOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahanId?: SortOrderInput | SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
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
    kelurahanId?: IntNullableWithAggregatesFilter<"Posyandu"> | number | null
    penanggungJawab?: StringWithAggregatesFilter<"Posyandu"> | string
    noHp?: StringWithAggregatesFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiWithAggregatesFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: FloatWithAggregatesFilter<"Posyandu"> | number
    latitude?: FloatWithAggregatesFilter<"Posyandu"> | number
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

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    nama?: StringFilter<"Role"> | string
    slug?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    slug?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "nama" | "slug">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    nama?: StringWithAggregatesFilter<"Role"> | string
    slug?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    noHp?: StringFilter<"User"> | string
    noKK?: StringNullableFilter<"User"> | string | null
    nik?: StringFilter<"User"> | string
    tanggalLahir?: DateTimeFilter<"User"> | Date | string
    alamat?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    resetToken?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    noKK?: SortOrderInput | SortOrder
    nik?: SortOrder
    tanggalLahir?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nik?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    noHp?: StringFilter<"User"> | string
    noKK?: StringNullableFilter<"User"> | string | null
    tanggalLahir?: DateTimeFilter<"User"> | Date | string
    alamat?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    resetToken?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "email" | "nik">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    noKK?: SortOrderInput | SortOrder
    nik?: SortOrder
    tanggalLahir?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    noHp?: StringWithAggregatesFilter<"User"> | string
    noKK?: StringNullableWithAggregatesFilter<"User"> | string | null
    nik?: StringWithAggregatesFilter<"User"> | string
    tanggalLahir?: DateTimeWithAggregatesFilter<"User"> | Date | string
    alamat?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    email?: StringFilter<"Otp"> | string
    kode?: StringFilter<"Otp"> | string
    expiredAt?: DateTimeFilter<"Otp"> | Date | string
    verified?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    kode?: SortOrder
    expiredAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    kode?: StringFilter<"Otp"> | string
    expiredAt?: DateTimeFilter<"Otp"> | Date | string
    verified?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    kode?: SortOrder
    expiredAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    email?: StringWithAggregatesFilter<"Otp"> | string
    kode?: StringWithAggregatesFilter<"Otp"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    verified?: BoolWithAggregatesFilter<"Otp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type KelurahanCreateInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posyandu?: PosyanduCreateNestedManyWithoutKelurahanInput
  }

  export type KelurahanUncheckedCreateInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posyandu?: PosyanduUncheckedCreateNestedManyWithoutKelurahanInput
  }

  export type KelurahanUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posyandu?: PosyanduUpdateManyWithoutKelurahanNestedInput
  }

  export type KelurahanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posyandu?: PosyanduUncheckedUpdateManyWithoutKelurahanNestedInput
  }

  export type KelurahanCreateManyInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KelurahanUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelurahanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosyanduCreateInput = {
    nama: string
    alamat: string
    wilayah: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kelurahan?: KelurahanCreateNestedOneWithoutPosyanduInput
    kader?: KaderCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduUncheckedCreateInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahanId?: number | null
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kader?: KaderUncheckedCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelurahan?: KelurahanUpdateOneWithoutPosyanduNestedInput
    kader?: KaderUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahanId?: NullableIntFieldUpdateOperationsInput | number | null
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kader?: KaderUncheckedUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduCreateManyInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahanId?: number | null
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosyanduUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosyanduUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahanId?: NullableIntFieldUpdateOperationsInput | number | null
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
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

  export type RoleCreateInput = {
    nama: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    nama: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    nama: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    email: string
    kode: string
    expiredAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    email: string
    kode: string
    expiredAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: number
    email: string
    kode: string
    expiredAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
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

  export type PosyanduListRelationFilter = {
    every?: PosyanduWhereInput
    some?: PosyanduWhereInput
    none?: PosyanduWhereInput
  }

  export type PosyanduOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelurahanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KelurahanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KelurahanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KelurahanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KelurahanSumOrderByAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumAkreditasiFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiFilter<$PrismaModel> | $Enums.Akreditasi
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type KelurahanNullableScalarRelationFilter = {
    is?: KelurahanWhereInput | null
    isNot?: KelurahanWhereInput | null
  }

  export type KaderListRelationFilter = {
    every?: KaderWhereInput
    some?: KaderWhereInput
    none?: KaderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KaderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PosyanduCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahanId?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduAvgOrderByAggregateInput = {
    id?: SortOrder
    kelurahanId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type PosyanduMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahanId?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    wilayah?: SortOrder
    kelurahanId?: SortOrder
    penanggungJawab?: SortOrder
    noHp?: SortOrder
    akreditasi?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PosyanduSumOrderByAggregateInput = {
    id?: SortOrder
    kelurahanId?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumAkreditasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiWithAggregatesFilter<$PrismaModel> | $Enums.Akreditasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAkreditasiFilter<$PrismaModel>
    _max?: NestedEnumAkreditasiFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    noKK?: SortOrder
    nik?: SortOrder
    tanggalLahir?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    noKK?: SortOrder
    nik?: SortOrder
    tanggalLahir?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    noKK?: SortOrder
    nik?: SortOrder
    tanggalLahir?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    kode?: SortOrder
    expiredAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    kode?: SortOrder
    expiredAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    kode?: SortOrder
    expiredAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PosyanduCreateNestedManyWithoutKelurahanInput = {
    create?: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput> | PosyanduCreateWithoutKelurahanInput[] | PosyanduUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: PosyanduCreateOrConnectWithoutKelurahanInput | PosyanduCreateOrConnectWithoutKelurahanInput[]
    createMany?: PosyanduCreateManyKelurahanInputEnvelope
    connect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
  }

  export type PosyanduUncheckedCreateNestedManyWithoutKelurahanInput = {
    create?: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput> | PosyanduCreateWithoutKelurahanInput[] | PosyanduUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: PosyanduCreateOrConnectWithoutKelurahanInput | PosyanduCreateOrConnectWithoutKelurahanInput[]
    createMany?: PosyanduCreateManyKelurahanInputEnvelope
    connect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PosyanduUpdateManyWithoutKelurahanNestedInput = {
    create?: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput> | PosyanduCreateWithoutKelurahanInput[] | PosyanduUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: PosyanduCreateOrConnectWithoutKelurahanInput | PosyanduCreateOrConnectWithoutKelurahanInput[]
    upsert?: PosyanduUpsertWithWhereUniqueWithoutKelurahanInput | PosyanduUpsertWithWhereUniqueWithoutKelurahanInput[]
    createMany?: PosyanduCreateManyKelurahanInputEnvelope
    set?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    disconnect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    delete?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    connect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    update?: PosyanduUpdateWithWhereUniqueWithoutKelurahanInput | PosyanduUpdateWithWhereUniqueWithoutKelurahanInput[]
    updateMany?: PosyanduUpdateManyWithWhereWithoutKelurahanInput | PosyanduUpdateManyWithWhereWithoutKelurahanInput[]
    deleteMany?: PosyanduScalarWhereInput | PosyanduScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PosyanduUncheckedUpdateManyWithoutKelurahanNestedInput = {
    create?: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput> | PosyanduCreateWithoutKelurahanInput[] | PosyanduUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: PosyanduCreateOrConnectWithoutKelurahanInput | PosyanduCreateOrConnectWithoutKelurahanInput[]
    upsert?: PosyanduUpsertWithWhereUniqueWithoutKelurahanInput | PosyanduUpsertWithWhereUniqueWithoutKelurahanInput[]
    createMany?: PosyanduCreateManyKelurahanInputEnvelope
    set?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    disconnect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    delete?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    connect?: PosyanduWhereUniqueInput | PosyanduWhereUniqueInput[]
    update?: PosyanduUpdateWithWhereUniqueWithoutKelurahanInput | PosyanduUpdateWithWhereUniqueWithoutKelurahanInput[]
    updateMany?: PosyanduUpdateManyWithWhereWithoutKelurahanInput | PosyanduUpdateManyWithWhereWithoutKelurahanInput[]
    deleteMany?: PosyanduScalarWhereInput | PosyanduScalarWhereInput[]
  }

  export type KelurahanCreateNestedOneWithoutPosyanduInput = {
    create?: XOR<KelurahanCreateWithoutPosyanduInput, KelurahanUncheckedCreateWithoutPosyanduInput>
    connectOrCreate?: KelurahanCreateOrConnectWithoutPosyanduInput
    connect?: KelurahanWhereUniqueInput
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

  export type EnumAkreditasiFieldUpdateOperationsInput = {
    set?: $Enums.Akreditasi
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KelurahanUpdateOneWithoutPosyanduNestedInput = {
    create?: XOR<KelurahanCreateWithoutPosyanduInput, KelurahanUncheckedCreateWithoutPosyanduInput>
    connectOrCreate?: KelurahanCreateOrConnectWithoutPosyanduInput
    upsert?: KelurahanUpsertWithoutPosyanduInput
    disconnect?: KelurahanWhereInput | boolean
    delete?: KelurahanWhereInput | boolean
    connect?: KelurahanWhereUniqueInput
    update?: XOR<XOR<KelurahanUpdateToOneWithWhereWithoutPosyanduInput, KelurahanUpdateWithoutPosyanduInput>, KelurahanUncheckedUpdateWithoutPosyanduInput>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAkreditasiFilter<$PrismaModel = never> = {
    equals?: $Enums.Akreditasi | EnumAkreditasiFieldRefInput<$PrismaModel>
    in?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Akreditasi[] | ListEnumAkreditasiFieldRefInput<$PrismaModel>
    not?: NestedEnumAkreditasiFilter<$PrismaModel> | $Enums.Akreditasi
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PosyanduCreateWithoutKelurahanInput = {
    nama: string
    alamat: string
    wilayah: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kader?: KaderCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduUncheckedCreateWithoutKelurahanInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kader?: KaderUncheckedCreateNestedManyWithoutPosyanduInput
  }

  export type PosyanduCreateOrConnectWithoutKelurahanInput = {
    where: PosyanduWhereUniqueInput
    create: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput>
  }

  export type PosyanduCreateManyKelurahanInputEnvelope = {
    data: PosyanduCreateManyKelurahanInput | PosyanduCreateManyKelurahanInput[]
    skipDuplicates?: boolean
  }

  export type PosyanduUpsertWithWhereUniqueWithoutKelurahanInput = {
    where: PosyanduWhereUniqueInput
    update: XOR<PosyanduUpdateWithoutKelurahanInput, PosyanduUncheckedUpdateWithoutKelurahanInput>
    create: XOR<PosyanduCreateWithoutKelurahanInput, PosyanduUncheckedCreateWithoutKelurahanInput>
  }

  export type PosyanduUpdateWithWhereUniqueWithoutKelurahanInput = {
    where: PosyanduWhereUniqueInput
    data: XOR<PosyanduUpdateWithoutKelurahanInput, PosyanduUncheckedUpdateWithoutKelurahanInput>
  }

  export type PosyanduUpdateManyWithWhereWithoutKelurahanInput = {
    where: PosyanduScalarWhereInput
    data: XOR<PosyanduUpdateManyMutationInput, PosyanduUncheckedUpdateManyWithoutKelurahanInput>
  }

  export type PosyanduScalarWhereInput = {
    AND?: PosyanduScalarWhereInput | PosyanduScalarWhereInput[]
    OR?: PosyanduScalarWhereInput[]
    NOT?: PosyanduScalarWhereInput | PosyanduScalarWhereInput[]
    id?: IntFilter<"Posyandu"> | number
    nama?: StringFilter<"Posyandu"> | string
    alamat?: StringFilter<"Posyandu"> | string
    wilayah?: StringFilter<"Posyandu"> | string
    kelurahanId?: IntNullableFilter<"Posyandu"> | number | null
    penanggungJawab?: StringFilter<"Posyandu"> | string
    noHp?: StringFilter<"Posyandu"> | string
    akreditasi?: EnumAkreditasiFilter<"Posyandu"> | $Enums.Akreditasi
    longitude?: FloatFilter<"Posyandu"> | number
    latitude?: FloatFilter<"Posyandu"> | number
    createdAt?: DateTimeFilter<"Posyandu"> | Date | string
    updatedAt?: DateTimeFilter<"Posyandu"> | Date | string
  }

  export type KelurahanCreateWithoutPosyanduInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KelurahanUncheckedCreateWithoutPosyanduInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KelurahanCreateOrConnectWithoutPosyanduInput = {
    where: KelurahanWhereUniqueInput
    create: XOR<KelurahanCreateWithoutPosyanduInput, KelurahanUncheckedCreateWithoutPosyanduInput>
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

  export type KelurahanUpsertWithoutPosyanduInput = {
    update: XOR<KelurahanUpdateWithoutPosyanduInput, KelurahanUncheckedUpdateWithoutPosyanduInput>
    create: XOR<KelurahanCreateWithoutPosyanduInput, KelurahanUncheckedCreateWithoutPosyanduInput>
    where?: KelurahanWhereInput
  }

  export type KelurahanUpdateToOneWithWhereWithoutPosyanduInput = {
    where?: KelurahanWhereInput
    data: XOR<KelurahanUpdateWithoutPosyanduInput, KelurahanUncheckedUpdateWithoutPosyanduInput>
  }

  export type KelurahanUpdateWithoutPosyanduInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelurahanUncheckedUpdateWithoutPosyanduInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kelurahan?: KelurahanCreateNestedOneWithoutPosyanduInput
  }

  export type PosyanduUncheckedCreateWithoutKaderInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    kelurahanId?: number | null
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
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
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelurahan?: KelurahanUpdateOneWithoutPosyanduNestedInput
  }

  export type PosyanduUncheckedUpdateWithoutKaderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    kelurahanId?: NullableIntFieldUpdateOperationsInput | number | null
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    noHp?: StringFilter<"User"> | string
    noKK?: StringNullableFilter<"User"> | string | null
    nik?: StringFilter<"User"> | string
    tanggalLahir?: DateTimeFilter<"User"> | Date | string
    alamat?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    resetToken?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    nama: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    nama: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PosyanduCreateManyKelurahanInput = {
    id?: number
    nama: string
    alamat: string
    wilayah: string
    penanggungJawab: string
    noHp: string
    akreditasi: $Enums.Akreditasi
    longitude: number
    latitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PosyanduUpdateWithoutKelurahanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kader?: KaderUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduUncheckedUpdateWithoutKelurahanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kader?: KaderUncheckedUpdateManyWithoutPosyanduNestedInput
  }

  export type PosyanduUncheckedUpdateManyWithoutKelurahanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    wilayah?: StringFieldUpdateOperationsInput | string
    penanggungJawab?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    akreditasi?: EnumAkreditasiFieldUpdateOperationsInput | $Enums.Akreditasi
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
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

  export type UserCreateManyRoleInput = {
    id?: number
    nama: string
    email: string
    noHp: string
    noKK?: string | null
    nik: string
    tanggalLahir: Date | string
    alamat: string
    password: string
    isVerified?: boolean
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    noKK?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: StringFieldUpdateOperationsInput | string
    tanggalLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
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