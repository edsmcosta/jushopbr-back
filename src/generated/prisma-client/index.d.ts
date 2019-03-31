// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  product: (where?: ProductWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  product: (where: ProductWhereUniqueInput) => ProductPromise;
  products: (
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Product>;
  productsConnection: (
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProductConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (
    args: { data: ProductUpdateInput; where: ProductWhereUniqueInput }
  ) => ProductPromise;
  updateManyProducts: (
    args: { data: ProductUpdateManyMutationInput; where?: ProductWhereInput }
  ) => BatchPayloadPromise;
  upsertProduct: (
    args: {
      where: ProductWhereUniqueInput;
      create: ProductCreateInput;
      update: ProductUpdateInput;
    }
  ) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "brand_ASC"
  | "brand_DESC"
  | "description_ASC"
  | "description_DESC"
  | "url_ASC"
  | "url_DESC"
  | "image_ASC"
  | "image_DESC"
  | "price_ASC"
  | "price_DESC"
  | "currency_ASC"
  | "currency_DESC"
  | "ammount_ASC"
  | "ammount_DESC"
  | "active_ASC"
  | "active_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProductCreateInput {
  name: String;
  brand: String;
  description: String;
  url?: String;
  image?: String;
  price: Float;
  currency: String;
  ammount: Int;
  active?: Boolean;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  bougth_some?: ProductWhereInput;
  cart_some?: ProductWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  bougth?: ProductCreateManyInput;
  cart?: ProductCreateManyInput;
}

export interface ProductUpdateDataInput {
  name?: String;
  brand?: String;
  description?: String;
  url?: String;
  image?: String;
  price?: Float;
  currency?: String;
  ammount?: Int;
  active?: Boolean;
}

export interface ProductWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  brand?: String;
  brand_not?: String;
  brand_in?: String[] | String;
  brand_not_in?: String[] | String;
  brand_lt?: String;
  brand_lte?: String;
  brand_gt?: String;
  brand_gte?: String;
  brand_contains?: String;
  brand_not_contains?: String;
  brand_starts_with?: String;
  brand_not_starts_with?: String;
  brand_ends_with?: String;
  brand_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
  currency?: String;
  currency_not?: String;
  currency_in?: String[] | String;
  currency_not_in?: String[] | String;
  currency_lt?: String;
  currency_lte?: String;
  currency_gt?: String;
  currency_gte?: String;
  currency_contains?: String;
  currency_not_contains?: String;
  currency_starts_with?: String;
  currency_not_starts_with?: String;
  currency_ends_with?: String;
  currency_not_ends_with?: String;
  ammount?: Int;
  ammount_not?: Int;
  ammount_in?: Int[] | Int;
  ammount_not_in?: Int[] | Int;
  ammount_lt?: Int;
  ammount_lte?: Int;
  ammount_gt?: Int;
  ammount_gte?: Int;
  active?: Boolean;
  active_not?: Boolean;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: ProductWhereInput[] | ProductWhereInput;
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  data: ProductUpdateDataInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface ProductUpdateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput;
  update?:
    | ProductUpdateWithWhereUniqueNestedInput[]
    | ProductUpdateWithWhereUniqueNestedInput;
  upsert?:
    | ProductUpsertWithWhereUniqueNestedInput[]
    | ProductUpsertWithWhereUniqueNestedInput;
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  updateMany?:
    | ProductUpdateManyWithWhereNestedInput[]
    | ProductUpdateManyWithWhereNestedInput;
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  bougth?: ProductUpdateManyInput;
  cart?: ProductUpdateManyInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface ProductUpdateManyMutationInput {
  name?: String;
  brand?: String;
  description?: String;
  url?: String;
  image?: String;
  price?: Float;
  currency?: String;
  ammount?: Int;
  active?: Boolean;
}

export interface ProductUpdateInput {
  name?: String;
  brand?: String;
  description?: String;
  url?: String;
  image?: String;
  price?: Float;
  currency?: String;
  ammount?: Int;
  active?: Boolean;
}

export interface ProductCreateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput;
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput;
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput;
  update: ProductUpdateDataInput;
  create: ProductCreateInput;
}

export interface ProductScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  brand?: String;
  brand_not?: String;
  brand_in?: String[] | String;
  brand_not_in?: String[] | String;
  brand_lt?: String;
  brand_lte?: String;
  brand_gt?: String;
  brand_gte?: String;
  brand_contains?: String;
  brand_not_contains?: String;
  brand_starts_with?: String;
  brand_not_starts_with?: String;
  brand_ends_with?: String;
  brand_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  price?: Float;
  price_not?: Float;
  price_in?: Float[] | Float;
  price_not_in?: Float[] | Float;
  price_lt?: Float;
  price_lte?: Float;
  price_gt?: Float;
  price_gte?: Float;
  currency?: String;
  currency_not?: String;
  currency_in?: String[] | String;
  currency_not_in?: String[] | String;
  currency_lt?: String;
  currency_lte?: String;
  currency_gt?: String;
  currency_gte?: String;
  currency_contains?: String;
  currency_not_contains?: String;
  currency_starts_with?: String;
  currency_not_starts_with?: String;
  currency_ends_with?: String;
  currency_not_ends_with?: String;
  ammount?: Int;
  ammount_not?: Int;
  ammount_in?: Int[] | Int;
  ammount_not_in?: Int[] | Int;
  ammount_lt?: Int;
  ammount_lte?: Int;
  ammount_gt?: Int;
  ammount_gte?: Int;
  active?: Boolean;
  active_not?: Boolean;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  AND?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  OR?: ProductScalarWhereInput[] | ProductScalarWhereInput;
  NOT?: ProductScalarWhereInput[] | ProductScalarWhereInput;
}

export interface ProductUpdateManyDataInput {
  name?: String;
  brand?: String;
  description?: String;
  url?: String;
  image?: String;
  price?: Float;
  currency?: String;
  ammount?: Int;
  active?: Boolean;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProductWhereInput;
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  bougth: <T = FragmentableArray<Product>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  cart: <T = FragmentableArray<Product>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  bougth: <T = Promise<AsyncIterator<ProductSubscription>>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  cart: <T = Promise<AsyncIterator<ProductSubscription>>>(
    args?: {
      where?: ProductWhereInput;
      orderBy?: ProductOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Product {
  id: ID_Output;
  name: String;
  brand: String;
  description: String;
  url?: String;
  image?: String;
  price: Float;
  currency: String;
  ammount: Int;
  active?: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  brand: () => Promise<String>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Float>;
  currency: () => Promise<String>;
  ammount: () => Promise<Int>;
  active: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  brand: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  currency: () => Promise<AsyncIterator<String>>;
  ammount: () => Promise<AsyncIterator<Int>>;
  active: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface ProductPreviousValues {
  id: ID_Output;
  name: String;
  brand: String;
  description: String;
  url?: String;
  image?: String;
  price: Float;
  currency: String;
  ammount: Int;
  active?: Boolean;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  brand: () => Promise<String>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Float>;
  currency: () => Promise<String>;
  ammount: () => Promise<Int>;
  active: () => Promise<Boolean>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  brand: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  currency: () => Promise<AsyncIterator<String>>;
  ammount: () => Promise<AsyncIterator<Int>>;
  active: () => Promise<AsyncIterator<Boolean>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;