/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Integration
 *
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model FeatureSnapshot
 *
 */
export type FeatureSnapshot =
    $Result.DefaultSelection<Prisma.$FeatureSnapshotPayload>;
/**
 * Model RiskScore
 *
 */
export type RiskScore = $Result.DefaultSelection<Prisma.$RiskScorePayload>;

/**
 * Enums
 */
export namespace $Enums {
    export const Provider: {
        google: 'google';
        microsoft: 'microsoft';
        github: 'github';
        jira: 'jira';
        slack: 'slack';
    };

    export type Provider = (typeof Provider)[keyof typeof Provider];

    export const RiskLevel: {
        LOW: 'LOW';
        MODERATE: 'MODERATE';
        HIGH: 'HIGH';
    };

    export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];
}

export type Provider = $Enums.Provider;

export const Provider: typeof $Enums.Provider;

export type RiskLevel = $Enums.RiskLevel;

export const RiskLevel: typeof $Enums.RiskLevel;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions =
        Prisma.PrismaClientOptions,
    const U = 'log' extends keyof ClientOptions
        ? ClientOptions['log'] extends Array<
              Prisma.LogLevel | Prisma.LogDefinition
          >
            ? Prisma.GetEvents<ClientOptions['log']>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://pris.ly/d/client).
     */

    constructor(
        optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
    );
    $on<V extends U>(
        eventType: V,
        callback: (
            event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
        ) => void,
    ): PrismaClient;

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>;

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>;

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(
        query: string,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

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
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

    $transaction<R>(
        fn: (
            prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
        ) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        },
    ): $Utils.JsPromise<R>;

    $extends: $Extensions.ExtendsHook<
        'extends',
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs;
            }
        >
    >;

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
     * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Integrations
     * const integrations = await prisma.integration.findMany()
     * ```
     */
    get integration(): Prisma.IntegrationDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Events
     * const events = await prisma.event.findMany()
     * ```
     */
    get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.featureSnapshot`: Exposes CRUD operations for the **FeatureSnapshot** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more FeatureSnapshots
     * const featureSnapshots = await prisma.featureSnapshot.findMany()
     * ```
     */
    get featureSnapshot(): Prisma.FeatureSnapshotDelegate<
        ExtArgs,
        ClientOptions
    >;

    /**
     * `prisma.riskScore`: Exposes CRUD operations for the **RiskScore** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more RiskScores
     * const riskScores = await prisma.riskScore.findMany()
     * ```
     */
    get riskScore(): Prisma.RiskScoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;

    /**
     * Validator
     */
    export import validator = runtime.Public.validator;

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;

    export type DecimalJsLike = runtime.DecimalJsLike;

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;

    /**
     * Prisma Client JS version: 7.4.1
     * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
     */
    export type PrismaVersion = {
        client: string;
        engine: string;
    };

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    export import Bytes = runtime.Bytes;
    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

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
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
        select: any;
        include: any;
    };

    type SelectAndOmit = {
        select: any;
        omit: any;
    };

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> =
        T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<
        T extends (...args: any) => $Utils.JsPromise<any>,
    > = PromiseType<ReturnType<T>>;

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
    }[keyof T];

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
    };

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & (T extends SelectAndInclude
        ? 'Please either choose `select` or `include`.'
        : T extends SelectAndOmit
          ? 'Please either choose `select` or `omit`.'
          : {});

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & K;

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T;

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
            ? False
            : T extends Date
              ? False
              : T extends Uint8Array
                ? False
                : T extends BigInt
                  ? False
                  : T extends object
                    ? True
                    : False;

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> =
        T extends Array<infer U> ? U : T;

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
        }[K];

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<
        __Either<O, K>
    >;

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>;
        0: EitherLoose<O, K>;
    }[strict];

    type Either<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
    > = O extends unknown ? _Either<O, K, strict> : never;

    export type Union = any;

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    } & {};

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>;
            }
        >
    >;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O
        ? O[K]
        : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown
        ? AtStrict<O, K>
        : never;
    export type At<
        O extends object,
        K extends Key,
        strict extends Boolean = 1,
    > = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
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
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >;

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False;

    // /**
    // 1
    // */
    export type True = 1;

    /**
  0
  */
    export type False = 0;

    export type Not<B extends Boolean> = {
        0: 1;
        1: 0;
    }[B];

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
          ? 1
          : 0;

    export type Has<U extends Union, U1 extends Union> = Not<
        Extends<Exclude<U1, U>, U1>
    >;

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0;
            1: 1;
        };
        1: {
            0: 1;
            1: 1;
        };
    }[B1][B2];

    export type Keys<U extends Union> = U extends unknown ? keyof U : never;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never;
          }
        : never;

    type FieldPaths<
        T,
        U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
    > = IsObject<T> extends True ? U : T;

    type GetHavingFields<T> = {
        [K in keyof T]: Or<
            Or<Extends<'OR', K>, Extends<'AND', K>>,
            Extends<'NOT', K>
        > extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<
                      UnEnumerate<TK> extends object
                          ? Merge<UnEnumerate<TK>>
                          : never
                  >
                : never
            : {} extends FieldPaths<T[K]>
              ? never
              : K;
    }[keyof T];

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<
        T,
        K extends Enumerable<keyof T> | keyof T,
    > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
        ? never
        : T;

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>;

    export const ModelName: {
        User: 'User';
        Integration: 'Integration';
        Event: 'Event';
        FeatureSnapshot: 'FeatureSnapshot';
        RiskScore: 'RiskScore';
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName];

    interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
        { extArgs: $Extensions.InternalArgs },
        $Utils.Record<string, any>
    > {
        returns: Prisma.TypeMap<
            this['params']['extArgs'],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >;
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions;
        };
        meta: {
            modelProps:
                | 'user'
                | 'integration'
                | 'event'
                | 'featureSnapshot'
                | 'riskScore';
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>;
                fields: Prisma.UserFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateUser>;
                    };
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<UserGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<UserCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Integration: {
                payload: Prisma.$IntegrationPayload<ExtArgs>;
                fields: Prisma.IntegrationFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.IntegrationFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    findFirst: {
                        args: Prisma.IntegrationFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    findMany: {
                        args: Prisma.IntegrationFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[];
                    };
                    create: {
                        args: Prisma.IntegrationCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    createMany: {
                        args: Prisma.IntegrationCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.IntegrationCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[];
                    };
                    delete: {
                        args: Prisma.IntegrationDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    update: {
                        args: Prisma.IntegrationUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    deleteMany: {
                        args: Prisma.IntegrationDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.IntegrationUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.IntegrationUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[];
                    };
                    upsert: {
                        args: Prisma.IntegrationUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>;
                    };
                    aggregate: {
                        args: Prisma.IntegrationAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateIntegration>;
                    };
                    groupBy: {
                        args: Prisma.IntegrationGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<IntegrationGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.IntegrationCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<IntegrationCountAggregateOutputType>
                            | number;
                    };
                };
            };
            Event: {
                payload: Prisma.$EventPayload<ExtArgs>;
                fields: Prisma.EventFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.EventFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    findFirst: {
                        args: Prisma.EventFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    findMany: {
                        args: Prisma.EventFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
                    };
                    create: {
                        args: Prisma.EventCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    createMany: {
                        args: Prisma.EventCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
                    };
                    delete: {
                        args: Prisma.EventDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    update: {
                        args: Prisma.EventUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    deleteMany: {
                        args: Prisma.EventDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.EventUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
                    };
                    upsert: {
                        args: Prisma.EventUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$EventPayload>;
                    };
                    aggregate: {
                        args: Prisma.EventAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateEvent>;
                    };
                    groupBy: {
                        args: Prisma.EventGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<EventGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.EventCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<EventCountAggregateOutputType>
                            | number;
                    };
                };
            };
            FeatureSnapshot: {
                payload: Prisma.$FeatureSnapshotPayload<ExtArgs>;
                fields: Prisma.FeatureSnapshotFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.FeatureSnapshotFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.FeatureSnapshotFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    findFirst: {
                        args: Prisma.FeatureSnapshotFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.FeatureSnapshotFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    findMany: {
                        args: Prisma.FeatureSnapshotFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>[];
                    };
                    create: {
                        args: Prisma.FeatureSnapshotCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    createMany: {
                        args: Prisma.FeatureSnapshotCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.FeatureSnapshotCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>[];
                    };
                    delete: {
                        args: Prisma.FeatureSnapshotDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    update: {
                        args: Prisma.FeatureSnapshotUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    deleteMany: {
                        args: Prisma.FeatureSnapshotDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.FeatureSnapshotUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.FeatureSnapshotUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>[];
                    };
                    upsert: {
                        args: Prisma.FeatureSnapshotUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$FeatureSnapshotPayload>;
                    };
                    aggregate: {
                        args: Prisma.FeatureSnapshotAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateFeatureSnapshot>;
                    };
                    groupBy: {
                        args: Prisma.FeatureSnapshotGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<FeatureSnapshotGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.FeatureSnapshotCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<FeatureSnapshotCountAggregateOutputType>
                            | number;
                    };
                };
            };
            RiskScore: {
                payload: Prisma.$RiskScorePayload<ExtArgs>;
                fields: Prisma.RiskScoreFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.RiskScoreFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.RiskScoreFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    findFirst: {
                        args: Prisma.RiskScoreFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.RiskScoreFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    findMany: {
                        args: Prisma.RiskScoreFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                    };
                    create: {
                        args: Prisma.RiskScoreCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    createMany: {
                        args: Prisma.RiskScoreCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.RiskScoreCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                    };
                    delete: {
                        args: Prisma.RiskScoreDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    update: {
                        args: Prisma.RiskScoreUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    deleteMany: {
                        args: Prisma.RiskScoreDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.RiskScoreUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.RiskScoreUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>[];
                    };
                    upsert: {
                        args: Prisma.RiskScoreUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$RiskScorePayload>;
                    };
                    aggregate: {
                        args: Prisma.RiskScoreAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateRiskScore>;
                    };
                    groupBy: {
                        args: Prisma.RiskScoreGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<RiskScoreGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.RiskScoreCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<RiskScoreCountAggregateOutputType>
                            | number;
                    };
                };
            };
        };
    } & {
        other: {
            payload: any;
            operations: {
                $executeRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ];
                    result: any;
                };
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
                $queryRaw: {
                    args: [
                        query: TemplateStringsArray | Prisma.Sql,
                        ...values: any[],
                    ];
                    result: any;
                };
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
            };
        };
    };
    export const defineExtension: $Extensions.ExtendsHook<
        'define',
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >;
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
    export interface PrismaClientOptions {
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat;
        /**
         * @example
         * ```
         * // Shorthand for `emit: 'stdout'`
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events only
         * log: [
         *   { emit: 'event', level: 'query' },
         *   { emit: 'event', level: 'info' },
         *   { emit: 'event', level: 'warn' }
         *   { emit: 'event', level: 'error' }
         * ]
         *
         * / Emit as events and log to stdout
         * og: [
         *  { emit: 'stdout', level: 'query' },
         *  { emit: 'stdout', level: 'info' },
         *  { emit: 'stdout', level: 'warn' }
         *  { emit: 'stdout', level: 'error' }
         *
         * ```
         * Read more in our [docs](https://pris.ly/d/logging).
         */
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        };
        /**
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory;
        /**
         * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
         */
        accelerateUrl?: string;
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
        omit?: Prisma.GlobalOmitConfig;
        /**
         * SQL commenter plugins that add metadata to SQL queries as comments.
         * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
         *
         * @example
         * ```
         * const prisma = new PrismaClient({
         *   adapter,
         *   comments: [
         *     traceContext(),
         *     queryInsights(),
         *   ],
         * })
         * ```
         */
        comments?: runtime.SqlCommenterPlugin[];
    }
    export type GlobalOmitConfig = {
        user?: UserOmit;
        integration?: IntegrationOmit;
        event?: EventOmit;
        featureSnapshot?: FeatureSnapshotOmit;
        riskScore?: RiskScoreOmit;
    };

    /* Types for Logging */
    export type LogLevel = 'info' | 'query' | 'warn' | 'error';
    export type LogDefinition = {
        level: LogLevel;
        emit: 'stdout' | 'event';
    };

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

    export type GetLogType<T> = CheckIsLogLevel<
        T extends LogDefinition ? T['level'] : T
    >;

    export type GetEvents<T extends any[]> =
        T extends Array<LogLevel | LogDefinition>
            ? GetLogType<T[number]>
            : never;

    export type QueryEvent = {
        timestamp: Date;
        query: string;
        params: string;
        duration: number;
        target: string;
    };

    export type LogEvent = {
        timestamp: Date;
        message: string;
        target: string;
    };
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
        | 'groupBy';

    // tested in getLogLevel.test.ts
    export function getLogLevel(
        log: Array<LogLevel | LogDefinition>,
    ): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<
        Prisma.DefaultPrismaClient,
        runtime.ITXClientDenyList
    >;

    export type Datasource = {
        url?: string;
    };

    /**
     * Count Types
     */

    /**
     * Count Type UserCountOutputType
     */

    export type UserCountOutputType = {
        events: number;
        featureSnapshots: number;
        integrations: number;
        riskScores: number;
    };

    export type UserCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        events?: boolean | UserCountOutputTypeCountEventsArgs;
        featureSnapshots?:
            | boolean
            | UserCountOutputTypeCountFeatureSnapshotsArgs;
        integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs;
        riskScores?: boolean | UserCountOutputTypeCountRiskScoresArgs;
    };

    // Custom InputTypes
    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the UserCountOutputType
         */
        select?: UserCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountEventsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: EventWhereInput;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountFeatureSnapshotsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: FeatureSnapshotWhereInput;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountIntegrationsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: IntegrationWhereInput;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountRiskScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: RiskScoreWhereInput;
    };

    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    export type UserMinAggregateOutputType = {
        id: string | null;
        name: string | null;
        telegramId: string | null;
        chatId: string | null;
        createdAt: Date | null;
    };

    export type UserMaxAggregateOutputType = {
        id: string | null;
        name: string | null;
        telegramId: string | null;
        chatId: string | null;
        createdAt: Date | null;
    };

    export type UserCountAggregateOutputType = {
        id: number;
        name: number;
        telegramId: number;
        chatId: number;
        createdAt: number;
        _all: number;
    };

    export type UserMinAggregateInputType = {
        id?: true;
        name?: true;
        telegramId?: true;
        chatId?: true;
        createdAt?: true;
    };

    export type UserMaxAggregateInputType = {
        id?: true;
        name?: true;
        telegramId?: true;
        chatId?: true;
        createdAt?: true;
    };

    export type UserCountAggregateInputType = {
        id?: true;
        name?: true;
        telegramId?: true;
        chatId?: true;
        createdAt?: true;
        _all?: true;
    };

    export type UserAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType;
    };

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>;
    };

    export type UserGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: UserWhereInput;
        orderBy?:
            | UserOrderByWithAggregationInput
            | UserOrderByWithAggregationInput[];
        by: UserScalarFieldEnum[] | UserScalarFieldEnum;
        having?: UserScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: UserCountAggregateInputType | true;
        _min?: UserMinAggregateInputType;
        _max?: UserMaxAggregateInputType;
    };

    export type UserGroupByOutputType = {
        id: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt: Date;
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    type GetUserGroupByPayload<T extends UserGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<UserGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof UserGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], UserGroupByOutputType[P]>
                        : GetScalarType<T[P], UserGroupByOutputType[P]>;
                }
            >
        >;

    export type UserSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            telegramId?: boolean;
            chatId?: boolean;
            createdAt?: boolean;
            events?: boolean | User$eventsArgs<ExtArgs>;
            featureSnapshots?: boolean | User$featureSnapshotsArgs<ExtArgs>;
            integrations?: boolean | User$integrationsArgs<ExtArgs>;
            riskScores?: boolean | User$riskScoresArgs<ExtArgs>;
            _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['user']
    >;

    export type UserSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            telegramId?: boolean;
            chatId?: boolean;
            createdAt?: boolean;
        },
        ExtArgs['result']['user']
    >;

    export type UserSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            name?: boolean;
            telegramId?: boolean;
            chatId?: boolean;
            createdAt?: boolean;
        },
        ExtArgs['result']['user']
    >;

    export type UserSelectScalar = {
        id?: boolean;
        name?: boolean;
        telegramId?: boolean;
        chatId?: boolean;
        createdAt?: boolean;
    };

    export type UserOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        'id' | 'name' | 'telegramId' | 'chatId' | 'createdAt',
        ExtArgs['result']['user']
    >;
    export type UserInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        events?: boolean | User$eventsArgs<ExtArgs>;
        featureSnapshots?: boolean | User$featureSnapshotsArgs<ExtArgs>;
        integrations?: boolean | User$integrationsArgs<ExtArgs>;
        riskScores?: boolean | User$riskScoresArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type UserIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type UserIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $UserPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'User';
        objects: {
            events: Prisma.$EventPayload<ExtArgs>[];
            featureSnapshots: Prisma.$FeatureSnapshotPayload<ExtArgs>[];
            integrations: Prisma.$IntegrationPayload<ExtArgs>[];
            riskScores: Prisma.$RiskScorePayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                name: string;
                telegramId: string;
                chatId: string;
                createdAt: Date;
            },
            ExtArgs['result']['user']
        >;
        composites: {};
    };

    type UserGetPayload<
        S extends boolean | null | undefined | UserDefaultArgs,
    > = $Result.GetResult<Prisma.$UserPayload, S>;

    type UserCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: UserCountAggregateInputType | true;
    };

    export interface UserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['User'];
            meta: { name: 'User' };
        };
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
        findUnique<T extends UserFindUniqueArgs>(
            args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirst<T extends UserFindFirstArgs>(
            args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        findMany<T extends UserFindManyArgs>(
            args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >;

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
        create<T extends UserCreateArgs>(
            args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        createMany<T extends UserCreateManyArgs>(
            args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

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
        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
            args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'createManyAndReturn',
                GlobalOmitOptions
            >
        >;

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
        delete<T extends UserDeleteArgs>(
            args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        update<T extends UserUpdateArgs>(
            args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        deleteMany<T extends UserDeleteManyArgs>(
            args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

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
        updateMany<T extends UserUpdateManyArgs>(
            args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

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
        updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
            args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'updateManyAndReturn',
                GlobalOmitOptions
            >
        >;

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
        upsert<T extends UserUpsertArgs>(
            args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

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
        >;

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
        aggregate<T extends UserAggregateArgs>(
            args: Subset<T, UserAggregateArgs>,
        ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                                ];
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> &
                InputErrors,
        ): {} extends InputErrors
            ? GetUserGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
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
    export interface Prisma__UserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise';
        events<T extends User$eventsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$eventsArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$EventPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >;
        featureSnapshots<T extends User$featureSnapshotsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$featureSnapshotsArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$FeatureSnapshotPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >;
        integrations<T extends User$integrationsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$integrationsArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$IntegrationPayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >;
        riskScores<T extends User$riskScoresArgs<ExtArgs> = {}>(
            args?: Subset<T, User$riskScoresArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$RiskScorePayload<ExtArgs>,
                  T,
                  'findMany',
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null,
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<'User', 'String'>;
        readonly name: FieldRef<'User', 'String'>;
        readonly telegramId: FieldRef<'User', 'String'>;
        readonly chatId: FieldRef<'User', 'String'>;
        readonly createdAt: FieldRef<'User', 'DateTime'>;
    }

    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findMany
     */
    export type UserFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User create
     */
    export type UserCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to create a User.
         */
        data: XOR<UserCreateInput, UserUncheckedCreateInput>;
    };

    /**
     * User createMany
     */
    export type UserCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User createManyAndReturn
     */
    export type UserCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User update
     */
    export type UserUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The data needed to update a User.
         */
        data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
        /**
         * Choose, which User to update.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User updateManyAndReturn
     */
    export type UserUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User upsert
     */
    export type UserUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * The filter to search for the User to update in case it exists.
         */
        where: UserWhereUniqueInput;
        /**
         * In case the User found by the `where` argument doesn't exist, create a new User with this data.
         */
        create: XOR<UserCreateInput, UserUncheckedCreateInput>;
        /**
         * In case the User was found with the provided `where` argument, update it with this data.
         */
        update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    };

    /**
     * User delete
     */
    export type UserDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter which User to delete.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to delete.
         */
        limit?: number;
    };

    /**
     * User.events
     */
    export type User$eventsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        where?: EventWhereInput;
        orderBy?:
            | EventOrderByWithRelationInput
            | EventOrderByWithRelationInput[];
        cursor?: EventWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
    };

    /**
     * User.featureSnapshots
     */
    export type User$featureSnapshotsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        where?: FeatureSnapshotWhereInput;
        orderBy?:
            | FeatureSnapshotOrderByWithRelationInput
            | FeatureSnapshotOrderByWithRelationInput[];
        cursor?: FeatureSnapshotWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?:
            | FeatureSnapshotScalarFieldEnum
            | FeatureSnapshotScalarFieldEnum[];
    };

    /**
     * User.integrations
     */
    export type User$integrationsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        where?: IntegrationWhereInput;
        orderBy?:
            | IntegrationOrderByWithRelationInput
            | IntegrationOrderByWithRelationInput[];
        cursor?: IntegrationWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[];
    };

    /**
     * User.riskScores
     */
    export type User$riskScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        where?: RiskScoreWhereInput;
        orderBy?:
            | RiskScoreOrderByWithRelationInput
            | RiskScoreOrderByWithRelationInput[];
        cursor?: RiskScoreWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: RiskScoreScalarFieldEnum | RiskScoreScalarFieldEnum[];
    };

    /**
     * User without action
     */
    export type UserDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
    };

    /**
     * Model Integration
     */

    export type AggregateIntegration = {
        _count: IntegrationCountAggregateOutputType | null;
        _min: IntegrationMinAggregateOutputType | null;
        _max: IntegrationMaxAggregateOutputType | null;
    };

    export type IntegrationMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        provider: $Enums.Provider | null;
        accessToken: string | null;
        refreshToken: string | null;
        expiresAt: Date | null;
        createdAt: Date | null;
    };

    export type IntegrationMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        provider: $Enums.Provider | null;
        accessToken: string | null;
        refreshToken: string | null;
        expiresAt: Date | null;
        createdAt: Date | null;
    };

    export type IntegrationCountAggregateOutputType = {
        id: number;
        userId: number;
        provider: number;
        accessToken: number;
        refreshToken: number;
        expiresAt: number;
        createdAt: number;
        _all: number;
    };

    export type IntegrationMinAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        accessToken?: true;
        refreshToken?: true;
        expiresAt?: true;
        createdAt?: true;
    };

    export type IntegrationMaxAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        accessToken?: true;
        refreshToken?: true;
        expiresAt?: true;
        createdAt?: true;
    };

    export type IntegrationCountAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        accessToken?: true;
        refreshToken?: true;
        expiresAt?: true;
        createdAt?: true;
        _all?: true;
    };

    export type IntegrationAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Integration to aggregate.
         */
        where?: IntegrationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Integrations to fetch.
         */
        orderBy?:
            | IntegrationOrderByWithRelationInput
            | IntegrationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: IntegrationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Integrations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Integrations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Integrations
         **/
        _count?: true | IntegrationCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: IntegrationMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: IntegrationMaxAggregateInputType;
    };

    export type GetIntegrationAggregateType<
        T extends IntegrationAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateIntegration]: P extends
            | '_count'
            | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateIntegration[P]>
            : GetScalarType<T[P], AggregateIntegration[P]>;
    };

    export type IntegrationGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: IntegrationWhereInput;
        orderBy?:
            | IntegrationOrderByWithAggregationInput
            | IntegrationOrderByWithAggregationInput[];
        by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum;
        having?: IntegrationScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: IntegrationCountAggregateInputType | true;
        _min?: IntegrationMinAggregateInputType;
        _max?: IntegrationMaxAggregateInputType;
    };

    export type IntegrationGroupByOutputType = {
        id: string;
        userId: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken: string | null;
        expiresAt: Date | null;
        createdAt: Date;
        _count: IntegrationCountAggregateOutputType | null;
        _min: IntegrationMinAggregateOutputType | null;
        _max: IntegrationMaxAggregateOutputType | null;
    };

    type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<IntegrationGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof IntegrationGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<
                                  T[P],
                                  IntegrationGroupByOutputType[P]
                              >
                        : GetScalarType<T[P], IntegrationGroupByOutputType[P]>;
                }
            >
        >;

    export type IntegrationSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            accessToken?: boolean;
            refreshToken?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['integration']
    >;

    export type IntegrationSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            accessToken?: boolean;
            refreshToken?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['integration']
    >;

    export type IntegrationSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            accessToken?: boolean;
            refreshToken?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['integration']
    >;

    export type IntegrationSelectScalar = {
        id?: boolean;
        userId?: boolean;
        provider?: boolean;
        accessToken?: boolean;
        refreshToken?: boolean;
        expiresAt?: boolean;
        createdAt?: boolean;
    };

    export type IntegrationOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | 'id'
        | 'userId'
        | 'provider'
        | 'accessToken'
        | 'refreshToken'
        | 'expiresAt'
        | 'createdAt',
        ExtArgs['result']['integration']
    >;
    export type IntegrationInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type IntegrationIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type IntegrationIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $IntegrationPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'Integration';
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                provider: $Enums.Provider;
                accessToken: string;
                refreshToken: string | null;
                expiresAt: Date | null;
                createdAt: Date;
            },
            ExtArgs['result']['integration']
        >;
        composites: {};
    };

    type IntegrationGetPayload<
        S extends boolean | null | undefined | IntegrationDefaultArgs,
    > = $Result.GetResult<Prisma.$IntegrationPayload, S>;

    type IntegrationCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        IntegrationFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: IntegrationCountAggregateInputType | true;
    };

    export interface IntegrationDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['Integration'];
            meta: { name: 'Integration' };
        };
        /**
         * Find zero or one Integration that matches the filter.
         * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
         * @example
         * // Get one Integration
         * const integration = await prisma.integration.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends IntegrationFindUniqueArgs>(
            args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Integration that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
         * @example
         * // Get one Integration
         * const integration = await prisma.integration.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(
            args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Integration that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
         * @example
         * // Get one Integration
         * const integration = await prisma.integration.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends IntegrationFindFirstArgs>(
            args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Integration that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
         * @example
         * // Get one Integration
         * const integration = await prisma.integration.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(
            args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Integrations that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Integrations
         * const integrations = await prisma.integration.findMany()
         *
         * // Get first 10 Integrations
         * const integrations = await prisma.integration.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
         *
         */
        findMany<T extends IntegrationFindManyArgs>(
            args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Integration.
         * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
         * @example
         * // Create one Integration
         * const Integration = await prisma.integration.create({
         *   data: {
         *     // ... data to create a Integration
         *   }
         * })
         *
         */
        create<T extends IntegrationCreateArgs>(
            args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Integrations.
         * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
         * @example
         * // Create many Integrations
         * const integration = await prisma.integration.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends IntegrationCreateManyArgs>(
            args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Integrations and returns the data saved in the database.
         * @param {IntegrationCreateManyAndReturnArgs} args - Arguments to create many Integrations.
         * @example
         * // Create many Integrations
         * const integration = await prisma.integration.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Integrations and only return the `id`
         * const integrationWithIdOnly = await prisma.integration.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(
            args?: SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'createManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Integration.
         * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
         * @example
         * // Delete one Integration
         * const Integration = await prisma.integration.delete({
         *   where: {
         *     // ... filter to delete one Integration
         *   }
         * })
         *
         */
        delete<T extends IntegrationDeleteArgs>(
            args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Integration.
         * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
         * @example
         * // Update one Integration
         * const integration = await prisma.integration.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends IntegrationUpdateArgs>(
            args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Integrations.
         * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
         * @example
         * // Delete a few Integrations
         * const { count } = await prisma.integration.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends IntegrationDeleteManyArgs>(
            args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Integrations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Integrations
         * const integration = await prisma.integration.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends IntegrationUpdateManyArgs>(
            args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Integrations and returns the data updated in the database.
         * @param {IntegrationUpdateManyAndReturnArgs} args - Arguments to update many Integrations.
         * @example
         * // Update many Integrations
         * const integration = await prisma.integration.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Integrations and only return the `id`
         * const integrationWithIdOnly = await prisma.integration.updateManyAndReturn({
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
        updateManyAndReturn<T extends IntegrationUpdateManyAndReturnArgs>(
            args: SelectSubset<T, IntegrationUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'updateManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Integration.
         * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
         * @example
         * // Update or create a Integration
         * const integration = await prisma.integration.upsert({
         *   create: {
         *     // ... data to create a Integration
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Integration we want to update
         *   }
         * })
         */
        upsert<T extends IntegrationUpsertArgs>(
            args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>,
        ): Prisma__IntegrationClient<
            $Result.GetResult<
                Prisma.$IntegrationPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Integrations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
         * @example
         * // Count the number of Integrations
         * const count = await prisma.integration.count({
         *   where: {
         *     // ... the filter for the Integrations we want to count
         *   }
         * })
         **/
        count<T extends IntegrationCountArgs>(
            args?: Subset<T, IntegrationCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          IntegrationCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Integration.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends IntegrationAggregateArgs>(
            args: Subset<T, IntegrationAggregateArgs>,
        ): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>;

        /**
         * Group by Integration.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {IntegrationGroupByArgs} args - Group by arguments.
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
            T extends IntegrationGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: IntegrationGroupByArgs['orderBy'] }
                : { orderBy?: IntegrationGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                                ];
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> &
                InputErrors,
        ): {} extends InputErrors
            ? GetIntegrationGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Integration model
         */
        readonly fields: IntegrationFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Integration.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__IntegrationClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise';
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>,
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null,
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Integration model
     */
    interface IntegrationFieldRefs {
        readonly id: FieldRef<'Integration', 'String'>;
        readonly userId: FieldRef<'Integration', 'String'>;
        readonly provider: FieldRef<'Integration', 'Provider'>;
        readonly accessToken: FieldRef<'Integration', 'String'>;
        readonly refreshToken: FieldRef<'Integration', 'String'>;
        readonly expiresAt: FieldRef<'Integration', 'DateTime'>;
        readonly createdAt: FieldRef<'Integration', 'DateTime'>;
    }

    // Custom InputTypes
    /**
     * Integration findUnique
     */
    export type IntegrationFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter, which Integration to fetch.
         */
        where: IntegrationWhereUniqueInput;
    };

    /**
     * Integration findUniqueOrThrow
     */
    export type IntegrationFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter, which Integration to fetch.
         */
        where: IntegrationWhereUniqueInput;
    };

    /**
     * Integration findFirst
     */
    export type IntegrationFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter, which Integration to fetch.
         */
        where?: IntegrationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Integrations to fetch.
         */
        orderBy?:
            | IntegrationOrderByWithRelationInput
            | IntegrationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Integrations.
         */
        cursor?: IntegrationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Integrations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Integrations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Integrations.
         */
        distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[];
    };

    /**
     * Integration findFirstOrThrow
     */
    export type IntegrationFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter, which Integration to fetch.
         */
        where?: IntegrationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Integrations to fetch.
         */
        orderBy?:
            | IntegrationOrderByWithRelationInput
            | IntegrationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Integrations.
         */
        cursor?: IntegrationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Integrations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Integrations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Integrations.
         */
        distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[];
    };

    /**
     * Integration findMany
     */
    export type IntegrationFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter, which Integrations to fetch.
         */
        where?: IntegrationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Integrations to fetch.
         */
        orderBy?:
            | IntegrationOrderByWithRelationInput
            | IntegrationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Integrations.
         */
        cursor?: IntegrationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Integrations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Integrations.
         */
        skip?: number;
        distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[];
    };

    /**
     * Integration create
     */
    export type IntegrationCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * The data needed to create a Integration.
         */
        data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>;
    };

    /**
     * Integration createMany
     */
    export type IntegrationCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Integrations.
         */
        data: IntegrationCreateManyInput | IntegrationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Integration createManyAndReturn
     */
    export type IntegrationCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * The data used to create many Integrations.
         */
        data: IntegrationCreateManyInput | IntegrationCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Integration update
     */
    export type IntegrationUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * The data needed to update a Integration.
         */
        data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>;
        /**
         * Choose, which Integration to update.
         */
        where: IntegrationWhereUniqueInput;
    };

    /**
     * Integration updateMany
     */
    export type IntegrationUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Integrations.
         */
        data: XOR<
            IntegrationUpdateManyMutationInput,
            IntegrationUncheckedUpdateManyInput
        >;
        /**
         * Filter which Integrations to update
         */
        where?: IntegrationWhereInput;
        /**
         * Limit how many Integrations to update.
         */
        limit?: number;
    };

    /**
     * Integration updateManyAndReturn
     */
    export type IntegrationUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * The data used to update Integrations.
         */
        data: XOR<
            IntegrationUpdateManyMutationInput,
            IntegrationUncheckedUpdateManyInput
        >;
        /**
         * Filter which Integrations to update
         */
        where?: IntegrationWhereInput;
        /**
         * Limit how many Integrations to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Integration upsert
     */
    export type IntegrationUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * The filter to search for the Integration to update in case it exists.
         */
        where: IntegrationWhereUniqueInput;
        /**
         * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
         */
        create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>;
        /**
         * In case the Integration was found with the provided `where` argument, update it with this data.
         */
        update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>;
    };

    /**
     * Integration delete
     */
    export type IntegrationDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
        /**
         * Filter which Integration to delete.
         */
        where: IntegrationWhereUniqueInput;
    };

    /**
     * Integration deleteMany
     */
    export type IntegrationDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Integrations to delete
         */
        where?: IntegrationWhereInput;
        /**
         * Limit how many Integrations to delete.
         */
        limit?: number;
    };

    /**
     * Integration without action
     */
    export type IntegrationDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Integration
         */
        select?: IntegrationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Integration
         */
        omit?: IntegrationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: IntegrationInclude<ExtArgs> | null;
    };

    /**
     * Model Event
     */

    export type AggregateEvent = {
        _count: EventCountAggregateOutputType | null;
        _min: EventMinAggregateOutputType | null;
        _max: EventMaxAggregateOutputType | null;
    };

    export type EventMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        provider: $Enums.Provider | null;
        eventType: string | null;
        externalId: string | null;
        occurredAt: Date | null;
        createdAt: Date | null;
    };

    export type EventMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        provider: $Enums.Provider | null;
        eventType: string | null;
        externalId: string | null;
        occurredAt: Date | null;
        createdAt: Date | null;
    };

    export type EventCountAggregateOutputType = {
        id: number;
        userId: number;
        provider: number;
        eventType: number;
        externalId: number;
        occurredAt: number;
        metadata: number;
        createdAt: number;
        _all: number;
    };

    export type EventMinAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        eventType?: true;
        externalId?: true;
        occurredAt?: true;
        createdAt?: true;
    };

    export type EventMaxAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        eventType?: true;
        externalId?: true;
        occurredAt?: true;
        createdAt?: true;
    };

    export type EventCountAggregateInputType = {
        id?: true;
        userId?: true;
        provider?: true;
        eventType?: true;
        externalId?: true;
        occurredAt?: true;
        metadata?: true;
        createdAt?: true;
        _all?: true;
    };

    export type EventAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Event to aggregate.
         */
        where?: EventWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Events to fetch.
         */
        orderBy?:
            | EventOrderByWithRelationInput
            | EventOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: EventWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Events from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Events.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Events
         **/
        _count?: true | EventCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: EventMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: EventMaxAggregateInputType;
    };

    export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateEvent[P]>
            : GetScalarType<T[P], AggregateEvent[P]>;
    };

    export type EventGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: EventWhereInput;
        orderBy?:
            | EventOrderByWithAggregationInput
            | EventOrderByWithAggregationInput[];
        by: EventScalarFieldEnum[] | EventScalarFieldEnum;
        having?: EventScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: EventCountAggregateInputType | true;
        _min?: EventMinAggregateInputType;
        _max?: EventMaxAggregateInputType;
    };

    export type EventGroupByOutputType = {
        id: string;
        userId: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date;
        metadata: JsonValue;
        createdAt: Date;
        _count: EventCountAggregateOutputType | null;
        _min: EventMinAggregateOutputType | null;
        _max: EventMaxAggregateOutputType | null;
    };

    type GetEventGroupByPayload<T extends EventGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<EventGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof EventGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], EventGroupByOutputType[P]>
                        : GetScalarType<T[P], EventGroupByOutputType[P]>;
                }
            >
        >;

    export type EventSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            eventType?: boolean;
            externalId?: boolean;
            occurredAt?: boolean;
            metadata?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['event']
    >;

    export type EventSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            eventType?: boolean;
            externalId?: boolean;
            occurredAt?: boolean;
            metadata?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['event']
    >;

    export type EventSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            provider?: boolean;
            eventType?: boolean;
            externalId?: boolean;
            occurredAt?: boolean;
            metadata?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['event']
    >;

    export type EventSelectScalar = {
        id?: boolean;
        userId?: boolean;
        provider?: boolean;
        eventType?: boolean;
        externalId?: boolean;
        occurredAt?: boolean;
        metadata?: boolean;
        createdAt?: boolean;
    };

    export type EventOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | 'id'
        | 'userId'
        | 'provider'
        | 'eventType'
        | 'externalId'
        | 'occurredAt'
        | 'metadata'
        | 'createdAt',
        ExtArgs['result']['event']
    >;
    export type EventInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type EventIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type EventIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $EventPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'Event';
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                provider: $Enums.Provider;
                eventType: string;
                externalId: string;
                occurredAt: Date;
                metadata: Prisma.JsonValue;
                createdAt: Date;
            },
            ExtArgs['result']['event']
        >;
        composites: {};
    };

    type EventGetPayload<
        S extends boolean | null | undefined | EventDefaultArgs,
    > = $Result.GetResult<Prisma.$EventPayload, S>;

    type EventCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
        select?: EventCountAggregateInputType | true;
    };

    export interface EventDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['Event'];
            meta: { name: 'Event' };
        };
        /**
         * Find zero or one Event that matches the filter.
         * @param {EventFindUniqueArgs} args - Arguments to find a Event
         * @example
         * // Get one Event
         * const event = await prisma.event.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends EventFindUniqueArgs>(
            args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Event that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
         * @example
         * // Get one Event
         * const event = await prisma.event.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
            args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Event that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventFindFirstArgs} args - Arguments to find a Event
         * @example
         * // Get one Event
         * const event = await prisma.event.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends EventFindFirstArgs>(
            args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Event that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
         * @example
         * // Get one Event
         * const event = await prisma.event.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
            args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Events that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Events
         * const events = await prisma.event.findMany()
         *
         * // Get first 10 Events
         * const events = await prisma.event.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
         *
         */
        findMany<T extends EventFindManyArgs>(
            args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Event.
         * @param {EventCreateArgs} args - Arguments to create a Event.
         * @example
         * // Create one Event
         * const Event = await prisma.event.create({
         *   data: {
         *     // ... data to create a Event
         *   }
         * })
         *
         */
        create<T extends EventCreateArgs>(
            args: SelectSubset<T, EventCreateArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Events.
         * @param {EventCreateManyArgs} args - Arguments to create many Events.
         * @example
         * // Create many Events
         * const event = await prisma.event.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends EventCreateManyArgs>(
            args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Events and returns the data saved in the database.
         * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
         * @example
         * // Create many Events
         * const event = await prisma.event.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Events and only return the `id`
         * const eventWithIdOnly = await prisma.event.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends EventCreateManyAndReturnArgs>(
            args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'createManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Event.
         * @param {EventDeleteArgs} args - Arguments to delete one Event.
         * @example
         * // Delete one Event
         * const Event = await prisma.event.delete({
         *   where: {
         *     // ... filter to delete one Event
         *   }
         * })
         *
         */
        delete<T extends EventDeleteArgs>(
            args: SelectSubset<T, EventDeleteArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Event.
         * @param {EventUpdateArgs} args - Arguments to update one Event.
         * @example
         * // Update one Event
         * const event = await prisma.event.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends EventUpdateArgs>(
            args: SelectSubset<T, EventUpdateArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Events.
         * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
         * @example
         * // Delete a few Events
         * const { count } = await prisma.event.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends EventDeleteManyArgs>(
            args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Events.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Events
         * const event = await prisma.event.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends EventUpdateManyArgs>(
            args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Events and returns the data updated in the database.
         * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
         * @example
         * // Update many Events
         * const event = await prisma.event.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Events and only return the `id`
         * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
        updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(
            args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'updateManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Event.
         * @param {EventUpsertArgs} args - Arguments to update or create a Event.
         * @example
         * // Update or create a Event
         * const event = await prisma.event.upsert({
         *   create: {
         *     // ... data to create a Event
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Event we want to update
         *   }
         * })
         */
        upsert<T extends EventUpsertArgs>(
            args: SelectSubset<T, EventUpsertArgs<ExtArgs>>,
        ): Prisma__EventClient<
            $Result.GetResult<
                Prisma.$EventPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Events.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventCountArgs} args - Arguments to filter Events to count.
         * @example
         * // Count the number of Events
         * const count = await prisma.event.count({
         *   where: {
         *     // ... the filter for the Events we want to count
         *   }
         * })
         **/
        count<T extends EventCountArgs>(
            args?: Subset<T, EventCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<T['select'], EventCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Event.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends EventAggregateArgs>(
            args: Subset<T, EventAggregateArgs>,
        ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

        /**
         * Group by Event.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {EventGroupByArgs} args - Group by arguments.
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
            T extends EventGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: EventGroupByArgs['orderBy'] }
                : { orderBy?: EventGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                                ];
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> &
                InputErrors,
        ): {} extends InputErrors
            ? GetEventGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Event model
         */
        readonly fields: EventFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Event.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__EventClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise';
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>,
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null,
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Event model
     */
    interface EventFieldRefs {
        readonly id: FieldRef<'Event', 'String'>;
        readonly userId: FieldRef<'Event', 'String'>;
        readonly provider: FieldRef<'Event', 'Provider'>;
        readonly eventType: FieldRef<'Event', 'String'>;
        readonly externalId: FieldRef<'Event', 'String'>;
        readonly occurredAt: FieldRef<'Event', 'DateTime'>;
        readonly metadata: FieldRef<'Event', 'Json'>;
        readonly createdAt: FieldRef<'Event', 'DateTime'>;
    }

    // Custom InputTypes
    /**
     * Event findUnique
     */
    export type EventFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter, which Event to fetch.
         */
        where: EventWhereUniqueInput;
    };

    /**
     * Event findUniqueOrThrow
     */
    export type EventFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter, which Event to fetch.
         */
        where: EventWhereUniqueInput;
    };

    /**
     * Event findFirst
     */
    export type EventFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter, which Event to fetch.
         */
        where?: EventWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Events to fetch.
         */
        orderBy?:
            | EventOrderByWithRelationInput
            | EventOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Events.
         */
        cursor?: EventWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Events from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Events.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Events.
         */
        distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
    };

    /**
     * Event findFirstOrThrow
     */
    export type EventFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter, which Event to fetch.
         */
        where?: EventWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Events to fetch.
         */
        orderBy?:
            | EventOrderByWithRelationInput
            | EventOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Events.
         */
        cursor?: EventWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Events from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Events.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Events.
         */
        distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
    };

    /**
     * Event findMany
     */
    export type EventFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter, which Events to fetch.
         */
        where?: EventWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Events to fetch.
         */
        orderBy?:
            | EventOrderByWithRelationInput
            | EventOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Events.
         */
        cursor?: EventWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Events from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Events.
         */
        skip?: number;
        distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
    };

    /**
     * Event create
     */
    export type EventCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * The data needed to create a Event.
         */
        data: XOR<EventCreateInput, EventUncheckedCreateInput>;
    };

    /**
     * Event createMany
     */
    export type EventCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Events.
         */
        data: EventCreateManyInput | EventCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Event createManyAndReturn
     */
    export type EventCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * The data used to create many Events.
         */
        data: EventCreateManyInput | EventCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Event update
     */
    export type EventUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * The data needed to update a Event.
         */
        data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
        /**
         * Choose, which Event to update.
         */
        where: EventWhereUniqueInput;
    };

    /**
     * Event updateMany
     */
    export type EventUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Events.
         */
        data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
        /**
         * Filter which Events to update
         */
        where?: EventWhereInput;
        /**
         * Limit how many Events to update.
         */
        limit?: number;
    };

    /**
     * Event updateManyAndReturn
     */
    export type EventUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * The data used to update Events.
         */
        data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
        /**
         * Filter which Events to update
         */
        where?: EventWhereInput;
        /**
         * Limit how many Events to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Event upsert
     */
    export type EventUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * The filter to search for the Event to update in case it exists.
         */
        where: EventWhereUniqueInput;
        /**
         * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
         */
        create: XOR<EventCreateInput, EventUncheckedCreateInput>;
        /**
         * In case the Event was found with the provided `where` argument, update it with this data.
         */
        update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    };

    /**
     * Event delete
     */
    export type EventDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
        /**
         * Filter which Event to delete.
         */
        where: EventWhereUniqueInput;
    };

    /**
     * Event deleteMany
     */
    export type EventDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Events to delete
         */
        where?: EventWhereInput;
        /**
         * Limit how many Events to delete.
         */
        limit?: number;
    };

    /**
     * Event without action
     */
    export type EventDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Event
         */
        select?: EventSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Event
         */
        omit?: EventOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: EventInclude<ExtArgs> | null;
    };

    /**
     * Model FeatureSnapshot
     */

    export type AggregateFeatureSnapshot = {
        _count: FeatureSnapshotCountAggregateOutputType | null;
        _avg: FeatureSnapshotAvgAggregateOutputType | null;
        _sum: FeatureSnapshotSumAggregateOutputType | null;
        _min: FeatureSnapshotMinAggregateOutputType | null;
        _max: FeatureSnapshotMaxAggregateOutputType | null;
    };

    export type FeatureSnapshotAvgAggregateOutputType = {
        meetingHours: number | null;
        taskBacklog: number | null;
        completionRatio: number | null;
        contextSwitchScore: number | null;
    };

    export type FeatureSnapshotSumAggregateOutputType = {
        meetingHours: number | null;
        taskBacklog: number | null;
        completionRatio: number | null;
        contextSwitchScore: number | null;
    };

    export type FeatureSnapshotMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        meetingHours: number | null;
        taskBacklog: number | null;
        afterHoursActivity: boolean | null;
        completionRatio: number | null;
        contextSwitchScore: number | null;
        createdAt: Date | null;
    };

    export type FeatureSnapshotMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        meetingHours: number | null;
        taskBacklog: number | null;
        afterHoursActivity: boolean | null;
        completionRatio: number | null;
        contextSwitchScore: number | null;
        createdAt: Date | null;
    };

    export type FeatureSnapshotCountAggregateOutputType = {
        id: number;
        userId: number;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: number;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt: number;
        _all: number;
    };

    export type FeatureSnapshotAvgAggregateInputType = {
        meetingHours?: true;
        taskBacklog?: true;
        completionRatio?: true;
        contextSwitchScore?: true;
    };

    export type FeatureSnapshotSumAggregateInputType = {
        meetingHours?: true;
        taskBacklog?: true;
        completionRatio?: true;
        contextSwitchScore?: true;
    };

    export type FeatureSnapshotMinAggregateInputType = {
        id?: true;
        userId?: true;
        meetingHours?: true;
        taskBacklog?: true;
        afterHoursActivity?: true;
        completionRatio?: true;
        contextSwitchScore?: true;
        createdAt?: true;
    };

    export type FeatureSnapshotMaxAggregateInputType = {
        id?: true;
        userId?: true;
        meetingHours?: true;
        taskBacklog?: true;
        afterHoursActivity?: true;
        completionRatio?: true;
        contextSwitchScore?: true;
        createdAt?: true;
    };

    export type FeatureSnapshotCountAggregateInputType = {
        id?: true;
        userId?: true;
        meetingHours?: true;
        taskBacklog?: true;
        afterHoursActivity?: true;
        completionRatio?: true;
        contextSwitchScore?: true;
        createdAt?: true;
        _all?: true;
    };

    export type FeatureSnapshotAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which FeatureSnapshot to aggregate.
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FeatureSnapshots to fetch.
         */
        orderBy?:
            | FeatureSnapshotOrderByWithRelationInput
            | FeatureSnapshotOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: FeatureSnapshotWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FeatureSnapshots from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FeatureSnapshots.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned FeatureSnapshots
         **/
        _count?: true | FeatureSnapshotCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: FeatureSnapshotAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: FeatureSnapshotSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: FeatureSnapshotMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: FeatureSnapshotMaxAggregateInputType;
    };

    export type GetFeatureSnapshotAggregateType<
        T extends FeatureSnapshotAggregateArgs,
    > = {
        [P in keyof T & keyof AggregateFeatureSnapshot]: P extends
            | '_count'
            | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateFeatureSnapshot[P]>
            : GetScalarType<T[P], AggregateFeatureSnapshot[P]>;
    };

    export type FeatureSnapshotGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: FeatureSnapshotWhereInput;
        orderBy?:
            | FeatureSnapshotOrderByWithAggregationInput
            | FeatureSnapshotOrderByWithAggregationInput[];
        by: FeatureSnapshotScalarFieldEnum[] | FeatureSnapshotScalarFieldEnum;
        having?: FeatureSnapshotScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: FeatureSnapshotCountAggregateInputType | true;
        _avg?: FeatureSnapshotAvgAggregateInputType;
        _sum?: FeatureSnapshotSumAggregateInputType;
        _min?: FeatureSnapshotMinAggregateInputType;
        _max?: FeatureSnapshotMaxAggregateInputType;
    };

    export type FeatureSnapshotGroupByOutputType = {
        id: string;
        userId: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt: Date;
        _count: FeatureSnapshotCountAggregateOutputType | null;
        _avg: FeatureSnapshotAvgAggregateOutputType | null;
        _sum: FeatureSnapshotSumAggregateOutputType | null;
        _min: FeatureSnapshotMinAggregateOutputType | null;
        _max: FeatureSnapshotMaxAggregateOutputType | null;
    };

    type GetFeatureSnapshotGroupByPayload<
        T extends FeatureSnapshotGroupByArgs,
    > = Prisma.PrismaPromise<
        Array<
            PickEnumerable<FeatureSnapshotGroupByOutputType, T['by']> & {
                [P in keyof T &
                    keyof FeatureSnapshotGroupByOutputType]: P extends '_count'
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<
                              T[P],
                              FeatureSnapshotGroupByOutputType[P]
                          >
                    : GetScalarType<T[P], FeatureSnapshotGroupByOutputType[P]>;
            }
        >
    >;

    export type FeatureSnapshotSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            meetingHours?: boolean;
            taskBacklog?: boolean;
            afterHoursActivity?: boolean;
            completionRatio?: boolean;
            contextSwitchScore?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['featureSnapshot']
    >;

    export type FeatureSnapshotSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            meetingHours?: boolean;
            taskBacklog?: boolean;
            afterHoursActivity?: boolean;
            completionRatio?: boolean;
            contextSwitchScore?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['featureSnapshot']
    >;

    export type FeatureSnapshotSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            meetingHours?: boolean;
            taskBacklog?: boolean;
            afterHoursActivity?: boolean;
            completionRatio?: boolean;
            contextSwitchScore?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['featureSnapshot']
    >;

    export type FeatureSnapshotSelectScalar = {
        id?: boolean;
        userId?: boolean;
        meetingHours?: boolean;
        taskBacklog?: boolean;
        afterHoursActivity?: boolean;
        completionRatio?: boolean;
        contextSwitchScore?: boolean;
        createdAt?: boolean;
    };

    export type FeatureSnapshotOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | 'id'
        | 'userId'
        | 'meetingHours'
        | 'taskBacklog'
        | 'afterHoursActivity'
        | 'completionRatio'
        | 'contextSwitchScore'
        | 'createdAt',
        ExtArgs['result']['featureSnapshot']
    >;
    export type FeatureSnapshotInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type FeatureSnapshotIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type FeatureSnapshotIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $FeatureSnapshotPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'FeatureSnapshot';
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                meetingHours: number;
                taskBacklog: number;
                afterHoursActivity: boolean;
                completionRatio: number;
                contextSwitchScore: number;
                createdAt: Date;
            },
            ExtArgs['result']['featureSnapshot']
        >;
        composites: {};
    };

    type FeatureSnapshotGetPayload<
        S extends boolean | null | undefined | FeatureSnapshotDefaultArgs,
    > = $Result.GetResult<Prisma.$FeatureSnapshotPayload, S>;

    type FeatureSnapshotCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        FeatureSnapshotFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: FeatureSnapshotCountAggregateInputType | true;
    };

    export interface FeatureSnapshotDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['FeatureSnapshot'];
            meta: { name: 'FeatureSnapshot' };
        };
        /**
         * Find zero or one FeatureSnapshot that matches the filter.
         * @param {FeatureSnapshotFindUniqueArgs} args - Arguments to find a FeatureSnapshot
         * @example
         * // Get one FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends FeatureSnapshotFindUniqueArgs>(
            args: SelectSubset<T, FeatureSnapshotFindUniqueArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one FeatureSnapshot that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {FeatureSnapshotFindUniqueOrThrowArgs} args - Arguments to find a FeatureSnapshot
         * @example
         * // Get one FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends FeatureSnapshotFindUniqueOrThrowArgs>(
            args: SelectSubset<
                T,
                FeatureSnapshotFindUniqueOrThrowArgs<ExtArgs>
            >,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FeatureSnapshot that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotFindFirstArgs} args - Arguments to find a FeatureSnapshot
         * @example
         * // Get one FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends FeatureSnapshotFindFirstArgs>(
            args?: SelectSubset<T, FeatureSnapshotFindFirstArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first FeatureSnapshot that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotFindFirstOrThrowArgs} args - Arguments to find a FeatureSnapshot
         * @example
         * // Get one FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends FeatureSnapshotFindFirstOrThrowArgs>(
            args?: SelectSubset<
                T,
                FeatureSnapshotFindFirstOrThrowArgs<ExtArgs>
            >,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more FeatureSnapshots that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all FeatureSnapshots
         * const featureSnapshots = await prisma.featureSnapshot.findMany()
         *
         * // Get first 10 FeatureSnapshots
         * const featureSnapshots = await prisma.featureSnapshot.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const featureSnapshotWithIdOnly = await prisma.featureSnapshot.findMany({ select: { id: true } })
         *
         */
        findMany<T extends FeatureSnapshotFindManyArgs>(
            args?: SelectSubset<T, FeatureSnapshotFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >;

        /**
         * Create a FeatureSnapshot.
         * @param {FeatureSnapshotCreateArgs} args - Arguments to create a FeatureSnapshot.
         * @example
         * // Create one FeatureSnapshot
         * const FeatureSnapshot = await prisma.featureSnapshot.create({
         *   data: {
         *     // ... data to create a FeatureSnapshot
         *   }
         * })
         *
         */
        create<T extends FeatureSnapshotCreateArgs>(
            args: SelectSubset<T, FeatureSnapshotCreateArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many FeatureSnapshots.
         * @param {FeatureSnapshotCreateManyArgs} args - Arguments to create many FeatureSnapshots.
         * @example
         * // Create many FeatureSnapshots
         * const featureSnapshot = await prisma.featureSnapshot.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends FeatureSnapshotCreateManyArgs>(
            args?: SelectSubset<T, FeatureSnapshotCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many FeatureSnapshots and returns the data saved in the database.
         * @param {FeatureSnapshotCreateManyAndReturnArgs} args - Arguments to create many FeatureSnapshots.
         * @example
         * // Create many FeatureSnapshots
         * const featureSnapshot = await prisma.featureSnapshot.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many FeatureSnapshots and only return the `id`
         * const featureSnapshotWithIdOnly = await prisma.featureSnapshot.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends FeatureSnapshotCreateManyAndReturnArgs>(
            args?: SelectSubset<
                T,
                FeatureSnapshotCreateManyAndReturnArgs<ExtArgs>
            >,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'createManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a FeatureSnapshot.
         * @param {FeatureSnapshotDeleteArgs} args - Arguments to delete one FeatureSnapshot.
         * @example
         * // Delete one FeatureSnapshot
         * const FeatureSnapshot = await prisma.featureSnapshot.delete({
         *   where: {
         *     // ... filter to delete one FeatureSnapshot
         *   }
         * })
         *
         */
        delete<T extends FeatureSnapshotDeleteArgs>(
            args: SelectSubset<T, FeatureSnapshotDeleteArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one FeatureSnapshot.
         * @param {FeatureSnapshotUpdateArgs} args - Arguments to update one FeatureSnapshot.
         * @example
         * // Update one FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends FeatureSnapshotUpdateArgs>(
            args: SelectSubset<T, FeatureSnapshotUpdateArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more FeatureSnapshots.
         * @param {FeatureSnapshotDeleteManyArgs} args - Arguments to filter FeatureSnapshots to delete.
         * @example
         * // Delete a few FeatureSnapshots
         * const { count } = await prisma.featureSnapshot.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends FeatureSnapshotDeleteManyArgs>(
            args?: SelectSubset<T, FeatureSnapshotDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FeatureSnapshots.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many FeatureSnapshots
         * const featureSnapshot = await prisma.featureSnapshot.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends FeatureSnapshotUpdateManyArgs>(
            args: SelectSubset<T, FeatureSnapshotUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more FeatureSnapshots and returns the data updated in the database.
         * @param {FeatureSnapshotUpdateManyAndReturnArgs} args - Arguments to update many FeatureSnapshots.
         * @example
         * // Update many FeatureSnapshots
         * const featureSnapshot = await prisma.featureSnapshot.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more FeatureSnapshots and only return the `id`
         * const featureSnapshotWithIdOnly = await prisma.featureSnapshot.updateManyAndReturn({
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
        updateManyAndReturn<T extends FeatureSnapshotUpdateManyAndReturnArgs>(
            args: SelectSubset<
                T,
                FeatureSnapshotUpdateManyAndReturnArgs<ExtArgs>
            >,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'updateManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one FeatureSnapshot.
         * @param {FeatureSnapshotUpsertArgs} args - Arguments to update or create a FeatureSnapshot.
         * @example
         * // Update or create a FeatureSnapshot
         * const featureSnapshot = await prisma.featureSnapshot.upsert({
         *   create: {
         *     // ... data to create a FeatureSnapshot
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the FeatureSnapshot we want to update
         *   }
         * })
         */
        upsert<T extends FeatureSnapshotUpsertArgs>(
            args: SelectSubset<T, FeatureSnapshotUpsertArgs<ExtArgs>>,
        ): Prisma__FeatureSnapshotClient<
            $Result.GetResult<
                Prisma.$FeatureSnapshotPayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of FeatureSnapshots.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotCountArgs} args - Arguments to filter FeatureSnapshots to count.
         * @example
         * // Count the number of FeatureSnapshots
         * const count = await prisma.featureSnapshot.count({
         *   where: {
         *     // ... the filter for the FeatureSnapshots we want to count
         *   }
         * })
         **/
        count<T extends FeatureSnapshotCountArgs>(
            args?: Subset<T, FeatureSnapshotCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          FeatureSnapshotCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a FeatureSnapshot.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends FeatureSnapshotAggregateArgs>(
            args: Subset<T, FeatureSnapshotAggregateArgs>,
        ): Prisma.PrismaPromise<GetFeatureSnapshotAggregateType<T>>;

        /**
         * Group by FeatureSnapshot.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {FeatureSnapshotGroupByArgs} args - Group by arguments.
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
            T extends FeatureSnapshotGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: FeatureSnapshotGroupByArgs['orderBy'] }
                : { orderBy?: FeatureSnapshotGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                                ];
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<
                T,
                FeatureSnapshotGroupByArgs,
                OrderByArg
            > &
                InputErrors,
        ): {} extends InputErrors
            ? GetFeatureSnapshotGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the FeatureSnapshot model
         */
        readonly fields: FeatureSnapshotFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for FeatureSnapshot.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__FeatureSnapshotClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise';
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>,
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null,
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the FeatureSnapshot model
     */
    interface FeatureSnapshotFieldRefs {
        readonly id: FieldRef<'FeatureSnapshot', 'String'>;
        readonly userId: FieldRef<'FeatureSnapshot', 'String'>;
        readonly meetingHours: FieldRef<'FeatureSnapshot', 'Float'>;
        readonly taskBacklog: FieldRef<'FeatureSnapshot', 'Int'>;
        readonly afterHoursActivity: FieldRef<'FeatureSnapshot', 'Boolean'>;
        readonly completionRatio: FieldRef<'FeatureSnapshot', 'Float'>;
        readonly contextSwitchScore: FieldRef<'FeatureSnapshot', 'Float'>;
        readonly createdAt: FieldRef<'FeatureSnapshot', 'DateTime'>;
    }

    // Custom InputTypes
    /**
     * FeatureSnapshot findUnique
     */
    export type FeatureSnapshotFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter, which FeatureSnapshot to fetch.
         */
        where: FeatureSnapshotWhereUniqueInput;
    };

    /**
     * FeatureSnapshot findUniqueOrThrow
     */
    export type FeatureSnapshotFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter, which FeatureSnapshot to fetch.
         */
        where: FeatureSnapshotWhereUniqueInput;
    };

    /**
     * FeatureSnapshot findFirst
     */
    export type FeatureSnapshotFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter, which FeatureSnapshot to fetch.
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FeatureSnapshots to fetch.
         */
        orderBy?:
            | FeatureSnapshotOrderByWithRelationInput
            | FeatureSnapshotOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FeatureSnapshots.
         */
        cursor?: FeatureSnapshotWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FeatureSnapshots from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FeatureSnapshots.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FeatureSnapshots.
         */
        distinct?:
            | FeatureSnapshotScalarFieldEnum
            | FeatureSnapshotScalarFieldEnum[];
    };

    /**
     * FeatureSnapshot findFirstOrThrow
     */
    export type FeatureSnapshotFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter, which FeatureSnapshot to fetch.
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FeatureSnapshots to fetch.
         */
        orderBy?:
            | FeatureSnapshotOrderByWithRelationInput
            | FeatureSnapshotOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for FeatureSnapshots.
         */
        cursor?: FeatureSnapshotWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FeatureSnapshots from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FeatureSnapshots.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of FeatureSnapshots.
         */
        distinct?:
            | FeatureSnapshotScalarFieldEnum
            | FeatureSnapshotScalarFieldEnum[];
    };

    /**
     * FeatureSnapshot findMany
     */
    export type FeatureSnapshotFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter, which FeatureSnapshots to fetch.
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of FeatureSnapshots to fetch.
         */
        orderBy?:
            | FeatureSnapshotOrderByWithRelationInput
            | FeatureSnapshotOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing FeatureSnapshots.
         */
        cursor?: FeatureSnapshotWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` FeatureSnapshots from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` FeatureSnapshots.
         */
        skip?: number;
        distinct?:
            | FeatureSnapshotScalarFieldEnum
            | FeatureSnapshotScalarFieldEnum[];
    };

    /**
     * FeatureSnapshot create
     */
    export type FeatureSnapshotCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * The data needed to create a FeatureSnapshot.
         */
        data: XOR<
            FeatureSnapshotCreateInput,
            FeatureSnapshotUncheckedCreateInput
        >;
    };

    /**
     * FeatureSnapshot createMany
     */
    export type FeatureSnapshotCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many FeatureSnapshots.
         */
        data: FeatureSnapshotCreateManyInput | FeatureSnapshotCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * FeatureSnapshot createManyAndReturn
     */
    export type FeatureSnapshotCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * The data used to create many FeatureSnapshots.
         */
        data: FeatureSnapshotCreateManyInput | FeatureSnapshotCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FeatureSnapshot update
     */
    export type FeatureSnapshotUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * The data needed to update a FeatureSnapshot.
         */
        data: XOR<
            FeatureSnapshotUpdateInput,
            FeatureSnapshotUncheckedUpdateInput
        >;
        /**
         * Choose, which FeatureSnapshot to update.
         */
        where: FeatureSnapshotWhereUniqueInput;
    };

    /**
     * FeatureSnapshot updateMany
     */
    export type FeatureSnapshotUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update FeatureSnapshots.
         */
        data: XOR<
            FeatureSnapshotUpdateManyMutationInput,
            FeatureSnapshotUncheckedUpdateManyInput
        >;
        /**
         * Filter which FeatureSnapshots to update
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * Limit how many FeatureSnapshots to update.
         */
        limit?: number;
    };

    /**
     * FeatureSnapshot updateManyAndReturn
     */
    export type FeatureSnapshotUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * The data used to update FeatureSnapshots.
         */
        data: XOR<
            FeatureSnapshotUpdateManyMutationInput,
            FeatureSnapshotUncheckedUpdateManyInput
        >;
        /**
         * Filter which FeatureSnapshots to update
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * Limit how many FeatureSnapshots to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * FeatureSnapshot upsert
     */
    export type FeatureSnapshotUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * The filter to search for the FeatureSnapshot to update in case it exists.
         */
        where: FeatureSnapshotWhereUniqueInput;
        /**
         * In case the FeatureSnapshot found by the `where` argument doesn't exist, create a new FeatureSnapshot with this data.
         */
        create: XOR<
            FeatureSnapshotCreateInput,
            FeatureSnapshotUncheckedCreateInput
        >;
        /**
         * In case the FeatureSnapshot was found with the provided `where` argument, update it with this data.
         */
        update: XOR<
            FeatureSnapshotUpdateInput,
            FeatureSnapshotUncheckedUpdateInput
        >;
    };

    /**
     * FeatureSnapshot delete
     */
    export type FeatureSnapshotDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
        /**
         * Filter which FeatureSnapshot to delete.
         */
        where: FeatureSnapshotWhereUniqueInput;
    };

    /**
     * FeatureSnapshot deleteMany
     */
    export type FeatureSnapshotDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which FeatureSnapshots to delete
         */
        where?: FeatureSnapshotWhereInput;
        /**
         * Limit how many FeatureSnapshots to delete.
         */
        limit?: number;
    };

    /**
     * FeatureSnapshot without action
     */
    export type FeatureSnapshotDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the FeatureSnapshot
         */
        select?: FeatureSnapshotSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the FeatureSnapshot
         */
        omit?: FeatureSnapshotOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: FeatureSnapshotInclude<ExtArgs> | null;
    };

    /**
     * Model RiskScore
     */

    export type AggregateRiskScore = {
        _count: RiskScoreCountAggregateOutputType | null;
        _avg: RiskScoreAvgAggregateOutputType | null;
        _sum: RiskScoreSumAggregateOutputType | null;
        _min: RiskScoreMinAggregateOutputType | null;
        _max: RiskScoreMaxAggregateOutputType | null;
    };

    export type RiskScoreAvgAggregateOutputType = {
        riskProbability: number | null;
    };

    export type RiskScoreSumAggregateOutputType = {
        riskProbability: number | null;
    };

    export type RiskScoreMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        riskProbability: number | null;
        riskLevel: $Enums.RiskLevel | null;
        createdAt: Date | null;
    };

    export type RiskScoreMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        riskProbability: number | null;
        riskLevel: $Enums.RiskLevel | null;
        createdAt: Date | null;
    };

    export type RiskScoreCountAggregateOutputType = {
        id: number;
        userId: number;
        riskProbability: number;
        riskLevel: number;
        createdAt: number;
        _all: number;
    };

    export type RiskScoreAvgAggregateInputType = {
        riskProbability?: true;
    };

    export type RiskScoreSumAggregateInputType = {
        riskProbability?: true;
    };

    export type RiskScoreMinAggregateInputType = {
        id?: true;
        userId?: true;
        riskProbability?: true;
        riskLevel?: true;
        createdAt?: true;
    };

    export type RiskScoreMaxAggregateInputType = {
        id?: true;
        userId?: true;
        riskProbability?: true;
        riskLevel?: true;
        createdAt?: true;
    };

    export type RiskScoreCountAggregateInputType = {
        id?: true;
        userId?: true;
        riskProbability?: true;
        riskLevel?: true;
        createdAt?: true;
        _all?: true;
    };

    export type RiskScoreAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which RiskScore to aggregate.
         */
        where?: RiskScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of RiskScores to fetch.
         */
        orderBy?:
            | RiskScoreOrderByWithRelationInput
            | RiskScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: RiskScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` RiskScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` RiskScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned RiskScores
         **/
        _count?: true | RiskScoreCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: RiskScoreAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: RiskScoreSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: RiskScoreMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: RiskScoreMaxAggregateInputType;
    };

    export type GetRiskScoreAggregateType<T extends RiskScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskScore]: P extends '_count' | 'count'
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateRiskScore[P]>
            : GetScalarType<T[P], AggregateRiskScore[P]>;
    };

    export type RiskScoreGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: RiskScoreWhereInput;
        orderBy?:
            | RiskScoreOrderByWithAggregationInput
            | RiskScoreOrderByWithAggregationInput[];
        by: RiskScoreScalarFieldEnum[] | RiskScoreScalarFieldEnum;
        having?: RiskScoreScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: RiskScoreCountAggregateInputType | true;
        _avg?: RiskScoreAvgAggregateInputType;
        _sum?: RiskScoreSumAggregateInputType;
        _min?: RiskScoreMinAggregateInputType;
        _max?: RiskScoreMaxAggregateInputType;
    };

    export type RiskScoreGroupByOutputType = {
        id: string;
        userId: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt: Date;
        _count: RiskScoreCountAggregateOutputType | null;
        _avg: RiskScoreAvgAggregateOutputType | null;
        _sum: RiskScoreSumAggregateOutputType | null;
        _min: RiskScoreMinAggregateOutputType | null;
        _max: RiskScoreMaxAggregateOutputType | null;
    };

    type GetRiskScoreGroupByPayload<T extends RiskScoreGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<RiskScoreGroupByOutputType, T['by']> & {
                    [P in keyof T &
                        keyof RiskScoreGroupByOutputType]: P extends '_count'
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], RiskScoreGroupByOutputType[P]>
                        : GetScalarType<T[P], RiskScoreGroupByOutputType[P]>;
                }
            >
        >;

    export type RiskScoreSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            riskProbability?: boolean;
            riskLevel?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['riskScore']
    >;

    export type RiskScoreSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            riskProbability?: boolean;
            riskLevel?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['riskScore']
    >;

    export type RiskScoreSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            riskProbability?: boolean;
            riskLevel?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs['result']['riskScore']
    >;

    export type RiskScoreSelectScalar = {
        id?: boolean;
        userId?: boolean;
        riskProbability?: boolean;
        riskLevel?: boolean;
        createdAt?: boolean;
    };

    export type RiskScoreOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        'id' | 'userId' | 'riskProbability' | 'riskLevel' | 'createdAt',
        ExtArgs['result']['riskScore']
    >;
    export type RiskScoreInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type RiskScoreIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type RiskScoreIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $RiskScorePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: 'RiskScore';
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                riskProbability: number;
                riskLevel: $Enums.RiskLevel;
                createdAt: Date;
            },
            ExtArgs['result']['riskScore']
        >;
        composites: {};
    };

    type RiskScoreGetPayload<
        S extends boolean | null | undefined | RiskScoreDefaultArgs,
    > = $Result.GetResult<Prisma.$RiskScorePayload, S>;

    type RiskScoreCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<
        RiskScoreFindManyArgs,
        'select' | 'include' | 'distinct' | 'omit'
    > & {
        select?: RiskScoreCountAggregateInputType | true;
    };

    export interface RiskScoreDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>['model']['RiskScore'];
            meta: { name: 'RiskScore' };
        };
        /**
         * Find zero or one RiskScore that matches the filter.
         * @param {RiskScoreFindUniqueArgs} args - Arguments to find a RiskScore
         * @example
         * // Get one RiskScore
         * const riskScore = await prisma.riskScore.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends RiskScoreFindUniqueArgs>(
            args: SelectSubset<T, RiskScoreFindUniqueArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'findUnique',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one RiskScore that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {RiskScoreFindUniqueOrThrowArgs} args - Arguments to find a RiskScore
         * @example
         * // Get one RiskScore
         * const riskScore = await prisma.riskScore.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends RiskScoreFindUniqueOrThrowArgs>(
            args: SelectSubset<T, RiskScoreFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'findUniqueOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first RiskScore that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreFindFirstArgs} args - Arguments to find a RiskScore
         * @example
         * // Get one RiskScore
         * const riskScore = await prisma.riskScore.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends RiskScoreFindFirstArgs>(
            args?: SelectSubset<T, RiskScoreFindFirstArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'findFirst',
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first RiskScore that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreFindFirstOrThrowArgs} args - Arguments to find a RiskScore
         * @example
         * // Get one RiskScore
         * const riskScore = await prisma.riskScore.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends RiskScoreFindFirstOrThrowArgs>(
            args?: SelectSubset<T, RiskScoreFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'findFirstOrThrow',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more RiskScores that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all RiskScores
         * const riskScores = await prisma.riskScore.findMany()
         *
         * // Get first 10 RiskScores
         * const riskScores = await prisma.riskScore.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const riskScoreWithIdOnly = await prisma.riskScore.findMany({ select: { id: true } })
         *
         */
        findMany<T extends RiskScoreFindManyArgs>(
            args?: SelectSubset<T, RiskScoreFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'findMany',
                GlobalOmitOptions
            >
        >;

        /**
         * Create a RiskScore.
         * @param {RiskScoreCreateArgs} args - Arguments to create a RiskScore.
         * @example
         * // Create one RiskScore
         * const RiskScore = await prisma.riskScore.create({
         *   data: {
         *     // ... data to create a RiskScore
         *   }
         * })
         *
         */
        create<T extends RiskScoreCreateArgs>(
            args: SelectSubset<T, RiskScoreCreateArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'create',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many RiskScores.
         * @param {RiskScoreCreateManyArgs} args - Arguments to create many RiskScores.
         * @example
         * // Create many RiskScores
         * const riskScore = await prisma.riskScore.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends RiskScoreCreateManyArgs>(
            args?: SelectSubset<T, RiskScoreCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many RiskScores and returns the data saved in the database.
         * @param {RiskScoreCreateManyAndReturnArgs} args - Arguments to create many RiskScores.
         * @example
         * // Create many RiskScores
         * const riskScore = await prisma.riskScore.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many RiskScores and only return the `id`
         * const riskScoreWithIdOnly = await prisma.riskScore.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends RiskScoreCreateManyAndReturnArgs>(
            args?: SelectSubset<T, RiskScoreCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'createManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a RiskScore.
         * @param {RiskScoreDeleteArgs} args - Arguments to delete one RiskScore.
         * @example
         * // Delete one RiskScore
         * const RiskScore = await prisma.riskScore.delete({
         *   where: {
         *     // ... filter to delete one RiskScore
         *   }
         * })
         *
         */
        delete<T extends RiskScoreDeleteArgs>(
            args: SelectSubset<T, RiskScoreDeleteArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'delete',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one RiskScore.
         * @param {RiskScoreUpdateArgs} args - Arguments to update one RiskScore.
         * @example
         * // Update one RiskScore
         * const riskScore = await prisma.riskScore.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends RiskScoreUpdateArgs>(
            args: SelectSubset<T, RiskScoreUpdateArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'update',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more RiskScores.
         * @param {RiskScoreDeleteManyArgs} args - Arguments to filter RiskScores to delete.
         * @example
         * // Delete a few RiskScores
         * const { count } = await prisma.riskScore.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends RiskScoreDeleteManyArgs>(
            args?: SelectSubset<T, RiskScoreDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more RiskScores.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many RiskScores
         * const riskScore = await prisma.riskScore.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends RiskScoreUpdateManyArgs>(
            args: SelectSubset<T, RiskScoreUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more RiskScores and returns the data updated in the database.
         * @param {RiskScoreUpdateManyAndReturnArgs} args - Arguments to update many RiskScores.
         * @example
         * // Update many RiskScores
         * const riskScore = await prisma.riskScore.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more RiskScores and only return the `id`
         * const riskScoreWithIdOnly = await prisma.riskScore.updateManyAndReturn({
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
        updateManyAndReturn<T extends RiskScoreUpdateManyAndReturnArgs>(
            args: SelectSubset<T, RiskScoreUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'updateManyAndReturn',
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one RiskScore.
         * @param {RiskScoreUpsertArgs} args - Arguments to update or create a RiskScore.
         * @example
         * // Update or create a RiskScore
         * const riskScore = await prisma.riskScore.upsert({
         *   create: {
         *     // ... data to create a RiskScore
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the RiskScore we want to update
         *   }
         * })
         */
        upsert<T extends RiskScoreUpsertArgs>(
            args: SelectSubset<T, RiskScoreUpsertArgs<ExtArgs>>,
        ): Prisma__RiskScoreClient<
            $Result.GetResult<
                Prisma.$RiskScorePayload<ExtArgs>,
                T,
                'upsert',
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of RiskScores.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreCountArgs} args - Arguments to filter RiskScores to count.
         * @example
         * // Count the number of RiskScores
         * const count = await prisma.riskScore.count({
         *   where: {
         *     // ... the filter for the RiskScores we want to count
         *   }
         * })
         **/
        count<T extends RiskScoreCountArgs>(
            args?: Subset<T, RiskScoreCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<'select', any>
                ? T['select'] extends true
                    ? number
                    : GetScalarType<
                          T['select'],
                          RiskScoreCountAggregateOutputType
                      >
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a RiskScore.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends RiskScoreAggregateArgs>(
            args: Subset<T, RiskScoreAggregateArgs>,
        ): Prisma.PrismaPromise<GetRiskScoreAggregateType<T>>;

        /**
         * Group by RiskScore.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {RiskScoreGroupByArgs} args - Group by arguments.
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
            T extends RiskScoreGroupByArgs,
            HasSelectOrTake extends Or<
                Extends<'skip', Keys<T>>,
                Extends<'take', Keys<T>>
            >,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: RiskScoreGroupByArgs['orderBy'] }
                : { orderBy?: RiskScoreGroupByArgs['orderBy'] },
            OrderFields extends ExcludeUnderscoreKeys<
                Keys<MaybeTupleToUnion<T['orderBy']>>
            >,
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
                                ];
                    }[HavingFields]
                  : 'take' extends Keys<T>
                    ? 'orderBy' extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : 'skip' extends Keys<T>
                      ? 'orderBy' extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, RiskScoreGroupByArgs, OrderByArg> &
                InputErrors,
        ): {} extends InputErrors
            ? GetRiskScoreGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the RiskScore model
         */
        readonly fields: RiskScoreFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for RiskScore.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__RiskScoreClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: 'PrismaPromise';
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>,
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  'findUniqueOrThrow',
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?:
                | ((value: T) => TResult1 | PromiseLike<TResult1>)
                | undefined
                | null,
            onrejected?:
                | ((reason: any) => TResult2 | PromiseLike<TResult2>)
                | undefined
                | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?:
                | ((reason: any) => TResult | PromiseLike<TResult>)
                | undefined
                | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(
            onfinally?: (() => void) | undefined | null,
        ): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the RiskScore model
     */
    interface RiskScoreFieldRefs {
        readonly id: FieldRef<'RiskScore', 'String'>;
        readonly userId: FieldRef<'RiskScore', 'String'>;
        readonly riskProbability: FieldRef<'RiskScore', 'Float'>;
        readonly riskLevel: FieldRef<'RiskScore', 'RiskLevel'>;
        readonly createdAt: FieldRef<'RiskScore', 'DateTime'>;
    }

    // Custom InputTypes
    /**
     * RiskScore findUnique
     */
    export type RiskScoreFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter, which RiskScore to fetch.
         */
        where: RiskScoreWhereUniqueInput;
    };

    /**
     * RiskScore findUniqueOrThrow
     */
    export type RiskScoreFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter, which RiskScore to fetch.
         */
        where: RiskScoreWhereUniqueInput;
    };

    /**
     * RiskScore findFirst
     */
    export type RiskScoreFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter, which RiskScore to fetch.
         */
        where?: RiskScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of RiskScores to fetch.
         */
        orderBy?:
            | RiskScoreOrderByWithRelationInput
            | RiskScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for RiskScores.
         */
        cursor?: RiskScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` RiskScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` RiskScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of RiskScores.
         */
        distinct?: RiskScoreScalarFieldEnum | RiskScoreScalarFieldEnum[];
    };

    /**
     * RiskScore findFirstOrThrow
     */
    export type RiskScoreFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter, which RiskScore to fetch.
         */
        where?: RiskScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of RiskScores to fetch.
         */
        orderBy?:
            | RiskScoreOrderByWithRelationInput
            | RiskScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for RiskScores.
         */
        cursor?: RiskScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` RiskScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` RiskScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of RiskScores.
         */
        distinct?: RiskScoreScalarFieldEnum | RiskScoreScalarFieldEnum[];
    };

    /**
     * RiskScore findMany
     */
    export type RiskScoreFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter, which RiskScores to fetch.
         */
        where?: RiskScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of RiskScores to fetch.
         */
        orderBy?:
            | RiskScoreOrderByWithRelationInput
            | RiskScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing RiskScores.
         */
        cursor?: RiskScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` RiskScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` RiskScores.
         */
        skip?: number;
        distinct?: RiskScoreScalarFieldEnum | RiskScoreScalarFieldEnum[];
    };

    /**
     * RiskScore create
     */
    export type RiskScoreCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * The data needed to create a RiskScore.
         */
        data: XOR<RiskScoreCreateInput, RiskScoreUncheckedCreateInput>;
    };

    /**
     * RiskScore createMany
     */
    export type RiskScoreCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many RiskScores.
         */
        data: RiskScoreCreateManyInput | RiskScoreCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * RiskScore createManyAndReturn
     */
    export type RiskScoreCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * The data used to create many RiskScores.
         */
        data: RiskScoreCreateManyInput | RiskScoreCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * RiskScore update
     */
    export type RiskScoreUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * The data needed to update a RiskScore.
         */
        data: XOR<RiskScoreUpdateInput, RiskScoreUncheckedUpdateInput>;
        /**
         * Choose, which RiskScore to update.
         */
        where: RiskScoreWhereUniqueInput;
    };

    /**
     * RiskScore updateMany
     */
    export type RiskScoreUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update RiskScores.
         */
        data: XOR<
            RiskScoreUpdateManyMutationInput,
            RiskScoreUncheckedUpdateManyInput
        >;
        /**
         * Filter which RiskScores to update
         */
        where?: RiskScoreWhereInput;
        /**
         * Limit how many RiskScores to update.
         */
        limit?: number;
    };

    /**
     * RiskScore updateManyAndReturn
     */
    export type RiskScoreUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * The data used to update RiskScores.
         */
        data: XOR<
            RiskScoreUpdateManyMutationInput,
            RiskScoreUncheckedUpdateManyInput
        >;
        /**
         * Filter which RiskScores to update
         */
        where?: RiskScoreWhereInput;
        /**
         * Limit how many RiskScores to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * RiskScore upsert
     */
    export type RiskScoreUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * The filter to search for the RiskScore to update in case it exists.
         */
        where: RiskScoreWhereUniqueInput;
        /**
         * In case the RiskScore found by the `where` argument doesn't exist, create a new RiskScore with this data.
         */
        create: XOR<RiskScoreCreateInput, RiskScoreUncheckedCreateInput>;
        /**
         * In case the RiskScore was found with the provided `where` argument, update it with this data.
         */
        update: XOR<RiskScoreUpdateInput, RiskScoreUncheckedUpdateInput>;
    };

    /**
     * RiskScore delete
     */
    export type RiskScoreDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
        /**
         * Filter which RiskScore to delete.
         */
        where: RiskScoreWhereUniqueInput;
    };

    /**
     * RiskScore deleteMany
     */
    export type RiskScoreDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which RiskScores to delete
         */
        where?: RiskScoreWhereInput;
        /**
         * Limit how many RiskScores to delete.
         */
        limit?: number;
    };

    /**
     * RiskScore without action
     */
    export type RiskScoreDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the RiskScore
         */
        select?: RiskScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the RiskScore
         */
        omit?: RiskScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: RiskScoreInclude<ExtArgs> | null;
    };

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: 'ReadUncommitted';
        ReadCommitted: 'ReadCommitted';
        RepeatableRead: 'RepeatableRead';
        Serializable: 'Serializable';
    };

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

    export const UserScalarFieldEnum: {
        id: 'id';
        name: 'name';
        telegramId: 'telegramId';
        chatId: 'chatId';
        createdAt: 'createdAt';
    };

    export type UserScalarFieldEnum =
        (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

    export const IntegrationScalarFieldEnum: {
        id: 'id';
        userId: 'userId';
        provider: 'provider';
        accessToken: 'accessToken';
        refreshToken: 'refreshToken';
        expiresAt: 'expiresAt';
        createdAt: 'createdAt';
    };

    export type IntegrationScalarFieldEnum =
        (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum];

    export const EventScalarFieldEnum: {
        id: 'id';
        userId: 'userId';
        provider: 'provider';
        eventType: 'eventType';
        externalId: 'externalId';
        occurredAt: 'occurredAt';
        metadata: 'metadata';
        createdAt: 'createdAt';
    };

    export type EventScalarFieldEnum =
        (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

    export const FeatureSnapshotScalarFieldEnum: {
        id: 'id';
        userId: 'userId';
        meetingHours: 'meetingHours';
        taskBacklog: 'taskBacklog';
        afterHoursActivity: 'afterHoursActivity';
        completionRatio: 'completionRatio';
        contextSwitchScore: 'contextSwitchScore';
        createdAt: 'createdAt';
    };

    export type FeatureSnapshotScalarFieldEnum =
        (typeof FeatureSnapshotScalarFieldEnum)[keyof typeof FeatureSnapshotScalarFieldEnum];

    export const RiskScoreScalarFieldEnum: {
        id: 'id';
        userId: 'userId';
        riskProbability: 'riskProbability';
        riskLevel: 'riskLevel';
        createdAt: 'createdAt';
    };

    export type RiskScoreScalarFieldEnum =
        (typeof RiskScoreScalarFieldEnum)[keyof typeof RiskScoreScalarFieldEnum];

    export const SortOrder: {
        asc: 'asc';
        desc: 'desc';
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

    export const JsonNullValueInput: {
        JsonNull: typeof JsonNull;
    };

    export type JsonNullValueInput =
        (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

    export const QueryMode: {
        default: 'default';
        insensitive: 'insensitive';
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

    export const NullsOrder: {
        first: 'first';
        last: 'last';
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

    export const JsonNullValueFilter: {
        DbNull: typeof DbNull;
        JsonNull: typeof JsonNull;
        AnyNull: typeof AnyNull;
    };

    export type JsonNullValueFilter =
        (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'String'
    >;

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'String[]'
    >;

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'DateTime'
    >;

    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'DateTime[]'
    >;

    /**
     * Reference to a field of type 'Provider'
     */
    export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Provider'
    >;

    /**
     * Reference to a field of type 'Provider[]'
     */
    export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Provider[]'
    >;

    /**
     * Reference to a field of type 'Json'
     */
    export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Json'
    >;

    /**
     * Reference to a field of type 'QueryMode'
     */
    export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'QueryMode'
    >;

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Float'
    >;

    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Float[]'
    >;

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Int'
    >;

    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Int[]'
    >;

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'Boolean'
    >;

    /**
     * Reference to a field of type 'RiskLevel'
     */
    export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        'RiskLevel'
    >;

    /**
     * Reference to a field of type 'RiskLevel[]'
     */
    export type ListEnumRiskLevelFieldRefInput<$PrismaModel> =
        FieldRefInputType<$PrismaModel, 'RiskLevel[]'>;

    /**
     * Deep Input Types
     */

    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[];
        OR?: UserWhereInput[];
        NOT?: UserWhereInput | UserWhereInput[];
        id?: StringFilter<'User'> | string;
        name?: StringFilter<'User'> | string;
        telegramId?: StringFilter<'User'> | string;
        chatId?: StringFilter<'User'> | string;
        createdAt?: DateTimeFilter<'User'> | Date | string;
        events?: EventListRelationFilter;
        featureSnapshots?: FeatureSnapshotListRelationFilter;
        integrations?: IntegrationListRelationFilter;
        riskScores?: RiskScoreListRelationFilter;
    };

    export type UserOrderByWithRelationInput = {
        id?: SortOrder;
        name?: SortOrder;
        telegramId?: SortOrder;
        chatId?: SortOrder;
        createdAt?: SortOrder;
        events?: EventOrderByRelationAggregateInput;
        featureSnapshots?: FeatureSnapshotOrderByRelationAggregateInput;
        integrations?: IntegrationOrderByRelationAggregateInput;
        riskScores?: RiskScoreOrderByRelationAggregateInput;
    };

    export type UserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            telegramId?: string;
            AND?: UserWhereInput | UserWhereInput[];
            OR?: UserWhereInput[];
            NOT?: UserWhereInput | UserWhereInput[];
            name?: StringFilter<'User'> | string;
            chatId?: StringFilter<'User'> | string;
            createdAt?: DateTimeFilter<'User'> | Date | string;
            events?: EventListRelationFilter;
            featureSnapshots?: FeatureSnapshotListRelationFilter;
            integrations?: IntegrationListRelationFilter;
            riskScores?: RiskScoreListRelationFilter;
        },
        'id' | 'telegramId'
    >;

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder;
        name?: SortOrder;
        telegramId?: SortOrder;
        chatId?: SortOrder;
        createdAt?: SortOrder;
        _count?: UserCountOrderByAggregateInput;
        _max?: UserMaxOrderByAggregateInput;
        _min?: UserMinOrderByAggregateInput;
    };

    export type UserScalarWhereWithAggregatesInput = {
        AND?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        OR?: UserScalarWhereWithAggregatesInput[];
        NOT?:
            | UserScalarWhereWithAggregatesInput
            | UserScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<'User'> | string;
        name?: StringWithAggregatesFilter<'User'> | string;
        telegramId?: StringWithAggregatesFilter<'User'> | string;
        chatId?: StringWithAggregatesFilter<'User'> | string;
        createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    };

    export type IntegrationWhereInput = {
        AND?: IntegrationWhereInput | IntegrationWhereInput[];
        OR?: IntegrationWhereInput[];
        NOT?: IntegrationWhereInput | IntegrationWhereInput[];
        id?: StringFilter<'Integration'> | string;
        userId?: StringFilter<'Integration'> | string;
        provider?: EnumProviderFilter<'Integration'> | $Enums.Provider;
        accessToken?: StringFilter<'Integration'> | string;
        refreshToken?: StringNullableFilter<'Integration'> | string | null;
        expiresAt?:
            | DateTimeNullableFilter<'Integration'>
            | Date
            | string
            | null;
        createdAt?: DateTimeFilter<'Integration'> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type IntegrationOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        accessToken?: SortOrder;
        refreshToken?: SortOrderInput | SortOrder;
        expiresAt?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type IntegrationWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            userId_provider?: IntegrationUserIdProviderCompoundUniqueInput;
            AND?: IntegrationWhereInput | IntegrationWhereInput[];
            OR?: IntegrationWhereInput[];
            NOT?: IntegrationWhereInput | IntegrationWhereInput[];
            userId?: StringFilter<'Integration'> | string;
            provider?: EnumProviderFilter<'Integration'> | $Enums.Provider;
            accessToken?: StringFilter<'Integration'> | string;
            refreshToken?: StringNullableFilter<'Integration'> | string | null;
            expiresAt?:
                | DateTimeNullableFilter<'Integration'>
                | Date
                | string
                | null;
            createdAt?: DateTimeFilter<'Integration'> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        'id' | 'userId_provider'
    >;

    export type IntegrationOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        accessToken?: SortOrder;
        refreshToken?: SortOrderInput | SortOrder;
        expiresAt?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: IntegrationCountOrderByAggregateInput;
        _max?: IntegrationMaxOrderByAggregateInput;
        _min?: IntegrationMinOrderByAggregateInput;
    };

    export type IntegrationScalarWhereWithAggregatesInput = {
        AND?:
            | IntegrationScalarWhereWithAggregatesInput
            | IntegrationScalarWhereWithAggregatesInput[];
        OR?: IntegrationScalarWhereWithAggregatesInput[];
        NOT?:
            | IntegrationScalarWhereWithAggregatesInput
            | IntegrationScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<'Integration'> | string;
        userId?: StringWithAggregatesFilter<'Integration'> | string;
        provider?:
            | EnumProviderWithAggregatesFilter<'Integration'>
            | $Enums.Provider;
        accessToken?: StringWithAggregatesFilter<'Integration'> | string;
        refreshToken?:
            | StringNullableWithAggregatesFilter<'Integration'>
            | string
            | null;
        expiresAt?:
            | DateTimeNullableWithAggregatesFilter<'Integration'>
            | Date
            | string
            | null;
        createdAt?: DateTimeWithAggregatesFilter<'Integration'> | Date | string;
    };

    export type EventWhereInput = {
        AND?: EventWhereInput | EventWhereInput[];
        OR?: EventWhereInput[];
        NOT?: EventWhereInput | EventWhereInput[];
        id?: StringFilter<'Event'> | string;
        userId?: StringFilter<'Event'> | string;
        provider?: EnumProviderFilter<'Event'> | $Enums.Provider;
        eventType?: StringFilter<'Event'> | string;
        externalId?: StringFilter<'Event'> | string;
        occurredAt?: DateTimeFilter<'Event'> | Date | string;
        metadata?: JsonFilter<'Event'>;
        createdAt?: DateTimeFilter<'Event'> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type EventOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        eventType?: SortOrder;
        externalId?: SortOrder;
        occurredAt?: SortOrder;
        metadata?: SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type EventWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: EventWhereInput | EventWhereInput[];
            OR?: EventWhereInput[];
            NOT?: EventWhereInput | EventWhereInput[];
            userId?: StringFilter<'Event'> | string;
            provider?: EnumProviderFilter<'Event'> | $Enums.Provider;
            eventType?: StringFilter<'Event'> | string;
            externalId?: StringFilter<'Event'> | string;
            occurredAt?: DateTimeFilter<'Event'> | Date | string;
            metadata?: JsonFilter<'Event'>;
            createdAt?: DateTimeFilter<'Event'> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        'id'
    >;

    export type EventOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        eventType?: SortOrder;
        externalId?: SortOrder;
        occurredAt?: SortOrder;
        metadata?: SortOrder;
        createdAt?: SortOrder;
        _count?: EventCountOrderByAggregateInput;
        _max?: EventMaxOrderByAggregateInput;
        _min?: EventMinOrderByAggregateInput;
    };

    export type EventScalarWhereWithAggregatesInput = {
        AND?:
            | EventScalarWhereWithAggregatesInput
            | EventScalarWhereWithAggregatesInput[];
        OR?: EventScalarWhereWithAggregatesInput[];
        NOT?:
            | EventScalarWhereWithAggregatesInput
            | EventScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<'Event'> | string;
        userId?: StringWithAggregatesFilter<'Event'> | string;
        provider?: EnumProviderWithAggregatesFilter<'Event'> | $Enums.Provider;
        eventType?: StringWithAggregatesFilter<'Event'> | string;
        externalId?: StringWithAggregatesFilter<'Event'> | string;
        occurredAt?: DateTimeWithAggregatesFilter<'Event'> | Date | string;
        metadata?: JsonWithAggregatesFilter<'Event'>;
        createdAt?: DateTimeWithAggregatesFilter<'Event'> | Date | string;
    };

    export type FeatureSnapshotWhereInput = {
        AND?: FeatureSnapshotWhereInput | FeatureSnapshotWhereInput[];
        OR?: FeatureSnapshotWhereInput[];
        NOT?: FeatureSnapshotWhereInput | FeatureSnapshotWhereInput[];
        id?: StringFilter<'FeatureSnapshot'> | string;
        userId?: StringFilter<'FeatureSnapshot'> | string;
        meetingHours?: FloatFilter<'FeatureSnapshot'> | number;
        taskBacklog?: IntFilter<'FeatureSnapshot'> | number;
        afterHoursActivity?: BoolFilter<'FeatureSnapshot'> | boolean;
        completionRatio?: FloatFilter<'FeatureSnapshot'> | number;
        contextSwitchScore?: FloatFilter<'FeatureSnapshot'> | number;
        createdAt?: DateTimeFilter<'FeatureSnapshot'> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type FeatureSnapshotOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        afterHoursActivity?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type FeatureSnapshotWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: FeatureSnapshotWhereInput | FeatureSnapshotWhereInput[];
            OR?: FeatureSnapshotWhereInput[];
            NOT?: FeatureSnapshotWhereInput | FeatureSnapshotWhereInput[];
            userId?: StringFilter<'FeatureSnapshot'> | string;
            meetingHours?: FloatFilter<'FeatureSnapshot'> | number;
            taskBacklog?: IntFilter<'FeatureSnapshot'> | number;
            afterHoursActivity?: BoolFilter<'FeatureSnapshot'> | boolean;
            completionRatio?: FloatFilter<'FeatureSnapshot'> | number;
            contextSwitchScore?: FloatFilter<'FeatureSnapshot'> | number;
            createdAt?: DateTimeFilter<'FeatureSnapshot'> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        'id'
    >;

    export type FeatureSnapshotOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        afterHoursActivity?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
        createdAt?: SortOrder;
        _count?: FeatureSnapshotCountOrderByAggregateInput;
        _avg?: FeatureSnapshotAvgOrderByAggregateInput;
        _max?: FeatureSnapshotMaxOrderByAggregateInput;
        _min?: FeatureSnapshotMinOrderByAggregateInput;
        _sum?: FeatureSnapshotSumOrderByAggregateInput;
    };

    export type FeatureSnapshotScalarWhereWithAggregatesInput = {
        AND?:
            | FeatureSnapshotScalarWhereWithAggregatesInput
            | FeatureSnapshotScalarWhereWithAggregatesInput[];
        OR?: FeatureSnapshotScalarWhereWithAggregatesInput[];
        NOT?:
            | FeatureSnapshotScalarWhereWithAggregatesInput
            | FeatureSnapshotScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<'FeatureSnapshot'> | string;
        userId?: StringWithAggregatesFilter<'FeatureSnapshot'> | string;
        meetingHours?: FloatWithAggregatesFilter<'FeatureSnapshot'> | number;
        taskBacklog?: IntWithAggregatesFilter<'FeatureSnapshot'> | number;
        afterHoursActivity?:
            | BoolWithAggregatesFilter<'FeatureSnapshot'>
            | boolean;
        completionRatio?: FloatWithAggregatesFilter<'FeatureSnapshot'> | number;
        contextSwitchScore?:
            | FloatWithAggregatesFilter<'FeatureSnapshot'>
            | number;
        createdAt?:
            | DateTimeWithAggregatesFilter<'FeatureSnapshot'>
            | Date
            | string;
    };

    export type RiskScoreWhereInput = {
        AND?: RiskScoreWhereInput | RiskScoreWhereInput[];
        OR?: RiskScoreWhereInput[];
        NOT?: RiskScoreWhereInput | RiskScoreWhereInput[];
        id?: StringFilter<'RiskScore'> | string;
        userId?: StringFilter<'RiskScore'> | string;
        riskProbability?: FloatFilter<'RiskScore'> | number;
        riskLevel?: EnumRiskLevelFilter<'RiskScore'> | $Enums.RiskLevel;
        createdAt?: DateTimeFilter<'RiskScore'> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type RiskScoreOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        riskProbability?: SortOrder;
        riskLevel?: SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type RiskScoreWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: RiskScoreWhereInput | RiskScoreWhereInput[];
            OR?: RiskScoreWhereInput[];
            NOT?: RiskScoreWhereInput | RiskScoreWhereInput[];
            userId?: StringFilter<'RiskScore'> | string;
            riskProbability?: FloatFilter<'RiskScore'> | number;
            riskLevel?: EnumRiskLevelFilter<'RiskScore'> | $Enums.RiskLevel;
            createdAt?: DateTimeFilter<'RiskScore'> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        'id'
    >;

    export type RiskScoreOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        riskProbability?: SortOrder;
        riskLevel?: SortOrder;
        createdAt?: SortOrder;
        _count?: RiskScoreCountOrderByAggregateInput;
        _avg?: RiskScoreAvgOrderByAggregateInput;
        _max?: RiskScoreMaxOrderByAggregateInput;
        _min?: RiskScoreMinOrderByAggregateInput;
        _sum?: RiskScoreSumOrderByAggregateInput;
    };

    export type RiskScoreScalarWhereWithAggregatesInput = {
        AND?:
            | RiskScoreScalarWhereWithAggregatesInput
            | RiskScoreScalarWhereWithAggregatesInput[];
        OR?: RiskScoreScalarWhereWithAggregatesInput[];
        NOT?:
            | RiskScoreScalarWhereWithAggregatesInput
            | RiskScoreScalarWhereWithAggregatesInput[];
        id?: StringWithAggregatesFilter<'RiskScore'> | string;
        userId?: StringWithAggregatesFilter<'RiskScore'> | string;
        riskProbability?: FloatWithAggregatesFilter<'RiskScore'> | number;
        riskLevel?:
            | EnumRiskLevelWithAggregatesFilter<'RiskScore'>
            | $Enums.RiskLevel;
        createdAt?: DateTimeWithAggregatesFilter<'RiskScore'> | Date | string;
    };

    export type UserCreateInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotCreateNestedManyWithoutUserInput;
        integrations?: IntegrationCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventUncheckedCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotUncheckedCreateNestedManyWithoutUserInput;
        integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUncheckedUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUncheckedUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateManyInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
    };

    export type UserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationCreateInput = {
        id?: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutIntegrationsInput;
    };

    export type IntegrationUncheckedCreateInput = {
        id?: string;
        userId: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
    };

    export type IntegrationUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput;
    };

    export type IntegrationUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationCreateManyInput = {
        id?: string;
        userId: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
    };

    export type IntegrationUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type EventCreateInput = {
        id?: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutEventsInput;
    };

    export type EventUncheckedCreateInput = {
        id?: string;
        userId: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
    };

    export type EventUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutEventsNestedInput;
    };

    export type EventUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type EventCreateManyInput = {
        id?: string;
        userId: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
    };

    export type EventUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type EventUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotCreateInput = {
        id?: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutFeatureSnapshotsInput;
    };

    export type FeatureSnapshotUncheckedCreateInput = {
        id?: string;
        userId: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
    };

    export type FeatureSnapshotUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutFeatureSnapshotsNestedInput;
    };

    export type FeatureSnapshotUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotCreateManyInput = {
        id?: string;
        userId: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
    };

    export type FeatureSnapshotUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreCreateInput = {
        id?: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutRiskScoresInput;
    };

    export type RiskScoreUncheckedCreateInput = {
        id?: string;
        userId: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
    };

    export type RiskScoreUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutRiskScoresNestedInput;
    };

    export type RiskScoreUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreCreateManyInput = {
        id?: string;
        userId: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
    };

    export type RiskScoreUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type EventListRelationFilter = {
        every?: EventWhereInput;
        some?: EventWhereInput;
        none?: EventWhereInput;
    };

    export type FeatureSnapshotListRelationFilter = {
        every?: FeatureSnapshotWhereInput;
        some?: FeatureSnapshotWhereInput;
        none?: FeatureSnapshotWhereInput;
    };

    export type IntegrationListRelationFilter = {
        every?: IntegrationWhereInput;
        some?: IntegrationWhereInput;
        none?: IntegrationWhereInput;
    };

    export type RiskScoreListRelationFilter = {
        every?: RiskScoreWhereInput;
        some?: RiskScoreWhereInput;
        none?: RiskScoreWhereInput;
    };

    export type EventOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type FeatureSnapshotOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type IntegrationOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type RiskScoreOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        telegramId?: SortOrder;
        chatId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        telegramId?: SortOrder;
        chatId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder;
        name?: SortOrder;
        telegramId?: SortOrder;
        chatId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type EnumProviderFilter<$PrismaModel = never> = {
        equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
    };

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type DateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type UserScalarRelationFilter = {
        is?: UserWhereInput;
        isNot?: UserWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type IntegrationUserIdProviderCompoundUniqueInput = {
        userId: string;
        provider: $Enums.Provider;
    };

    export type IntegrationCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        accessToken?: SortOrder;
        refreshToken?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
    };

    export type IntegrationMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        accessToken?: SortOrder;
        refreshToken?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
    };

    export type IntegrationMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        accessToken?: SortOrder;
        refreshToken?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
    };

    export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
            | $Enums.Provider;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumProviderFilter<$PrismaModel>;
        _max?: NestedEnumProviderFilter<$PrismaModel>;
    };

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?:
            | NestedStringNullableWithAggregatesFilter<$PrismaModel>
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?:
            | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
            | Date
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };
    export type JsonFilter<$PrismaModel = never> =
        | PatchUndefined<
              Either<
                  Required<JsonFilterBase<$PrismaModel>>,
                  Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
              >,
              Required<JsonFilterBase<$PrismaModel>>
          >
        | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

    export type JsonFilterBase<$PrismaModel = never> = {
        equals?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
        path?: string[];
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
        string_contains?: string | StringFieldRefInput<$PrismaModel>;
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
        array_starts_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_ends_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_contains?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        not?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
    };

    export type EventCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        eventType?: SortOrder;
        externalId?: SortOrder;
        occurredAt?: SortOrder;
        metadata?: SortOrder;
        createdAt?: SortOrder;
    };

    export type EventMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        eventType?: SortOrder;
        externalId?: SortOrder;
        occurredAt?: SortOrder;
        createdAt?: SortOrder;
    };

    export type EventMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        provider?: SortOrder;
        eventType?: SortOrder;
        externalId?: SortOrder;
        occurredAt?: SortOrder;
        createdAt?: SortOrder;
    };
    export type JsonWithAggregatesFilter<$PrismaModel = never> =
        | PatchUndefined<
              Either<
                  Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
                  Exclude<
                      keyof Required<
                          JsonWithAggregatesFilterBase<$PrismaModel>
                      >,
                      'path'
                  >
              >,
              Required<JsonWithAggregatesFilterBase<$PrismaModel>>
          >
        | OptionalFlat<
              Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
          >;

    export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
        equals?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
        path?: string[];
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
        string_contains?: string | StringFieldRefInput<$PrismaModel>;
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
        array_starts_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_ends_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_contains?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        not?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedJsonFilter<$PrismaModel>;
        _max?: NestedJsonFilter<$PrismaModel>;
    };

    export type FloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type FeatureSnapshotCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        afterHoursActivity?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FeatureSnapshotAvgOrderByAggregateInput = {
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
    };

    export type FeatureSnapshotMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        afterHoursActivity?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FeatureSnapshotMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        afterHoursActivity?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
        createdAt?: SortOrder;
    };

    export type FeatureSnapshotSumOrderByAggregateInput = {
        meetingHours?: SortOrder;
        taskBacklog?: SortOrder;
        completionRatio?: SortOrder;
        contextSwitchScore?: SortOrder;
    };

    export type FloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type EnumRiskLevelFilter<$PrismaModel = never> = {
        equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>;
        in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
    };

    export type RiskScoreCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        riskProbability?: SortOrder;
        riskLevel?: SortOrder;
        createdAt?: SortOrder;
    };

    export type RiskScoreAvgOrderByAggregateInput = {
        riskProbability?: SortOrder;
    };

    export type RiskScoreMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        riskProbability?: SortOrder;
        riskLevel?: SortOrder;
        createdAt?: SortOrder;
    };

    export type RiskScoreMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        riskProbability?: SortOrder;
        riskLevel?: SortOrder;
        createdAt?: SortOrder;
    };

    export type RiskScoreSumOrderByAggregateInput = {
        riskProbability?: SortOrder;
    };

    export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>;
        in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel>
            | $Enums.RiskLevel;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumRiskLevelFilter<$PrismaModel>;
        _max?: NestedEnumRiskLevelFilter<$PrismaModel>;
    };

    export type EventCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  EventCreateWithoutUserInput,
                  EventUncheckedCreateWithoutUserInput
              >
            | EventCreateWithoutUserInput[]
            | EventUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | EventCreateOrConnectWithoutUserInput
            | EventCreateOrConnectWithoutUserInput[];
        createMany?: EventCreateManyUserInputEnvelope;
        connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    };

    export type FeatureSnapshotCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  FeatureSnapshotCreateWithoutUserInput,
                  FeatureSnapshotUncheckedCreateWithoutUserInput
              >
            | FeatureSnapshotCreateWithoutUserInput[]
            | FeatureSnapshotUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FeatureSnapshotCreateOrConnectWithoutUserInput
            | FeatureSnapshotCreateOrConnectWithoutUserInput[];
        createMany?: FeatureSnapshotCreateManyUserInputEnvelope;
        connect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
    };

    export type IntegrationCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  IntegrationCreateWithoutUserInput,
                  IntegrationUncheckedCreateWithoutUserInput
              >
            | IntegrationCreateWithoutUserInput[]
            | IntegrationUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | IntegrationCreateOrConnectWithoutUserInput
            | IntegrationCreateOrConnectWithoutUserInput[];
        createMany?: IntegrationCreateManyUserInputEnvelope;
        connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
    };

    export type RiskScoreCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  RiskScoreCreateWithoutUserInput,
                  RiskScoreUncheckedCreateWithoutUserInput
              >
            | RiskScoreCreateWithoutUserInput[]
            | RiskScoreUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | RiskScoreCreateOrConnectWithoutUserInput
            | RiskScoreCreateOrConnectWithoutUserInput[];
        createMany?: RiskScoreCreateManyUserInputEnvelope;
        connect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
    };

    export type EventUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  EventCreateWithoutUserInput,
                  EventUncheckedCreateWithoutUserInput
              >
            | EventCreateWithoutUserInput[]
            | EventUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | EventCreateOrConnectWithoutUserInput
            | EventCreateOrConnectWithoutUserInput[];
        createMany?: EventCreateManyUserInputEnvelope;
        connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    };

    export type FeatureSnapshotUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  FeatureSnapshotCreateWithoutUserInput,
                  FeatureSnapshotUncheckedCreateWithoutUserInput
              >
            | FeatureSnapshotCreateWithoutUserInput[]
            | FeatureSnapshotUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FeatureSnapshotCreateOrConnectWithoutUserInput
            | FeatureSnapshotCreateOrConnectWithoutUserInput[];
        createMany?: FeatureSnapshotCreateManyUserInputEnvelope;
        connect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
    };

    export type IntegrationUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  IntegrationCreateWithoutUserInput,
                  IntegrationUncheckedCreateWithoutUserInput
              >
            | IntegrationCreateWithoutUserInput[]
            | IntegrationUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | IntegrationCreateOrConnectWithoutUserInput
            | IntegrationCreateOrConnectWithoutUserInput[];
        createMany?: IntegrationCreateManyUserInputEnvelope;
        connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
    };

    export type RiskScoreUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  RiskScoreCreateWithoutUserInput,
                  RiskScoreUncheckedCreateWithoutUserInput
              >
            | RiskScoreCreateWithoutUserInput[]
            | RiskScoreUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | RiskScoreCreateOrConnectWithoutUserInput
            | RiskScoreCreateOrConnectWithoutUserInput[];
        createMany?: RiskScoreCreateManyUserInputEnvelope;
        connect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
    };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type EventUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  EventCreateWithoutUserInput,
                  EventUncheckedCreateWithoutUserInput
              >
            | EventCreateWithoutUserInput[]
            | EventUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | EventCreateOrConnectWithoutUserInput
            | EventCreateOrConnectWithoutUserInput[];
        upsert?:
            | EventUpsertWithWhereUniqueWithoutUserInput
            | EventUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: EventCreateManyUserInputEnvelope;
        set?: EventWhereUniqueInput | EventWhereUniqueInput[];
        disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
        delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
        connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
        update?:
            | EventUpdateWithWhereUniqueWithoutUserInput
            | EventUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | EventUpdateManyWithWhereWithoutUserInput
            | EventUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
    };

    export type FeatureSnapshotUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  FeatureSnapshotCreateWithoutUserInput,
                  FeatureSnapshotUncheckedCreateWithoutUserInput
              >
            | FeatureSnapshotCreateWithoutUserInput[]
            | FeatureSnapshotUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FeatureSnapshotCreateOrConnectWithoutUserInput
            | FeatureSnapshotCreateOrConnectWithoutUserInput[];
        upsert?:
            | FeatureSnapshotUpsertWithWhereUniqueWithoutUserInput
            | FeatureSnapshotUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: FeatureSnapshotCreateManyUserInputEnvelope;
        set?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        disconnect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        delete?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        connect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        update?:
            | FeatureSnapshotUpdateWithWhereUniqueWithoutUserInput
            | FeatureSnapshotUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | FeatureSnapshotUpdateManyWithWhereWithoutUserInput
            | FeatureSnapshotUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | FeatureSnapshotScalarWhereInput
            | FeatureSnapshotScalarWhereInput[];
    };

    export type IntegrationUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  IntegrationCreateWithoutUserInput,
                  IntegrationUncheckedCreateWithoutUserInput
              >
            | IntegrationCreateWithoutUserInput[]
            | IntegrationUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | IntegrationCreateOrConnectWithoutUserInput
            | IntegrationCreateOrConnectWithoutUserInput[];
        upsert?:
            | IntegrationUpsertWithWhereUniqueWithoutUserInput
            | IntegrationUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: IntegrationCreateManyUserInputEnvelope;
        set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        disconnect?:
            | IntegrationWhereUniqueInput
            | IntegrationWhereUniqueInput[];
        delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        update?:
            | IntegrationUpdateWithWhereUniqueWithoutUserInput
            | IntegrationUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | IntegrationUpdateManyWithWhereWithoutUserInput
            | IntegrationUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | IntegrationScalarWhereInput
            | IntegrationScalarWhereInput[];
    };

    export type RiskScoreUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  RiskScoreCreateWithoutUserInput,
                  RiskScoreUncheckedCreateWithoutUserInput
              >
            | RiskScoreCreateWithoutUserInput[]
            | RiskScoreUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | RiskScoreCreateOrConnectWithoutUserInput
            | RiskScoreCreateOrConnectWithoutUserInput[];
        upsert?:
            | RiskScoreUpsertWithWhereUniqueWithoutUserInput
            | RiskScoreUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: RiskScoreCreateManyUserInputEnvelope;
        set?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        disconnect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        delete?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        connect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        update?:
            | RiskScoreUpdateWithWhereUniqueWithoutUserInput
            | RiskScoreUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | RiskScoreUpdateManyWithWhereWithoutUserInput
            | RiskScoreUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: RiskScoreScalarWhereInput | RiskScoreScalarWhereInput[];
    };

    export type EventUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  EventCreateWithoutUserInput,
                  EventUncheckedCreateWithoutUserInput
              >
            | EventCreateWithoutUserInput[]
            | EventUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | EventCreateOrConnectWithoutUserInput
            | EventCreateOrConnectWithoutUserInput[];
        upsert?:
            | EventUpsertWithWhereUniqueWithoutUserInput
            | EventUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: EventCreateManyUserInputEnvelope;
        set?: EventWhereUniqueInput | EventWhereUniqueInput[];
        disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
        delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
        connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
        update?:
            | EventUpdateWithWhereUniqueWithoutUserInput
            | EventUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | EventUpdateManyWithWhereWithoutUserInput
            | EventUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
    };

    export type FeatureSnapshotUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  FeatureSnapshotCreateWithoutUserInput,
                  FeatureSnapshotUncheckedCreateWithoutUserInput
              >
            | FeatureSnapshotCreateWithoutUserInput[]
            | FeatureSnapshotUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | FeatureSnapshotCreateOrConnectWithoutUserInput
            | FeatureSnapshotCreateOrConnectWithoutUserInput[];
        upsert?:
            | FeatureSnapshotUpsertWithWhereUniqueWithoutUserInput
            | FeatureSnapshotUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: FeatureSnapshotCreateManyUserInputEnvelope;
        set?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        disconnect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        delete?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        connect?:
            | FeatureSnapshotWhereUniqueInput
            | FeatureSnapshotWhereUniqueInput[];
        update?:
            | FeatureSnapshotUpdateWithWhereUniqueWithoutUserInput
            | FeatureSnapshotUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | FeatureSnapshotUpdateManyWithWhereWithoutUserInput
            | FeatureSnapshotUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | FeatureSnapshotScalarWhereInput
            | FeatureSnapshotScalarWhereInput[];
    };

    export type IntegrationUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  IntegrationCreateWithoutUserInput,
                  IntegrationUncheckedCreateWithoutUserInput
              >
            | IntegrationCreateWithoutUserInput[]
            | IntegrationUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | IntegrationCreateOrConnectWithoutUserInput
            | IntegrationCreateOrConnectWithoutUserInput[];
        upsert?:
            | IntegrationUpsertWithWhereUniqueWithoutUserInput
            | IntegrationUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: IntegrationCreateManyUserInputEnvelope;
        set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        disconnect?:
            | IntegrationWhereUniqueInput
            | IntegrationWhereUniqueInput[];
        delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[];
        update?:
            | IntegrationUpdateWithWhereUniqueWithoutUserInput
            | IntegrationUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | IntegrationUpdateManyWithWhereWithoutUserInput
            | IntegrationUpdateManyWithWhereWithoutUserInput[];
        deleteMany?:
            | IntegrationScalarWhereInput
            | IntegrationScalarWhereInput[];
    };

    export type RiskScoreUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  RiskScoreCreateWithoutUserInput,
                  RiskScoreUncheckedCreateWithoutUserInput
              >
            | RiskScoreCreateWithoutUserInput[]
            | RiskScoreUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | RiskScoreCreateOrConnectWithoutUserInput
            | RiskScoreCreateOrConnectWithoutUserInput[];
        upsert?:
            | RiskScoreUpsertWithWhereUniqueWithoutUserInput
            | RiskScoreUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: RiskScoreCreateManyUserInputEnvelope;
        set?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        disconnect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        delete?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        connect?: RiskScoreWhereUniqueInput | RiskScoreWhereUniqueInput[];
        update?:
            | RiskScoreUpdateWithWhereUniqueWithoutUserInput
            | RiskScoreUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | RiskScoreUpdateManyWithWhereWithoutUserInput
            | RiskScoreUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: RiskScoreScalarWhereInput | RiskScoreScalarWhereInput[];
    };

    export type UserCreateNestedOneWithoutIntegrationsInput = {
        create?: XOR<
            UserCreateWithoutIntegrationsInput,
            UserUncheckedCreateWithoutIntegrationsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput;
        connect?: UserWhereUniqueInput;
    };

    export type EnumProviderFieldUpdateOperationsInput = {
        set?: $Enums.Provider;
    };

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null;
    };

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null;
    };

    export type UserUpdateOneRequiredWithoutIntegrationsNestedInput = {
        create?: XOR<
            UserCreateWithoutIntegrationsInput,
            UserUncheckedCreateWithoutIntegrationsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput;
        upsert?: UserUpsertWithoutIntegrationsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutIntegrationsInput,
                UserUpdateWithoutIntegrationsInput
            >,
            UserUncheckedUpdateWithoutIntegrationsInput
        >;
    };

    export type UserCreateNestedOneWithoutEventsInput = {
        create?: XOR<
            UserCreateWithoutEventsInput,
            UserUncheckedCreateWithoutEventsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutEventsInput;
        connect?: UserWhereUniqueInput;
    };

    export type UserUpdateOneRequiredWithoutEventsNestedInput = {
        create?: XOR<
            UserCreateWithoutEventsInput,
            UserUncheckedCreateWithoutEventsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutEventsInput;
        upsert?: UserUpsertWithoutEventsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutEventsInput,
                UserUpdateWithoutEventsInput
            >,
            UserUncheckedUpdateWithoutEventsInput
        >;
    };

    export type UserCreateNestedOneWithoutFeatureSnapshotsInput = {
        create?: XOR<
            UserCreateWithoutFeatureSnapshotsInput,
            UserUncheckedCreateWithoutFeatureSnapshotsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutFeatureSnapshotsInput;
        connect?: UserWhereUniqueInput;
    };

    export type FloatFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type IntFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type UserUpdateOneRequiredWithoutFeatureSnapshotsNestedInput = {
        create?: XOR<
            UserCreateWithoutFeatureSnapshotsInput,
            UserUncheckedCreateWithoutFeatureSnapshotsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutFeatureSnapshotsInput;
        upsert?: UserUpsertWithoutFeatureSnapshotsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutFeatureSnapshotsInput,
                UserUpdateWithoutFeatureSnapshotsInput
            >,
            UserUncheckedUpdateWithoutFeatureSnapshotsInput
        >;
    };

    export type UserCreateNestedOneWithoutRiskScoresInput = {
        create?: XOR<
            UserCreateWithoutRiskScoresInput,
            UserUncheckedCreateWithoutRiskScoresInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutRiskScoresInput;
        connect?: UserWhereUniqueInput;
    };

    export type EnumRiskLevelFieldUpdateOperationsInput = {
        set?: $Enums.RiskLevel;
    };

    export type UserUpdateOneRequiredWithoutRiskScoresNestedInput = {
        create?: XOR<
            UserCreateWithoutRiskScoresInput,
            UserUncheckedCreateWithoutRiskScoresInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutRiskScoresInput;
        upsert?: UserUpsertWithoutRiskScoresInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutRiskScoresInput,
                UserUpdateWithoutRiskScoresInput
            >,
            UserUncheckedUpdateWithoutRiskScoresInput
        >;
    };

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type NestedEnumProviderFilter<$PrismaModel = never> = {
        equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
    };

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
        not?:
            | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
            | $Enums.Provider;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumProviderFilter<$PrismaModel>;
        _max?: NestedEnumProviderFilter<$PrismaModel>;
    };

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?: string | StringFieldRefInput<$PrismaModel> | null;
            in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
            lt?: string | StringFieldRefInput<$PrismaModel>;
            lte?: string | StringFieldRefInput<$PrismaModel>;
            gt?: string | StringFieldRefInput<$PrismaModel>;
            gte?: string | StringFieldRefInput<$PrismaModel>;
            contains?: string | StringFieldRefInput<$PrismaModel>;
            startsWith?: string | StringFieldRefInput<$PrismaModel>;
            endsWith?: string | StringFieldRefInput<$PrismaModel>;
            not?:
                | NestedStringNullableWithAggregatesFilter<$PrismaModel>
                | string
                | null;
            _count?: NestedIntNullableFilter<$PrismaModel>;
            _min?: NestedStringNullableFilter<$PrismaModel>;
            _max?: NestedStringNullableFilter<$PrismaModel>;
        };

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedDateTimeNullableWithAggregatesFilter<
        $PrismaModel = never,
    > = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?:
            | Date[]
            | string[]
            | ListDateTimeFieldRefInput<$PrismaModel>
            | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?:
            | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
            | Date
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };
    export type NestedJsonFilter<$PrismaModel = never> =
        | PatchUndefined<
              Either<
                  Required<NestedJsonFilterBase<$PrismaModel>>,
                  Exclude<
                      keyof Required<NestedJsonFilterBase<$PrismaModel>>,
                      'path'
                  >
              >,
              Required<NestedJsonFilterBase<$PrismaModel>>
          >
        | OptionalFlat<
              Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
          >;

    export type NestedJsonFilterBase<$PrismaModel = never> = {
        equals?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
        path?: string[];
        mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
        string_contains?: string | StringFieldRefInput<$PrismaModel>;
        string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
        string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
        array_starts_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_ends_with?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        array_contains?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | null;
        lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
        not?:
            | InputJsonValue
            | JsonFieldRefInput<$PrismaModel>
            | JsonNullValueFilter;
    };

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedFloatFilter<$PrismaModel>;
        _min?: NestedFloatFilter<$PrismaModel>;
        _max?: NestedFloatFilter<$PrismaModel>;
    };

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
        equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>;
        in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        notIn?:
            | $Enums.RiskLevel[]
            | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
        not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel;
    };

    export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> =
        {
            equals?:
                | $Enums.RiskLevel
                | EnumRiskLevelFieldRefInput<$PrismaModel>;
            in?:
                | $Enums.RiskLevel[]
                | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
            notIn?:
                | $Enums.RiskLevel[]
                | ListEnumRiskLevelFieldRefInput<$PrismaModel>;
            not?:
                | NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel>
                | $Enums.RiskLevel;
            _count?: NestedIntFilter<$PrismaModel>;
            _min?: NestedEnumRiskLevelFilter<$PrismaModel>;
            _max?: NestedEnumRiskLevelFilter<$PrismaModel>;
        };

    export type EventCreateWithoutUserInput = {
        id?: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
    };

    export type EventUncheckedCreateWithoutUserInput = {
        id?: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
    };

    export type EventCreateOrConnectWithoutUserInput = {
        where: EventWhereUniqueInput;
        create: XOR<
            EventCreateWithoutUserInput,
            EventUncheckedCreateWithoutUserInput
        >;
    };

    export type EventCreateManyUserInputEnvelope = {
        data: EventCreateManyUserInput | EventCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type FeatureSnapshotCreateWithoutUserInput = {
        id?: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
    };

    export type FeatureSnapshotUncheckedCreateWithoutUserInput = {
        id?: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
    };

    export type FeatureSnapshotCreateOrConnectWithoutUserInput = {
        where: FeatureSnapshotWhereUniqueInput;
        create: XOR<
            FeatureSnapshotCreateWithoutUserInput,
            FeatureSnapshotUncheckedCreateWithoutUserInput
        >;
    };

    export type FeatureSnapshotCreateManyUserInputEnvelope = {
        data:
            | FeatureSnapshotCreateManyUserInput
            | FeatureSnapshotCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type IntegrationCreateWithoutUserInput = {
        id?: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
    };

    export type IntegrationUncheckedCreateWithoutUserInput = {
        id?: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
    };

    export type IntegrationCreateOrConnectWithoutUserInput = {
        where: IntegrationWhereUniqueInput;
        create: XOR<
            IntegrationCreateWithoutUserInput,
            IntegrationUncheckedCreateWithoutUserInput
        >;
    };

    export type IntegrationCreateManyUserInputEnvelope = {
        data: IntegrationCreateManyUserInput | IntegrationCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type RiskScoreCreateWithoutUserInput = {
        id?: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
    };

    export type RiskScoreUncheckedCreateWithoutUserInput = {
        id?: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
    };

    export type RiskScoreCreateOrConnectWithoutUserInput = {
        where: RiskScoreWhereUniqueInput;
        create: XOR<
            RiskScoreCreateWithoutUserInput,
            RiskScoreUncheckedCreateWithoutUserInput
        >;
    };

    export type RiskScoreCreateManyUserInputEnvelope = {
        data: RiskScoreCreateManyUserInput | RiskScoreCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type EventUpsertWithWhereUniqueWithoutUserInput = {
        where: EventWhereUniqueInput;
        update: XOR<
            EventUpdateWithoutUserInput,
            EventUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            EventCreateWithoutUserInput,
            EventUncheckedCreateWithoutUserInput
        >;
    };

    export type EventUpdateWithWhereUniqueWithoutUserInput = {
        where: EventWhereUniqueInput;
        data: XOR<
            EventUpdateWithoutUserInput,
            EventUncheckedUpdateWithoutUserInput
        >;
    };

    export type EventUpdateManyWithWhereWithoutUserInput = {
        where: EventScalarWhereInput;
        data: XOR<
            EventUpdateManyMutationInput,
            EventUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type EventScalarWhereInput = {
        AND?: EventScalarWhereInput | EventScalarWhereInput[];
        OR?: EventScalarWhereInput[];
        NOT?: EventScalarWhereInput | EventScalarWhereInput[];
        id?: StringFilter<'Event'> | string;
        userId?: StringFilter<'Event'> | string;
        provider?: EnumProviderFilter<'Event'> | $Enums.Provider;
        eventType?: StringFilter<'Event'> | string;
        externalId?: StringFilter<'Event'> | string;
        occurredAt?: DateTimeFilter<'Event'> | Date | string;
        metadata?: JsonFilter<'Event'>;
        createdAt?: DateTimeFilter<'Event'> | Date | string;
    };

    export type FeatureSnapshotUpsertWithWhereUniqueWithoutUserInput = {
        where: FeatureSnapshotWhereUniqueInput;
        update: XOR<
            FeatureSnapshotUpdateWithoutUserInput,
            FeatureSnapshotUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            FeatureSnapshotCreateWithoutUserInput,
            FeatureSnapshotUncheckedCreateWithoutUserInput
        >;
    };

    export type FeatureSnapshotUpdateWithWhereUniqueWithoutUserInput = {
        where: FeatureSnapshotWhereUniqueInput;
        data: XOR<
            FeatureSnapshotUpdateWithoutUserInput,
            FeatureSnapshotUncheckedUpdateWithoutUserInput
        >;
    };

    export type FeatureSnapshotUpdateManyWithWhereWithoutUserInput = {
        where: FeatureSnapshotScalarWhereInput;
        data: XOR<
            FeatureSnapshotUpdateManyMutationInput,
            FeatureSnapshotUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type FeatureSnapshotScalarWhereInput = {
        AND?:
            | FeatureSnapshotScalarWhereInput
            | FeatureSnapshotScalarWhereInput[];
        OR?: FeatureSnapshotScalarWhereInput[];
        NOT?:
            | FeatureSnapshotScalarWhereInput
            | FeatureSnapshotScalarWhereInput[];
        id?: StringFilter<'FeatureSnapshot'> | string;
        userId?: StringFilter<'FeatureSnapshot'> | string;
        meetingHours?: FloatFilter<'FeatureSnapshot'> | number;
        taskBacklog?: IntFilter<'FeatureSnapshot'> | number;
        afterHoursActivity?: BoolFilter<'FeatureSnapshot'> | boolean;
        completionRatio?: FloatFilter<'FeatureSnapshot'> | number;
        contextSwitchScore?: FloatFilter<'FeatureSnapshot'> | number;
        createdAt?: DateTimeFilter<'FeatureSnapshot'> | Date | string;
    };

    export type IntegrationUpsertWithWhereUniqueWithoutUserInput = {
        where: IntegrationWhereUniqueInput;
        update: XOR<
            IntegrationUpdateWithoutUserInput,
            IntegrationUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            IntegrationCreateWithoutUserInput,
            IntegrationUncheckedCreateWithoutUserInput
        >;
    };

    export type IntegrationUpdateWithWhereUniqueWithoutUserInput = {
        where: IntegrationWhereUniqueInput;
        data: XOR<
            IntegrationUpdateWithoutUserInput,
            IntegrationUncheckedUpdateWithoutUserInput
        >;
    };

    export type IntegrationUpdateManyWithWhereWithoutUserInput = {
        where: IntegrationScalarWhereInput;
        data: XOR<
            IntegrationUpdateManyMutationInput,
            IntegrationUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type IntegrationScalarWhereInput = {
        AND?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[];
        OR?: IntegrationScalarWhereInput[];
        NOT?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[];
        id?: StringFilter<'Integration'> | string;
        userId?: StringFilter<'Integration'> | string;
        provider?: EnumProviderFilter<'Integration'> | $Enums.Provider;
        accessToken?: StringFilter<'Integration'> | string;
        refreshToken?: StringNullableFilter<'Integration'> | string | null;
        expiresAt?:
            | DateTimeNullableFilter<'Integration'>
            | Date
            | string
            | null;
        createdAt?: DateTimeFilter<'Integration'> | Date | string;
    };

    export type RiskScoreUpsertWithWhereUniqueWithoutUserInput = {
        where: RiskScoreWhereUniqueInput;
        update: XOR<
            RiskScoreUpdateWithoutUserInput,
            RiskScoreUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            RiskScoreCreateWithoutUserInput,
            RiskScoreUncheckedCreateWithoutUserInput
        >;
    };

    export type RiskScoreUpdateWithWhereUniqueWithoutUserInput = {
        where: RiskScoreWhereUniqueInput;
        data: XOR<
            RiskScoreUpdateWithoutUserInput,
            RiskScoreUncheckedUpdateWithoutUserInput
        >;
    };

    export type RiskScoreUpdateManyWithWhereWithoutUserInput = {
        where: RiskScoreScalarWhereInput;
        data: XOR<
            RiskScoreUpdateManyMutationInput,
            RiskScoreUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type RiskScoreScalarWhereInput = {
        AND?: RiskScoreScalarWhereInput | RiskScoreScalarWhereInput[];
        OR?: RiskScoreScalarWhereInput[];
        NOT?: RiskScoreScalarWhereInput | RiskScoreScalarWhereInput[];
        id?: StringFilter<'RiskScore'> | string;
        userId?: StringFilter<'RiskScore'> | string;
        riskProbability?: FloatFilter<'RiskScore'> | number;
        riskLevel?: EnumRiskLevelFilter<'RiskScore'> | $Enums.RiskLevel;
        createdAt?: DateTimeFilter<'RiskScore'> | Date | string;
    };

    export type UserCreateWithoutIntegrationsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutIntegrationsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventUncheckedCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotUncheckedCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutIntegrationsInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutIntegrationsInput,
            UserUncheckedCreateWithoutIntegrationsInput
        >;
    };

    export type UserUpsertWithoutIntegrationsInput = {
        update: XOR<
            UserUpdateWithoutIntegrationsInput,
            UserUncheckedUpdateWithoutIntegrationsInput
        >;
        create: XOR<
            UserCreateWithoutIntegrationsInput,
            UserUncheckedCreateWithoutIntegrationsInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutIntegrationsInput,
            UserUncheckedUpdateWithoutIntegrationsInput
        >;
    };

    export type UserUpdateWithoutIntegrationsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutIntegrationsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUncheckedUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUncheckedUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateWithoutEventsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        featureSnapshots?: FeatureSnapshotCreateNestedManyWithoutUserInput;
        integrations?: IntegrationCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutEventsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        featureSnapshots?: FeatureSnapshotUncheckedCreateNestedManyWithoutUserInput;
        integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutEventsInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutEventsInput,
            UserUncheckedCreateWithoutEventsInput
        >;
    };

    export type UserUpsertWithoutEventsInput = {
        update: XOR<
            UserUpdateWithoutEventsInput,
            UserUncheckedUpdateWithoutEventsInput
        >;
        create: XOR<
            UserCreateWithoutEventsInput,
            UserUncheckedCreateWithoutEventsInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutEventsInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutEventsInput,
            UserUncheckedUpdateWithoutEventsInput
        >;
    };

    export type UserUpdateWithoutEventsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        featureSnapshots?: FeatureSnapshotUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutEventsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        featureSnapshots?: FeatureSnapshotUncheckedUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateWithoutFeatureSnapshotsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventCreateNestedManyWithoutUserInput;
        integrations?: IntegrationCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutFeatureSnapshotsInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventUncheckedCreateNestedManyWithoutUserInput;
        integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput;
        riskScores?: RiskScoreUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutFeatureSnapshotsInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutFeatureSnapshotsInput,
            UserUncheckedCreateWithoutFeatureSnapshotsInput
        >;
    };

    export type UserUpsertWithoutFeatureSnapshotsInput = {
        update: XOR<
            UserUpdateWithoutFeatureSnapshotsInput,
            UserUncheckedUpdateWithoutFeatureSnapshotsInput
        >;
        create: XOR<
            UserCreateWithoutFeatureSnapshotsInput,
            UserUncheckedCreateWithoutFeatureSnapshotsInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutFeatureSnapshotsInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutFeatureSnapshotsInput,
            UserUncheckedUpdateWithoutFeatureSnapshotsInput
        >;
    };

    export type UserUpdateWithoutFeatureSnapshotsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutFeatureSnapshotsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUncheckedUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput;
        riskScores?: RiskScoreUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateWithoutRiskScoresInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotCreateNestedManyWithoutUserInput;
        integrations?: IntegrationCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutRiskScoresInput = {
        id?: string;
        name: string;
        telegramId: string;
        chatId: string;
        createdAt?: Date | string;
        events?: EventUncheckedCreateNestedManyWithoutUserInput;
        featureSnapshots?: FeatureSnapshotUncheckedCreateNestedManyWithoutUserInput;
        integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutRiskScoresInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutRiskScoresInput,
            UserUncheckedCreateWithoutRiskScoresInput
        >;
    };

    export type UserUpsertWithoutRiskScoresInput = {
        update: XOR<
            UserUpdateWithoutRiskScoresInput,
            UserUncheckedUpdateWithoutRiskScoresInput
        >;
        create: XOR<
            UserCreateWithoutRiskScoresInput,
            UserUncheckedCreateWithoutRiskScoresInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutRiskScoresInput = {
        where?: UserWhereInput;
        data: XOR<
            UserUpdateWithoutRiskScoresInput,
            UserUncheckedUpdateWithoutRiskScoresInput
        >;
    };

    export type UserUpdateWithoutRiskScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutRiskScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        telegramId?: StringFieldUpdateOperationsInput | string;
        chatId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        events?: EventUncheckedUpdateManyWithoutUserNestedInput;
        featureSnapshots?: FeatureSnapshotUncheckedUpdateManyWithoutUserNestedInput;
        integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type EventCreateManyUserInput = {
        id?: string;
        provider: $Enums.Provider;
        eventType: string;
        externalId: string;
        occurredAt: Date | string;
        metadata: JsonNullValueInput | InputJsonValue;
        createdAt?: Date | string;
    };

    export type FeatureSnapshotCreateManyUserInput = {
        id?: string;
        meetingHours: number;
        taskBacklog: number;
        afterHoursActivity: boolean;
        completionRatio: number;
        contextSwitchScore: number;
        createdAt?: Date | string;
    };

    export type IntegrationCreateManyUserInput = {
        id?: string;
        provider: $Enums.Provider;
        accessToken: string;
        refreshToken?: string | null;
        expiresAt?: Date | string | null;
        createdAt?: Date | string;
    };

    export type RiskScoreCreateManyUserInput = {
        id?: string;
        riskProbability: number;
        riskLevel: $Enums.RiskLevel;
        createdAt?: Date | string;
    };

    export type EventUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type EventUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type EventUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        eventType?: StringFieldUpdateOperationsInput | string;
        externalId?: StringFieldUpdateOperationsInput | string;
        occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        metadata?: JsonNullValueInput | InputJsonValue;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type FeatureSnapshotUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        meetingHours?: FloatFieldUpdateOperationsInput | number;
        taskBacklog?: IntFieldUpdateOperationsInput | number;
        afterHoursActivity?: BoolFieldUpdateOperationsInput | boolean;
        completionRatio?: FloatFieldUpdateOperationsInput | number;
        contextSwitchScore?: FloatFieldUpdateOperationsInput | number;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type IntegrationUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
        accessToken?: StringFieldUpdateOperationsInput | string;
        refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
        expiresAt?:
            | NullableDateTimeFieldUpdateOperationsInput
            | Date
            | string
            | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type RiskScoreUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        riskProbability?: FloatFieldUpdateOperationsInput | number;
        riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number;
    };

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
}
