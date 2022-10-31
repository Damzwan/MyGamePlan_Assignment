import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type TeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamsQuery = { __typename?: 'Query', teams?: Array<{ __typename?: 'Team', name?: string | null, _id: number } | null> | null };

export type TeamQueryVariables = Exact<{
  teamId: Scalars['Int'];
}>;


export type TeamQuery = { __typename?: 'Query', team?: { __typename?: 'Team', name?: string | null, image?: string | null } | null };

export type CrossEventsQueryVariables = Exact<{
  teamId: Scalars['Int'];
  formation: Scalars['String'];
}>;


export type CrossEventsQuery = { __typename?: 'Query', crossesByTeamAndFormation?: Array<{ __typename?: 'Event', coordinate_x?: number | null, coordinate_y?: number | null, player?: { __typename?: 'PlayerEventInfo', _id: number } | null, pass?: { __typename?: 'Pass', end_coordinate_x?: number | null, end_coordinate_y?: number | null, result?: string | null } | null } | null> | null };


export const TeamsDocument = gql`
    query teams {
  teams {
    name
    _id
  }
}
    `;

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: Apollo.QueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, options);
      }
export function useTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, options);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = Apollo.QueryResult<TeamsQuery, TeamsQueryVariables>;
export const TeamDocument = gql`
    query team($teamId: Int!) {
  team(id: $teamId) {
    name
    image
  }
}
    `;

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useTeamQuery(baseOptions: Apollo.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, options);
      }
export function useTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, options);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = Apollo.QueryResult<TeamQuery, TeamQueryVariables>;
export const CrossEventsDocument = gql`
    query crossEvents($teamId: Int!, $formation: String!) {
  crossesByTeamAndFormation(teamId: $teamId, formation: $formation) {
    player {
      _id
    }
    coordinate_x
    coordinate_y
    pass {
      end_coordinate_x
      end_coordinate_y
      result
    }
  }
}
    `;

/**
 * __useCrossEventsQuery__
 *
 * To run a query within a React component, call `useCrossEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrossEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrossEventsQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *      formation: // value for 'formation'
 *   },
 * });
 */
export function useCrossEventsQuery(baseOptions: Apollo.QueryHookOptions<CrossEventsQuery, CrossEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CrossEventsQuery, CrossEventsQueryVariables>(CrossEventsDocument, options);
      }
export function useCrossEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CrossEventsQuery, CrossEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CrossEventsQuery, CrossEventsQueryVariables>(CrossEventsDocument, options);
        }
export type CrossEventsQueryHookResult = ReturnType<typeof useCrossEventsQuery>;
export type CrossEventsLazyQueryHookResult = ReturnType<typeof useCrossEventsLazyQuery>;
export type CrossEventsQueryResult = Apollo.QueryResult<CrossEventsQuery, CrossEventsQueryVariables>;