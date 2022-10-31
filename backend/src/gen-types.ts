import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Event = {
  __typename?: 'Event';
  _id: Scalars['Int'];
  coordinate_x?: Maybe<Scalars['Float']>;
  coordinate_y?: Maybe<Scalars['Float']>;
  event_type?: Maybe<Scalars['String']>;
  game_states?: Maybe<Array<Maybe<Scalars['String']>>>;
  match?: Maybe<Match>;
  minute?: Maybe<Scalars['Float']>;
  opponent_team?: Maybe<TeamEventInfo>;
  pass?: Maybe<Pass>;
  period?: Maybe<Scalars['Int']>;
  player?: Maybe<PlayerEventInfo>;
  position_in_match?: Maybe<Scalars['String']>;
  second?: Maybe<Scalars['Int']>;
  team?: Maybe<TeamEventInfo>;
  timestamp?: Maybe<Scalars['Float']>;
  video_end_timestamp?: Maybe<Scalars['Float']>;
  video_start_timestamp?: Maybe<Scalars['Int']>;
  x_location_group?: Maybe<Scalars['String']>;
  y_location_group?: Maybe<Scalars['String']>;
};

export type Match = {
  __typename?: 'Match';
  _id: Scalars['Int'];
  away_team?: Maybe<Team>;
  away_team_Score?: Maybe<Scalars['Int']>;
  competition_id?: Maybe<Scalars['Int']>;
  competition_name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  first_half_video_start?: Maybe<Scalars['Int']>;
  home_team?: Maybe<Team>;
  home_team_score?: Maybe<Scalars['Int']>;
  match_day?: Maybe<Scalars['Int']>;
  season_id?: Maybe<Scalars['Int']>;
  second_half_video_Start?: Maybe<Scalars['Int']>;
  wyscout_match_id?: Maybe<Scalars['Int']>;
};

export type OpponentTeamEventInfo = {
  __typename?: 'OpponentTeamEventInfo';
  _id: Scalars['Int'];
  defence?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Pass = {
  __typename?: 'Pass';
  direction_group?: Maybe<Scalars['String']>;
  end_coordinate_x?: Maybe<Scalars['Float']>;
  end_coordinate_y?: Maybe<Scalars['Float']>;
  length_group?: Maybe<Scalars['String']>;
  receiving_player?: Maybe<TeamEventInfo>;
  result?: Maybe<Scalars['String']>;
  set_piece_type?: Maybe<Scalars['String']>;
};

export type Player = {
  __typename?: 'Player';
  _id: Scalars['Int'];
  birth_date?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  jersey_num?: Maybe<Scalars['Int']>;
  join_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position_line?: Maybe<Scalars['String']>;
  preferred_foot?: Maybe<Scalars['String']>;
  team?: Maybe<Team>;
  weight?: Maybe<Scalars['Int']>;
};

export type PlayerEventInfo = {
  __typename?: 'PlayerEventInfo';
  _id: Scalars['Int'];
  display_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  crossesByTeamAndFormation?: Maybe<Array<Maybe<Event>>>;
  eventsByTeamAndFormation?: Maybe<Array<Maybe<Event>>>;
  player?: Maybe<Player>;
  playersByTeam?: Maybe<Array<Maybe<Player>>>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
};


export type QueryCrossesByTeamAndFormationArgs = {
  formation?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Int'];
};


export type QueryEventsByTeamAndFormationArgs = {
  formation?: InputMaybe<Scalars['String']>;
  teamId: Scalars['Int'];
};


export type QueryPlayerArgs = {
  id: Scalars['Int'];
};


export type QueryPlayersByTeamArgs = {
  teamId: Scalars['Int'];
};


export type QueryTeamArgs = {
  id: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  _id: Scalars['Int'];
  competition_id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  league?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  wyscout_name?: Maybe<Scalars['String']>;
};

export type TeamEventInfo = {
  __typename?: 'TeamEventInfo';
  _id: Scalars['Int'];
  formation?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Event: ResolverTypeWrapper<Event>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Match: ResolverTypeWrapper<Match>;
  OpponentTeamEventInfo: ResolverTypeWrapper<OpponentTeamEventInfo>;
  Pass: ResolverTypeWrapper<Pass>;
  Player: ResolverTypeWrapper<Player>;
  PlayerEventInfo: ResolverTypeWrapper<PlayerEventInfo>;
  Query: ResolverTypeWrapper<{}>;
  Team: ResolverTypeWrapper<Team>;
  TeamEventInfo: ResolverTypeWrapper<TeamEventInfo>;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Event: Event;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  String: Scalars['String'];
  Match: Match;
  OpponentTeamEventInfo: OpponentTeamEventInfo;
  Pass: Pass;
  Player: Player;
  PlayerEventInfo: PlayerEventInfo;
  Query: {};
  Team: Team;
  TeamEventInfo: TeamEventInfo;
  AdditionalEntityFields: AdditionalEntityFields;
  Boolean: Scalars['Boolean'];
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  coordinate_x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  coordinate_y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  event_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  game_states?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  opponent_team?: Resolver<Maybe<ResolversTypes['TeamEventInfo']>, ParentType, ContextType>;
  pass?: Resolver<Maybe<ResolversTypes['Pass']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['PlayerEventInfo']>, ParentType, ContextType>;
  position_in_match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamEventInfo']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  video_end_timestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  video_start_timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  x_location_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  y_location_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  away_team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  away_team_Score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  competition_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  competition_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_half_video_start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  home_team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  home_team_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  match_day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  season_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second_half_video_Start?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wyscout_match_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpponentTeamEventInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpponentTeamEventInfo'] = ResolversParentTypes['OpponentTeamEventInfo']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  defence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pass'] = ResolversParentTypes['Pass']> = {
  direction_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_coordinate_x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  end_coordinate_y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receiving_player?: Resolver<Maybe<ResolversTypes['TeamEventInfo']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  set_piece_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  birth_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jersey_num?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  join_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position_line?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferred_foot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerEventInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerEventInfo'] = ResolversParentTypes['PlayerEventInfo']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  crossesByTeamAndFormation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType, RequireFields<QueryCrossesByTeamAndFormationArgs, 'teamId'>>;
  eventsByTeamAndFormation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType, RequireFields<QueryEventsByTeamAndFormationArgs, 'teamId'>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  playersByTeam?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType, RequireFields<QueryPlayersByTeamArgs, 'teamId'>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QueryTeamArgs, 'id'>>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  competition_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wyscout_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamEventInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamEventInfo'] = ResolversParentTypes['TeamEventInfo']> = {
  _id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  formation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Event?: EventResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  OpponentTeamEventInfo?: OpponentTeamEventInfoResolvers<ContextType>;
  Pass?: PassResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PlayerEventInfo?: PlayerEventInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamEventInfo?: TeamEventInfoResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';